import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './AuthAdmin/Signin';
import Header from './Components/Header';
import Sessions from './Components/Sessions';
import PrivateScreening from './Components/PrivateScreening';

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
                <Signin onLoginSuccess={handleLoginSuccess} redirectPath="/sessions" />
              ) : (
                <Navigate to="/sessions" replace />
              )
            } 
          />

          <Route 
            path="/screening-login" 
            element={
              !isAuthenticated ? (
                <Signin onLoginSuccess={handleLoginSuccess} redirectPath="/screening" />
              ) : (
                <Navigate to="/screening" replace />
              )
            } 
          />

          {/* Protected Routes */}
          <Route 
            path="/sessions" 
            element={
              isAuthenticated ? (
                <>
                  <Header onLogout={handleLogout} />
                  <Sessions />
                </>
              ) : (
                <Navigate to="/signin" replace />
              )
            } 
          />

          <Route 
            path="/screening" 
            element={
              isAuthenticated ? (
                <>
                  <Header onLogout={handleLogout} />
                  <PrivateScreening />
                </>
              ) : (
                <Navigate to="/screening-login" replace />
              )
            } 
          />

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
