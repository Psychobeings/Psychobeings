import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './Admindasboard/Signin';
import Layout from './Components/Layout';
import DashboardHome from './Components/DashboardHome';
import CaseHistory from './Components/CaseHistory'; // 1. Import your new component

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (!token) return <Navigate to="/signin" replace />;
  return children;
};

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (token) return <Navigate to="/dashboard" replace />;
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route 
          path="/signin" 
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          } 
        />

        {/* Layout Wrapper with Nested Routes */}
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
          
          {/* 2. Replace the static div with <CaseHistory /> */}
          <Route path="case-history" element={<CaseHistory />} />
          
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}