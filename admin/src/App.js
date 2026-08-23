import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './AuthAdmin/Signin';
import AssessmentPortal from './Components/AssessmentPortal';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check local storage for token on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true); // Set user as authenticated
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear authentication token and update state
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Default route - Signin page */}
          <Route 
            path="/signin" 
            element={
              !isAuthenticated ? (
                <Signin onLoginSuccess={handleLoginSuccess} />
              ) : (
                <Navigate to="/portal" replace />
              )
            } 
          />

          {/* Protected Routes */}
          <Route 
            path="/portal"
            element={
              isAuthenticated ? (
                <AssessmentPortal onLogout={handleLogout} />
              ) : (
                <Navigate to="/signin" replace />
              )
            } 
          />

          <Route path="/sessions" element={<Navigate to="/portal" replace />} />

          {/* Redirect to signin by default */}
          <Route 
            path="/" 
            element={<Navigate to="/signin" replace />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
