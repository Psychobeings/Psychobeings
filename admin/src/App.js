import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

// Auth Components
import Signin from './Admindasboard/Signin';

// Dashboard Components
import AdminLayout from './Admindasboard/AdminLayout';
import OverviewAdmin from './Admindasboard/OverviewAdmin'; // <-- Added missing import
import ClientManagement from './Admindasboard/ClientManagement';
import ScheduleManager from './Admindasboard/ScheduleManager';
import SessionLogs from './Admindasboard/SessionLogs';
import RetentionEngine from './Admindasboard/FollowUps';
import ResourceLibrary from './Admindasboard/ResourceLibrary';
import BillingAdmin from './Admindasboard/BillingAdmin';
import SettingsAdmin from './Admindasboard/SettingsAdmin';

// Sub-router container for protected dashboard routes
function DashboardContainer({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract current tab name from URL path (e.g., /admin/clients -> "clients")
  const currentTab = location.pathname.split('/')[2] || 'overview';

  const handleTabChange = (tabId) => {
    navigate(`/admin/${tabId}`);
  };

  return (
    <AdminLayout activeTab={currentTab} setActiveTab={handleTabChange} onLogout={onLogout}>
      <Routes>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<OverviewAdmin onNavigate={handleTabChange} />} />
        <Route path="clients" element={<ClientManagement />} />
        <Route path="schedule" element={<ScheduleManager />} />
        <Route path="logs" element={<SessionLogs />} />
        <Route path="retention" element={<RetentionEngine />} />
        <Route path="resources" element={<ResourceLibrary />} />
        <Route path="billing" element={<BillingAdmin />} />
        <Route path="settings" element={<SettingsAdmin />} />
        <Route path="*" element={<Navigate to="overview" replace />} />
      </Routes>
    </AdminLayout>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check local storage for token on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('authToken', 'sample_auth_token');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F2D32] flex items-center justify-center text-white text-xs font-semibold">
        Loading Psychobeings Portal...
      </div>
    );
  }

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
                <Navigate to="/admin/overview" replace />
              )
            }
          />

          {/* Protected Admin Dashboard Routes */}
          <Route
            path="/admin/*"
            element={
              isAuthenticated ? (
                <DashboardContainer onLogout={handleLogout} />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />

          {/* Legacy & Fallback Redirects */}
          <Route path="/portal" element={<Navigate to="/admin/overview" replace />} />
          <Route path="/sessions" element={<Navigate to="/admin/schedule" replace />} />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/admin/overview" : "/signin"} replace />} />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/admin/overview" : "/signin"} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}