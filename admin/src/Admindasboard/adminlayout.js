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
  LogOut,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
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
    <div className="flex h-screen w-full bg-[#f4f8f8] text-slate-900 font-sans overflow-hidden antialiased">
      {/* Icon-Based Sidebar Navigation */}
      <aside className="flex w-20 flex-col items-center justify-between border-r border-teal-100 bg-white py-6 shadow-sm">
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Brand Logo Header */}
          <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1b7b86] text-white font-black text-xl shadow-md shadow-teal-900/10">
              P
            </div>
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
                  className={`group relative flex h-12 w-full items-center justify-center rounded-2xl transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1b7b86] text-white shadow-md shadow-teal-900/15 font-bold'
                      : 'text-slate-400 hover:bg-teal-50/60 hover:text-[#1b7b86]'
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
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-bold text-xs ring-4 ring-teal-50 transition-all hover:scale-105"
          >
            AK
          </button>
        </div>
      </aside>

      {/* Dynamic View Header & Body */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-16 items-center justify-between border-b border-teal-100/70 bg-white/80 backdrop-blur-md px-8 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black tracking-tight text-black">
              PSYCHO<span className="text-[#1b7b86]">BEINGS</span>
            </span>
            <span className="hidden sm:inline-block rounded-full bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 text-[10px] font-bold text-[#1b7b86] tracking-wide">
              ADMIN
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 shadow-2xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1b7b86] text-white font-bold text-xs">
                AK
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-black leading-tight">Amanpreet Kaur</p>
                <p className="text-[10px] text-[#1b7b86] font-medium">Therapy with Psychobeings</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#f8fafb]">
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

/* Sub-Views with Brand Palette */

const ScheduleView = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(today.toISOString().slice(0, 10));
  const [showBooking, setShowBooking] = useState(false);
  const [booking, setBooking] = useState({ name: '', time: '', type: 'Individual therapy' });
  const [appointments, setAppointments] = useState(() => JSON.parse(localStorage.getItem('psychobeings-appointments') || '[]'));

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const monthLabel = currentMonth.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  const calendarDays = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];
  const selectedAppointments = appointments.filter((appointment) => appointment.date === selectedDate);

  const changeMonth = (offset) => setCurrentMonth(new Date(year, month + offset, 1));
  const selectDay = (day) => setSelectedDate(new Date(year, month, day).toISOString().slice(0, 10));
  const addBooking = (event) => {
    event.preventDefault();
    const nextAppointments = [...appointments, { ...booking, date: selectedDate, id: Date.now() }];
    setAppointments(nextAppointments);
    localStorage.setItem('psychobeings-appointments', JSON.stringify(nextAppointments));
    setBooking({ name: '', time: '', type: 'Individual therapy' });
    setShowBooking(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1b7b86]">Practice schedule</p><h1 className="mt-2 text-2xl font-bold tracking-tight text-black">Your calendar</h1><p className="mt-1 text-xs font-medium text-slate-500">Select a day to view or book an appointment.</p></div>
        <button onClick={() => setShowBooking(true)} className="flex items-center justify-center gap-2 rounded-xl bg-[#1b7b86] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#15626b]"><CalendarDays size={15} /> New appointment</button>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_300px]">
        <section className="rounded-3xl border border-teal-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5"><button onClick={() => changeMonth(-1)} title="Previous month" className="rounded-lg p-2 text-slate-400 hover:bg-teal-50 hover:text-[#1b7b86]"><ChevronLeft size={19} /></button><h2 className="text-base font-bold text-black">{monthLabel}</h2><button onClick={() => changeMonth(1)} title="Next month" className="rounded-lg p-2 text-slate-400 hover:bg-teal-50 hover:text-[#1b7b86]"><ChevronRight size={19} /></button></div>
          <div className="mt-5 grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:gap-2">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <span key={day} className="py-2">{day}</span>)}{calendarDays.map((day, index) => { const date = day ? new Date(year, month, day).toISOString().slice(0, 10) : ''; const hasAppointments = appointments.some((appointment) => appointment.date === date); const isToday = date === today.toISOString().slice(0, 10); return <button key={`${date}-${index}`} disabled={!day} onClick={() => selectDay(day)} className={`relative flex min-h-16 flex-col items-center justify-center rounded-xl text-xs font-bold transition sm:min-h-20 ${!day ? 'cursor-default' : selectedDate === date ? 'bg-[#1b7b86] text-white shadow-md' : 'text-slate-700 hover:bg-teal-50 hover:text-[#1b7b86]'}`}>{day && <><span className={isToday && selectedDate !== date ? 'flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-[#1b7b86]' : ''}>{day}</span>{hasAppointments && <span className={`mt-1 h-1.5 w-1.5 rounded-full ${selectedDate === date ? 'bg-white' : 'bg-[#1b7b86]'}`} />}</>}</button>; })}</div>
        </section>
        <section className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1b7b86]">Selected day</p><h2 className="mt-2 text-xl font-bold text-black">{new Date(`${selectedDate}T12:00:00`).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' })}</h2><button onClick={() => setShowBooking(true)} className="mt-5 w-full rounded-xl border border-teal-200 bg-teal-50 py-3 text-xs font-bold text-[#1b7b86] transition hover:bg-teal-100"><CalendarDays size={14} className="mr-2 inline" />Book this day</button><div className="mt-7 border-t border-slate-100 pt-5"><p className="text-xs font-bold text-slate-600">Appointments <span className="text-slate-400">({selectedAppointments.length})</span></p>{selectedAppointments.length === 0 ? <p className="mt-4 text-xs leading-5 text-slate-400">No appointments yet. This is an open day.</p> : <div className="mt-3 space-y-2">{selectedAppointments.map((appointment) => <div key={appointment.id} className="rounded-xl border border-teal-100 bg-teal-50/50 p-3"><p className="text-xs font-bold text-black">{appointment.time}</p><p className="mt-1 text-xs text-slate-500">{appointment.name}</p><p className="mt-1 text-[10px] text-[#1b7b86]">{appointment.type}</p></div>)}</div>}</div></section>
      </div>
      {showBooking && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"><form onSubmit={addBooking} className="w-full max-w-md rounded-3xl border border-teal-100 bg-white p-6 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-wider text-[#1b7b86]">New booking</p><h2 className="mt-1 text-xl font-bold text-black">{new Date(`${selectedDate}T12:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</h2></div><button type="button" onClick={() => setShowBooking(false)} className="text-slate-400 hover:text-black"><X size={19} /></button></div><div className="mt-6 space-y-4"><input required value={booking.name} onChange={(event) => setBooking({ ...booking, name: event.target.value })} placeholder="Client name" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#1b7b86]" /><input required value={booking.time} onChange={(event) => setBooking({ ...booking, time: event.target.value })} placeholder="Time, e.g. 5:30 PM" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#1b7b86]" /><select value={booking.type} onChange={(event) => setBooking({ ...booking, type: event.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#1b7b86]"><option>Individual therapy</option><option>Initial consultation</option><option>Follow-up session</option></select></div><button type="submit" className="mt-6 w-full rounded-xl bg-[#1b7b86] py-3 text-xs font-bold text-white transition hover:bg-[#15626b]">Save appointment</button></form></div>}
    </div>
  );
};

const SessionsView = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-black tracking-tight">Your Sessions</h1>
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-xs">
        <span className="text-xs text-slate-400 font-bold tracking-wider">RETENTION</span>
        <p className="text-3xl font-black text-[#1b7b86] mt-1">76%</p>
      </div>
      <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-xs">
        <span className="text-xs text-slate-400 font-bold tracking-wider">ACTIVE CLIENTS</span>
        <p className="text-3xl font-black text-black mt-1">13</p>
      </div>
      <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-xs">
        <span className="text-xs text-slate-400 font-bold tracking-wider">SESSIONS</span>
        <p className="text-3xl font-black text-black mt-1">48</p>
      </div>
    </div>
  </div>
);

const FollowUpsView = () => {
  const [done, setDone] = useState([]);
  const clients = ['DIKSHA BHARTI', 'LOKESH ACHARYA', 'GARIMA'];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-black tracking-tight">Client Follow-ups</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {clients.map((name, idx) => (
          <div key={idx} className={`rounded-2xl border border-teal-100 bg-white p-5 space-y-3 transition-opacity ${done.includes(name) ? 'opacity-50' : ''}`}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-black">{name}</span>
              <span className="rounded-full bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 text-[10px] font-bold text-[#1b7b86]">
                In Progress
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">1st Follow Up • 18 Aug 2026</p>
            <button onClick={() => setDone((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])} className="text-xs font-bold text-[#1b7b86] hover:underline">
              {done.includes(name) ? 'Mark as pending' : 'Mark complete'}
            </button>
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
        <h1 className="text-2xl font-bold text-black tracking-tight">Settings — Profile</h1>
        <button onClick={onLogout} className="flex items-center gap-1.5 rounded-xl bg-rose-50 border border-rose-200/80 px-4 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 transition-all">
          <LogOut size={14} />
          Log Out
        </button>
      </div>

      <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 rounded-2xl bg-[#1b7b86] text-white flex items-center justify-center text-xl font-bold shadow-md shadow-teal-900/10">
            AK
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">Amanpreet Kaur</h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">A Counselling Psychologist (M.Sc. Clinical Psychology) with 2+ years experience.</p>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">My Name</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs focus:outline-none focus:border-[#1b7b86]" defaultValue="Amanpreet Kaur" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">Email</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs focus:outline-none focus:border-[#1b7b86]" defaultValue="info.psychobeings@gmail.com" />
          </div>
        </div>
        <button onClick={() => setSaved(true)} className="rounded-xl bg-[#1b7b86] px-5 py-3 text-xs font-bold text-white hover:bg-[#15626b] transition-all">
          {saved ? 'Profile saved' : 'Save profile changes'}
        </button>
      </div>
    </div>
  );
};

export default AdminLayout;