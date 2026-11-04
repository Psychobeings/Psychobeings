import MoodEntry, { MOOD_FEELINGS } from '../models/mood_entry.js';
import ClientUser, {
  CLIENT_AGE_GROUPS,
  CLIENT_GOALS,
  CLIENT_PREFERENCES
} from '../models/client_user.js';
import { applyCheckIn, isValidDay, visibleStreak } from '../utils/streak.js';

const MAX_MOOD_NOTE = 1000;

async function updateMoodStats(userId, user, date) {
  const streak = applyCheckIn({
    currentStreak: user.currentStreak || 0,
    longestStreak: user.longestStreak || 0,
    lastCheckInDate: user.lastCheckInDate,
    totalCheckIns: 0
  }, date);
  const totalCheckIns = await MoodEntry.countDocuments({ userId });
  await ClientUser.findByIdAndUpdate(userId, {
    $set: {
      currentStreak: streak.currentStreak,
      longestStreak: streak.longestStreak,
      lastCheckInDate: streak.lastCheckInDate,
      totalCheckIns
    }
  });
  return { streak, totalCheckIns };
}

function isValidSelection(value, options, { required = false } = {}) {
  return Array.isArray(value)
    && (!required || value.length > 0)
    && value.length <= options.length
    && new Set(value).size === value.length
    && value.every((item) => options.includes(item));
}

export async function completeClientOnboarding(req, res, next) {
  try {
    const body = req.body || {};
    const displayName = typeof body.displayName === 'string' ? body.displayName.trim() : '';
    const ageGroup = typeof body.ageGroup === 'undefined' ? '' : body.ageGroup;
    const { language, goals, preferences, consents } = body;

    if (
      displayName.length < 1
      || displayName.length > 60
      || typeof ageGroup !== 'string'
      || (ageGroup !== '' && !CLIENT_AGE_GROUPS.includes(ageGroup))
      || !['en', 'hi'].includes(language)
      || !isValidSelection(goals, CLIENT_GOALS, { required: true })
      || !isValidSelection(preferences, CLIENT_PREFERENCES)
    ) {
      return res.status(400).json({ message: 'Please provide a valid name, language, goal, and preference selection.' });
    }

    if (
      !consents
      || consents.privacyPolicyAccepted !== true
      || consents.dataStorageAcknowledged !== true
      || consents.aiAcknowledged !== true
    ) {
      return res.status(400).json({ message: 'Please review and accept each required onboarding acknowledgement.' });
    }

    const user = await ClientUser.findByIdAndUpdate(
      req.auth.userId,
      {
        $set: {
          displayName,
          ageGroup,
          language,
          goals,
          preferences,
          onboarded: true,
          profileConsents: {
            privacyPolicyAccepted: true,
            dataStorageAcknowledged: true,
            aiAcknowledged: true
          },
          onboardingConsentAt: new Date(),
          onboardingConsentVersion: process.env.CONSENT_VERSION || '1'
        }
      },
      { new: true, runValidators: true }
    );

    if (!user) return res.status(404).json({ message: 'Client account was not found.' });
    return res.json({
      user: {
        id: user._id,
        email: user.email,
        displayName: user.displayName,
        ageGroup: user.ageGroup,
        language: user.language,
        goals: user.goals,
        preferences: user.preferences,
        onboarded: user.onboarded
      }
    });
  } catch (error) {
    return next(error);
  }
}

export async function createMoodEntry(req, res, next) {
  try {
    const mood = Number(req.body.mood);
    const note = typeof req.body.note === 'string' ? req.body.note.trim() : '';
    const feelings = req.body.feelings ?? [];
    const date = req.body.date;
    const timezoneOffsetMinutes = req.body.timezoneOffsetMinutes ?? 0;

    if (!Number.isInteger(mood) || mood < 1 || mood > 5) {
      return res.status(400).json({ message: 'Mood must be a whole number from 1 to 5.' });
    }
    if (note.length > MAX_MOOD_NOTE) {
      return res.status(400).json({ message: `Mood notes must be ${MAX_MOOD_NOTE} characters or fewer.` });
    }
    if (
      !Array.isArray(feelings)
      || feelings.length > 8
      || new Set(feelings).size !== feelings.length
      || feelings.some((feeling) => !MOOD_FEELINGS.includes(feeling))
    ) {
      return res.status(400).json({ message: 'Choose up to eight supported feelings.' });
    }
    if (
      !isValidDay(date)
      || !Number.isInteger(timezoneOffsetMinutes)
      || Math.abs(timezoneOffsetMinutes) > 840
    ) {
      return res.status(400).json({ message: 'A valid local check-in date and time zone are required.' });
    }

    const localToday = new Date(Date.now() - timezoneOffsetMinutes * 60_000).toISOString().slice(0, 10);
    if (date !== localToday) {
      return res.status(400).json({ message: 'You can only check in for today.' });
    }

    const localDayStart = new Date(new Date(`${date}T00:00:00Z`).getTime() + timezoneOffsetMinutes * 60_000);
    const localDayEnd = new Date(localDayStart.getTime() + 86_400_000);
    let existing = await MoodEntry.findOne({ userId: req.auth.userId, date });
    if (!existing) {
      existing = await MoodEntry.findOne({
        userId: req.auth.userId,
        date: { $exists: false },
        createdAt: { $gte: localDayStart, $lt: localDayEnd }
      }).sort({ createdAt: -1 });
    }

    const entryValues = { date, mood, feelings, note };
    if (existing) {
      const entry = await MoodEntry.findOneAndUpdate(
        { _id: existing._id, userId: req.auth.userId },
        { $set: entryValues },
        { new: true, runValidators: true }
      );
      const { streak, totalCheckIns } = await updateMoodStats(req.auth.userId, req.auth.user, date);
      return res.json({
        entry,
        created: false,
        streak: streak.currentStreak,
        longestStreak: streak.longestStreak,
        totalCheckIns
      });
    }

    let entry;
    try {
      entry = await MoodEntry.create({ userId: req.auth.userId, ...entryValues });
    } catch (error) {
      if (error.code !== 11000) throw error;
      entry = await MoodEntry.findOneAndUpdate(
        { userId: req.auth.userId, date },
        { $set: entryValues },
        { new: true, runValidators: true }
      );
      const { streak, totalCheckIns } = await updateMoodStats(req.auth.userId, req.auth.user, date);
      return res.json({
        entry,
        created: false,
        streak: streak.currentStreak,
        longestStreak: streak.longestStreak,
        totalCheckIns
      });
    }

    const { streak, totalCheckIns } = await updateMoodStats(req.auth.userId, req.auth.user, date);
    return res.status(201).json({
      entry,
      created: true,
      streak: streak.currentStreak,
      longestStreak: streak.longestStreak,
      totalCheckIns
    });
  } catch (error) {
    return next(error);
  }
}

export async function getMoodEntries(req, res, next) {
  try {
    const requestedLimit = Number.parseInt(req.query.limit, 10);
    const limit = Number.isInteger(requestedLimit) ? Math.min(Math.max(requestedLimit, 1), 100) : 30;
    const timezoneOffsetMinutes = req.query.timezoneOffsetMinutes === undefined
      ? 0
      : Number(req.query.timezoneOffsetMinutes);
    if (!Number.isInteger(timezoneOffsetMinutes) || Math.abs(timezoneOffsetMinutes) > 840) {
      return res.status(400).json({ message: 'A valid time zone offset is required.' });
    }
    const today = new Date(Date.now() - timezoneOffsetMinutes * 60_000).toISOString().slice(0, 10);
    const [entries, totalCheckIns] = await Promise.all([
      MoodEntry.find({ userId: req.auth.userId })
        .sort({ createdAt: -1 })
        .limit(limit)
        .lean(),
      MoodEntry.countDocuments({ userId: req.auth.userId })
    ]);
    const user = req.auth.user;
    return res.json({
      entries,
      totalCheckIns,
      streak: visibleStreak({
        currentStreak: user.currentStreak || 0,
        longestStreak: user.longestStreak || 0,
        lastCheckInDate: user.lastCheckInDate,
        totalCheckIns
      }, today),
      longestStreak: user.longestStreak || 0
    });
  } catch (error) {
    return next(error);
  }
}
