import assert from 'node:assert/strict';
import { test } from 'node:test';
import MoodEntry from '../models/mood_entry.js';
import ClientUser from '../models/client_user.js';
import { completeClientOnboarding, createMoodEntry } from './client_data_controller.js';

const validBody = {
  displayName: 'Aarav',
  ageGroup: '18-24',
  language: 'en',
  goals: ['Manage stress'],
  preferences: ['Journaling'],
  consents: {
    privacyPolicyAccepted: true,
    dataStorageAcknowledged: true,
    aiAcknowledged: true
  }
};

async function submitOnboarding(body) {
  const response = {
    statusCode: 200,
    data: null,
    status(statusCode) {
      this.statusCode = statusCode;
      return this;
    },
    json(data) {
      this.data = data;
      return this;
    }
  };
  let nextError;

  await completeClientOnboarding(
    { body, auth: { userId: 'client-id' } },
    response,
    (error) => { nextError = error; }
  );

  if (nextError) throw nextError;
  return response;
}

async function submitMood(body, user = {}) {
  const response = {
    statusCode: 200,
    data: null,
    status(statusCode) {
      this.statusCode = statusCode;
      return this;
    },
    json(data) {
      this.data = data;
      return this;
    }
  };
  let nextError;

  await createMoodEntry(
    { body, auth: { userId: 'client-id', user } },
    response,
    (error) => { nextError = error; }
  );

  if (nextError) throw nextError;
  return response;
}

function todayCheckIn(values = {}) {
  const timezoneOffsetMinutes = new Date().getTimezoneOffset();
  const date = new Date(Date.now() - timezoneOffsetMinutes * 60_000).toISOString().slice(0, 10);
  return {
    date,
    timezoneOffsetMinutes,
    mood: 4,
    feelings: ['Calm', 'Hopeful'],
    note: 'A little better today.',
    ...values
  };
}

test('rejects onboarding selections outside the supported options', async () => {
  const response = await submitOnboarding({ ...validBody, goals: ['Unsupported goal'] });

  assert.equal(response.statusCode, 400);
  assert.match(response.data.message, /valid name/u);
});

test('rejects malformed optional age groups instead of silently dropping them', async () => {
  const response = await submitOnboarding({ ...validBody, ageGroup: 18 });

  assert.equal(response.statusCode, 400);
});

test('requires every onboarding acknowledgement', async () => {
  const response = await submitOnboarding({
    ...validBody,
    consents: { ...validBody.consents, aiAcknowledged: false }
  });

  assert.equal(response.statusCode, 400);
  assert.match(response.data.message, /acknowledgement/u);
});

test('persists validated onboarding data for the authenticated client', async () => {
  const originalFindByIdAndUpdate = ClientUser.findByIdAndUpdate;
  let update;

  ClientUser.findByIdAndUpdate = async (id, changes, options) => {
    assert.equal(id, 'client-id');
    assert.equal(options.runValidators, true);
    update = changes.$set;
    return { _id: id, email: 'client@example.com', ...update };
  };

  try {
    const response = await submitOnboarding(validBody);

    assert.equal(response.statusCode, 200);
    assert.equal(response.data.user.onboarded, true);
    assert.equal(update.displayName, 'Aarav');
    assert.deepEqual(update.goals, ['Manage stress']);
    assert.equal(update.profileConsents.aiAcknowledged, true);
    assert.ok(update.onboardingConsentAt instanceof Date);
  } finally {
    ClientUser.findByIdAndUpdate = originalFindByIdAndUpdate;
  }
});

test('creates a daily mood check-in with its feelings and updates the streak', async () => {
  const originalFindOne = MoodEntry.findOne;
  const originalCreate = MoodEntry.create;
  const originalCountDocuments = MoodEntry.countDocuments;
  const originalFindByIdAndUpdate = ClientUser.findByIdAndUpdate;
  let created;
  let stats;
  MoodEntry.findOne = (filter) => (
    typeof filter.date === 'string'
      ? Promise.resolve(null)
      : { sort: async () => null }
  );
  MoodEntry.create = async (values) => {
    created = values;
    return { ...values, _id: 'entry-id', createdAt: new Date() };
  };
  MoodEntry.countDocuments = async () => 1;
  ClientUser.findByIdAndUpdate = async (id, changes) => {
    assert.equal(id, 'client-id');
    stats = changes.$set;
  };

  try {
    const response = await submitMood(todayCheckIn(), {
      currentStreak: 2,
      longestStreak: 4,
      lastCheckInDate: new Date(Date.now() - 86_400_000 - (new Date().getTimezoneOffset() * 60_000))
        .toISOString().slice(0, 10)
    });

    assert.equal(response.statusCode, 201);
    assert.equal(created.date, todayCheckIn().date);
    assert.deepEqual(created.feelings, ['Calm', 'Hopeful']);
    assert.equal(stats.currentStreak, 3);
    assert.equal(stats.longestStreak, 4);
    assert.equal(stats.totalCheckIns, 1);
    assert.equal(response.data.created, true);
  } finally {
    MoodEntry.findOne = originalFindOne;
    MoodEntry.create = originalCreate;
    MoodEntry.countDocuments = originalCountDocuments;
    ClientUser.findByIdAndUpdate = originalFindByIdAndUpdate;
  }
});

test('updates an existing check-in for the same day without creating a second entry', async () => {
  const originalFindOne = MoodEntry.findOne;
  const originalFindOneAndUpdate = MoodEntry.findOneAndUpdate;
  const originalCountDocuments = MoodEntry.countDocuments;
  const originalFindByIdAndUpdate = ClientUser.findByIdAndUpdate;
  const existing = { _id: 'entry-id' };
  let saved;
  let stats;
  MoodEntry.findOne = async () => existing;
  MoodEntry.findOneAndUpdate = async (filter, update) => {
    assert.equal(filter._id, existing._id);
    saved = update.$set;
    return { ...existing, ...saved };
  };
  MoodEntry.countDocuments = async () => 3;
  ClientUser.findByIdAndUpdate = async (_id, changes) => {
    stats = changes.$set;
  };

  try {
    const body = todayCheckIn({ mood: 2, feelings: ['Tired'] });
    const response = await submitMood(body, {
      currentStreak: 4,
      longestStreak: 6,
      lastCheckInDate: body.date
    });

    assert.equal(response.statusCode, 200);
    assert.equal(saved.mood, 2);
    assert.deepEqual(saved.feelings, ['Tired']);
    assert.equal(stats.currentStreak, 4);
    assert.equal(stats.longestStreak, 6);
    assert.equal(stats.totalCheckIns, 3);
    assert.equal(response.data.created, false);
  } finally {
    MoodEntry.findOne = originalFindOne;
    MoodEntry.findOneAndUpdate = originalFindOneAndUpdate;
    MoodEntry.countDocuments = originalCountDocuments;
    ClientUser.findByIdAndUpdate = originalFindByIdAndUpdate;
  }
});

test('rejects invalid check-in dates, feelings, and oversized notes', async () => {
  const base = todayCheckIn();
  const invalidCases = [
    { ...base, date: '2026-02-29' },
    { ...base, feelings: ['Not a feeling'] },
    { ...base, note: 'x'.repeat(1001) }
  ];

  for (const body of invalidCases) {
    const response = await submitMood(body);
    assert.equal(response.statusCode, 400);
  }
});
