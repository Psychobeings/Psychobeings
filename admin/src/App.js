import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './AuthAdmin/Signin';
import Header from './Components/Header';
import Sessions from './Components/Sessions';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
                <Navigate to="/sessions" replace />
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