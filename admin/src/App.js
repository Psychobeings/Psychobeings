import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './Admindasboard/Signin';
import Dashboard from './Components/DashboardHome';

// Protected Route Guard
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/signin"} replace />} 
        />

        <Route 
          path="/signin" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Signin onLoginSuccess={handleLoginSuccess} />
            )
          } 
        />

        <Route 
          path="/dashboard/*" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="*" 
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/signin"} replace />} 
        />
      </Routes>
    </BrowserRouter>
  );
}