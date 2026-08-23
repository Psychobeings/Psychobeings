import React, { useState } from 'react';
import axios from 'axios';
import { ArrowRight, KeyRound, Lock, Mail, ShieldCheck } from 'lucide-react';
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

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${API_BASE_URL}admin/signin`, {
        email,
        password
      });

      localStorage.setItem('authToken', response.data.token);
      onLoginSuccess();
      navigate('/portal');
    } catch (err) {
      setError( 'Sign in failed');
      console.log("Error:" , err)
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (mode === 'requestReset') {
        // Request OTP with
        await axios.post(`${process.env.REACT_APP_URL}admin/email/send`, { email });
        setMode('verifyOtp');
      } else if (mode === 'verifyOtp') {
        // Verify OTP
        await axios.post(`${process.env.REACT_APP_URL}admin/email/verify`, { email, otp });
        setPassword('')
        setMode('resetPassword');
 
      } else if (mode === 'resetPassword') {
        // Reset Password
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }

        const reset = await axios.post(`${process.env.REACT_APP_URL}admin/reset-password`, { 
          email, 
          password
        });
        

        if(reset.status === 200 )
        {

          setMode('signin');
          setError('Password reset successful');

        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
      console.log(err)
    }
  };

  const renderForm = () => {
    switch(mode) {
      case 'signin':
        return (
          <form onSubmit={handleSignIn} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Work email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@psychobeings.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
              />
            </label>
            
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
              />
            </label>
            
            <div className="flex items-center justify-end">
              <button 
                type="button"
                onClick={() => setMode('requestReset')}
                className="text-sm font-semibold text-teal-700 transition hover:text-teal-900"
              >
                Forgot password?
              </button>
            </div>
            
            <button 
              type="submit" 
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
            >
              Enter workspace <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        );
      
    
      case 'requestReset':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Work email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@psychobeings.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
              />
            </label>
            
            <button 
              type="submit" 
              className="w-full rounded-xl bg-slate-900 py-3.5 font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
            >
              Send reset code
            </button>
            
            <button 
              type="button"
              onClick={() => setMode('signin')}
              className="w-full text-sm font-semibold text-slate-500 transition hover:text-slate-900"
            >
              Back to sign in
            </button>
          </form>
        );
      
      case 'verifyOtp':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Verification code</span>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the 6-digit code"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 tracking-[0.3em] outline-none transition placeholder:tracking-normal placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
              />
            </label>
            
            <button 
              type="submit" 
              className="w-full rounded-xl bg-slate-900 py-3.5 font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
            >
              Verify code
            </button>
          </form>
        );
      
      case 'resetPassword':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">New password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a strong password"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
              />
            </label>
            
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Confirm password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat your new password"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
              />
            </label>
            
            <button 
              type="submit" 
              className="w-full rounded-xl bg-slate-900 py-3.5 font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
            >
              Update password
            </button>
          </form>
        );
      
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f7f5] p-4 text-slate-900 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="relative hidden overflow-hidden bg-[#123b3b] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[42px] border-teal-300/10" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-[28px] border-amber-200/10" />
          <div className="relative">
            <img src={logo} alt="Psychobeings" className="mb-16 h-12 w-auto object-contain brightness-0 invert" />
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">Admin workspace</p>
            <h1 className="max-w-sm text-5xl font-bold leading-[1.05] tracking-tight">Care starts with the people behind it.</h1>
            <p className="mt-6 max-w-sm text-base leading-7 text-teal-50/75">A quiet place to coordinate sessions, support practitioners, and keep every client journey moving.</p>
          </div>
          <div className="relative flex items-center gap-3 text-sm text-teal-50/75">
            <ShieldCheck size={20} className="text-amber-200" />
            <span>Private workspace for the Psychobeings team</span>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-20">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden">
              <img src={logo} alt="Psychobeings" className="h-10 w-auto object-contain" />
            </div>
            <div className="mb-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                {mode === 'signin' ? <Lock size={21} /> : mode === 'verifyOtp' ? <KeyRound size={21} /> : <Mail size={21} />}
              </div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Welcome back</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          {mode === 'signin' ? 'Sign In' : 
           mode === 'requestReset' ? 'Reset Password' :
           mode === 'verifyOtp' ? 'Verify OTP' : 
           'Set New Password'}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {mode === 'signin' ? 'Use your team account to access today’s sessions.' : 'We will help you get back into your workspace.'}
              </p>
            </div>
        
            {error && (
              <p className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>
            )}
        
            {renderForm()}
            <p className="mt-10 text-center text-xs text-slate-400">Psychobeings · People-first mental healthcare</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signin;