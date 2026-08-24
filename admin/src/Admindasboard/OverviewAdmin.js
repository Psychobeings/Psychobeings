import React, { useState } from 'react';
import {
  Users,
  Calendar,
  Clock,
  ClipboardList,
  AlertTriangle,
  TrendingUp,
  ChevronRight,
  Search,
  Bell
} from 'lucide-react';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy Dashboard Data
  const stats = [
    { label: 'Active Clients', value: '42', change: '+12% this month', icon: Users, color: 'text-teal-600', bg: 'bg-teal-50' },
    { label: 'Sessions Today', value: '6', change: '2 pending notes', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Hours Dials', value: '28.5 hrs', change: '+4.2 hrs vs last week', icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'High Drop-off Risk', value: '3 Clients', change: 'Requires follow-up', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' }
  ];

  const upcomingSessions = [
    { id: 1, client: 'Alex Morgan', time: '11:00 AM - 12:00 PM', type: 'CBT Session', status: 'Confirmed' },
    { id: 2, client: 'Blake Taylor', time: '02:30 PM - 03:30 PM', type: 'Mindfulness Review', status: 'Pending Intake' },
    { id: 3, client: 'Emerson Brooks', time: '04:00 PM - 05:00 PM', type: 'Narrative Therapy', status: 'Confirmed' }
  ];

  const retentionAlerts = [
    { id: 1, name: 'Dakota Vance', lastSeen: '05 Aug 2026', risk: 'High', reason: 'Missed 2 consecutive sessions' },
    { id: 2, name: 'Morgan Ellis', lastSeen: '29 Jul 2026', risk: 'Medium', reason: 'No appointment scheduled in 3+ weeks' }
  ];

  return (
    <div className="min-h-screen bg-[#F7FAF9] text-slate-800 p-8 space-y-8">
      
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Admin Command Center</h1>
          <p className="text-xs text-slate-500 mt-1">Welcome back. Here is your practice overview for today.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search dashboard..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1B7B87] transition-all shadow-sm"
            />
          </div>

          <button className="relative p-2.5 text-slate-600 hover:text-slate-900 bg-white rounded-xl border border-slate-200 shadow-sm transition-all">
            <Bell size={16} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#1B7B87] rounded-full ring-2 ring-white" />
          </button>
        </div>
      </div>

      {/* METRICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">{item.label}</span>
                <div className={`p-2 rounded-xl ${item.bg}`}>
                  <Icon size={18} className={item.color} />
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900">{item.value}</h2>
                <p className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                  <TrendingUp size={12} className="text-emerald-500" />
                  {item.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: UPCOMING SESSIONS */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">Today's Schedule</h3>
            <button className="text-xs font-semibold text-[#1B7B87] hover:underline flex items-center gap-1">
              <span>View Full Calendar</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100 overflow-hidden">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="p-4 flex items-center justify-between hover:bg-slate-50/80 transition-all">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-100 text-[#1B7B87] font-bold flex items-center justify-center text-xs">
                    {session.client.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{session.client}</h4>
                    <p className="text-xs text-slate-500">{session.type} • <span className="text-slate-700 font-medium">{session.time}</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    session.status === 'Confirmed'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {session.status}
                  </span>
                  <button className="px-3 py-1.5 bg-[#0F2D32] text-white text-xs font-semibold rounded-lg hover:bg-[#125861] transition-all">
                    Start Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: RETENTION & RISK ALERTS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">Retention Watchlist</h3>
            <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
              Action Needed
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
            {retentionAlerts.map((alert) => (
              <div key={alert.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs">{alert.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    alert.risk === 'High'
                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {alert.risk} Risk
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">{alert.reason}</p>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Last Session: {alert.lastSeen}</span>
                  <button className="text-[#1B7B87] font-semibold hover:underline flex items-center gap-0.5">
                    <ClipboardList size={12} />
                    <span>Follow Up</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}