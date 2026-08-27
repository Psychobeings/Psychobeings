import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './Admindasboard/Signin';
import Layout from './Components/Layout';
import DashboardHome from './Components/DashboardHome';

// Protected Route Guard
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

// Public Route Guard (prevents logged-in users from seeing sign-in)
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
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Sign In Route */}
        <Route 
          path="/signin" 
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          } 
        />

        {/* Nested Protected Routes with Sidebar Layout */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="clients" element={<div>Client Roster Page</div>} />
          <Route path="calendar" element={<div>Calendar Page</div>} />
          <Route path="case-history" element={<div>Case History Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>

        {/* Catch-all Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}