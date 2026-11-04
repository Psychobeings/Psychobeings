import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { applyCheckIn, isValidDay, visibleStreak } from './streak.js';

const empty = {
  currentStreak: 0,
  longestStreak: 0,
  lastCheckInDate: undefined,
  totalCheckIns: 0
};

describe('applyCheckIn', () => {
  it('starts a streak on the first check-in', () => {
    assert.deepEqual(applyCheckIn(empty, '2026-11-02'), {
      currentStreak: 1,
      longestStreak: 1,
      lastCheckInDate: '2026-11-02',
      totalCheckIns: 1
    });
  });

  it('extends consecutive days across a month boundary', () => {
    const previous = applyCheckIn(empty, '2026-10-31');
    assert.equal(applyCheckIn(previous, '2026-11-01').currentStreak, 2);
  });

  it('does not count the same day twice', () => {
    const previous = applyCheckIn(empty, '2026-11-02');
    assert.equal(applyCheckIn(previous, '2026-11-02'), previous);
  });

  it('resets after a gap and keeps the longest streak', () => {
    let state = empty;
    for (const date of ['2026-11-01', '2026-11-02', '2026-11-03', '2026-11-05']) {
      state = applyCheckIn(state, date);
    }
    assert.equal(state.currentStreak, 1);
    assert.equal(state.longestStreak, 3);
  });

  it('does not move the streak backwards for an earlier local date', () => {
    const previous = applyCheckIn(applyCheckIn(empty, '2026-11-02'), '2026-11-03');
    const earlier = applyCheckIn(previous, '2026-11-02');
    assert.equal(earlier.currentStreak, 2);
    assert.equal(earlier.lastCheckInDate, '2026-11-03');
    assert.equal(earlier.totalCheckIns, 3);
  });
});

describe('visibleStreak', () => {
  it('shows a streak through the day after the last check-in', () => {
    const state = applyCheckIn(empty, '2026-11-02');
    assert.equal(visibleStreak(state, '2026-11-03'), 1);
    assert.equal(visibleStreak(state, '2026-11-04'), 0);
    assert.equal(visibleStreak(state, '2026-11-01'), 0);
  });
});

describe('isValidDay', () => {
  it('rejects impossible dates', () => {
    assert.equal(isValidDay('2026-02-29'), false);
    assert.equal(isValidDay('2026-11-04'), true);
  });
});
