import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './Admindasboard/Signin';
import Dashboard from './Admindasboard/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check local storage for token on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('authToken', 'sample_auth_token');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Route - Signin */}
          <Route
            path="/signin"
            element={
              !isAuthenticated ? (
                <Signin onLoginSuccess={handleLoginSuccess} />
              ) : (
                <Navigate to="/admin" replace />
              )
            }
          />

          {/* Protected Admin Dashboard Route */}
          <Route
            path="/admin/*"
            element={
              isAuthenticated ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />

          {/* Legacy & Fallback Redirects */}
          <Route path="/portal" element={<Navigate to="/admin" replace />} />
          <Route path="/sessions" element={<Navigate to="/admin" replace />} />
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;