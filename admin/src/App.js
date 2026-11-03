import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import AdminLogin from './Admindasboard/AdminLogin';
import AdminPortal from './Components/AdminPortal';
import Layout from './Components/Layout';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api'
  : (process.env.REACT_APP_URL || 'http://localhost:8080').replace(/\/+$/u, '');
const adminApi = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

function RequireAdmin() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [requestError, setRequestError] = useState('');
  const location = useLocation();

  useEffect(() => {
    let active = true;
    setChecking(true);

    adminApi.get('/admin/session')
      .then(({ data }) => {
        if (active && data.user?.role === 'admin') {
          setUser(data.user);
          setRequestError('');
        } else if (active) {
          setRequestError('The server did not confirm administrator access.');
        }
      })
      .catch((error) => {
        if (!active) return;
        if (error.response?.status === 401 || error.response?.status === 403) {
          setUser(null);
          setRequestError('');
        } else {
          setRequestError(error.response?.data?.message || 'Unable to verify your admin session.');
        }
      })
      .finally(() => {
        if (active) setChecking(false);
      });

    return () => { active = false; };
  }, [location.pathname]);

  if (checking) {
    return <main className="flex min-h-screen items-center justify-center bg-[#f3f6f8] text-sm text-slate-500">Verifying administrator session...</main>;
  }
  if (!user && !requestError) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }
  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f3f6f8] px-4">
        <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
          <h1 className="text-lg font-semibold text-[#102b40]">Could not verify access</h1>
          <p role="alert" className="mt-2 text-sm leading-6 text-slate-500">{requestError}</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-5 rounded-xl bg-[#0F2D3A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#16445a]">Try again</button>
        </div>
      </main>
    );
  }

  return (
    <Layout user={user}>
      <Outlet />
    </Layout>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<AdminLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/reset-password" element={<AdminLogin />} />
      <Route element={<RequireAdmin />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<AdminPortal />} />
        <Route path="/admin/dashboard" element={<AdminPortal />} />
        <Route path="/crisis-safety" element={<AdminPortal />} />
        <Route path="/users" element={<AdminPortal />} />
        <Route path="/clients" element={<AdminPortal />} />
        <Route path="/counselors" element={<AdminPortal />} />
        <Route path="/bookings" element={<AdminPortal />} />
        <Route path="/calendar" element={<AdminPortal />} />
        <Route path="/content" element={<AdminPortal />} />
        <Route path="/ai-settings" element={<AdminPortal />} />
        <Route path="/settings" element={<AdminPortal />} />
        <Route path="/support" element={<AdminPortal />} />
        <Route path="/messages" element={<AdminPortal />} />
        <Route path="/audit-log" element={<AdminPortal />} />
        <Route path="/case-history" element={<Navigate to="/users" replace />} />
        <Route path="/tasks-worksheets" element={<Navigate to="/content" replace />} />
        <Route path="/post-session-activities" element={<Navigate to="/content" replace />} />
      </Route>
      <Route path="/admin/*" element={<Navigate to="/admin/login" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
