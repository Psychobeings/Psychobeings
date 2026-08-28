import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Settings, 
  Bell, 
  Plus,
  ChevronRight,
  FileText,
  Clock,
  X,
  Search,
  Video,
  Phone,
  CalendarDays,
  Ban,
  UserX,
  ChevronDown,
  Sun,
  Sunset,
  Moon,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export default function PsychobeingsDashboard() {
  const navigate = useNavigate();

  // Dynamic Real-time Date & Time calculations (Friday, 28 August 2026, 05:52 PM - Evening)
  const currentDate = new Date();
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const formattedDateString = `${dayName}, ${currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}`;
  const currentHour = currentDate.getHours();
  
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 17 ? 'Good afternoon' : 'Good evening';
  const GreetingIcon = currentHour < 12 ? Sun : currentHour < 17 ? Sunset : Moon;

  // Modal & Interactive states
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [clientSearchQuery, setClientSearchQuery] = useState('');
  const [expandedSessionId, setExpandedSessionId] = useState('client-juhi');

  // Shared Client Roster Database
  const clientRosterDatabase = [
    { 
      id: 'client-juhi', 
      name: 'Juhi Dharewa', 
      email: 'juhidharewa1@gmail.com', 
      phone: '09654341092', 
      mode: 'Online',
      time: '09:00 pm',
      caseHistory: 'Completed',
      intake: 'Completed',
      consent: 'Completed'
    },
    { 
      id: 'client-diksha', 
      name: 'Diksha Bharti', 
      email: 'diksha@example.com', 
      phone: '+91 98765 43214', 
      mode: 'In-Person',
      time: '03:30 pm',
      caseHistory: 'Pending',
      intake: 'Completed',
      consent: 'Pending'
    },
    { 
      id: 'client-lokesh', 
      name: 'Lokesh Acharya', 
      email: 'lokesh@example.com', 
      phone: '+91 98765 43215', 
      mode: 'Online',
      time: '06:00 pm',
      caseHistory: 'Completed',
      intake: 'Pending',
      consent: 'Completed'
    }
  ];

  const filteredClients = clientRosterDatabase.filter(c => 
    c.name.toLowerCase().includes(clientSearchQuery.toLowerCase())
  );

  const todaysSessionsList = clientRosterDatabase;

  const todaysReminders = [
    { id: 'rem-1', time: '03:30 PM', title: 'Follow-up session with Diksha Bharti', type: 'Session' },
    { id: 'rem-2', time: '06:00 PM', title: 'Initial consultation review - Lokesh Acharya', type: 'Review' },
    { id: 'rem-3', time: '09:00 PM', title: 'Online video session with Juhi Dharewa', type: 'Session' }
  ];

  return (
    <div id="psychobeings-dashboard-root" className="max-w-7xl mx-auto space-y-6 font-sans text-stone-800 pb-20 px-4 sm:px-6">
      
      {/* Enhanced Top Hero & Greeting Banner */}
      <div id="dashboard-header-banner" className="bg-gradient-to-br from-white via-stone-50/50 to-[#237A88]/5 p-6 sm:p-10 rounded-[2.5rem] border border-stone-200/80 shadow-sm relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-[#237A88]/5 blur-3xl pointer-events-none" />
        
        <div id="greeting-text-container" className="space-y-3 relative z-10">
          <div id="dashboard-date-badge" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#237A88]/10 text-xs font-extrabold text-[#237A88] tracking-wide">
            <Sparkles size={14} />
            <span>{formattedDateString}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-[#237A88] text-white flex items-center justify-center shadow-md shadow-[#237A88]/20">
              <GreetingIcon size={24} />
            </div>
            <div>
              <h1 id="user-greeting-heading" className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                {greeting}, <span className="text-[#237A88]">Amanpreet.</span>
              </h1>
              <p id="assistant-status-text" className="text-xs sm:text-sm text-stone-500 font-medium flex items-center gap-2 mt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
                Psychobeings Assistant active • <strong className="text-stone-700">{todaysSessionsList.length} sessions</strong> scheduled for today
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats Pill Group on Header */}
        <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <div className="bg-white px-5 py-3 rounded-2xl border border-stone-200/85 shadow-xs flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Users size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-stone-400">Active Roster</p>
              <p className="text-sm font-black text-stone-900">{clientRosterDatabase.length} Clients</p>
            </div>
          </div>

          <div className="bg-white px-5 py-3 rounded-2xl border border-stone-200/85 shadow-xs flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <TrendingUp size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-stone-400">Earning Potential</p>
              <p className="text-sm font-black text-stone-900">₹1,694</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Layout for Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Sessions & Quick Actions */}
        <div className="lg:col-span-2 space-y-6">

          {/* Let's Get Started / Quick Action Toolbar */}
          <div id="lets-get-started-section" className="bg-white p-6 sm:p-8 rounded-[2rem] border border-stone-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-stone-100">
              <div>
                <h2 id="lets-get-started-title" className="text-base font-bold text-stone-900">Quick Operations</h2>
                <p id="lets-get-started-subtitle" className="text-xs text-stone-500 mt-0.5">Streamline client management and direct bookings.</p>
              </div>
              <button 
                id="btn-direct-new-booking"
                onClick={() => navigate('/booking')}
                className="flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-md shadow-[#7C3AED]/20 transition shrink-0 cursor-pointer"
              >
                <Plus size={16} />
                <span>New Booking</span>
              </button>
            </div>

            <div id="quick-action-tools-grid" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                onClick={() => setIsNotesOpen(true)}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-stone-50 hover:bg-[#237A88]/5 border border-stone-200/70 hover:border-[#237A88]/30 transition text-left group cursor-pointer"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs group-hover:text-[#237A88] transition">Notes</h3>
                  <p className="text-[11px] text-stone-500 mt-0.5">Open client file</p>
                </div>
              </button>

              <button 
                onClick={() => navigate('/forms')}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-stone-50 hover:bg-[#237A88]/5 border border-stone-200/70 hover:border-[#237A88]/30 transition text-left group cursor-pointer"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs group-hover:text-[#237A88] transition">Forms</h3>
                  <p className="text-[11px] text-stone-500 mt-0.5">Intake & assessment</p>
                </div>
              </button>

              <button 
                onClick={() => navigate('/settings')}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-stone-50 hover:bg-[#237A88]/5 border border-stone-200/70 hover:border-[#237A88]/30 transition text-left group cursor-pointer"
              >
                <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">
                  <Settings size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs group-hover:text-[#237A88] transition">Settings</h3>
                  <p className="text-[11px] text-stone-500 mt-0.5">Configurations</p>
                </div>
              </button>
            </div>
          </div>

          {/* Today's Sessions Section */}
          <div id="todays-sessions-section" className="bg-white p-6 sm:p-8 rounded-[2rem] border border-stone-200/80 shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                  <CalendarDays size={16} />
                </div>
                <h2 id="todays-sessions-title" className="text-base font-bold text-stone-900">Today's Sessions</h2>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60">
                {todaysSessionsList.length} Appointments
              </span>
            </div>

            <div className="space-y-4">
              {todaysSessionsList.map((session) => {
                const isExpanded = expandedSessionId === session.id;
                return (
                  <div key={session.id} className="bg-stone-50/70 rounded-2xl p-5 border border-stone-200/85 shadow-xs space-y-4 transition-all hover:bg-stone-50">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-[#237A88] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          {session.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-bold text-stone-900 text-sm">{session.name}</h3>
                          <p className="text-[11px] text-stone-500">{session.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="flex items-center gap-1.5 text-stone-700 text-xs font-bold bg-white px-3 py-1.5 rounded-xl border border-stone-200/60">
                          <Clock size={13} className="text-[#237A88]" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60 text-xs font-bold">
                          <Video size={13} />
                          <span>{session.mode}</span>
                        </div>
                        <button 
                          onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                          className="h-8 w-8 rounded-xl bg-white hover:bg-stone-100 text-stone-600 border border-stone-200 flex items-center justify-center transition cursor-pointer"
                        >
                          <ChevronDown size={15} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Expanded Interactive Tray */}
                    {isExpanded && (
                      <div className="space-y-4 pt-4 border-t border-stone-200/60 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="flex items-center gap-2 text-stone-600 bg-white p-3 rounded-xl border border-stone-200/60">
                            <Phone size={13} className="text-[#237A88]" />
                            <span className="font-semibold text-stone-400">Phone:</span>
                            <span className="font-bold text-stone-800">{session.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-stone-600 bg-white p-3 rounded-xl border border-stone-200/60">
                            <ShieldCheck size={13} className="text-[#237A88]" />
                            <span className="font-semibold text-stone-400">Intake/Consent:</span>
                            <span className="font-bold text-emerald-700">{session.intake}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <button 
                            onClick={() => navigate(`/notes/${session.id}`)}
                            className="flex items-center justify-center gap-1.5 bg-[#237A88] hover:bg-[#1d6571] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition cursor-pointer"
                          >
                            <Video size={13} />
                            <span>Join Meeting</span>
                          </button>
                          <button 
                            onClick={() => navigate('/calendar')}
                            className="flex items-center justify-center gap-1.5 bg-white hover:bg-stone-100 text-stone-700 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-stone-200 transition cursor-pointer"
                          >
                            <Calendar size={13} />
                            <span>Reschedule</span>
                          </button>
                          <button 
                            onClick={() => alert(`Session with ${session.name} cancelled.`)}
                            className="flex items-center justify-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-rose-200/60 transition cursor-pointer"
                          >
                            <Ban size={13} />
                            <span>Cancel</span>
                          </button>
                          <button 
                            onClick={() => alert(`Marked ${session.name} as No Show.`)}
                            className="flex items-center justify-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-amber-200/60 transition cursor-pointer"
                          >
                            <UserX size={13} />
                            <span>No Show</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Reminders, Insights, and Live Feed */}
        <div className="space-y-6">

          {/* Psychobeings Insights Widget */}
          <div id="psychobeings-insights-card" className="bg-gradient-to-br from-[#237A88]/10 via-white to-stone-50 p-6 rounded-[2rem] border border-[#237A88]/30 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-xl bg-[#237A88] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  P
                </div>
                <h3 className="text-xs font-black text-stone-900 uppercase tracking-wider">PSYCHOBEINGS INSIGHTS</h3>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-0.5 rounded-full">Active</span>
            </div>
            
            <p className="text-xs sm:text-sm font-semibold text-stone-700 leading-relaxed">
              "Don't leave money on the table. You have an earning potential of ₹1,694 this month."
            </p>

            <button className="flex items-center gap-1.5 text-xs font-bold text-[#237A88] hover:underline pt-1 cursor-pointer">
              <span>Review growth metrics</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Today's Session Reminders */}
          <div id="date-wise-reminders-section" className="bg-white p-6 rounded-[2rem] border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Clock size={15} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-stone-900">Session Reminders</h2>
                  <p className="text-[11px] text-stone-400">Scheduled alerts</p>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                {todaysReminders.length} Active
              </span>
            </div>

            <div className="space-y-2.5 pt-1">
              {todaysReminders.map((rem) => (
                <div key={rem.id} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-[#237A88] bg-[#237A88]/10 px-2 py-0.5 rounded-md text-[11px]">
                      {rem.time}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-200/70 text-stone-700 px-2 py-0.5 rounded-md">
                      {rem.type}
                    </span>
                  </div>
                  <p className="font-semibold text-stone-800">{rem.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notification Centre Feed */}
          <div id="notification-centre-card" className="bg-white rounded-[2rem] p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center">
                  <Bell size={15} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-stone-900">Notification Feed</h2>
                  <p className="text-[11px] text-stone-400">Automated assistant alerts</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#237A88] bg-[#237A88]/10 px-2.5 py-0.5 rounded-full">Live</span>
            </div>

            <div className="space-y-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 text-xs space-y-1">
                <p className="font-semibold text-stone-800">I messaged Diksha Bharti about taking a follow-up session.</p>
                <p className="text-[10px] text-stone-400 font-medium">1 hour ago</p>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 text-xs space-y-1">
                <p className="font-semibold text-stone-800">I messaged Lokesh Acharya about taking a follow-up session.</p>
                <p className="text-[10px] text-stone-400 font-medium">7 hours ago</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Notes Dialogue Box Modal */}
      {isNotesOpen && (
        <div id="notes-dialogue-modal-overlay" className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div id="notes-dialogue-modal-box" className="bg-white rounded-[2.5rem] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">Select Client Roster</h3>
                  <p className="text-xs text-stone-500">Access clinical records & notes instantly.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsNotesOpen(false)}
                className="h-8 w-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-3.5 text-stone-400" />
              <input 
                type="text"
                placeholder="Search client by name..."
                value={clientSearchQuery}
                onChange={(e) => setClientSearchQuery(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl pl-10 pr-4 py-3 text-xs text-stone-800 focus:outline-none focus:border-[#237A88] transition"
              />
            </div>

            <div className="max-h-64 overflow-y-auto space-y-2.5 pr-1">
              {filteredClients.length > 0 ? (
                filteredClients.map((client) => (
                  <div 
                    key={client.id}
                    onClick={() => {
                      setIsNotesOpen(false);
                      navigate(`/notes/${client.id}`);
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 hover:bg-[#237A88]/10 border border-stone-200/60 hover:border-[#237A88]/40 transition cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#237A88] text-white font-bold text-xs flex items-center justify-center">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 text-xs group-hover:text-[#237A88] transition">{client.name}</h4>
                        <p className="text-[11px] text-stone-500">{client.email} • {client.phone}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-stone-400 group-hover:text-[#237A88] transition-transform group-hover:translate-x-1" />
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-stone-400 text-xs">
                  No clients found matching "{clientSearchQuery}".
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-stone-100 flex justify-end">
              <button 
                onClick={() => setIsNotesOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}