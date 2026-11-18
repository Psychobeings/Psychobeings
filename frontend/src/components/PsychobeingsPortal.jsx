import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logoname from '../assets/Logoname.png';
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  Clock3,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Users,
} from 'lucide-react';

const DEMO_CREDENTIALS = {
  email: 'therapist@psychobeings.demo',
  password: 'Demo@1234',
};

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

function PracticeDashboard({ onSignOut }) {
  const overview = [
    { label: 'Sessions today', value: '4', icon: CalendarDays, detail: '2 completed · 2 upcoming' },
    { label: 'Active clients', value: '18', icon: Users, detail: 'Sample workspace data' },
    { label: 'Follow-ups', value: '3', icon: ClipboardList, detail: 'To review this week' },
  ];
  const schedule = [
    { time: '10:00 AM', title: 'Individual session', kind: 'Online · 50 minutes', status: 'Completed' },
    { time: '1:30 PM', title: 'Initial consultation', kind: 'Online · 45 minutes', status: 'Upcoming' },
    { time: '3:00 PM', title: 'Individual session', kind: 'In person · 50 minutes', status: 'Upcoming' },
  ];

  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#007F80]">PRACTICE WORKSPACE · DEMO</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Welcome to your practice space</h1>
          <p className="mt-2 text-sm text-slate-600">Here’s a sample overview of your practice day.</p>
        </div>
        <button
          type="button"
          onClick={onSignOut}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d8e8e6] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F2D3A] hover:border-[#007F80]"
        >
          Sign out of demo
        </button>
      </div>

      <div className="mb-5"><PreviewNotice /></div>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Practice overview">
        {overview.map(({ label, value, icon: Icon, detail }) => (
          <article key={label} className="rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-600">{label}</p>
              <span className="rounded-xl bg-[#E6F4F3] p-2.5 text-[#007F80]">
                <Icon size={19} aria-hidden="true" />
              </span>
            </div>
            <p className="mt-4 font-serif text-3xl font-semibold">{value}</p>
            <p className="mt-1 text-xs text-slate-500">{detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-5 rounded-3xl border border-[#e1ecea] bg-white p-5 shadow-sm sm:p-6" aria-labelledby="schedule-title">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#007F80]">Sample schedule</p>
            <h2 id="schedule-title" className="mt-1 font-serif text-xl font-semibold">Your day at a glance</h2>
          </div>
          <span className="w-fit rounded-full bg-[#f5f9f8] px-3 py-1.5 text-xs font-medium text-slate-600">Demo data only</span>
        </div>
        <div className="mt-5 divide-y divide-[#edf1f0]">
          {schedule.map((item) => (
            <div key={item.time} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center">
              <span className="w-24 shrink-0 text-sm font-semibold text-[#0F2D3A]">{item.time}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{item.kind}</p>
              </div>
              <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                item.status === 'Completed' ? 'bg-[#edf8f6] text-[#006c6d]' : 'bg-amber-50 text-amber-800'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-5 text-center text-xs leading-5 text-slate-500">
        This practice dashboard is a local visual demo. It contains no real clients, appointments, or clinical records.
      </p>
    </main>
  );
}

function PracticeSignIn({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim().toLowerCase() === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
      setMessage('');
      onSignIn();
      return;
    }

    setMessage('Those details do not match the demo account. Use the sample credentials below.');
    setPassword('');
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <section className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E6F4F3] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#007F80]">
            <ShieldCheck size={15} aria-hidden="true" /> Therapist portal
          </span>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Your practice, in one calm space.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
            A focused place for the people who make care possible.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e1ecea] bg-white px-4 py-2">
              <LockKeyhole size={15} className="text-[#007F80]" aria-hidden="true" /> Private by design
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e1ecea] bg-white px-4 py-2">
              <Clock3 size={15} className="text-[#007F80]" aria-hidden="true" /> Your work, at your pace
            </span>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md rounded-3xl border border-[#e1ecea] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(15,45,58,0.35)] sm:p-8" aria-labelledby="team-sign-in-title">
          <p className="text-sm font-semibold text-[#007F80]">Practice workspace</p>
          <h2 id="team-sign-in-title" className="mt-1 font-serif text-2xl font-semibold">Sign in</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Use the demo account to preview the practice dashboard.</p>

          <div className="mt-5"><PreviewNotice /></div>

          {message && (
            <p role="alert" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-5 text-amber-900">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                setMessage('');
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
  );
}

function PsychobeingsPortal() {
  const [isDemoSignedIn, setIsDemoSignedIn] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f9f8] text-[#0F2D3A]">
      <header className="border-b border-[#e1ecea] bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link to="/" aria-label="Psychobeings home" className="flex rounded-xl focus:outline-none focus:ring-2 focus:ring-[#007F80]">
            <img src={Logoname} alt="Psychobeings — Psychological Wellness & Therapy" className="h-auto w-48 object-contain" />
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-semibold text-[#006c6d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#007F80]" />
            Therapist preview
          </span>
        </div>
      </header>

      {isDemoSignedIn
        ? <PracticeDashboard onSignOut={() => setIsDemoSignedIn(false)} />
        : <PracticeSignIn onSignIn={() => setIsDemoSignedIn(true)} />}
    </div>
  );
}

export default PsychobeingsPortal;
