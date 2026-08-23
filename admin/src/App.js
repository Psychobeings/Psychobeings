import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './AuthAdmin/Signin';
import AdminLayout from './Admindasboard/adminlayout';

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
          {/* Default Route - Signin page */}
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

          {/* Protected Admin Route */}
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <AdminLayout onLogout={handleLogout} />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />

          {/* Fallback & legacy route redirects */}
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