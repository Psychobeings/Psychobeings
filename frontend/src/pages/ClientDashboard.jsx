import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  Activity, ArrowRight, BookOpen, CalendarDays, ChevronRight, CircleUserRound,
  Flame, Heart, HeartPulse, Home, Leaf, LogOut, Menu, MessageCircle, NotebookPen, Send, ShieldAlert, Sprout, TreeDeciduous, Trees, X
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Psychobeings.png';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api'
  : (process.env.REACT_APP_URL || 'http://localhost:8080').replace(/\/+$/u, '');
const clientApi = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

const MOODS = [
  { value: 1, label: 'Struggling', face: '😔', color: '#b76464' },
  { value: 2, label: 'Low', face: '😕', color: '#cf9164' },
  { value: 3, label: 'Okay', face: '😐', color: '#c4aa57' },
  { value: 4, label: 'Good', face: '🙂', color: '#73a98e' },
  { value: 5, label: 'Great', face: '😊', color: '#268c82' }
];

const FEELINGS = [
  'Calm', 'Grateful', 'Hopeful', 'Tired', 'Anxious', 'Stressed',
  'Lonely', 'Sad', 'Angry', 'Motivated', 'Overwhelmed', 'Content'
];

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'mood', label: 'Mood check-in', icon: HeartPulse },
  { id: 'journal', label: 'Mood journal', icon: NotebookPen },
  { id: 'chat', label: 'Psycho Buddy', icon: MessageCircle },
  { id: 'library', label: 'Content library', icon: BookOpen },
  { id: 'booking', label: 'Session booking', icon: CalendarDays },
  { id: 'profile', label: 'Profile', icon: CircleUserRound }
];

const SECTION_PATHS = {
  overview: '/client/dashboard',
  mood: '/client/mood',
  journal: '/client/journal',
  chat: '/client/chat',
  library: '/client/library',
  booking: '/client/booking',
  profile: '/client/profile'
};

const LIBRARY_ITEMS = [
  { title: 'A gentle grounding pause', category: 'Grounding', duration: '3 min', description: 'Notice what is around you, one sense at a time, and give yourself a moment to arrive.' },
  { title: 'Making space for a feeling', category: 'Reflection', duration: '5 min', description: 'A short prompt to name what you are noticing without judging yourself for it.' },
  { title: 'A calmer breathing rhythm', category: 'Breathing', duration: '2 min', description: 'Try a comfortable, unforced breath and return to your natural rhythm whenever you need.' }
];

const GROWTH_STAGES = [
  { min: 0, name: 'Seed', icon: Leaf, next: 3 },
  { min: 3, name: 'Sprout', icon: Sprout, next: 10 },
  { min: 10, name: 'Young tree', icon: TreeDeciduous, next: 30 },
  { min: 30, name: 'Flourishing grove', icon: Trees, next: null }
];

function errorMessage(error) {
  return error.response?.data?.message || 'Something went wrong. Please try again.';
}

function formatDate(value, options = { month: 'short', day: 'numeric' }) {
  return new Intl.DateTimeFormat(undefined, options).format(new Date(value));
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function entryDateKey(entry) {
  return entry.date || localDateKey(new Date(entry.createdAt));
}

function MoodChart({ entries }) {
  const points = useMemo(() => {
    const ordered = [...entries].slice(0, 7).reverse();
    if (ordered.length === 0) return [];
    return ordered.map((entry, index) => {
      const x = ordered.length === 1 ? 50 : 8 + (index * 84) / (ordered.length - 1);
      const y = 94 - ((entry.mood - 1) / 4) * 78;
      return { x, y, entry };
    });
  }, [entries]);

  return (
    <div>
      {points.length < 2 ? (
        <div className="flex h-48 items-center justify-center rounded-2xl bg-[#f7fbfa] px-6 text-center text-sm leading-6 text-slate-500">
          Add a few check-ins to see your mood pattern here. Every entry is just a snapshot, not a score.
        </div>
      ) : (
        <div className="rounded-2xl bg-[#f7fbfa] px-3 pt-5">
          <svg viewBox="0 0 100 110" role="img" aria-label="Mood chart showing recent check-ins on a scale from one to five" className="h-44 w-full overflow-visible">
            {[16, 35.5, 55, 74.5, 94].map((y) => (
              <line key={y} x1="5" x2="95" y1={y} y2={y} stroke="#dcebe8" strokeDasharray="1.5 2" strokeWidth="0.7" />
            ))}
            <polyline
              points={points.map(({ x, y }) => `${x},${y}`).join(' ')}
              fill="none"
              stroke="#007F80"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            {points.map(({ x, y, entry }) => (
              <circle key={entry._id || entry.createdAt} cx={x} cy={y} r="2.6" fill="#007F80" stroke="white" strokeWidth="1.4">
                <title>{`${MOODS[entry.mood - 1]?.label || 'Mood'} on ${formatDate(entry.createdAt)}`}</title>
              </circle>
            ))}
          </svg>
          <div className="flex justify-between px-1 pb-4 text-[10px] text-slate-400">
            <span>{formatDate(points[0].entry.createdAt)}</span>
            <span>{formatDate(points[points.length - 1].entry.createdAt)}</span>
          </div>
        </div>
      )}
      <div className="mt-3 flex justify-between text-[10px] text-slate-400">
        <span>Struggling</span><span>Okay</span><span>Great</span>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#007F80]">{eyebrow}</p>
        <h1 className="text-2xl font-semibold tracking-tight text-[#0F2D3A] sm:text-3xl">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>}
      </div>
      {action}
    </div>
  );
}

function Panel({ children, className = '' }) {
  return <section className={`rounded-2xl border border-[#deece9] bg-white p-5 shadow-[0_8px_24px_rgba(15,45,58,0.035)] sm:p-6 ${className}`}>{children}</section>;
}

function GrowthTree({ totalCheckIns, streak, longestStreak }) {
  const stage = [...GROWTH_STAGES].reverse().find(({ min }) => totalCheckIns >= min) || GROWTH_STAGES[0];
  const StageIcon = stage.icon;
  const progress = stage.next
    ? ((totalCheckIns - stage.min) / (stage.next - stage.min)) * 100
    : 100;

  return (
    <Panel className="relative overflow-hidden border-0 bg-[#007F80] text-white shadow-[0_8px_24px_rgba(0,127,128,0.16)]">
      <div className="pointer-events-none absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-white/10" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-white/75">Your Growth Tree</p>
            <h2 className="mt-1 text-xl font-semibold">{stage.name}</h2>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <StageIcon size={26} aria-hidden="true" />
          </span>
        </div>
        <div className="mt-5">
          <div
            role="progressbar"
            aria-label="Progress to next Growth Tree stage"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            className="h-2 overflow-hidden rounded-full bg-white/20"
          >
            <div className="h-full rounded-full bg-white transition-[width]" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-2 text-xs text-white/80">
            {stage.next
              ? `${stage.next - totalCheckIns} more ${stage.next - totalCheckIns === 1 ? 'check-in' : 'check-ins'} to ${GROWTH_STAGES[GROWTH_STAGES.indexOf(stage) + 1].name}`
              : 'Your grove is thriving. Keep nurturing it at your own pace.'}
          </p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            { label: 'Day streak', value: streak, icon: true },
            { label: 'Best streak', value: longestStreak, icon: false },
            { label: 'Check-ins', value: totalCheckIns, icon: false }
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/10 py-3">
              <p className="flex items-center justify-center gap-1 text-xl font-semibold">
                {stat.icon && <Flame size={16} aria-hidden="true" />}{stat.value}
              </p>
              <p className="mt-1 text-[10px] text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function WeekStrip({ entries }) {
  const entriesByDay = useMemo(() => {
    const map = new Map();
    entries.forEach((entry) => {
      const key = entryDateKey(entry);
      if (!map.has(key)) map.set(key, entry);
    });
    return map;
  }, [entries]);
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (6 - index));
    const key = localDateKey(date);
    const entry = entriesByDay.get(key);
    const mood = entry ? MOODS[entry.mood - 1] : null;
    return { date, entry, mood, isToday: index === 6 };
  });

  return (
    <div role="group" aria-label="Mood check-ins over the last seven days" className="grid grid-cols-7 gap-2">
      {days.map(({ date, entry, mood, isToday }) => (
        <div
          key={date.toISOString()}
          role="img"
          aria-label={`${isToday ? 'Today' : formatDate(date, { weekday: 'long' })}: ${mood?.label || 'no check-in'}`}
          className={`flex flex-col items-center gap-2 rounded-xl px-1 py-3 ${isToday ? 'bg-[#E6F4F3]' : 'bg-[#f7fbfa]'}`}
        >
          <span className="text-[10px] font-medium text-slate-500">
            {isToday ? 'Today' : formatDate(date, { weekday: 'short' })}
          </span>
          {entry
            ? <span className="text-base" aria-hidden="true">{mood?.face || '•'}</span>
            : <span className="h-2.5 w-2.5 rounded-full bg-slate-200" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export default function ClientDashboard() {
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);
  const [totalCheckIns, setTotalCheckIns] = useState(null);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [savingMood, setSavingMood] = useState(false);
  const [selectedMood, setSelectedMood] = useState(0);
  const [selectedFeelings, setSelectedFeelings] = useState([]);
  const [moodNote, setMoodNote] = useState('');
  const [editingToday, setEditingToday] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Hi, I’m Psycho Buddy. I can offer a supportive space to reflect, but I’m not a therapist and can’t diagnose or prescribe. What’s on your mind today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatConsent, setChatConsent] = useState(false);
  const [sendingChat, setSendingChat] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const section = pathname.split('/').filter(Boolean).pop();
  const activeSection = section === 'dashboard' ? 'overview' : section;
  const validSection = NAV_ITEMS.some((item) => item.id === activeSection);

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const sessionResponse = await clientApi.get('/auth/client/session');
      const sessionUser = sessionResponse.data.user;
      setUser(sessionUser);
      if (!sessionUser.onboarded) {
        navigate('/client/onboarding', { replace: true });
        return;
      }

      const moodResponse = await clientApi.get('/auth/mood', {
        params: { timezoneOffsetMinutes: new Date().getTimezoneOffset() }
      });
      setEntries(moodResponse.data.entries);
      setTotalCheckIns(moodResponse.data.totalCheckIns);
      setStreak(moodResponse.data.streak);
      setLongestStreak(moodResponse.data.longestStreak);
    } catch (requestError) {
      if (requestError.response?.status === 401 || requestError.response?.status === 403) {
        navigate('/login', { replace: true });
      } else {
        setError(errorMessage(requestError));
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  useEffect(() => {
    if (!validSection) {
      navigate('/client/dashboard', { replace: true });
    }
  }, [navigate, validSection]);

  const today = localDateKey();
  const todayEntry = entries.find((entry) => entryDateKey(entry) === today);

  useEffect(() => {
    if (activeSection !== 'mood') return;
    setSelectedMood(todayEntry?.mood || 0);
    setSelectedFeelings(todayEntry?.feelings || []);
    setMoodNote(todayEntry?.note || '');
    setEditingToday(!todayEntry);
  }, [activeSection, todayEntry]);

  const handleLogout = async () => {
    setError('');
    try {
      await clientApi.post('/auth/client/logout');
      navigate('/login', { replace: true });
    } catch (requestError) {
      setError(errorMessage(requestError));
    }
  };

  const handleMoodSubmit = async (event) => {
    event.preventDefault();
    if (!selectedMood) return;
    setSavingMood(true);
    setError('');
    setNotice('');
    try {
      const response = await clientApi.post('/auth/mood', {
        date: today,
        timezoneOffsetMinutes: new Date().getTimezoneOffset(),
        mood: selectedMood,
        feelings: selectedFeelings,
        note: moodNote
      });
      setEntries((current) => [
        response.data.entry,
        ...current.filter((entry) => entryDateKey(entry) !== today)
      ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      setTotalCheckIns(response.data.totalCheckIns);
      setStreak(response.data.streak);
      setLongestStreak(response.data.longestStreak);
      setEditingToday(false);
      setNotice(response.data.created
        ? 'Your check-in has been saved. Thank you for taking a moment for yourself.'
        : "Today's check-in has been updated.");
    } catch (requestError) {
      setError(errorMessage(requestError));
    } finally {
      setSavingMood(false);
    }
  };

  const handleChatSubmit = async (event) => {
    event.preventDefault();
    const message = chatInput.trim();
    if (!message || !chatConsent || sendingChat) return;

    setChatMessages((current) => [...current, { role: 'user', text: message }]);
    setChatInput('');
    setSendingChat(true);
    setError('');
    try {
      const response = await clientApi.post('/auth/chat', {
        message,
        consentToExternalProcessing: true
      });
      setChatMessages((current) => [...current, {
        role: 'assistant',
        text: response.data.reply,
        crisis: response.data.crisisDetected
      }]);
    } catch (requestError) {
      setError(errorMessage(requestError));
    } finally {
      setSendingChat(false);
    }
  };

  const selectSection = (section) => {
    navigate(SECTION_PATHS[section] || SECTION_PATHS.overview);
    setSidebarOpen(false);
    setError('');
    setNotice('');
  };

  const latestMood = entries[0] ? MOODS[entries[0].mood - 1] : null;
  const firstName = user?.displayName || user?.email?.split('@')[0] || 'there';

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f3faf9]">
        <div role="status" className="flex items-center gap-3 text-sm font-medium text-[#0F2D3A]">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#b8ded9] border-t-[#007F80]" />
          Loading your private space...
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3faf9] text-[#0F2D3A]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-[#0F2D3A]/35 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-[#deece9] bg-white transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-[78px] items-center justify-between border-b border-[#edf3f1] px-6">
          <Link to="/" aria-label="Psychobeings home" className="rounded-lg">
            <img src={logo} alt="Psychobeings" className="h-10 w-40 object-contain object-left" />
          </Link>
          <button type="button" onClick={() => setSidebarOpen(false)} aria-label="Close menu" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden">
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-3 pt-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Your space</p>
        </div>
        <nav aria-label="Client dashboard" className="flex-1 space-y-1 px-3">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => selectSection(id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-xs font-semibold transition ${
                activeSection === id ? 'bg-[#E6F4F3] text-[#007F80]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#0F2D3A]'
              }`}
            >
              <Icon size={17} aria-hidden="true" />
              <span>{label}</span>
              {id === 'chat' && <span className="ml-auto rounded-full bg-[#007F80] px-2 py-0.5 text-[9px] font-bold text-white">BETA</span>}
            </button>
          ))}
        </nav>

        <div className="border-t border-[#edf3f1] p-4">
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-[#f7fbfa] px-3 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E6F4F3] text-xs font-bold text-[#007F80]">
              {user?.email?.slice(0, 1).toUpperCase() || 'P'}
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-[#0F2D3A]">{user?.email || 'Client account'}</p>
              <p className="mt-0.5 text-[10px] text-slate-500">Private client portal</p>
            </div>
          </div>
          <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-500 transition hover:bg-rose-50 hover:text-rose-700">
            <LogOut size={16} aria-hidden="true" />
            Sign out
          </button>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-[270px]">
        <header className="sticky top-0 z-30 flex h-[70px] items-center justify-between border-b border-[#deece9] bg-white/95 px-4 backdrop-blur sm:px-7 lg:px-10">
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Open navigation menu" onClick={() => setSidebarOpen(true)} className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden">
              <Menu size={19} />
            </button>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Psychobeings client portal</p>
              <p className="mt-0.5 text-xs font-semibold text-[#0F2D3A]">{NAV_ITEMS.find((item) => item.id === activeSection)?.label}</p>
            </div>
          </div>
          <button type="button" onClick={() => selectSection('profile')} className="flex items-center gap-2 rounded-full border border-[#deece9] bg-white py-1.5 pl-1.5 pr-3 transition hover:border-[#007F80]/50">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6F4F3] text-xs font-bold text-[#007F80]">{user?.email?.slice(0, 1).toUpperCase() || 'P'}</span>
            <span className="hidden max-w-[150px] truncate text-xs font-semibold text-slate-600 sm:block">{user?.email}</span>
          </button>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-7 sm:px-7 sm:py-9 lg:px-10">
          {error && (
            <div role="alert" className="mb-5 flex items-start justify-between gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-700">
              <span>{error}</span>
              {activeSection === 'overview' && <button type="button" onClick={loadDashboard} className="shrink-0 font-semibold underline">Try again</button>}
            </div>
          )}
          {notice && <div role="status" className="mb-5 rounded-xl border border-[#b8ded9] bg-[#E6F4F3] px-4 py-3 text-sm leading-6 text-[#0F2D3A]">{notice}</div>}

          {activeSection === 'overview' && (
            <div className="space-y-6">
              <SectionHeading
                eyebrow="A moment for you"
                title={`Welcome, ${firstName}`}
                description="Your wellbeing is personal. Use this space in whatever way feels right today."
              />
              <div className="grid gap-5 xl:grid-cols-[1.45fr_0.85fr]">
                <Panel>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#0F2D3A]">Your mood, over time</p>
                      <p className="mt-1 text-xs text-slate-500">A gentle look at your recent check-ins</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F4F3] text-[#007F80]"><Activity size={19} aria-hidden="true" /></span>
                  </div>
                  <MoodChart entries={entries} />
                  <button type="button" onClick={() => selectSection('mood')} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#007F80] hover:underline">
                    Check in with yourself <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </Panel>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
                  {totalCheckIns !== null && (
                    <GrowthTree
                      totalCheckIns={totalCheckIns}
                      streak={streak}
                      longestStreak={longestStreak}
                    />
                  )}
                  <Panel className="bg-gradient-to-br from-[#E6F4F3] to-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-semibold text-slate-500">Most recent check-in</p>
                        {latestMood ? (
                          <>
                            <p className="mt-3 text-2xl font-semibold text-[#0F2D3A]">{latestMood.face} {latestMood.label}</p>
                            <p className="mt-1 text-xs text-slate-500">{formatDate(entries[0].createdAt, { month: 'long', day: 'numeric' })}</p>
                          </>
                        ) : (
                          <p className="mt-3 text-lg font-semibold text-[#0F2D3A]">Your first check-in</p>
                        )}
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#007F80]"><Heart size={19} aria-hidden="true" /></span>
                    </div>
                    <button type="button" onClick={() => selectSection('mood')} className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#007F80] hover:underline">
                      {latestMood ? 'Check in again' : 'Begin a check-in'} <ChevronRight size={14} aria-hidden="true" />
                    </button>
                  </Panel>
                  <Panel>
                    <p className="text-xs font-semibold text-slate-500">Need a little support?</p>
                    <h2 className="mt-2 text-lg font-semibold text-[#0F2D3A]">Talk it through</h2>
                    <p className="mt-2 text-xs leading-5 text-slate-500">Psycho Buddy offers a supportive space to reflect. It is not a crisis service.</p>
                    <button type="button" onClick={() => selectSection('chat')} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#007F80] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#00696a]">
                      Open Psycho Buddy <MessageCircle size={14} aria-hidden="true" />
                    </button>
                  </Panel>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  { id: 'journal', title: 'Mood journal', body: 'Look back at notes you chose to save with your check-ins.', icon: NotebookPen },
                  { id: 'library', title: 'Content library', body: 'Explore small, gentle practices and reflection prompts.', icon: BookOpen },
                  { id: 'booking', title: 'Book a session', body: 'Continue to the Psychobeings session booking page.', icon: CalendarDays }
                ].map(({ id, title, body, icon: Icon }) => (
                  <button key={id} type="button" onClick={() => selectSection(id)} className="group flex items-start gap-4 rounded-2xl border border-[#deece9] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-[#007F80]/40 hover:shadow-lg hover:shadow-[#0F2D3A]/5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F4F3] text-[#007F80]"><Icon size={18} aria-hidden="true" /></span>
                    <span><span className="block text-sm font-semibold text-[#0F2D3A]">{title}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{body}</span></span>
                    <ArrowRight size={15} className="ml-auto mt-1 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#007F80]" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'mood' && (
            <div className="space-y-6">
              <SectionHeading eyebrow="Mood check-in" title="How are you feeling right now?" description="There is no right answer. Choose what feels closest, then add a note if you would like." />
              <div className="grid gap-5 xl:grid-cols-[1fr_1.2fr]">
                <Panel>
                  {todayEntry && !editingToday ? (
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Today's check-in</p>
                      <p className="mt-3 text-2xl font-semibold text-[#0F2D3A]">
                        {MOODS[todayEntry.mood - 1]?.face} {MOODS[todayEntry.mood - 1]?.label}
                      </p>
                      {todayEntry.feelings?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {todayEntry.feelings.map((feeling) => (
                            <span key={feeling} className="rounded-full bg-[#E6F4F3] px-3 py-1 text-[10px] font-medium text-[#007F80]">{feeling}</span>
                          ))}
                        </div>
                      )}
                      {todayEntry.note && <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-slate-600">{todayEntry.note}</p>}
                      <button
                        type="button"
                        onClick={() => setEditingToday(true)}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#b8ded9] px-4 py-2.5 text-xs font-semibold text-[#007F80] hover:bg-[#f7fbfa]"
                      >
                        Edit today's check-in
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleMoodSubmit}>
                      <fieldset>
                        <legend className="text-sm font-semibold text-[#0F2D3A]">Pick a mood</legend>
                        <div className="mt-4 grid grid-cols-5 gap-2">
                          {MOODS.map((mood) => (
                            <button
                              key={mood.value}
                              type="button"
                              aria-pressed={selectedMood === mood.value}
                              onClick={() => setSelectedMood(mood.value)}
                              className={`flex flex-col items-center gap-2 rounded-xl border px-1 py-3 transition ${
                                selectedMood === mood.value ? 'border-[#007F80] bg-[#E6F4F3] ring-2 ring-[#007F80]/15' : 'border-slate-100 bg-slate-50/70 hover:border-[#b8ded9]'
                              }`}
                            >
                              <span className="text-2xl" aria-hidden="true">{mood.face}</span>
                              <span className="text-[9px] font-semibold text-slate-600 sm:text-[10px]">{mood.label}</span>
                            </button>
                          ))}
                        </div>
                      </fieldset>
                      <fieldset className="mt-6">
                        <legend className="text-xs font-semibold text-slate-700">What else are you feeling? <span className="font-normal text-slate-400">(optional, choose up to 8)</span></legend>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {FEELINGS.map((feeling) => {
                            const selected = selectedFeelings.includes(feeling);
                            return (
                              <button
                                key={feeling}
                                type="button"
                                aria-pressed={selected}
                                onClick={() => setSelectedFeelings((current) => (
                                  selected
                                    ? current.filter((item) => item !== feeling)
                                    : current.length < 8 ? [...current, feeling] : current
                                ))}
                                className={`rounded-full border px-3 py-1.5 text-[10px] font-medium transition ${
                                  selected ? 'border-[#007F80] bg-[#E6F4F3] text-[#007F80]' : 'border-slate-200 text-slate-600 hover:border-[#b8ded9]'
                                }`}
                              >
                                {feeling}
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>
                      <label htmlFor="mood-note" className="mb-2 mt-6 block text-xs font-semibold text-slate-700">Add a note <span className="font-normal text-slate-400">(optional)</span></label>
                      <textarea
                        id="mood-note"
                        rows={4}
                        maxLength={1000}
                        value={moodNote}
                        onChange={(event) => setMoodNote(event.target.value)}
                        placeholder="What might be contributing to how you feel?"
                        className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm leading-6 text-[#0F2D3A] outline-none transition focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
                      />
                      <button
                        type="submit"
                        disabled={!selectedMood || savingMood}
                        className="mt-6 w-full rounded-xl bg-[#007F80] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#00696a] disabled:opacity-50"
                      >
                        {savingMood ? 'Saving...' : todayEntry ? "Update today's check-in" : 'Save check-in'}
                      </button>
                    </form>
                  )}
                </Panel>
                <div className="space-y-5">
                  <Panel>
                    <h2 className="text-sm font-semibold text-[#0F2D3A]">Past 7 days</h2>
                    <div className="mt-4">
                      <WeekStrip entries={entries} />
                    </div>
                  </Panel>
                  {totalCheckIns !== null && (
                    <GrowthTree
                      totalCheckIns={totalCheckIns}
                      streak={streak}
                      longestStreak={longestStreak}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'journal' && (
            <div className="space-y-6">
              <SectionHeading eyebrow="Mood journal" title="Your reflections" description="A look back at your check-in notes over time." />
              <div className="space-y-4">
                {entries.length === 0 ? (
                  <Panel className="py-12 text-center text-slate-500">
                    <p className="text-sm">No check-ins logged yet.</p>
                    <button type="button" onClick={() => selectSection('mood')} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#007F80] hover:underline">
                      Make your first check-in <ArrowRight size={14} />
                    </button>
                  </Panel>
                ) : (
                  entries.map((entry) => {
                    const mood = MOODS[entry.mood - 1];
                    return (
                      <Panel key={entry._id || entry.createdAt}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl" aria-hidden="true">{mood?.face}</span>
                            <div>
                              <p className="text-sm font-semibold text-[#0F2D3A]">{mood?.label}</p>
                              <p className="text-[10px] text-slate-400">{formatDate(entry.createdAt, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                          </div>
                          {entry.feelings?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {entry.feelings.map((feeling) => (
                                <span key={feeling} className="rounded-full bg-[#E6F4F3] px-2.5 py-0.5 text-[10px] font-medium text-[#007F80]">{feeling}</span>
                              ))}
                            </div>
                          )}
                        </div>
                        {entry.note && <p className="mt-4 whitespace-pre-wrap text-xs leading-6 text-slate-600">{entry.note}</p>}
                      </Panel>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {activeSection === 'chat' && (
            <div className="space-y-6">
              <SectionHeading eyebrow="Psycho Buddy" title="Supportive AI chat" description="A quiet space to think out loud and process your thoughts." />
              <Panel className="flex h-[550px] flex-col p-0 overflow-hidden">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-6 ${
                        msg.role === 'user' ? 'bg-[#007F80] text-white' : 'bg-[#f7fbfa] text-[#0F2D3A] border border-[#deece9]'
                      }`}>
                        <p>{msg.text}</p>
                        {msg.crisis && (
                          <div className="mt-3 flex items-center gap-2 rounded-lg bg-rose-50 p-2 text-rose-700">
                            <ShieldAlert size={16} />
                            <span>If you need immediate help, please contact emergency services or a national helpline.</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleChatSubmit} className="border-t border-[#deece9] bg-white p-4">
                  <div className="mb-3 flex items-center gap-2 text-[11px] text-slate-500">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={chatConsent}
                      onChange={(e) => setChatConsent(e.target.checked)}
                      className="rounded border-slate-300 text-[#007F80] focus:ring-[#007F80]"
                    />
                    <label htmlFor="consent">I understand Psycho Buddy is an AI and not a replacement for therapy.</label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs outline-none focus:border-[#007F80]"
                    />
                    <button
                      type="submit"
                      disabled={!chatInput.trim() || !chatConsent || sendingChat}
                      className="flex items-center justify-center rounded-xl bg-[#007F80] px-4 py-2.5 text-white disabled:opacity-50"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              </Panel>
            </div>
          )}

          {activeSection === 'library' && (
            <div className="space-y-6">
              <SectionHeading eyebrow="Content library" title="Self-guided practices" description="Short grounding exercises and reflection tools." />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {LIBRARY_ITEMS.map((item, idx) => (
                  <Panel key={idx} className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                        <span>{item.category}</span>
                        <span>{item.duration}</span>
                      </div>
                      <h3 className="mt-2 text-base font-semibold text-[#0F2D3A]">{item.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{item.description}</p>
                    </div>
                    <button type="button" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#007F80] hover:underline">
                      Begin exercise <ArrowRight size={14} />
                    </button>
                  </Panel>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'booking' && (
            <div className="space-y-6">
              <SectionHeading eyebrow="Session booking" title="Book a 1:1 Session" description="Schedule time with a qualified professional." />
              <Panel className="py-12 text-center">
                <CalendarDays size={36} className="mx-auto text-[#007F80]" />
                <h3 className="mt-4 text-base font-semibold text-[#0F2D3A]">Ready to schedule?</h3>
                <p className="mt-2 text-xs text-slate-500">You will be redirected to our appointment scheduler.</p>
                <a
                  href="/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#007F80] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#00696a]"
                >
                  Go to session booking <ArrowRight size={14} />
                </a>
              </Panel>
            </div>
          )}

          {activeSection === 'profile' && (
            <div className="space-y-6">
              <SectionHeading eyebrow="Profile settings" title="Account Details" description="Manage your personal preferences." />
              <Panel className="max-w-xl">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500">Email Address</label>
                    <p className="mt-1 text-sm font-medium text-[#0F2D3A]">{user?.email}</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500">Account ID</label>
                    <p className="mt-1 text-sm font-mono text-slate-600">{user?._id || user?.id || 'N/A'}</p>
                  </div>
                </div>
              </Panel>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}