import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './AuthAdmin/Signin';
import Dashboard from './Admindasboard/Dashboard';

// Page Views
import Overview from './Admindasboard/Overview/Overview';
import ClientList from './Admindasboard/Clients/ClientList';
import CalendarView from './Admindasboard/Appointments/CalendarView';
import SoapNotes from './Admindasboard/ClinicalNotes/SoapNotes';
import Invoices from './Admindasboard/Payments/Invoices';
import PortalSettings from './Admindasboard/Settings/PortalSettings';

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

          {/* Protected Nested Admin Routes */}
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          >
            {/* Default redirect to overview when visiting /admin */}
            <Route index element={<Navigate to="overview" replace />} />
            
            <Route path="overview" element={<Overview />} />
            <Route path="clients" element={<ClientList />} />
            <Route path="appointments" element={<CalendarView />} />
            <Route path="notes" element={<SoapNotes />} />
            <Route path="payments" element={<Invoices />} />
            <Route path="settings" element={<PortalSettings />} />
          </Route>

          {/* Fallback & legacy route redirects */}
          <Route path="/portal" element={<Navigate to="/admin/overview" replace />} />
          <Route path="/sessions" element={<Navigate to="/admin/appointments" replace />} />
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;