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
  Mail,
  CalendarDays,
  Ban,
  Receipt,
  UserX,
  ChevronDown
} from 'lucide-react';

export default function PsychobeingsDashboard() {
  const navigate = useNavigate();

  // Real-time date & time calculations (Friday, 28 August 2026, 11:54 AM)
  const currentDate = new Date('2026-08-28T11:54:13');
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const formattedDateString = `${dayName}, ${currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}`;
  const currentHour = currentDate.getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 17 ? 'Good afternoon' : 'Good evening';

  // Modal & Interactive states
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [clientSearchQuery, setClientSearchQuery] = useState('');
  const [expandedSessionId, setExpandedSessionId] = useState('sess-1');

  // Shared Client Roster Database (linked across Notes & Sessions)
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

  // Real-time Today's Sessions linked with actual roster details
  const todaysSessionsList = clientRosterDatabase;

  // Date-wise session reminders
  const todaysReminders = [
    { id: 'rem-1', time: '03:30 PM', title: 'Follow-up session with Diksha Bharti', type: 'Session' },
    { id: 'rem-2', time: '06:00 PM', title: 'Initial consultation review - Lokesh Acharya', type: 'Review' },
    { id: 'rem-3', time: '09:00 PM', title: 'Online video session with Juhi Dharewa', type: 'Session' }
  ];

  return (
    <div id="psychobeings-dashboard-root" className="max-w-6xl mx-auto space-y-8 font-sans text-stone-800 pb-16">
      
      {/* Top Greeting & Assistant Banner */}
      <div id="dashboard-header-banner" className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div id="greeting-text-container" className="space-y-2">
          <div id="dashboard-date-badge" className="flex items-center gap-2 text-xs font-bold text-[#237A88]">
            <Sparkles size={15} />
            <span>{formattedDateString}</span>
          </div>
          <h1 id="user-greeting-heading" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {greeting}, <span className="text-[#237A88]">Amanpreet.</span>
          </h1>
          <p id="assistant-status-text" className="text-xs sm:text-sm text-stone-500 font-medium flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Psychobeings Assistant active • {todaysSessionsList.length} sessions scheduled for today
          </p>
        </div>
      </div>

      {/* Let's Get Started Section */}
      <div id="lets-get-started-section" className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-stone-100">
          <div className="space-y-1">
            <h2 id="lets-get-started-title" className="text-base font-bold text-stone-900">Let's Get Started</h2>
            <p id="lets-get-started-subtitle" className="text-xs text-stone-500">Want to take a direct booking? Skip the flow — schedule a session for any client right now.</p>
          </div>
          <button 
            id="btn-direct-new-booking"
            onClick={() => navigate('/booking')}
            className="flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-lg shadow-[#7C3AED]/20 transition shrink-0"
          >
            <Plus size={16} />
            <span>New Booking</span>
          </button>
        </div>

        <div id="quick-action-tools-grid" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button 
            id="btn-action-notes"
            onClick={() => setIsNotesOpen(true)}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-stone-50 hover:bg-[#237A88]/5 border border-stone-200/70 hover:border-[#237A88]/30 transition text-left group"
          >
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-xs group-hover:text-[#237A88] transition">Notes</h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Select client from roster</p>
            </div>
          </button>

          <button 
            id="btn-action-forms"
            onClick={() => navigate('/forms')}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-stone-50 hover:bg-[#237A88]/5 border border-stone-200/70 hover:border-[#237A88]/30 transition text-left group"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-xs group-hover:text-[#237A88] transition">Forms</h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Intake & assessment forms</p>
            </div>
          </button>

          <button 
            id="btn-action-settings"
            onClick={() => navigate('/settings')}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-stone-50 hover:bg-[#237A88]/5 border border-stone-200/70 hover:border-[#237A88]/30 transition text-left group"
          >
            <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">
              <Settings size={18} />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-xs group-hover:text-[#237A88] transition">Settings</h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Workspace configurations</p>
            </div>
          </button>
        </div>
      </div>

      {/* Date-Wise Reminders For Today's Sessions */}
      <div id="date-wise-reminders-section" className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock size={16} />
            </div>
            <div>
              <h2 id="reminders-section-title" className="text-base font-bold text-stone-900">Today's Session Reminders</h2>
              <p id="reminders-section-subtitle" className="text-xs text-stone-500">Scheduled reminders and alerts for {formattedDateString}</p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            {todaysReminders.length} Active Reminders
          </span>
        </div>

        <div className="space-y-2.5 pt-1">
          {todaysReminders.map((rem) => (
            <div key={rem.id} id={`reminder-item-${rem.id}`} className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200/60 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-[#237A88] bg-[#237A88]/10 px-2.5 py-1 rounded-lg">
                  {rem.time}
                </span>
                <span className="font-semibold text-stone-800">{rem.title}</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-200/70 text-stone-700 px-2.5 py-1 rounded-md">
                {rem.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Sessions (Automatic Real-Time matching provided reference design) */}
      <div id="todays-sessions-section" className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-6">
        <div className="flex justify-between items-center pb-2 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-[#237A88]" />
            <h2 id="todays-sessions-title" className="text-base font-bold text-stone-900">Today's Sessions</h2>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {todaysSessionsList.length} Real-Time Appointments
          </span>
        </div>

        <div className="space-y-4">
          {todaysSessionsList.map((session) => {
            const isExpanded = expandedSessionId === session.id;
            return (
              <div key={session.id} className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm space-y-6 transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-[#237A88]/10 text-[#237A88] font-bold text-sm flex items-center justify-center">
                      {session.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">{session.name}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center gap-1.5 text-stone-700 text-xs font-bold">
                      <Clock size={14} className="text-stone-400" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">
                      <Video size={13} />
                      <span>{session.mode}</span>
                    </div>
                    <button 
                      onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                      className="h-8 w-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition"
                    >
                      <ChevronDown size={16} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Expanded Details matching reference */}
                {isExpanded && (
                  <div className="space-y-6 pt-4 border-t border-stone-100 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center gap-2 text-stone-600 bg-stone-50 p-3 rounded-2xl border border-stone-100">
                        <Phone size={14} className="text-[#237A88]" />
                        <span className="font-semibold text-stone-500">Phone:</span>
                        <span className="font-bold text-stone-800">{session.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600 bg-stone-50 p-3 rounded-2xl border border-stone-100">
                        <Mail size={14} className="text-[#237A88]" />
                        <span className="font-semibold text-stone-500">Email:</span>
                        <span className="font-bold text-stone-800 truncate">{session.email}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 text-blue-700 border border-blue-200 text-xs font-semibold">
                        <FileText size={13} />
                        <span>Case History</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                        <span>✓ Intake</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                        <span>✓ Consent</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-3">
                      <button 
                        onClick={() => navigate(`/notes/${session.id}`)}
                        className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-4 py-2.5 rounded-2xl text-xs font-bold border border-emerald-200 transition"
                      >
                        <Video size={14} />
                        <span>Join Meeting</span>
                      </button>
                      <button 
                        onClick={() => navigate('/calendar')}
                        className="flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2.5 rounded-2xl text-xs font-bold transition"
                      >
                        <Calendar size={14} />
                        <span>Reschedule</span>
                      </button>
                      <button 
                        onClick={() => alert(`Session with ${session.name} cancelled.`)}
                        className="flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-700 px-4 py-2.5 rounded-2xl text-xs font-bold border border-rose-200 transition"
                      >
                        <Ban size={14} />
                        <span>Cancel</span>
                      </button>
                      <button 
                        onClick={() => navigate('/billing')}
                        className="flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2.5 rounded-2xl text-xs font-bold transition"
                      >
                        <Receipt size={14} />
                        <span>Billing</span>
                      </button>
                      <button 
                        onClick={() => alert(`Marked ${session.name} as No Show.`)}
                        className="flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-800 px-4 py-2.5 rounded-2xl text-xs font-bold border border-amber-200 transition"
                      >
                        <UserX size={14} />
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

      {/* Psychobeings Insights & Automation Banner */}
      <div id="psychobeings-insights-card" className="bg-gradient-to-r from-[#237A88]/10 via-stone-50 to-white p-5 sm:p-6 rounded-3xl border border-[#237A88]/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div id="insights-content-wrapper" className="flex items-start gap-4">
          <div id="insights-avatar-icon" className="h-10 w-10 rounded-2xl bg-[#237A88] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#237A88]/30 font-bold text-sm">
            P
          </div>
          <div>
            <div id="insights-title-row" className="flex items-center gap-2">
              <h3 id="insights-heading-label" className="text-xs font-bold text-stone-900 uppercase tracking-wider">PSYCHOBEINGS INSIGHTS</h3>
              <span id="insights-active-badge" className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Active</span>
            </div>
            <p id="insights-description-text" className="text-xs sm:text-sm font-semibold text-stone-700 mt-1">
              "Don't leave money on the table. You have an earning potential of ₹1,694 this month."
            </p>
          </div>
        </div>
        <button id="btn-insights-know-more" className="flex items-center gap-1.5 text-xs font-bold text-[#237A88] hover:underline shrink-0">
          <span>Know More</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Quick Access Grid */}
      <div id="quick-access-section" className="space-y-4">
        <h2 id="quick-access-title" className="text-base font-bold text-stone-900">Quick Access</h2>
        
        <div id="quick-access-grid" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            id="card-quick-access-schedule"
            onClick={() => navigate('/calendar')}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-[#237A88]/50 transition cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Calendar size={20} />
              </div>
              <ChevronRight size={16} className="text-stone-400 group-hover:text-[#237A88] transition-transform group-hover:translate-x-1" />
            </div>
            <h3 className="font-bold text-stone-900 text-sm mb-1">Your Schedule</h3>
            <p className="text-xs text-stone-500">View and manage upcoming sessions.</p>
          </div>

          <div 
            id="card-quick-access-clients"
            onClick={() => navigate('/clients')}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-[#237A88]/50 transition cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Users size={20} />
              </div>
              <ChevronRight size={16} className="text-stone-400 group-hover:text-[#237A88] transition-transform group-hover:translate-x-1" />
            </div>
            <h3 className="font-bold text-stone-900 text-sm mb-1">Clients Roster</h3>
            <p className="text-xs text-stone-500">Add and manage your clients.</p>
          </div>

          <div 
            id="card-quick-access-settings"
            onClick={() => navigate('/settings')}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-[#237A88]/50 transition cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Settings size={20} />
              </div>
              <ChevronRight size={16} className="text-stone-400 group-hover:text-[#237A88] transition-transform group-hover:translate-x-1" />
            </div>
            <h3 className="font-bold text-stone-900 text-sm mb-1">Your Settings</h3>
            <p className="text-xs text-stone-500">Fine tune settings for Psychobeings.</p>
          </div>
        </div>
      </div>

      {/* Notification Centre Feed */}
      <div id="notification-centre-card" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
        <div id="notification-centre-header" className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center">
              <Bell size={16} />
            </div>
            <div>
              <h2 id="notification-centre-title" className="text-base font-bold text-stone-900">Notification Centre</h2>
              <p id="notification-centre-subtitle" className="text-xs text-stone-500">Psychobeings Assistant's live updates on client engagement and reminders.</p>
            </div>
          </div>
          <span id="badge-live-feed" className="text-xs font-bold text-[#237A88] bg-[#237A88]/10 px-3 py-1 rounded-full">Live Feed</span>
        </div>

        <div id="notification-feed-list" className="space-y-3 pt-2">
          <div id="notification-item-1" className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 text-xs">
            <span className="font-semibold text-stone-800">I messaged Diksha Bharti about taking a follow-up session.</span>
            <span className="text-[11px] text-stone-400">1 hour ago</span>
          </div>
          <div id="notification-item-2" className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 text-xs">
            <span className="font-semibold text-stone-800">I messaged Lokesh Acharya about taking a follow-up session.</span>
            <span className="text-[11px] text-stone-400">7 hours ago</span>
          </div>
        </div>
      </div>

      {/* Notes Dialogue Box Modal (Linked directly with Client Roster Details) */}
      {isNotesOpen && (
        <div id="notes-dialogue-modal-overlay" className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div id="notes-dialogue-modal-box" className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">Select Client from Roster</h3>
                  <p className="text-xs text-stone-500">Choose a client to open their clinical notes & details.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsNotesOpen(false)}
                className="h-8 w-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Search Input for Client Roster */}
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

            {/* Client Roster List with Details */}
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
                className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}