import MoodEntry from '../models/mood_entry.js';

export async function createMoodEntry(req, res, next) {
  try {
    const mood = Number(req.body.mood);
    const note = typeof req.body.note === 'string' ? req.body.note.trim() : '';

    if (!Number.isInteger(mood) || mood < 1 || mood > 5) {
      return res.status(400).json({ message: 'Mood must be a whole number from 1 to 5.' });
    }
    if (note.length > 2000) {
      return res.status(400).json({ message: 'Mood notes must be 2000 characters or fewer.' });
    }

    const entry = await MoodEntry.create({ userId: req.auth.userId, mood, note });
    return res.status(201).json({ entry });
  } catch (error) {
    return next(error);
  }
}

export async function getMoodEntries(req, res, next) {
  try {
    const requestedLimit = Number.parseInt(req.query.limit, 10);
    const limit = Number.isInteger(requestedLimit) ? Math.min(Math.max(requestedLimit, 1), 100) : 30;
    const entries = await MoodEntry.find({ userId: req.auth.userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();
    return res.json({ entries });
  } catch (error) {
    return next(error);
  }
}
