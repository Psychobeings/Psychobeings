import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Psychobeings.png';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api'
  : (process.env.REACT_APP_URL || 'http://localhost:8080').replace(/\/+$/u, '');
const clientApi = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

const STEPS = ['Consent', 'About you', 'Your goals'];
const GOALS = [
  'Manage stress',
  'Ease anxiety',
  'Sleep better',
  'Lift my mood',
  'Build confidence',
  'Improve relationships',
  'Work-life balance',
  'Process grief'
];
const PREFERENCES = [
  'Guided meditations',
  'Breathing exercises',
  'Journaling',
  'Articles',
  'Podcasts',
  'Talking to a therapist'
];
const AGE_GROUPS = ['13-17', '18-24', '25-34', '35-44', '45-59', '60+'];
const REQUIRED_CONSENTS = [
  {
    key: 'privacyPolicyAccepted',
    title: 'Privacy policy',
    body: 'I have reviewed the privacy policy and understand how my account information is handled.'
  },
  {
    key: 'dataStorageAcknowledged',
    title: 'Saved check-ins',
    body: 'I understand that profile details, preferences, check-ins, and notes I save are stored with my account.'
  },
  {
    key: 'aiAcknowledged',
    title: 'Psycho Buddy',
    body: 'I understand Psycho Buddy is AI, not a therapist, and does not diagnose or prescribe. Chat messages are only sent for AI processing when I separately agree in chat.'
  }
];

function errorMessage(error) {
  return error.response?.data?.message || 'We could not save your profile. Please try again.';
}

function SelectionGroup({ label, options, selected, onChange, single = false, allowEmpty = false }) {
  const toggleOption = (option) => {
    if (single) {
      onChange(allowEmpty && selected === option ? '' : option);
    } else {
      onChange(selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option]);
    }
  };

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold text-[#0F2D3A]">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = single ? selected === option : selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleOption(option)}
              className={`rounded-full border px-3.5 py-2 text-xs font-medium transition ${
                isSelected ? 'border-[#007F80] bg-[#E6F4F3] text-[#00696a]' : 'border-slate-200 bg-white text-slate-600 hover:border-[#9accc7]'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function ClientOnboarding() {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [language, setLanguage] = useState('en');
  const [goals, setGoals] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [consents, setConsents] = useState({
    privacyPolicyAccepted: false,
    dataStorageAcknowledged: false,
    aiAcknowledged: false
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    clientApi.get('/auth/client/session')
      .then(({ data }) => {
        if (!active) return;
        if (data.user.onboarded) {
          navigate('/client/dashboard', { replace: true });
          return;
        }
        setUser(data.user);
        setDisplayName(data.user.displayName || data.user.email?.split('@')[0] || '');
      })
      .catch((requestError) => {
        if (!active) return;
        if (requestError.response?.status === 401 || requestError.response?.status === 403) {
          navigate('/login', { replace: true });
        } else {
          setError(errorMessage(requestError));
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [navigate]);

  const canContinue = step === 0
    ? Object.values(consents).every(Boolean)
    : step === 1
      ? displayName.trim().length > 0
      : goals.length > 0;

  const finish = async () => {
    setSaving(true);
    setError('');
    try {
      await clientApi.put('/auth/client/onboarding', {
        displayName: displayName.trim(),
        ageGroup,
        language,
        goals,
        preferences,
        consents
      });
      navigate('/client/dashboard', { replace: true });
    } catch (requestError) {
      setError(errorMessage(requestError));
    } finally {
      setSaving(false);
    }
  };

  const continueStep = () => {
    if (step < STEPS.length - 1) {
      setStep((current) => current + 1);
      setError('');
    } else {
      finish();
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f3faf9]">
        <div role="status" className="flex items-center gap-3 text-sm font-medium text-[#0F2D3A]">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#b8ded9] border-t-[#007F80]" />
          Preparing your private space...
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f3faf9] px-4">
        <div className="max-w-md rounded-2xl border border-[#deece9] bg-white p-6 text-center">
          <p role="alert" className="text-sm leading-6 text-rose-700">{error || 'We could not load your account.'}</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-4 text-sm font-semibold text-[#007F80] underline">Try again</button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3faf9] px-4 py-6 text-[#0F2D3A] sm:px-6 sm:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-2xl flex-col rounded-[2rem] border border-[#deece9] bg-white p-5 shadow-[0_20px_60px_rgba(15,45,58,0.08)] sm:min-h-[calc(100vh-5rem)] sm:p-9">
        <header className="flex items-center justify-between gap-4 border-b border-[#edf3f1] pb-5">
          <Link to="/client" aria-label="Psychobeings wellbeing home" className="rounded-lg">
            <img src={logo} alt="Psychobeings" className="h-9 w-36 object-contain object-left" />
          </Link>
          <span className="text-xs font-medium text-slate-500">Step {step + 1} of {STEPS.length}</span>
        </header>

        <div className="mt-5" role="group" aria-label="Onboarding progress">
          <div className="grid grid-cols-3 gap-2">
            {STEPS.map((item, index) => (
              <div key={item} className={`h-1.5 rounded-full ${index <= step ? 'bg-[#007F80]' : 'bg-slate-100'}`} />
            ))}
          </div>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#007F80]">{STEPS[step]}</p>
        </div>

        <section className="flex-1 py-8">
          {step === 0 && (
            <>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F4F3] text-[#007F80]">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Before we begin</h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">Please review these important notes before setting up your wellbeing space.</p>
              <div className="mt-6 space-y-3">
                {REQUIRED_CONSENTS.map((item) => (
                  <label key={item.key} htmlFor={item.key} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#deece9] bg-[#fbfdfc] p-4">
                    <input
                      id={item.key}
                      type="checkbox"
                      checked={consents[item.key]}
                      onChange={(event) => setConsents((current) => ({ ...current, [item.key]: event.target.checked }))}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#007F80]"
                    />
                    <span>
                      <span className="block text-sm font-semibold">{item.title} <span className="text-[10px] font-normal text-slate-400">Required</span></span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.key === 'privacyPolicyAccepted' ? (
                          <>I have reviewed the <Link to="/privacy" target="_blank" rel="noreferrer" className="font-semibold text-[#007F80] underline" onClick={(event) => event.stopPropagation()}>Privacy Policy</Link> and understand how my account information is handled.</>
                        ) : item.body}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                You will be asked separately before a chat message is sent for AI processing. Psycho Buddy is not a crisis service.
              </p>
            </>
          )}

          {step === 1 && (
            <>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tell us about you</h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">Share only what you are comfortable sharing. Age group is optional.</p>
              <div className="mt-7 space-y-6">
                <div>
                  <label htmlFor="display-name" className="mb-2 block text-sm font-semibold">What should we call you?</label>
                  <input id="display-name" value={displayName} maxLength={60} onChange={(event) => setDisplayName(event.target.value)} className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#007F80] focus:ring-4 focus:ring-[#007F80]/10" placeholder="Your name" />
                </div>
                <SelectionGroup label="Age group (optional)" options={AGE_GROUPS} selected={ageGroup} onChange={setAgeGroup} single allowEmpty />
                <p className="-mt-4 text-xs leading-5 text-slate-500">
                  If you are under 18, please review the <Link to="/privacy" target="_blank" rel="noreferrer" className="font-semibold text-[#007F80] underline">Privacy Policy</Link> with a parent or guardian.
                </p>
                <SelectionGroup
                  label="Preferred language"
                  options={['English', 'हिन्दी (Hindi)']}
                  selected={language === 'en' ? 'English' : 'हिन्दी (Hindi)'}
                  onChange={(value) => setLanguage(value === 'English' ? 'en' : 'hi')}
                  single
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">What would you like to focus on?</h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">Choose any goals that feel relevant. These are for your personal wellbeing space, not a clinical assessment.</p>
              <div className="mt-7 space-y-7">
                <SelectionGroup label="Your goals (choose at least one)" options={GOALS} selected={goals} onChange={setGoals} />
                <SelectionGroup label="What helps you most? (optional)" options={PREFERENCES} selected={preferences} onChange={setPreferences} />
              </div>
            </>
          )}
        </section>

        {error && <p role="alert" className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-5 text-rose-700">{error}</p>}

        <footer className="flex items-center gap-3 border-t border-[#edf3f1] pt-5">
          {step > 0 && (
            <button type="button" onClick={() => setStep((current) => current - 1)} disabled={saving} className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-slate-500 hover:bg-slate-50 disabled:opacity-50">
              <ArrowLeft size={16} aria-hidden="true" /> Back
            </button>
          )}
          <button
            type="button"
            onClick={continueStep}
            disabled={!canContinue || saving}
            className="ml-auto inline-flex h-11 items-center gap-2 rounded-full bg-[#007F80] px-6 text-sm font-semibold text-white transition hover:bg-[#00696a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? 'Saving...' : step < STEPS.length - 1 ? 'Continue' : 'Start growing'}
            {!saving && (step < STEPS.length - 1 ? <ArrowRight size={16} aria-hidden="true" /> : <Check size={16} aria-hidden="true" />)}
          </button>
        </footer>
      </div>
    </main>
  );
}
