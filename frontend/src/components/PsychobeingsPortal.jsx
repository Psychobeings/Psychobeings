import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logoname from '../assets/Logoname.png';
import {
  ArrowDownRight,
  ArrowRight,
  AlertTriangle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Eye,
  EyeOff,
  Heart,
  HeartHandshake,
  HeartPulse,
  History,
  Home,
  Leaf,
  LockKeyhole,
  Mail,
  MessageCircle,
  ClipboardList,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  Wind,
} from 'lucide-react';

const DEMO_CREDENTIALS = {
  email: 'therapist@psychobeings.demo',
  password: 'Demo@1234',
};

const navigation = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'last-session', label: 'Last Session', icon: CalendarDays },
  { id: 'tasks', label: 'Tasks', icon: ClipboardList },
  { id: 'history', label: 'History', icon: History },
];

const moodOptions = [
  { value: 'great', label: 'Good', face: '🙂' },
  { value: 'okay', label: 'Okay', face: '😐' },
  { value: 'low', label: 'Low', face: '😔' },
  { value: 'anxious', label: 'Anxious', face: '😟' },
  { value: 'tired', label: 'Tired', face: '😴' },
];

function PreviewNotice() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#cfe7e4] bg-[#edf8f6] px-4 py-3 text-sm text-[#31515a]">
      <ShieldCheck className="mt-0.5 shrink-0 text-[#007F80]" size={18} aria-hidden="true" />
      <p className="leading-6">
        <span className="font-semibold text-[#0F2D3A]">Preview mode.</span>{' '}
        Sample screen only—no personal information is stored or sent.
      </p>
    </div>
  );
}

function PsychobeingsPortal() {
  const [view, setView] = useState('client');
  const [section, setSection] = useState('home');
  const [mood, setMood] = useState('');
  const [profile, setProfile] = useState({
    name: 'Demo Client',
    gender: 'Prefer not to say',
    email: 'client@example.com',
    phone: '',
    dateOfBirth: '',
  });
  const [feedback, setFeedback] = useState('');
  const [profileMessage, setProfileMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signInMessage, setSignInMessage] = useState('');
  const [isDemoSignedIn, setIsDemoSignedIn] = useState(false);

  const openTeamSignIn = () => {
    setView('team');
    setSignInMessage('');
    setIsDemoSignedIn(false);
  };

  const openClientPreview = () => {
    setView('client');
    setSection('home');
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    if (
      email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password
    ) {
      setSignInMessage('');
      setIsDemoSignedIn(true);
    } else {
      setSignInMessage('Those details do not match the demo account. Use the sample credentials below.');
    }
    setPassword('');
  };

  const selectMood = (value) => setMood(value);

  const renderMoodCheckIn = () => (
    <section className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-6" aria-labelledby="mood-title">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#007F80]">A moment for you</p>
          <h2 id="mood-title" className="mt-1 font-serif text-xl font-semibold text-[#0F2D3A]">How are you feeling today?</h2>
        </div>
        <span className="rounded-xl bg-[#E6F4F3] p-2.5 text-[#007F80]">
          <Heart size={20} aria-hidden="true" />
        </span>
      </div>
      <div className="mt-5 grid grid-cols-5 gap-2 sm:gap-3">
        {moodOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={mood === option.value}
            onClick={() => selectMood(option.value)}
            className={`flex min-h-[76px] flex-col items-center justify-center gap-1.5 rounded-2xl border text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-[#007F80] focus:ring-offset-2 ${
              mood === option.value
                ? 'border-[#007F80] bg-[#edf8f6] text-[#005f60]'
                : 'border-[#e8efee] bg-[#fbfdfd] text-slate-600 hover:border-[#9acbc7] hover:bg-[#f4faf9]'
            }`}
          >
            <span className="text-2xl" aria-hidden="true">{option.face}</span>
            {option.label}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-4 min-h-5 text-xs leading-5 text-slate-500">
        {mood
          ? 'Thanks for checking in. This preview check-in will not be saved.'
          : 'There is no right answer. Choose what feels closest, or skip today.'}
      </p>
    </section>
  );

  const renderResources = () => (
    <section className="grid gap-4 sm:grid-cols-2" aria-label="Wellbeing resources">
      <article className="rounded-3xl border border-[#e1ecea] bg-white p-6">
        <span className="inline-flex rounded-xl bg-[#E6F4F3] p-3 text-[#007F80]"><Wind size={21} aria-hidden="true" /></span>
        <h3 className="mt-4 font-serif text-lg font-semibold">Take a breathing pause</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">Give yourself a quiet moment. Breathe in gently, then let your breath out slowly.</p>
        <p className="mt-4 text-xs font-medium text-slate-500">A simple grounding prompt—not medical advice.</p>
      </article>
      <article className="rounded-3xl border border-[#e1ecea] bg-white p-6">
        <span className="inline-flex rounded-xl bg-[#E6F4F3] p-3 text-[#007F80]"><HeartHandshake size={21} aria-hidden="true" /></span>
        <h3 className="mt-4 font-serif text-lg font-semibold">Explore professional support</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">Learn about our counselling services and find an option that feels right for you.</p>
        <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#007F80] hover:text-[#005f60]">
          Browse services <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </article>
    </section>
  );

  const renderProfile = () => (
    <div className="space-y-5">
      <PreviewNotice />
      <section className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-7" aria-labelledby="profile-title">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold text-[#007F80]">Your account</p>
            <h2 id="profile-title" className="mt-1 font-serif text-2xl font-semibold">Profile settings</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Review your details. In this preview, changes stay in this page only.</p>
          </div>
          <span className="w-fit rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-semibold text-[#006c6d]">Demo profile</span>
        </div>
        <form
          className="mt-6 grid gap-4 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            setProfileMessage('Profile updated in this preview only. Nothing was sent or saved.');
          }}
        >
          <label className="block text-sm font-medium text-[#0F2D3A]">
            Name
            <input
              value={profile.name}
              onChange={(event) => setProfile({ ...profile, name: event.target.value })}
              className="mt-1.5 w-full rounded-xl border border-[#dce7e5] px-4 py-3 text-sm outline-none focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
            />
          </label>
          <label className="block text-sm font-medium text-[#0F2D3A]">
            Gender
            <select
              value={profile.gender}
              onChange={(event) => setProfile({ ...profile, gender: event.target.value })}
              className="mt-1.5 w-full rounded-xl border border-[#dce7e5] bg-white px-4 py-3 text-sm outline-none focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
            >
              <option>Prefer not to say</option>
              <option>Female</option>
              <option>Male</option>
              <option>Non-binary</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-[#0F2D3A]">
            Email
            <input
              type="email"
              value={profile.email}
              onChange={(event) => setProfile({ ...profile, email: event.target.value })}
              className="mt-1.5 w-full rounded-xl border border-[#dce7e5] px-4 py-3 text-sm outline-none focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
            />
          </label>
          <label className="block text-sm font-medium text-[#0F2D3A]">
            Phone number
            <input
              type="tel"
              value={profile.phone}
              onChange={(event) => setProfile({ ...profile, phone: event.target.value })}
              placeholder="+91 9XXXX XXXXX"
              className="mt-1.5 w-full rounded-xl border border-[#dce7e5] px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
            />
          </label>
          <label className="block text-sm font-medium text-[#0F2D3A]">
            Date of birth
            <input
              type="date"
              value={profile.dateOfBirth}
              onChange={(event) => setProfile({ ...profile, dateOfBirth: event.target.value })}
              className="mt-1.5 w-full rounded-xl border border-[#dce7e5] px-4 py-3 text-sm outline-none focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
            />
          </label>
          <div className="flex items-end">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-[#007F80] px-5 py-3 text-sm font-semibold text-white hover:bg-[#006c6d]">
              Save changes <CheckCircle2 size={16} aria-hidden="true" />
            </button>
          </div>
        </form>
        {profileMessage && <p role="status" className="mt-4 text-sm text-[#006c6d]">{profileMessage}</p>}
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-6" aria-labelledby="medications-title">
          <p className="text-sm font-semibold text-[#007F80]">Health information</p>
          <h2 id="medications-title" className="mt-1 font-serif text-xl font-semibold">My medications</h2>
          <div className="mt-4 rounded-2xl bg-[#f7fbfa] p-4">
            <p className="text-sm font-medium text-[#0F2D3A]">None added yet</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Medication details are not part of this demo. For medication advice, contact your qualified healthcare professional.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-6" aria-labelledby="feedback-title">
          <p className="text-sm font-semibold text-[#007F80]">Your care matters</p>
          <h2 id="feedback-title" className="mt-1 font-serif text-xl font-semibold">My feedback</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Tell your therapist how your sessions are going.</p>
          <form
            className="mt-4"
            onSubmit={(event) => {
              event.preventDefault();
              setFeedbackMessage('Thanks for sharing. Feedback is not sent or saved in this preview.');
              setFeedback('');
            }}
          >
            <label htmlFor="client-feedback" className="sr-only">Feedback for your therapist</label>
            <textarea
              id="client-feedback"
              rows="4"
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              placeholder="Share anything you’d like your therapist to know..."
              className="w-full resize-y rounded-xl border border-[#dce7e5] px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
            />
            <button type="submit" disabled={!feedback.trim()} className="mt-3 rounded-xl bg-[#007F80] px-5 py-3 text-sm font-semibold text-white hover:bg-[#006c6d] disabled:cursor-not-allowed disabled:opacity-50">
              Send feedback
            </button>
          </form>
          {feedbackMessage && <p role="status" className="mt-3 text-sm text-[#006c6d]">{feedbackMessage}</p>}
        </section>
      </div>
    </div>
  );

  const renderCrisisSupport = () => (
    <div className="space-y-5">
      <section className="rounded-3xl border border-rose-200 bg-rose-50 p-5 sm:p-7" aria-labelledby="crisis-title">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
            <AlertTriangle size={23} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-rose-700">Immediate support</p>
            <h2 id="crisis-title" className="mt-1 font-serif text-2xl font-semibold text-rose-950">Need immediate help?</h2>
            <p className="mt-2 text-sm leading-6 text-rose-950">
              Psychobeings is not an emergency or crisis service. Messages sent through this app may not be monitored immediately. If you believe you are in immediate danger, call <strong>112</strong>, contact Tele-MANAS at <strong>14416</strong>, or go to your nearest hospital.
            </p>
          </div>
        </div>
        <p className="mt-5 rounded-2xl border border-rose-200 bg-white/80 p-4 text-sm font-semibold leading-6 text-rose-950">
          If you feel you may harm yourself or someone else, or you’re in immediate danger, don’t wait. Call emergency services or reach out to a crisis helpline immediately.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2" aria-label="Emergency and mental health helplines in India">
        <article className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold text-rose-700">Emergency services</p>
          <h3 className="mt-1 font-serif text-xl font-semibold">India National Emergency</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Police, ambulance, and emergency response services.</p>
          <a href="tel:112" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-700 px-5 py-3.5 text-sm font-bold text-white hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2">
            Call 112 <ArrowRight size={17} aria-hidden="true" />
          </a>
        </article>

        <article className="rounded-3xl border border-[#bfe1dc] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-[#007F80]">National mental health support</p>
            <span className="rounded-full bg-[#edf8f6] px-2.5 py-1 text-[11px] font-bold text-[#006c6d]">Recommended</span>
          </div>
          <h3 className="mt-1 font-serif text-xl font-semibold">Tele-MANAS</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Free, confidential, 24×7 mental health support in multiple Indian languages from trained professionals.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <a href="tel:14416" className="flex items-center justify-center gap-2 rounded-xl bg-[#007F80] px-4 py-3 text-sm font-bold text-white hover:bg-[#006c6d]">
              Call 14416
            </a>
            <a href="tel:18008914416" className="flex items-center justify-center gap-2 rounded-xl border border-[#bfe1dc] px-4 py-3 text-sm font-semibold text-[#006c6d] hover:bg-[#edf8f6]">
              1-800-891-4416
            </a>
          </div>
        </article>

        <article className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:col-span-2 sm:p-6">
          <p className="text-sm font-semibold text-[#007F80]">Additional support</p>
          <h3 className="mt-1 font-serif text-xl font-semibold">KIRAN Mental Health Helpline</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">1800-599-0019. This government helpline may route callers to Tele-MANAS in many regions.</p>
          <a href="tel:18005990019" className="mt-4 inline-flex items-center justify-center rounded-xl border border-[#bfe1dc] px-5 py-3 text-sm font-semibold text-[#006c6d] hover:bg-[#edf8f6]">
            Call 1800-599-0019
          </a>
        </article>
      </section>

      <section className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-6" aria-labelledby="while-waiting-title">
        <h3 id="while-waiting-title" className="font-serif text-xl font-semibold">If you are waiting for help</h3>
        <p className="mt-2 text-sm text-slate-600">If it feels safe to do so, please try to:</p>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
          <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#007F80]" aria-hidden="true" /> Stay with someone you trust.</li>
          <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#007F80]" aria-hidden="true" /> Move away from anything you could use to hurt yourself.</li>
          <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#007F80]" aria-hidden="true" /> Tell a family member, friend, or your therapist how you’re feeling.</li>
        </ul>
        <p className="mt-4 rounded-xl bg-[#f7fbfa] p-4 text-sm font-medium leading-6 text-[#0F2D3A]">If you cannot stay safe, call 112 or go to the nearest emergency department now.</p>
      </section>
    </div>
  );

  const renderSection = () => {
    if (section === 'profile') return renderProfile();
    if (section === 'safety') return renderCrisisSupport();

    if (section === 'last-session') {
      return (
        <section className="rounded-3xl border border-[#e1ecea] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold text-[#007F80]">Last Session · Demo</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold">Your session details</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f7fbfa] p-4"><p className="text-xs text-slate-500">Session</p><p className="mt-1 text-sm font-semibold">Individual counselling</p></div>
            <div className="rounded-2xl bg-[#f7fbfa] p-4"><p className="text-xs text-slate-500">Format</p><p className="mt-1 text-sm font-semibold">Online · 50 minutes</p></div>
            <div className="rounded-2xl bg-[#f7fbfa] p-4"><p className="text-xs text-slate-500">Session notes</p><p className="mt-1 text-sm font-semibold">Private to you and your therapist</p></div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">This is sample content only; there are no real session records connected to this preview.</p>
          <Link to="/booking" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#007F80] px-5 py-3 text-sm font-semibold text-white hover:bg-[#006c6d]">
            Book another session <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>
      );
    }

    if (section === 'tasks') {
      return (
        <section className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-semibold text-[#007F80]">Between sessions</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold">Tasks and exercises</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Things your therapist may share for you to explore at your own pace.</p>
          <div className="mt-5 flex items-start gap-4 rounded-2xl bg-[#f7fbfa] p-4">
            <span className="rounded-xl bg-[#E6F4F3] p-2.5 text-[#007F80]"><Wind size={20} aria-hidden="true" /></span>
            <div>
              <h3 className="text-sm font-semibold">A mindful breathing pause</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">Take a few comfortable breaths and notice how you feel. Stop if anything feels uncomfortable.</p>
              <p className="mt-2 text-xs text-slate-500">Example exercise · Not assigned by a therapist</p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">This is a non-clinical demo example. Follow guidance from your own healthcare professional.</p>
        </section>
      );
    }

    if (section === 'history') {
      return (
        <section className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-semibold text-[#007F80]">Your journey</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold">Session history</h2>
          <div className="mt-5 rounded-2xl border border-dashed border-[#cbdedb] bg-[#f7fbfa] p-6 text-center">
            <History className="mx-auto text-[#007F80]" size={24} aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold">Your completed sessions will appear here</p>
            <p className="mt-1 text-sm text-slate-600">No personal history is included in this demo.</p>
          </div>
        </section>
      );
    }

    if (section === 'sessions') {
      return (
        <section className="rounded-3xl border border-[#e1ecea] bg-white p-6 text-center shadow-sm sm:p-10">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F4F3] text-[#007F80]">
            <CalendarDays size={25} aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-2xl font-semibold">Your sessions, all in one place</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
            There are no sessions to display in this preview. When you are ready, you can explore booking on our main website.
          </p>
          <Link to="/booking" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#007F80] px-5 py-3 text-sm font-semibold text-white hover:bg-[#006c6d]">
            Explore booking <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>
      );
    }

    if (section === 'wellbeing') {
      return (
        <div className="space-y-5">
          {renderMoodCheckIn()}
          <div className="rounded-3xl border border-[#dcebea] bg-[#E6F4F3]/70 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Leaf size={20} className="mt-0.5 shrink-0 text-[#007F80]" aria-hidden="true" />
              <div>
                <h2 className="font-serif text-lg font-semibold">Small steps count</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">You can take things at your own pace. If you would like guidance, our team can help you explore professional support.</p>
                <Link to="/contact" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#007F80]">
                  Talk to our team <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (section === 'resources') return renderResources();

    return (
      <div className="space-y-5">
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.85fr]">
          <section className="relative overflow-hidden rounded-3xl bg-[#0F2D3A] p-6 text-white shadow-sm sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full bg-[#007F80]/40 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-medium text-[#a9d8d5]">Your next step, at your pace</p>
              <h2 className="mt-2 max-w-lg font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                Make space for your wellbeing.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-200">
                Explore professional support, find a session time, or take a moment to check in with yourself.
              </p>
              <Link to="/booking" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0F2D3A] transition hover:bg-[#E6F4F3]">
                Explore booking <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <Sparkles className="pointer-events-none absolute bottom-7 right-7 hidden text-[#a9d8d5]/60 sm:block" size={40} aria-hidden="true" />
          </section>

          <section className="flex flex-col justify-between rounded-3xl border border-[#e1ecea] bg-white p-6 shadow-sm">
            <div>
              <span className="inline-flex rounded-xl bg-[#E6F4F3] p-3 text-[#007F80]"><CalendarDays size={21} aria-hidden="true" /></span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#007F80]">Sessions</p>
              <h2 className="mt-2 font-serif text-xl font-semibold">Nothing on your calendar yet</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Your upcoming sessions will appear here when booked.</p>
            </div>
            <Link to="/booking" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#007F80] hover:text-[#005f60]">
              Find a time <ChevronRight size={17} aria-hidden="true" />
            </Link>
          </section>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {renderMoodCheckIn()}
          <section className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#007F80]">Explore</p>
                <h2 className="mt-1 font-serif text-xl font-semibold">A little support goes a long way</h2>
              </div>
              <span className="rounded-xl bg-[#E6F4F3] p-2.5 text-[#007F80]"><BookOpen size={20} aria-hidden="true" /></span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">Discover counselling and wellness services designed around different needs.</p>
            <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#007F80]">
              Explore services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f9f8] text-[#0F2D3A] md:flex">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-[#e1ecea] bg-white px-5 py-6 md:flex">
        <Link to="/" aria-label="Psychobeings home" className="flex rounded-xl focus:outline-none focus:ring-2 focus:ring-[#007F80]">
          <img src={Logoname} alt="Psychobeings — Psychological Wellness & Therapy" className="h-auto w-48 object-contain" />
        </Link>

        <div className="mt-10 flex-1">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Your space</p>
          <nav aria-label="Portal navigation" className="space-y-1">
            {navigation.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setView('client');
                  setSection(id);
                }}
                aria-current={view === 'client' && section === id ? 'page' : undefined}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#007F80] ${
                  view === 'client' && section === id
                    ? 'bg-[#E6F4F3] text-[#006c6d]'
                    : 'text-slate-600 hover:bg-[#f5f9f8] hover:text-[#0F2D3A]'
                }`}
              >
                <Icon size={18} aria-hidden="true" />
                {label}
              </button>
            ))}
          </nav>
          <p className="mb-3 mt-8 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Account & safety</p>
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setSection('profile')}
              aria-current={view === 'client' && section === 'profile' ? 'page' : undefined}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium ${
                section === 'profile' ? 'bg-[#E6F4F3] text-[#006c6d]' : 'text-slate-600 hover:bg-[#f5f9f8]'
              }`}
            >
              <UserRound size={18} aria-hidden="true" /> Profile settings
            </button>
            <button
              type="button"
              onClick={() => setSection('safety')}
              aria-current={view === 'client' && section === 'safety' ? 'page' : undefined}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold ${
                section === 'safety' ? 'bg-rose-50 text-rose-800' : 'text-rose-700 hover:bg-rose-50'
              }`}
            >
              <HeartPulse size={18} aria-hidden="true" /> Emergency support
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-[#f5f9f8] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold"><CircleHelp size={17} className="text-[#007F80]" /> Need a hand?</div>
          <p className="mt-2 text-xs leading-5 text-slate-600">Our team can help you find the right next step.</p>
          <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#007F80]">
            Contact us <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-5 px-1 text-[11px] text-slate-400">Portal interface preview</p>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 border-b border-[#e1ecea] bg-white/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <Link to="/" aria-label="Psychobeings home" className="flex items-center rounded-xl focus:outline-none focus:ring-2 focus:ring-[#007F80] md:hidden">
              <img src={Logoname} alt="Psychobeings" className="h-auto w-40 object-contain" />
            </Link>
            <div className="hidden md:block">
              <p className="text-xs font-medium text-slate-500">A calmer space to find your next step</p>
              <p className="mt-0.5 text-sm font-semibold">Psychobeings wellbeing portal</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-semibold text-[#006c6d] sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#007F80]" />
                Preview
              </span>
              {view === 'client' && (
                <>
                  <button
                    type="button"
                    onClick={() => setSection('profile')}
                    aria-label="Profile settings"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d8e8e6] text-[#0F2D3A] hover:border-[#007F80] hover:text-[#007F80] focus:outline-none focus:ring-2 focus:ring-[#007F80]"
                  >
                    <UserRound size={17} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSection('safety')}
                    className="inline-flex items-center gap-1.5 rounded-full bg-rose-700 px-3 py-2 text-xs font-bold text-white hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2"
                  >
                    <HeartPulse size={15} aria-hidden="true" /> SOS
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={view === 'team' ? openClientPreview : openTeamSignIn}
                className="inline-flex items-center gap-2 rounded-full border border-[#d8e8e6] px-3 py-2 text-xs font-semibold text-[#0F2D3A] transition hover:border-[#007F80] hover:text-[#007F80] focus:outline-none focus:ring-2 focus:ring-[#007F80] focus:ring-offset-2 sm:px-4 sm:text-sm"
              >
                {view === 'team' ? 'Client preview' : <><span className="hidden sm:inline">Practice team</span><span className="sm:hidden">Team</span></>}
                <ArrowDownRight size={15} aria-hidden="true" />
              </button>
            </div>
          </div>

          {view === 'client' && (
            <nav aria-label="Mobile portal navigation" className="mx-auto mt-3 flex max-w-6xl gap-2 overflow-x-auto pb-0.5 md:hidden">
              {navigation.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSection(id)}
                  aria-current={section === id ? 'page' : undefined}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold ${
                    section === id ? 'bg-[#E6F4F3] text-[#006c6d]' : 'bg-[#f5f9f8] text-slate-600'
                  }`}
                >
                  <Icon size={15} aria-hidden="true" /> {label}
                </button>
              ))}
            </nav>
          )}
        </header>

        {view === 'team' && isDemoSignedIn ? (
          <main className="mx-auto min-h-[calc(100vh-65px)] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#007F80]">PRACTICE WORKSPACE · DEMO</p>
                <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Good evening, Therapist</h1>
                <p className="mt-2 text-sm text-slate-600">Here’s a sample overview of your practice day.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsDemoSignedIn(false);
                  setEmail('');
                }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d8e8e6] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F2D3A] hover:border-[#007F80]"
              >
                Sign out of demo
              </button>
            </div>

            <div className="mb-5"><PreviewNotice /></div>

            <section className="grid gap-4 sm:grid-cols-3" aria-label="Practice overview">
              {[
                { label: 'Sessions today', value: '4', icon: CalendarDays, detail: '2 completed · 2 upcoming' },
                { label: 'Active clients', value: '18', icon: Users, detail: 'Sample workspace data' },
                { label: 'Follow-ups', value: '3', icon: ClipboardList, detail: 'To review this week' },
              ].map(({ label, value, icon: Icon, detail }) => (
                <article key={label} className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-600">{label}</p>
                    <span className="rounded-xl bg-[#E6F4F3] p-2.5 text-[#007F80]"><Icon size={19} aria-hidden="true" /></span>
                  </div>
                  <p className="mt-4 font-serif text-3xl font-semibold">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{detail}</p>
                </article>
              ))}
            </section>

            <section className="mt-5 rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-6" aria-labelledby="schedule-title">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold text-[#007F80]">Thursday · Sample schedule</p>
                  <h2 id="schedule-title" className="mt-1 font-serif text-xl font-semibold">Your day at a glance</h2>
                </div>
                <span className="w-fit rounded-full bg-[#f5f9f8] px-3 py-1.5 text-xs font-medium text-slate-600">Demo data only</span>
              </div>
              <div className="mt-5 divide-y divide-[#edf1f0]">
                {[
                  { time: '10:00 AM', title: 'Individual session', kind: 'Online · 50 minutes', status: 'Completed' },
                  { time: '1:30 PM', title: 'Initial consultation', kind: 'Online · 45 minutes', status: 'Upcoming' },
                  { time: '3:00 PM', title: 'Individual session', kind: 'In person · 50 minutes', status: 'Upcoming' },
                ].map((item) => (
                  <div key={item.time} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center">
                    <span className="w-24 shrink-0 text-sm font-semibold text-[#0F2D3A]">{item.time}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{item.kind}</p>
                    </div>
                    <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === 'Completed' ? 'bg-[#edf8f6] text-[#006c6d]' : 'bg-amber-50 text-amber-800'
                    }`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </section>

            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              This practice dashboard is a local visual demo. It contains no real clients, appointments, or clinical records.
            </p>
          </main>
        ) : view === 'team' ? (
          <main className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
              <section className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E6F4F3] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#007F80]">
                  <ShieldCheck size={15} aria-hidden="true" /> Practice team
                </span>
                <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                  Welcome back to your <span className="text-[#007F80]">practice space.</span>
                </h1>
                <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
                  A calm, focused place for the people who make care possible.
                </p>
                <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#e1ecea] bg-white px-4 py-2"><LockKeyhole size={15} className="text-[#007F80]" /> Private by design</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#e1ecea] bg-white px-4 py-2"><Clock3 size={15} className="text-[#007F80]" /> Your work, at your pace</span>
                </div>
                <button type="button" onClick={openClientPreview} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#007F80] hover:text-[#005f60]">
                  Explore the client portal preview <ArrowRight size={16} aria-hidden="true" />
                </button>
              </section>

              <section className="mx-auto w-full max-w-md rounded-3xl border border-[#e1ecea] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(15,45,58,0.35)] sm:p-8" aria-labelledby="team-sign-in-title">
                <p className="text-sm font-semibold text-[#007F80]">Practice workspace</p>
                <h2 id="team-sign-in-title" className="mt-1 font-serif text-2xl font-semibold">Sign in</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">Use your practice account to continue.</p>

                <div className="mt-5"><PreviewNotice /></div>

                {signInMessage && (
                  <p role="alert" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-5 text-amber-900">
                    {signInMessage}
                  </p>
                )}

                <form onSubmit={handleSignIn} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="portal-email" className="mb-1.5 block text-sm font-medium text-[#0F2D3A]">Work email</label>
                    <span className="relative block">
                      <Mail size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <input
                        id="portal-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@practice.com"
                        className="w-full rounded-xl border border-[#dce7e5] bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
                      />
                    </span>
                  </div>
                  <div>
                    <label htmlFor="portal-password" className="mb-1.5 block text-sm font-medium text-[#0F2D3A]">Password</label>
                    <span className="relative block">
                      <LockKeyhole size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <input
                        id="portal-password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-[#dce7e5] bg-white py-3 pl-10 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#007F80] focus:ring-2 focus:ring-[#007F80]/15"
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        onClick={() => setShowPassword((visible) => !visible)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 hover:text-[#007F80] focus:outline-none focus:ring-2 focus:ring-[#007F80]"
                      >
                        {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                      </button>
                    </span>
                  </div>
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#007F80] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#006c6d] focus:outline-none focus:ring-2 focus:ring-[#007F80] focus:ring-offset-2">
                    Sign in <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </form>

                <div className="mt-5 rounded-2xl border border-[#dcebea] bg-[#f7fbfa] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#007F80]">Demo account</p>
                  <dl className="mt-2 space-y-1.5 text-sm">
                    <div className="flex flex-wrap gap-2"><dt className="text-slate-500">Email:</dt><dd className="font-mono text-[#0F2D3A]">{DEMO_CREDENTIALS.email}</dd></div>
                    <div className="flex flex-wrap gap-2"><dt className="text-slate-500">Password:</dt><dd className="font-mono text-[#0F2D3A]">{DEMO_CREDENTIALS.password}</dd></div>
                  </dl>
                  <button
                    type="button"
                    onClick={() => {
                      setEmail(DEMO_CREDENTIALS.email);
                      setPassword(DEMO_CREDENTIALS.password);
                      setSignInMessage('');
                    }}
                    className="mt-3 text-sm font-semibold text-[#007F80] hover:text-[#005f60]"
                  >
                    Fill demo credentials
                  </button>
                </div>

                <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                  Demo-only sign-in runs in your browser. Do not enter real credentials.
                </p>
                <div className="mt-5 border-t border-[#edf1f0] pt-5 text-center">
                  <Link to="/contact" className="text-sm font-semibold text-[#007F80] hover:text-[#005f60]">Need help? Contact our team</Link>
                </div>
              </section>
            </div>
          </main>
        ) : (
          <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#007F80]">CLIENT PORTAL · PREVIEW</p>
                <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  {section === 'home'
                    ? 'Your wellbeing space'
                    : navigation.find((item) => item.id === section)?.label || (section === 'profile' ? 'Profile Settings' : 'Crisis Support')}
                </h1>
                <p className="mt-2 text-sm text-slate-600">A gentle place to connect with your wellbeing journey.</p>
              </div>
              <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d8e8e6] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F2D3A] hover:border-[#007F80]">
                <MessageCircle size={16} className="text-[#007F80]" aria-hidden="true" /> Talk to us
              </Link>
            </div>

            <div className="mb-5"><PreviewNotice /></div>
            {renderSection()}

            <footer className="mt-8 border-t border-[#e1ecea] py-5">
              <div className="flex flex-col gap-2 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>Psychobeings supports wellbeing and does not replace professional medical care.</p>
                <Link to="/privacy" className="font-medium text-[#007F80] hover:underline">Privacy and support</Link>
              </div>
            </footer>
          </main>
        )}
      </div>
    </div>
  );
}

export default PsychobeingsPortal;
