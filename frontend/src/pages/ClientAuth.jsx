import React, { useState } from 'react';
import axios from 'axios';
import { ArrowLeft, ArrowRight, Eye, EyeOff, HeartHandshake, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import logo from '../assets/Psychobeings.png';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api'
  : (process.env.REACT_APP_URL || 'http://localhost:8080').replace(/\/+$/u, '');
const clientApi = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

function getErrorMessage(error) {
  return error.response?.data?.message || 'We could not complete that request. Please try again.';
}

function maskEmail(value) {
  const [localPart, domain] = value.trim().split('@');
  if (!localPart || !domain) return 'your email address';
  return `${localPart[0]}${'*'.repeat(Math.max(3, Math.min(6, localPart.length - 1)))}@${domain}`;
}

export default function ClientAuth() {
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get('token');
  const inviteToken = searchParams.get('invite');
  const requestedMode = searchParams.get('mode');
  const initialMode = inviteToken ? 'invite' : resetToken ? 'reset' : requestedMode === 'signup' ? 'signup' : 'signin';
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [resetRequestedFor, setResetRequestedFor] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const setAuthMode = (nextMode) => {
    setMode(nextMode);
    setError('');
    setNotice('');
    setResetRequestedFor('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    setLoading(true);

    try {
      if (mode === 'signin') {
        await clientApi.post('/auth/client/signin', { email, password });
        navigate('/client/dashboard', { replace: true });
      } else if (mode === 'signup') {
        await clientApi.post('/auth/client/signup', { email, password, consent });
        navigate('/client/onboarding', { replace: true });
      } else if (mode === 'invite') {
        await clientApi.post('/auth/client/invitation/accept', { token: inviteToken, email, password, consent });
        navigate('/client/onboarding', { replace: true });
      } else if (mode === 'forgot') {
        await clientApi.post('/auth/client/password/forgot', { email });
        setResetRequestedFor(email.trim());
      } else {
        await clientApi.post('/auth/client/password/reset', { token: resetToken, password });
        setPassword('');
        setNotice('Your password has been updated. Please sign in with your new password.');
        setMode('signin');
      }
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  const title = resetRequestedFor ? 'Check your email' : {
    signin: 'Welcome back',
    signup: 'Create your account',
    invite: 'Accept your invitation',
    forgot: 'Reset your password',
    reset: 'Choose a new password'
  }[mode];

  const description = resetRequestedFor
    ? 'If an account exists for this address, we’ve sent a secure password reset link.'
    : {
    signin: 'Your personal space for reflection, support, and steady progress.',
    signup: 'Start a private space for your wellbeing journey.',
    invite: 'Create your password and review the terms to finish setting up your client portal.',
    forgot: 'Enter your email and we’ll send a secure password reset link if an account exists.',
    reset: 'Choose a new password to secure your account.'
  }[mode];

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3faf9] px-4 py-10 sm:px-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#d7e9e7] bg-white shadow-[0_28px_80px_rgba(15,45,58,0.12)] lg:grid-cols-[1fr_0.95fr]">
        <section className="relative hidden min-h-[650px] flex-col justify-between overflow-hidden bg-[#0F2D3A] p-10 text-white lg:flex">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full border border-white/10" />
          <Link to="/" className="relative inline-flex w-fit rounded-xl bg-white px-4 py-2">
            <img src={logo} alt="Psychobeings" className="h-10 w-40 object-contain" />
          </Link>
          <div className="relative max-w-md">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007F80]">
              <HeartHandshake size={28} aria-hidden="true" />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9ad7d0]">A space for you</p>
            <h1 className="text-4xl font-semibold leading-tight">Small steps can make room for meaningful change.</h1>
            <p className="mt-5 text-sm leading-7 text-white/75">
              Check in with yourself, keep a gentle record of your days, and find support at your own pace.
            </p>
          </div>
          <p className="relative text-xs text-white/60">Psychobeings · Empowering Minds, Transforming Lives</p>
        </section>

        <section className="flex min-h-[620px] flex-col justify-center px-6 py-10 sm:px-12 lg:px-14">
          <Link to="/" className="mb-8 inline-flex w-fit items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-[#007F80] lg:hidden">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Psychobeings
          </Link>

          <div className="mb-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E6F4F3] text-[#007F80]">
              <ShieldCheck size={22} aria-hidden="true" />
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#007F80]">Client portal</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0F2D3A]">{title}</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
          </div>

          {error && (
            <div role="alert" className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          )}
          {notice && !resetRequestedFor && (
            <div role="status" className="mb-5 rounded-xl border border-[#b8ded9] bg-[#E6F4F3] px-4 py-3 text-sm leading-6 text-[#0F2D3A]">
              {notice}
            </div>
          )}

          {resetRequestedFor ? (
            <div role="status" className="space-y-5 rounded-2xl border border-[#b8ded9] bg-[#E6F4F3] p-5 text-sm leading-6 text-[#0F2D3A]">
              <div>
                <p className="font-semibold">Reset link requested for</p>
                <p className="mt-1 font-mono">{maskEmail(resetRequestedFor)}</p>
              </div>
              <p>
                Check your inbox and spam folder. Open the link in the email to verify your address and access the password reset page. The link expires after 30 minutes.
              </p>
              <button
                type="button"
                onClick={() => {
                  setResetRequestedFor('');
                  setError('');
                }}
                className="text-xs font-semibold text-[#007F80] underline"
              >
                Try a different email
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode !== 'reset' && (
              <div>
                <label htmlFor="client-email" className="mb-2 block text-xs font-semibold text-slate-700">Email address{mode === 'invite' ? ' (the address the invitation was sent to)' : ''}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} aria-hidden="true" />
                  <input
                    id="client-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#0F2D3A] outline-none transition focus:border-[#007F80] focus:ring-4 focus:ring-[#007F80]/10"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            )}

            {(mode === 'signin' || mode === 'signup' || mode === 'reset' || mode === 'invite') && (
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="client-password" className="text-xs font-semibold text-slate-700">
                    {mode === 'reset' ? 'New password' : mode === 'invite' ? 'Create password' : 'Password'}
                  </label>
                  {mode === 'signin' && (
                    <button type="button" onClick={() => setAuthMode('forgot')} className="text-xs font-semibold text-[#007F80] hover:underline">
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} aria-hidden="true" />
                  <input
                    id="client-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                    required
                    minLength={mode === 'signin' ? undefined : 12}
                    maxLength={128}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 text-sm text-[#0F2D3A] outline-none transition focus:border-[#007F80] focus:ring-4 focus:ring-[#007F80]/10"
                    placeholder={mode === 'signin' ? 'Enter your password' : 'At least 12 characters'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
                {mode !== 'signin' && (
                  <p className="mt-2 text-[11px] text-slate-500">Use at least 12 characters.</p>
                )}
              </div>
            )}

            {(mode === 'signup' || mode === 'invite') && (
              <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#f8fcfb] p-4 text-xs leading-5 text-slate-600">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#007F80]"
                />
                <span>
                  I agree to the <Link to="/terms" className="font-semibold text-[#007F80] underline">Terms &amp; Conditions</Link> and acknowledge the{' '}
                  <Link to="/privacy" className="font-semibold text-[#007F80] underline">Privacy Policy</Link>.
                </span>
              </label>
            )}

            <button
              type="submit"
              disabled={loading || ((mode === 'signup' || mode === 'invite') && !consent)}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#007F80] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#007F80]/20 transition hover:bg-[#00696a] focus:outline-none focus:ring-4 focus:ring-[#007F80]/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>
                {loading
                  ? 'Please wait...'
                  : mode === 'signin'
                    ? 'Sign in'
                    : mode === 'signup'
                      ? 'Create account'
                      : mode === 'invite'
                        ? 'Accept invitation'
                      : mode === 'forgot'
                        ? 'Send reset link'
                        : 'Update password'}
              </span>
              {!loading && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />}
            </button>
          </form>
          )}

          <div className="mt-7 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
            {mode === 'signin' ? (
              <p>
                New to the client portal?{' '}
                <button type="button" onClick={() => setAuthMode('signup')} className="font-semibold text-[#007F80] hover:underline">
                  Create an account
                </button>
              </p>
            ) : mode === 'signup' ? (
              <p>
                Already have an account?{' '}
                <button type="button" onClick={() => setAuthMode('signin')} className="font-semibold text-[#007F80] hover:underline">
                  Sign in
                </button>
              </p>
            ) : (
              <button type="button" onClick={() => setAuthMode('signin')} className="inline-flex items-center gap-2 font-semibold text-[#007F80] hover:underline">
                <ArrowLeft size={15} aria-hidden="true" />
                Back to sign in
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
