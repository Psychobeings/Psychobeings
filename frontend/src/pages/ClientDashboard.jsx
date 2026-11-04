import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  Activity, ArrowRight, BookOpen, CalendarDays, Check, ChevronRight, CircleUserRound,
  Heart, HeartPulse, Home, Leaf, LogOut, Menu, MessageCircle, NotebookPen, Send, ShieldAlert,
  Sparkles, Sprout, TreeDeciduous, Trees, X
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Psychobeings.png';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api'
  : (process.env.REACT_APP_URL || 'http://localhost:8080').replace(/\/+$/u, '');
const clientApi = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

const MOODS = [
  { value: 1, label: 'Very low', face: '😔', color: '#b76464' },
  { value: 2, label: 'Low', face: '😕', color: '#cf9164' },
  { value: 3, label: 'Okay', face: '😐', color: '#c4aa57' },
  { value: 4, label: 'Good', face: '🙂', color: '#73a98e' },
  { value: 5, label: 'Great', face: '😊', color: '#268c82' }
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
              <circle key={entry._id} cx={x} cy={y} r="2.6" fill="#007F80" stroke="white" strokeWidth="1.4">
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
        <span>Very low</span><span>Okay</span><span>Great</span>
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

function GrowthTree({ totalCheckIns }) {
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
        <p className="mt-4 rounded-xl bg-white/10 px-3 py-2 text-center text-sm font-semibold">
          {totalCheckIns} {totalCheckIns === 1 ? 'check-in' : 'check-ins'} so far
        </p>
      </div>
    </Panel>
  );
}

function WeekStrip({ entries }) {
  const checkedInDays = useMemo(
    () => new Set(entries.map((entry) => {
      const date = new Date(entry.createdAt);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    })),
    [entries]
  );
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (6 - index));
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return { date, checkedIn: checkedInDays.has(key), isToday: index === 6 };
  });

  return (
    <div role="group" aria-label="Mood check-ins over the last seven days" className="grid grid-cols-7 gap-2">
      {days.map(({ date, checkedIn, isToday }) => (
        <div
          key={date.toISOString()}
          role="img"
          aria-label={`${isToday ? 'Today' : formatDate(date, { weekday: 'long' })}: ${checkedIn ? 'check-in saved' : 'no check-in'}`}
          className={`flex flex-col items-center gap-2 rounded-xl px-1 py-3 ${isToday ? 'bg-[#E6F4F3]' : 'bg-[#f7fbfa]'}`}
        >
          <span className="text-[10px] font-medium text-slate-500">
            {isToday ? 'Today' : formatDate(date, { weekday: 'short' })}
          </span>
          <span className={`h-2.5 w-2.5 rounded-full ${checkedIn ? 'bg-[#007F80]' : 'bg-slate-200'}`} aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

export default function ClientDashboard() {
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);
  const [totalCheckIns, setTotalCheckIns] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [savingMood, setSavingMood] = useState(false);
  const [selectedMood, setSelectedMood] = useState(0);
  const [moodNote, setMoodNote] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Hi, I’m Psycho Buddy. I can offer a supportive space to reflect, but I’m not a therapist and can’t diagnose or prescribe. What’s on your mind today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatConsent, setChatConsent] = useState(false);
  const [sendingChat, setSendingChat] = useState(false);
  const navigate = useNavigate();

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [sessionResponse, moodResponse] = await Promise.all([
        clientApi.get('/auth/client/session'),
        clientApi.get('/auth/mood')
      ]);
      setUser(sessionResponse.data.user);
      setEntries(moodResponse.data.entries);
      setTotalCheckIns(moodResponse.data.totalCheckIns);
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
      const response = await clientApi.post('/auth/mood', { mood: selectedMood, note: moodNote });
      setEntries((current) => [response.data.entry, ...current]);
      setTotalCheckIns((current) => (current === null ? null : current + 1));
      setSelectedMood(0);
      setMoodNote('');
      setNotice('Your check-in has been saved. Thank you for taking a moment for yourself.');
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
    setActiveSection(section);
    setSidebarOpen(false);
    setError('');
    setNotice('');
  };

  const latestMood = entries[0] ? MOODS[entries[0].mood - 1] : null;
  const firstName = user?.email?.split('@')[0] || 'there';

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
                  {totalCheckIns !== null && <GrowthTree totalCheckIns={totalCheckIns} />}
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
                  <form onSubmit={handleMoodSubmit}>
                    <fieldset>
                      <legend className="text-sm font-semibold text-[#0F2D3A]">Pick a feeling</legend>
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
                    <label htmlFor="mood-note" className="mb-2 mt-6 block text-xs font-semibold text-slate-700">Add a note <span className="font-normal text-slate-400">(optional)</span></label>
                    <textarea
                      id="mood-note"
                      rows={4}
                      maxLength={2000}
                      value={moodNote}
                      onChange={(event) => setMoodNote(event.target.value)}
                      placeholder="What might be contributing to how you feel?"
                      className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm leading-6 text-[#0F2D3A] outline-none placeholder:text-slate-400 focus:border-[#007F80] focus:ring-4 focus:ring-[#007F80]/10"
                    />
                    <p className="mt-1 text-right text-[10px] text-slate-400">{moodNote.length}/2000</p>
                    <button type="submit" disabled={!selectedMood || savingMood} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#007F80] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#00696a] disabled:cursor-not-allowed disabled:opacity-50">
                      {savingMood ? 'Saving...' : 'Save check-in'} <Check size={16} aria-hidden="true" />
                    </button>
                  </form>
                </Panel>
                <Panel>
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-[#0F2D3A]">Your recent check-ins</p>
                    <p className="mt-1 text-xs text-slate-500">A personal reflection, not a clinical assessment</p>
                  </div>
                  <MoodChart entries={entries} />
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold text-slate-600">Last 7 days</p>
                    <WeekStrip entries={entries} />
                  </div>
                  <button type="button" onClick={() => selectSection('journal')} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#007F80] hover:underline">
                    Browse your journal <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </Panel>
              </div>
            </div>
          )}

          {activeSection === 'journal' && (
            <div>
              <SectionHeading eyebrow="Your reflections" title="Mood journal" description="Only your own check-ins and notes appear here. Take a look back whenever it feels helpful." action={<button type="button" onClick={() => selectSection('mood')} className="inline-flex items-center gap-2 rounded-xl bg-[#007F80] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#00696a]">New check-in <ArrowRight size={14} aria-hidden="true" /></button>} />
              {entries.length === 0 ? (
                <Panel className="py-12 text-center">
                  <NotebookPen className="mx-auto text-[#007F80]" size={28} aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-semibold">Your journal starts with a check-in</h2>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">Add a mood and an optional note whenever you want to make a record for yourself.</p>
                  <button type="button" onClick={() => selectSection('mood')} className="mt-5 rounded-xl bg-[#007F80] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#00696a]">Make a check-in</button>
                </Panel>
              ) : (
                <div className="space-y-3">
                  {entries.map((entry) => {
                    const mood = MOODS[entry.mood - 1];
                    return (
                      <Panel key={entry._id} className="flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6F4F3] text-2xl">{mood?.face}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                            <p className="text-sm font-semibold text-[#0F2D3A]">{mood?.label || 'Mood check-in'}</p>
                            <time className="text-[10px] text-slate-400" dateTime={entry.createdAt}>{formatDate(entry.createdAt, { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</time>
                          </div>
                          {entry.note ? <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-600">{entry.note}</p> : <p className="mt-2 text-xs italic text-slate-400">No note added.</p>}
                        </div>
                      </Panel>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeSection === 'chat' && (
            <div>
              <SectionHeading eyebrow="Psycho Buddy" title="A supportive space to reflect" description="This AI companion can offer general wellbeing support. It is not a therapist, does not diagnose or prescribe, and is not a crisis service." />
              <Panel className="mx-auto max-w-3xl overflow-hidden p-0">
                <div className="flex items-center gap-3 border-b border-[#edf3f1] px-5 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F4F3] text-[#007F80]"><Sparkles size={19} aria-hidden="true" /></span>
                  <div><p className="text-sm font-semibold">Psycho Buddy</p><p className="mt-0.5 text-[10px] text-slate-500">Here to listen, not to diagnose</p></div>
                </div>
                <div className="max-h-[440px] min-h-[270px] space-y-4 overflow-y-auto bg-[#f9fcfb] p-4 sm:p-6" aria-live="polite">
                  {chatMessages.map((message, index) => (
                    <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                        message.role === 'user' ? 'rounded-br-md bg-[#007F80] text-white' : message.crisis ? 'rounded-bl-md border border-amber-200 bg-amber-50 text-amber-950' : 'rounded-bl-md border border-[#deece9] bg-white text-slate-700'
                      }`}>
                        {message.crisis && <span className="mb-2 flex items-center gap-2 text-xs font-bold"><ShieldAlert size={15} aria-hidden="true" /> Please reach out for support</span>}
                        {message.text}
                      </div>
                    </div>
                  ))}
                  {sendingChat && <div className="text-xs text-slate-400" role="status">Psycho Buddy is replying...</div>}
                </div>
                <form onSubmit={handleChatSubmit} className="border-t border-[#edf3f1] bg-white p-4 sm:p-5">
                  <label htmlFor="chat-consent" className="mb-3 flex items-start gap-2 text-[10px] leading-5 text-slate-500">
                    <input id="chat-consent" type="checkbox" checked={chatConsent} onChange={(event) => setChatConsent(event.target.checked)} className="mt-1 h-3.5 w-3.5 shrink-0 accent-[#007F80]" />
                    <span>I agree that my message may be processed by Anthropic to generate an AI response. Avoid sharing information you do not want sent to this service. Crisis messages are screened first and not sent to the AI.</span>
                  </label>
                  <div className="flex items-end gap-2">
                    <label className="sr-only" htmlFor="chat-message">Message Psycho Buddy</label>
                    <textarea
                      id="chat-message"
                      rows={2}
                      maxLength={4000}
                      value={chatInput}
                      onChange={(event) => setChatInput(event.target.value)}
                      placeholder="Share what’s on your mind..."
                      className="min-h-[48px] flex-1 resize-y rounded-xl border border-slate-200 px-3.5 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#007F80] focus:ring-4 focus:ring-[#007F80]/10"
                    />
                    <button type="submit" disabled={!chatConsent || !chatInput.trim() || sendingChat} aria-label="Send message" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#007F80] text-white transition hover:bg-[#00696a] disabled:cursor-not-allowed disabled:opacity-45">
                      <Send size={17} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              </Panel>
              <p className="mx-auto mt-4 flex max-w-3xl items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-950">
                <ShieldAlert size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                If you may be in immediate danger, call 112 in India or go to the nearest emergency department. For mental health support in India, call Tele-MANAS at 14416.
              </p>
            </div>
          )}

          {activeSection === 'library' && (
            <div>
              <SectionHeading eyebrow="Explore at your pace" title="Content library" description="Small practices and prompts for everyday wellbeing. You can pause or stop any activity whenever you like." />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {LIBRARY_ITEMS.map((item) => (
                  <Panel key={item.title} className="flex min-h-[230px] flex-col">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#E6F4F3] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#007F80]">{item.category}</span>
                      <span className="text-[10px] text-slate-400">{item.duration}</span>
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-[#0F2D3A]">{item.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{item.description}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#007F80]"><Heart size={14} aria-hidden="true" /> A gentle practice</p>
                  </Panel>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-slate-500">These activities are general wellbeing ideas, not a substitute for professional mental health care.</p>
            </div>
          )}

          {activeSection === 'booking' && (
            <div>
              <SectionHeading eyebrow="Professional support" title="Session booking" description="If you would like to speak with a professional, continue to the existing Psychobeings booking page." />
              <Panel className="max-w-2xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F4F3] text-[#007F80]"><CalendarDays size={22} aria-hidden="true" /></span>
                <h2 className="mt-5 text-xl font-semibold">Choose a session that works for you</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">You’ll continue to the existing session booking experience to share your availability and request an appointment.</p>
                <Link to="/booking" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#007F80] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00696a]">
                  Continue to booking <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Panel>
            </div>
          )}

          {activeSection === 'profile' && (
            <div>
              <SectionHeading eyebrow="Your account" title="Profile" description="Your portal sign-in details and privacy information." />
              <Panel className="max-w-2xl">
                <div className="flex items-center gap-4 border-b border-[#edf3f1] pb-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F4F3] text-lg font-semibold text-[#007F80]">{user?.email?.slice(0, 1).toUpperCase() || 'P'}</span>
                  <div><p className="text-sm font-semibold text-[#0F2D3A]">Client account</p><p className="mt-1 text-xs text-slate-500">Customer portal</p></div>
                </div>
                <div className="grid gap-1 py-5 sm:grid-cols-[150px_1fr]">
                  <span className="py-2 text-xs font-semibold text-slate-500">Email address</span>
                  <span className="break-all py-2 text-sm text-[#0F2D3A]">{user?.email}</span>
                  <span className="py-2 text-xs font-semibold text-slate-500">Account type</span>
                  <span className="py-2 text-sm text-[#0F2D3A]">Client</span>
                </div>
                <div className="flex flex-wrap gap-3 border-t border-[#edf3f1] pt-5">
                  <Link to="/privacy" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:border-[#007F80] hover:text-[#007F80]">Privacy policy <ChevronRight size={14} aria-hidden="true" /></Link>
                  <button type="button" onClick={handleLogout} className="inline-flex items-center gap-2 rounded-xl border border-rose-200 px-4 py-2.5 text-xs font-semibold text-rose-700 hover:bg-rose-50">Sign out <LogOut size={14} aria-hidden="true" /></button>
                </div>
              </Panel>
            </div>
          )}

          <footer className="mt-10 flex flex-col gap-2 border-t border-[#deece9] pt-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>Psychobeings · A personal space for your wellbeing</span>
            <span className="flex items-center gap-1"><Heart size={11} aria-hidden="true" /> Support is available when you need it</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
