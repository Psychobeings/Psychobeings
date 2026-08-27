import React, { useState } from 'react';
import axios from 'axios';
import { 
  ArrowRight, 
  KeyRound, 
  Lock, 
  Mail, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  Sparkles, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/Psychobeings.png';

const API_BASE_URL = (process.env.REACT_APP_URL || 'http://localhost:8080/').replace(/\/?$/, '/');

const Signin = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const normalizedEmail = email.trim().toLowerCase();

    try {
      const response = await axios.post(`${API_BASE_URL}admin/signin`, {
        email: normalizedEmail,
        password
      });

      localStorage.setItem('authToken', response.data.token);
      if (onLoginSuccess) onLoginSuccess();
      
      // Redirect straight to dashboard workspace upon authentication
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      if (mode === 'requestReset') {
        await axios.post(`${API_BASE_URL}admin/email/send`, { email: email.trim().toLowerCase() });
        setMode('verifyOtp');
        setSuccessMsg('Verification code sent to your email.');
      } else if (mode === 'verifyOtp') {
        await axios.post(`${API_BASE_URL}admin/email/verify`, { email: email.trim().toLowerCase(), otp });
        setPassword('');
        setMode('resetPassword');
        setSuccessMsg('');
      } else if (mode === 'resetPassword') {
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }

        const reset = await axios.post(`${API_BASE_URL}admin/reset-password`, { 
          email: email.trim().toLowerCase(), 
          password
        });

        if (reset.status === 200) {
          setMode('signin');
          setSuccessMsg('Password updated successfully. Please sign in.');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed. Please try again.');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    switch (mode) {
      case 'signin':
        return (
          <form onSubmit={handleSignIn} className="space-y-5">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-600">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@psychobeings.com"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 py-3.5 text-xs text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#1B7B87] focus:bg-white focus:ring-4 focus:ring-[#1B7B87]/10"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Password</label>
                <button
                  type="button"
                  onClick={() => { setMode('requestReset'); setError(''); setSuccessMsg(''); }}
                  className="text-xs font-semibold text-[#1B7B87] transition hover:text-[#125861] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 pl-11 pr-11 py-3.5 text-xs text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#1B7B87] focus:bg-white focus:ring-4 focus:ring-[#1B7B87]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#0F2D32] py-3.5 text-xs font-semibold text-white shadow-xl shadow-[#0F2D32]/20 transition-all duration-300 hover:bg-[#124249] active:scale-[0.99] disabled:opacity-70"
            >
              <span>{loading ? 'Signing in...' : 'Enter Workspace'}</span>
              {!loading && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
            </button>
          </form>
        );

      case 'requestReset':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-5">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-600">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@psychobeings.com"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 py-3.5 text-xs text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#1B7B87] focus:bg-white focus:ring-4 focus:ring-[#1B7B87]/10"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-[#0F2D32] py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-[#124249] active:scale-[0.99] disabled:opacity-70"
            >
              {loading ? 'Sending Code...' : 'Send Reset Code'}
            </button>

            <button
              type="button"
              onClick={() => { setMode('signin'); setError(''); setSuccessMsg(''); }}
              className="w-full text-center text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Back to Sign In
            </button>
          </form>
        );

      case 'verifyOtp':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-5">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-600">Verification Code</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="0 0 0 0 0 0"
                maxLength={6}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-center text-lg font-bold tracking-[0.4em] text-slate-900 outline-none transition-all duration-200 placeholder:tracking-normal placeholder:text-slate-300 focus:border-[#1B7B87] focus:bg-white focus:ring-4 focus:ring-[#1B7B87]/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-[#0F2D32] py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-[#124249] active:scale-[0.99] disabled:opacity-70"
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>
          </form>
        );

      case 'resetPassword':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-5">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-600">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-xs text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#1B7B87] focus:bg-white focus:ring-4 focus:ring-[#1B7B87]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-600">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-xs text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#1B7B87] focus:bg-white focus:ring-4 focus:ring-[#1B7B87]/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-[#0F2D32] py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-[#124249] active:scale-[0.99] disabled:opacity-70"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-6 md:p-8 flex items-center justify-center font-sans">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200/80 lg:grid-cols-12 min-h-[600px] border border-slate-100">
        
        {/* Left Decorative Section */}
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-[#0B2326] via-[#0F353A] to-[#124046] p-12 text-white lg:col-span-5 lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[50px] border-[#1B7B87]/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full border-[40px] border-[#2098A7]/15 blur-xl pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#1B7B87]/40 bg-[#1B7B87]/20 px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles size={14} className="text-[#32B4C5]" />
              <span className="text-xs font-medium tracking-wide text-teal-100">Practitioner Portal</span>
            </div>

            <h1 className="text-3xl font-light leading-tight tracking-tight text-white/95">
              Empowering Minds, <br />
              <span className="font-serif italic font-normal text-[#37C1D3]">Transforming Lives.</span>
            </h1>

            <p className="mt-5 text-xs leading-relaxed text-teal-100/70 max-w-xs">
              A private workspace designed for practitioners and teams to manage therapy sessions and support client wellness journeys.
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B7B87]/30 text-[#3CD1E4]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">HIPAA & GDPR Compliant</p>
                <p className="text-[10px] text-teal-200/60">End-to-end encrypted workspace</p>
              </div>
            </div>

            <p className="text-[10px] text-teal-200/40">© Psychobeings · All rights reserved</p>
          </div>
        </section>

        {/* Right Form Section */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-12 lg:col-span-7 lg:px-16">
          <div className="w-full max-w-sm">
            <div className="mb-6">
              <img src={logo} alt="Psychobeings" className="h-11 w-auto object-contain" />
            </div>

            <div className="mb-6">
              <div className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1B7B87]/10 text-[#1B7B87]">
                {mode === 'signin' ? <Lock size={17} /> : mode === 'verifyOtp' ? <KeyRound size={17} /> : <Mail size={17} />}
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {mode === 'signin' && 'Welcome Back'}
                {mode === 'requestReset' && 'Reset Password'}
                {mode === 'verifyOtp' && 'Enter Verification Code'}
                {mode === 'resetPassword' && 'Create New Password'}
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                {mode === 'signin' && 'Sign in to access your admin dashboard.'}
                {mode === 'requestReset' && 'Enter your email to receive a password reset code.'}
                {mode === 'verifyOtp' && `Code sent to ${email}`}
                {mode === 'resetPassword' && 'Choose a strong password for your account.'}
              </p>
            </div>

            {error && (
              <div className="mb-5 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50/80 px-4 py-3 text-xs font-medium text-red-700 animate-fadeIn">
                <AlertCircle size={16} className="text-red-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {successMsg && (
              <div className="mb-5 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-xs font-medium text-emerald-800 animate-fadeIn">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {renderForm()}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Signin;