import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './Admindasboard/Signin';
import Layout from './Components/Layout';
import DashboardHome from './Components/DashboardHome';
import SessionCalendar from './Components/SessionCalendar';
import CaseHistory from './Components/CaseHistory';

// Placeholder view components
const Dashboard= () => <h1 className="text-2xl font-bold">Dashboard</h1>;
const Clients = () => <h1 className="text-2xl font-bold">Client Roster</h1>;
const CalendarView = () => <h1 className="text-2xl font-bold">Session Calendar</h1>;
const CaseHistory = () => <h1 className="text-2xl font-bold">Case History</h1>;
const SettingsView = () => <h1 className="text-2xl font-bold">Settings</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Route */}
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />

        {/* Protected Dashboard Shell */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardHome/>} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/calendar" element={<SessionCalendar/>} />
          <Route path="/case-history" element={<CaseHistory/>} />
          <Route path="/settings" element={<SettingsView />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}