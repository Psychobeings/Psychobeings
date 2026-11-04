const DATE_RE = /^\d{4}-\d{2}-\d{2}$/u;

export function isValidDay(day) {
  if (typeof day !== 'string' || !DATE_RE.test(day)) return false;
  const parsed = new Date(`${day}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === day;
}

export function dayDiff(a, b) {
  return Math.round(
    (new Date(`${b}T00:00:00Z`).getTime() - new Date(`${a}T00:00:00Z`).getTime())
    / 86_400_000
  );
}

export function applyCheckIn(state, today) {
  const last = state.lastCheckInDate;
  if (last === today) return state;
  if (last !== undefined && dayDiff(last, today) < 0) {
    return { ...state, totalCheckIns: state.totalCheckIns + 1 };
  }

  const currentStreak = last !== undefined && dayDiff(last, today) === 1
    ? state.currentStreak + 1
    : 1;
  return {
    currentStreak,
    longestStreak: Math.max(state.longestStreak, currentStreak),
    lastCheckInDate: today,
    totalCheckIns: state.totalCheckIns + 1
  };
}

export function visibleStreak(state, today) {
  if (!state.lastCheckInDate || !isValidDay(today)) return 0;
  const daysSinceCheckIn = dayDiff(state.lastCheckInDate, today);
  return daysSinceCheckIn >= 0 && daysSinceCheckIn <= 1 ? state.currentStreak : 0;
}
