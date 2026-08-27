import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Auth Route Component
import Signin from './Admindasboard/Signin';

// App Layout Shell
import Layout from './Components/Layout';

// Active View Components
import DashboardHome from './Components/DashboardHome';
import SessionCalendar from './Components/SessionCalendar';
import CaseHistory from './Components/CaseHistory';

// Remaining Placeholder Components
const Clients = () => <h1 className="text-2xl font-bold text-stone-900">Client Roster</h1>;
const SettingsView = () => <h1 className="text-2xl font-bold text-stone-900">Settings</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/signin" element={<Signin />} />

        {/* Protected Dashboard Shell */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/calendar" element={<SessionCalendar />} />
          <Route path="/case-history" element={<CaseHistory />} />
          <Route path="/settings" element={<SettingsView />} />
        </Route>

        {/* Fallback Catch-all Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}