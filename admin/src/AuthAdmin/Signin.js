import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Lock, User, KeyRound, Verified, VerifiedIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      const response = await axios.post(`${process.env.REACT_APP_URL}/admin/signin`, {
        email,
        password
      });

      localStorage.setItem('authToken', response.data.token);
      onLoginSuccess();
      navigate('/sessions');
    } catch (err) {
      setError(err.response?.data?.message || 'Sign in failed');
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (mode === 'requestReset') {
        // Request OTP
        await axios.post(`${process.env.REACT_APP_URL}/admin/email/send`, { email });
        setMode('verifyOtp');
      } else if (mode === 'verifyOtp') {
        // Verify OTP
        const verify = await axios.post(`${process.env.REACT_APP_URL}/admin/email/verify`, { email, otp });
        setPassword('')
        setMode('resetPassword');
 
      } else if (mode === 'resetPassword') {
        // Reset Password
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }

        const reset = await axios.post(`${process.env.REACT_APP_URL}/admin/reset-password`, { 
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
            
            <div className="flex justify-between items-center">
              <button 
                type="button"
                onClick={() => setMode('signup')}
                className="text-blue-500 hover:underline"
              >
                Create Account
              </button>
              <button 
                type="button"
                onClick={() => setMode('requestReset')}
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
              onClick={() => setMode('signin')}
              className="text-blue-500 hover:underline"
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
        
        {renderForm()}
      </div>
    </div>
  );
  // comment added
};

export default Signin;