import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Lock, KeyRound, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Signin = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const navigate = useNavigate();

  const resetMessages = () => {
    setError('');
    setSuccessMsg('');
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setOtp('');
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    resetMessages();

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/admin/signin`, {
        email,
        password
      });

      localStorage.setItem('authToken', response.data.token);
      onLoginSuccess();
      navigate('/sessions');
    } catch (err) {
      setError(err.response?.data?.message || 'Sign in failed. Please check your credentials.');
      console.error("Sign-in error:", err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    resetMessages();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_URL}/admin/signup`, {
        email,
        password
      });

      setSuccessMsg('Account created successfully! Please sign in.');
      clearForm();
      setMode('signin');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create account. Try again.');
      console.error("Sign-up error:", err);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    resetMessages();

    try {
      if (mode === 'requestReset') {
        await axios.post(`${process.env.REACT_APP_URL}/admin/email/send`, { email });
        setSuccessMsg('OTP sent to your email.');
        setMode('verifyOtp');
      } else if (mode === 'verifyOtp') {
        await axios.post(`${process.env.REACT_APP_URL}/admin/email/verify`, { email, otp });
        setSuccessMsg('OTP verified successfully.');
        setMode('resetPassword');
      } else if (mode === 'resetPassword') {
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }

        const reset = await axios.post(`${process.env.REACT_APP_URL}/admin/reset-password`, { 
          email, 
          password 
        });

        if (reset.status === 200) {
          clearForm();
          setSuccessMsg('Password reset successful! Please sign in with your new password.');
          setMode('signin');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed. Please try again.');
      console.error("Reset error:", err);
    }
  };

  const renderForm = () => {
    switch(mode) {
      case 'signin':
        return (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <button 
                type="button"
                onClick={() => { resetMessages(); clearForm(); setMode('signup'); }}
                className="text-blue-500 hover:underline"
              >
                Create Account
              </button>
              <button 
                type="button"
                onClick={() => { resetMessages(); clearForm(); setMode('requestReset'); }}
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign In
            </button>
          </form>
        );

      case 'signup':
        return (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <UserPlus size={18} />
              Register Account
            </button>

            <button 
              type="button"
              onClick={() => { resetMessages(); clearForm(); setMode('signin'); }}
              className="w-full text-center text-sm text-blue-500 hover:underline block"
            >
              Already have an account? Sign In
            </button>
          </form>
        );
      
      case 'requestReset':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Request Reset
            </button>
            
            <button 
              type="button"
              onClick={() => { resetMessages(); clearForm(); setMode('signin'); }}
              className="w-full text-center text-sm text-blue-500 hover:underline block"
            >
              Back to Sign In
            </button>
          </form>
        );
      
      case 'verifyOtp':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors"
            >
              Verify OTP
            </button>

            <button 
              type="button"
              onClick={() => { resetMessages(); clearForm(); setMode('signin'); }}
              className="w-full text-center text-sm text-blue-500 hover:underline block"
            >
              Cancel
            </button>
          </form>
        );
      
      case 'resetPassword':
        return (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm New Password"
                required
                className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Reset Password
            </button>

            <button 
              type="button"
              onClick={() => { resetMessages(); clearForm(); setMode('signin'); }}
              className="w-full text-center text-sm text-blue-500 hover:underline block"
            >
              Cancel
            </button>
          </form>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === 'signin' ? 'Sign In' : 
           mode === 'signup' ? 'Create Account' : 
           mode === 'requestReset' ? 'Reset Password' :
           mode === 'verifyOtp' ? 'Verify OTP' : 
           'Set New Password'}
        </h2>
        
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {successMsg && (
          <p className="text-green-600 text-sm text-center mb-4">{successMsg}</p>
        )}
        
        {renderForm()}
      </div>
    </div>
  );
};

export default Signin;