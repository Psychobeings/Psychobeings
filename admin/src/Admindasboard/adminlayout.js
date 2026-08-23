import React, { useState } from 'react';
import {
  Home,
  Calendar,
  Layers,
  Users,
  UserCheck,
  BookOpen,
  CreditCard,
  Settings,
  X,
} from 'lucide-react';

import DashboardView from './DashboardView';
import ClientsView from './ClientsView';
import ClinicalView from './ClinicalView';
import PaymentsView from './PaymentsView';

const AdminLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'sessions', label: 'Sessions', icon: Layers },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'followups', label: 'Follow Ups', icon: UserCheck },
    { id: 'tasks', label: 'Tasks & Worksheets', icon: BookOpen },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'settings', label: 'Profile', icon: Settings },
  ];

  return (
    <div className="flex h-screen w-full bg-[#f8f6f9] text-slate-900 font-sans overflow-hidden antialiased">
      {/* Icon-Based Sidebar Navigation */}
      <aside className="flex w-20 flex-col items-center justify-between border-r border-slate-200/80 bg-white py-6 shadow-sm">
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Brand Logo */}
          <div className="flex items-center gap-1 font-black text-xl tracking-tight text-[#3b1254]">
            <span className="text-2xl font-extrabold text-[#7c24a6]">psychobeings</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 w-full px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={item.label}
                  className={`group relative flex h-12 w-full items-center justify-center rounded-2xl transition-all ${
                    isActive
                      ? 'bg-[#f3e8f9] text-[#7c24a6] font-bold'
                      : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Profile Avatar in Sidebar */}
        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={() => setActiveTab('settings')}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c24a6] text-white font-bold text-xs ring-4 ring-purple-100"
          >
            AK
          </button>
        </div>
      </aside>

      {/* Dynamic View Header & Body */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200/80 bg-white px-8">
          <div className="flex items-center gap-3">
            <span className="text-lg font-black tracking-tight text-[#3b1254]">
              psychobeings
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 px-3.5 py-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c24a6] text-white font-bold text-xs">
                AK
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 leading-tight">Amanpreet Kaur</p>
                <p className="text-[10px] text-slate-500 font-medium">Therapy with Psychobeings</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {activeTab === 'home' && <DashboardView onNavigate={(tab) => setActiveTab(tab)} />}
          {activeTab === 'schedule' && <ScheduleView />}
          {activeTab === 'sessions' && <SessionsView />}
          {activeTab === 'clients' && <ClientsView tab="clients-all" />}
          {activeTab === 'followups' && <FollowUpsView />}
          {activeTab === 'tasks' && <ClinicalView tab="clinical-assessments" />}
          {activeTab === 'billing' && <PaymentsView tab="payments-transactions" />}
          {activeTab === 'settings' && <ProfileSettingsView onLogout={onLogout} />}
        </main>
      </div>
    </div>
  );
};

/* Additional Sub-Views matching Ease App */

const ScheduleView = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [booking, setBooking] = useState({ name: '', time: '', type: 'Individual therapy' });
  const [appointments, setAppointments] = useState([]);

  const addBooking = (event) => {
    event.preventDefault();
    setAppointments((current) => [...current, booking]);
    setBooking({ name: '', time: '', type: 'Individual therapy' });
    setShowBooking(false);
  };

  return (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Your Schedule (beta)</h1>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setShowBooking(true)} className="rounded-xl bg-[#7c24a6] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#681d8c]">
          + New Booking
        </button>
        <button className="rounded-xl bg-purple-100 text-[#7c24a6] px-4 py-2 text-xs font-bold">
          Open slots
        </button>
      </div>
    </div>

    {/* Calendar Matrix Mockup */}
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-7 gap-2 border-b border-slate-100 pb-4 text-center text-xs font-bold text-slate-600">
        <div>23 SUN</div>
        <div>24 MON</div>
        <div>25 TUE</div>
        <div>26 WED</div>
        <div>27 THU</div>
        <div>28 FRI</div>
        <div>29 SAT</div>
      </div>
      <div className="grid grid-cols-7 gap-2 pt-4 h-96">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="rounded-xl bg-purple-50 border border-purple-200/60 p-2 text-[10px] text-[#3b1254] font-bold text-center">
              11:00 AM - 12:00 PM<br/><span className="text-[9px] text-[#7c24a6] font-medium">ONLINE ONLY</span>
            </div>
            <div className="rounded-xl bg-purple-50 border border-purple-200/60 p-2 text-[10px] text-[#3b1254] font-bold text-center">
              9:00 PM - 10:00 PM<br/><span className="text-[9px] text-[#7c24a6] font-medium">ONLINE ONLY</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    {appointments.length > 0 && <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm"><h2 className="text-sm font-bold text-slate-900">New bookings</h2><div className="mt-4 space-y-2">{appointments.map((item, index) => <div key={`${item.name}-${index}`} className="flex items-center justify-between rounded-xl bg-purple-50 p-3 text-xs"><span className="font-bold text-slate-800">{item.name}</span><span className="text-slate-500">{item.time} · {item.type}</span></div>)}</div></div>}
    {showBooking && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 p-4"><form onSubmit={addBooking} className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-wider text-[#7c24a6]">Schedule</p><h2 className="mt-2 text-xl font-bold">New appointment</h2></div><button type="button" onClick={() => setShowBooking(false)} className="text-slate-400 hover:text-slate-900"><X size={19} /></button></div><div className="mt-6 space-y-4"><input required value={booking.name} onChange={(event) => setBooking({ ...booking, name: event.target.value })} placeholder="Client name" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#7c24a6]" /><input required value={booking.time} onChange={(event) => setBooking({ ...booking, time: event.target.value })} placeholder="Time, e.g. 5:30 PM" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#7c24a6]" /><select value={booking.type} onChange={(event) => setBooking({ ...booking, type: event.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#7c24a6]"><option>Individual therapy</option><option>Initial consultation</option><option>Follow-up session</option></select></div><button type="submit" className="mt-6 w-full rounded-xl bg-[#7c24a6] py-3 text-xs font-bold text-white hover:bg-[#681d8c]">Add to schedule</button></form></div>}
  </div>
  );
};

const SessionsView = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-slate-900">Your Sessions</h1>
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <span className="text-xs text-slate-400 font-bold">RETENTION</span>
        <p className="text-3xl font-bold text-[#7c24a6] mt-1">76%</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <span className="text-xs text-slate-400 font-bold">ACTIVE CLIENTS</span>
        <p className="text-3xl font-bold text-slate-900 mt-1">13</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <span className="text-xs text-slate-400 font-bold">SESSIONS</span>
        <p className="text-3xl font-bold text-slate-900 mt-1">48</p>
      </div>
    </div>
  </div>
);

const FollowUpsView = () => {
  const [done, setDone] = useState([]);
  const clients = ['DIKSHA BHARTI', 'LOKESH ACHARYA', 'GARIMA'];
  return (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-slate-900">Client Follow-ups</h1>
    <div className="grid gap-4 sm:grid-cols-3">
      {clients.map((name, idx) => (
        <div key={idx} className={`rounded-2xl border border-slate-200 bg-white p-5 space-y-3 ${done.includes(name) ? 'opacity-60' : ''}`}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-900">{name}</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">In Progress</span>
          </div>
          <p className="text-[11px] text-slate-400">1st Follow Up • 18 Aug 2026</p>
          <button onClick={() => setDone((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])} className="text-xs font-bold text-[#7c24a6]">{done.includes(name) ? 'Mark as pending' : 'Mark complete'}</button>
        </div>
      ))}
    </div>
  </div>
  );
};

const ProfileSettingsView = ({ onLogout }) => {
  const [saved, setSaved] = useState(false);
  return (
  <div className="max-w-4xl space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-slate-900">Settings — Profile</h1>
      <button onClick={onLogout} className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100">
        Log Out
      </button>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-6">
        <div className="h-20 w-20 rounded-2xl bg-[#7c24a6] text-white flex items-center justify-center text-xl font-bold">
          AK
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">Amanpreet Kaur</h2>
          <p className="text-xs text-slate-500">A Counselling Psychologist (M.Sc. Clinical Psychology) with 2+ years experience.</p>
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">My Name</label>
          <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs" defaultValue="Amanpreet Kaur" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">Email</label>
          <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs" defaultValue="info.psychobeings@gmail.com" />
        </div>
      </div>
      <button onClick={() => setSaved(true)} className="rounded-xl bg-[#7c24a6] px-4 py-3 text-xs font-bold text-white hover:bg-[#681d8c]">{saved ? 'Profile saved' : 'Save profile changes'}</button>
    </div>
  </div>
  );
};

export default AdminLayout;