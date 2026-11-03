import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ArrowLeft, ArrowRight, Eye, EyeOff, KeyRound, LockKeyhole, Mail, ShieldCheck
} from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import logo from '../Assets/Psychobeings.png';

const API_BASE_URL = (process.env.REACT_APP_URL || 'http://localhost:8080').replace(/\/+$/u, '');
const adminApi = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

function getErrorMessage(error) {
  return error.response?.data?.message || 'We could not complete that request. Please try again.';
}

export default function AdminLogin() {
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get('token');
  const [mode, setMode] = useState(resetToken ? 'reset' : 'signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [challengeToken, setChallengeToken] = useState('');
  const [enrollmentToken, setEnrollmentToken] = useState('');
  const [totpSecret, setTotpSecret] = useState('');
  const [provisioningUrl, setProvisioningUrl] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (mode !== 'setup' || !enrollmentToken || totpSecret) return;
    let active = true;

    adminApi.post('/admin/2fa/setup', { enrollmentToken })
      .then(({ data }) => {
        if (!active) return;
        setTotpSecret(data.secret);
        setProvisioningUrl(data.otpauthUrl);
      })
      .catch((requestError) => {
        if (active) setError(getErrorMessage(requestError));
      });

    return () => { active = false; };
  }, [mode, enrollmentToken, totpSecret]);

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setError('');
    setNotice('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    setLoading(true);

    try {
      if (mode === 'signin') {
        const { data } = await adminApi.post('/admin/signin', { email: email.trim().toLowerCase(), password });
        if (data.requiresTwoFactorSetup) {
          setEnrollmentToken(data.enrollmentToken);
          setCode('');
          setMode('setup');
        } else if (data.requiresTwoFactor) {
          setChallengeToken(data.challengeToken);
          setCode('');
          setMode('verify');
        } else {
          setError('The server returned an unexpected sign-in response.');
        }
      } else if (mode === 'setup') {
        const { data } = await adminApi.post('/admin/2fa/confirm', {
          enrollmentToken,
          code
        });
        if (data.user?.role !== 'admin') {
          setError('The server did not confirm administrator access.');
          return;
        }
        navigate('/dashboard', { replace: true });
      } else if (mode === 'verify') {
        const { data } = await adminApi.post('/admin/signin/verify-2fa', {
          challengeToken,
          code
        });
        if (data.user?.role !== 'admin') {
          setError('The server did not confirm administrator access.');
          return;
        }
        navigate('/dashboard', { replace: true });
      } else if (mode === 'forgot') {
        const { data } = await adminApi.post('/admin/password/forgot', { email: email.trim().toLowerCase() });
        setNotice(data.message);
      } else if (mode === 'reset') {
        await adminApi.post('/admin/password/reset', { token: resetToken, password });
        setPassword('');
        setMode('signin');
        setNotice('Password updated. Sign in with your new password.');
      }
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  const isCodeStep = mode === 'verify' || mode === 'setup';
  const heading = {
    signin: 'Administrator sign in',
    setup: 'Set up two-factor authentication',
    verify: 'Verify it’s you',
    forgot: 'Reset your password',
    reset: 'Choose a new password'
  }[mode];

  const description = {
    signin: 'Sign in to the secure Psychobeings administration workspace.',
    setup: 'Add your account to an authenticator app. This setup is required before admin access is enabled.',
    verify: 'Enter the current six-digit code from your authenticator app.',
    forgot: 'Enter your work email to request a secure password reset link.',
    reset: 'Choose a new password for your administrator account.'
  }[mode];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071b2b] px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute -bottom-60 -right-32 h-[42rem] w-[42rem] rounded-full border border-white/[0.06]" />
      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_35px_100px_rgba(0,0,0,0.35)] lg:grid-cols-[0.95fr_1.05fr]">
        <section className="relative hidden min-h-[680px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0F2D3A] via-[#102d42] to-[#071b2b] p-10 text-white lg:flex">
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-[#62c7bd]/20" />
          <div className="absolute right-8 top-32 h-48 w-48 rounded-full border border-white/10" />
          <Link to="/" className="relative inline-flex w-fit rounded-xl bg-white px-4 py-2">
            <img src={logo} alt="Psychobeings" className="h-10 w-40 object-contain" />
          </Link>
          <div className="relative max-w-md">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#62c7bd]/30 bg-[#007F80]/25 text-[#9be2d9]">
              <ShieldCheck size={27} aria-hidden="true" />
            </div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#83d2ca]">Secure workspace</p>
            <h1 className="text-4xl font-semibold leading-tight">Care begins with trust.</h1>
            <p className="mt-5 text-sm leading-7 text-white/65">
              This area is restricted to authorized Psychobeings administrators. Keep your sign-in details private.
            </p>
          </div>
          <p className="relative flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45">
            <LockKeyhole size={13} aria-hidden="true" /> Protected administrator access
          </p>
        </section>

        <section className="flex min-h-[640px] flex-col justify-center px-6 py-10 sm:px-12 lg:px-14">
          <Link to="/" className="mb-8 inline-flex w-fit items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-[#007F80] lg:hidden">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Psychobeings
          </Link>
          <div className="mb-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f4f3] text-[#007F80]">
              {isCodeStep ? <KeyRound size={21} aria-hidden="true" /> : <ShieldCheck size={21} aria-hidden="true" />}
            </div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#007F80]">Psychobeings · Admin</p>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F2D3A] sm:text-3xl">{heading}</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
          </div>

          {error && <div role="alert" className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-700">{error}</div>}
          {notice && <div role="status" className="mb-5 rounded-xl border border-[#b8ded9] bg-[#E6F4F3] px-4 py-3 text-sm leading-6 text-[#0F2D3A]">{notice}</div>}

          {mode === 'setup' && (
            <div className="mb-5 rounded-2xl border border-[#d6e9e6] bg-[#f7fbfa] p-4">
              {totpSecret ? (
                <>
                  <p className="text-xs font-semibold text-[#0F2D3A]">Add this key to your authenticator app</p>
                  <p className="mt-2 break-all rounded-lg bg-white px-3 py-2 font-mono text-sm font-bold tracking-widest text-[#007F80]">{totpSecret}</p>
                  <p className="mt-2 text-[11px] leading-5 text-slate-500">Enter the six-digit code generated for Psychobeings Admin. Keep this key private.</p>
                  <details className="mt-3">
                    <summary className="cursor-pointer text-[11px] font-semibold text-[#007F80]">Can’t enter the key manually?</summary>
                    <a href={provisioningUrl} className="mt-2 block break-all text-[10px] leading-5 text-slate-500 underline">Open authenticator setup link</a>
                  </details>
                </>
              ) : (
                <p role="status" className="text-xs text-slate-500">Preparing your secure authenticator setup...</p>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {(mode === 'signin' || mode === 'forgot') && (
              <div>
                <label htmlFor="admin-email" className="mb-2 block text-xs font-semibold text-slate-700">Work email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} aria-hidden="true" />
                  <input id="admin-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@psychobeings.com" className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#007F80] focus:ring-4 focus:ring-[#007F80]/10" />
                </div>
              </div>
            )}

            {(mode === 'signin' || mode === 'reset') && (
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="admin-password" className="text-xs font-semibold text-slate-700">{mode === 'reset' ? 'New password' : 'Password'}</label>
                  {mode === 'signin' && <button type="button" onClick={() => switchMode('forgot')} className="text-xs font-semibold text-[#007F80] hover:underline">Forgot password?</button>}
                </div>
                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} aria-hidden="true" />
                  <input id="admin-password" type={showPassword ? 'text' : 'password'} autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} required minLength={mode === 'reset' ? 12 : undefined} maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} placeholder={mode === 'reset' ? 'At least 12 characters' : 'Enter your password'} className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-[#007F80] focus:ring-4 focus:ring-[#007F80]/10" />
                  <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
                {mode === 'reset' && <p className="mt-2 text-[11px] text-slate-500">Use at least 12 characters.</p>}
              </div>
            )}

            {isCodeStep && (
              <div>
                <label htmlFor="admin-code" className="mb-2 block text-xs font-semibold text-slate-700">Authenticator code</label>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} aria-hidden="true" />
                  <input
                    id="admin-code"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    required
                    value={code}
                    onChange={(event) => setCode(event.target.value.replace(/\D/gu, '').slice(0, 6))}
                    placeholder="000000"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-center font-mono text-lg tracking-[0.4em] outline-none transition focus:border-[#007F80] focus:ring-4 focus:ring-[#007F80]/10"
                  />
                </div>
              </div>
            )}

            <button type="submit" disabled={loading || (mode === 'setup' && !totpSecret)} className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2D3A] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F2D3A]/20 transition hover:bg-[#16445a] focus:outline-none focus:ring-4 focus:ring-[#0F2D3A]/15 disabled:cursor-not-allowed disabled:opacity-55">
              <span>
                {loading ? 'Please wait...' : mode === 'signin' ? 'Continue securely' : mode === 'setup' ? 'Enable 2FA and continue' : mode === 'verify' ? 'Verify and sign in' : mode === 'forgot' ? 'Send reset link' : 'Update password'}
              </span>
              {!loading && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />}
            </button>
          </form>

          {mode !== 'signin' && (
            <div className="mt-7 border-t border-slate-100 pt-6 text-center">
              <button type="button" onClick={() => switchMode('signin')} className="inline-flex items-center gap-2 text-xs font-semibold text-[#007F80] hover:underline">
                <ArrowLeft size={14} aria-hidden="true" /> Back to sign in
              </button>
            </div>
          )}
          <p className="mt-8 text-center text-[10px] leading-5 text-slate-400">Authorized administrator access only. All sign-ins are protected by two-factor authentication.</p>
        </section>
      </div>
    </main>
  );
}
