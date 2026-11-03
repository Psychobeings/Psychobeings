import React, { useState } from 'react';
import axios from 'axios';
import {
  AlertTriangle, BookOpen, Bot, CalendarDays, FileText, Headphones,
  HeartPulse, LogOut, Menu, ShieldCheck, Users, X
} from 'lucide-react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from '../Assets/Psychobeings.png';

const API_BASE_URL = (process.env.REACT_APP_URL || 'http://localhost:8080').replace(/\/+$/u, '');
const adminApi = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

const navItems = [
  { label: 'Overview', path: '/dashboard', icon: HeartPulse },
  { label: 'Crisis Safety Center', path: '/crisis-safety', icon: AlertTriangle },
  { label: 'Users', path: '/users', icon: Users },
  { label: 'Counselors', path: '/counselors', icon: ShieldCheck },
  { label: 'Bookings', path: '/bookings', icon: CalendarDays },
  { label: 'Content manager', path: '/content', icon: BookOpen },
  { label: 'AI settings', path: '/ai-settings', icon: Bot },
  { label: 'Support', path: '/support', icon: Headphones },
  { label: 'Audit log', path: '/audit-log', icon: FileText }
];

export default function Layout({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [logoutError, setLogoutError] = useState('');
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLogoutError('');
    setLoggingOut(true);
    try {
      await adminApi.post('/admin/logout');
      navigate('/admin/login', { replace: true });
    } catch (error) {
      setLogoutError(error.response?.data?.message || 'Unable to sign out. Please try again.');
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f6f8] font-sans text-slate-800">
      {sidebarOpen && (
        <button type="button" aria-label="Close navigation" onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-[#071b2b]/50 backdrop-blur-sm lg:hidden" />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[278px] flex-col border-r border-white/10 bg-[#0F2D3A] text-white transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-[78px] items-center justify-between border-b border-white/10 px-6">
          <div className="rounded-lg bg-white px-3 py-1.5">
            <img src={logo} alt="Psychobeings" className="h-9 w-36 object-contain" />
          </div>
          <button type="button" onClick={() => setSidebarOpen(false)} aria-label="Close menu" className="rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white lg:hidden">
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-3 pt-7">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">Administration</p>
        </div>
        <nav aria-label="Admin dashboard" className="flex-1 space-y-1 overflow-y-auto px-3 pb-5">
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => `group flex items-center gap-3 rounded-xl px-3.5 py-3 text-xs font-medium transition ${
                isActive ? 'bg-[#007F80] text-white shadow-lg shadow-black/10' : 'text-white/65 hover:bg-white/[0.07] hover:text-white'
              }`}
            >
              {({ isActive }) => (
                <>
                  <Icon size={16} className={isActive ? 'text-white' : 'text-white/45 group-hover:text-[#83d2ca]'} aria-hidden="true" />
                  <span>{label}</span>
                  {label === 'Crisis Safety Center' && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-amber-400" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/[0.06] px-3 py-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#007F80] text-xs font-bold">{user?.email?.slice(0, 1).toUpperCase() || 'A'}</span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">{user?.email || 'Administrator'}</p>
              <p className="mt-0.5 text-[9px] uppercase tracking-wider text-white/45">Admin account</p>
            </div>
          </div>
          {logoutError && <p role="alert" className="mb-2 text-[10px] leading-4 text-rose-300">{logoutError}</p>}
          <button type="button" disabled={loggingOut} onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-medium text-white/60 transition hover:bg-rose-500/10 hover:text-rose-200 disabled:opacity-50">
            <LogOut size={15} aria-hidden="true" />{loggingOut ? 'Signing out...' : 'Sign out'}
          </button>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-[278px]">
        <header className="sticky top-0 z-30 flex h-[70px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-7 lg:px-9">
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Open navigation menu" onClick={() => setSidebarOpen(true)} className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"><Menu size={18} /></button>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Psychobeings</p>
              <p className="mt-0.5 text-xs font-semibold text-[#102b40]">Secure admin workspace</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-[10px] font-semibold text-emerald-800">
            <ShieldCheck size={14} aria-hidden="true" /> <span className="hidden sm:inline">Protected session</span><span className="sm:hidden">Secure</span>
          </div>
        </header>

        <main className="mx-auto max-w-[1500px] px-4 py-7 sm:px-7 sm:py-9 lg:px-9">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
