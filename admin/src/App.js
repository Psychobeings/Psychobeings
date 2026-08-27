import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './Admindasboard/Signin';
import DashboardHome from './Components/DashboardHome';

// Protected Route Guard
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

// Public Route Guard (prevents logged-in users from viewing Signin)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Redirect */}
        <Route 
          path="/" 
          element={<Navigate to="/dashboard" replace />} 
        />

        {/* Sign In Route */}
        <Route 
          path="/signin" 
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          } 
        />

        {/* Protected Dashboard Route */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardHome />
            </ProtectedRoute>
          } 
        />

        {/* Catch-all Fallback */}
        <Route 
          path="*" 
          element={<Navigate to="/dashboard" replace />} 
        />
      </Routes>
    </BrowserRouter>
  );
}