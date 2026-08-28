import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Settings, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  Bell, 
  Plus,
  ChevronRight
} from 'lucide-react';

export default function PsychobeingsDashboard() {
  const navigate = useNavigate();

  // Retain Clients Mock Cards (updated with Psychobeings Assistant)
  const retainClients = [
    { id: 'client-deepanshu-rawat', name: 'Deepanshu Rawat', risk: 'High drop-off risk', days: 'No session in 28 days', tagColor: 'bg-rose-100 text-rose-700' },
    { id: 'client-diya-ghosh', name: 'Diya Ghosh', risk: 'High drop-off risk', days: 'No session in 48 days', tagColor: 'bg-rose-100 text-rose-700' },
    { id: 'client-sahajpreet-singh', name: 'Sahajpreet singh ma...', risk: 'Medium drop-off risk', days: 'No session in 28 days', tagColor: 'bg-amber-100 text-amber-700' },
    { id: 'client-shruti', name: 'Shruti', risk: 'Medium drop-off risk', days: 'No session in 29 days', tagColor: 'bg-amber-100 text-amber-700' },
  ];

  return (
    <div id="psychobeings-dashboard-root" className="max-w-6xl mx-auto space-y-8 font-sans text-stone-800 pb-16">
      
      {/* Top Greeting & Psychobeings Assistant Status Banner */}
      <div id="dashboard-header-banner" className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div id="greeting-text-container" className="space-y-2">
          <div id="dashboard-date-badge" className="flex items-center gap-2 text-xs font-bold text-[#237A88]">
            <Sparkles size={15} />
            <span>THURSDAY, 27 AUGUST 2026</span>
          </div>
          <h1 id="user-greeting-heading" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Good evening, <span className="text-[#237A88]">Amanpreet.</span>
          </h1>
          <p id="assistant-status-text" className="text-xs sm:text-sm text-stone-500 font-medium flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Psychobeings Assistant is watching retention • 3 medium • 3 high
          </p>
        </div>

        <div id="header-action-buttons" className="flex items-center gap-3 w-full md:w-auto">
          <button 
            id="btn-new-booking-session"
            onClick={() => navigate('/notes/new')}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-lg shadow-[#237A88]/20 transition"
          >
            <Plus size={16} />
            <span>New Booking / Session</span>
          </button>
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
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Retain Clients Section (High & Medium Drop-off Risk) */}
      <div id="retain-clients-section" className="space-y-4">
        <div id="retain-clients-header-row" className="flex justify-between items-center">
          <div>
            <h2 id="retain-clients-title" className="text-base font-bold text-stone-900">Retain Clients</h2>
            <p id="retain-clients-subtitle" className="text-xs text-stone-500">Clients showing drop-off risks requiring proactive follow-up.</p>
          </div>
          <div id="risk-counters-wrapper" className="flex items-center gap-2 text-xs font-semibold">
            <span id="badge-high-risk-count" className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">3 high</span>
            <span id="badge-medium-risk-count" className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">3 medium</span>
          </div>
        </div>

        <div id="retain-clients-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {retainClients.map((client) => (
            <div key={client.id} id={`card-${client.id}`} className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
              <div id={`card-inner-${client.id}`} className="space-y-2">
                <div id={`card-top-row-${client.id}`} className="flex justify-between items-start">
                  <div id={`client-avatar-${client.id}`} className="h-9 w-9 rounded-xl bg-[#237A88]/10 text-[#237A88] font-bold text-xs flex items-center justify-center">
                    {client.name.charAt(0)}
                  </div>
                  <span id={`risk-tag-${client.id}`} className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${client.tagColor}`}>
                    {client.risk}
                  </span>
                </div>
                <div>
                  <h3 id={`client-name-${client.id}`} className="font-bold text-stone-900 text-sm truncate">{client.name}</h3>
                  <p id={`client-days-${client.id}`} className="text-[11px] text-stone-500 mt-0.5">{client.days}</p>
                </div>
              </div>

              <div id={`card-actions-${client.id}`} className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
                <button id={`btn-message-${client.id}`} className="flex items-center justify-center gap-1.5 bg-[#237A88]/10 text-[#237A88] hover:bg-[#237A88]/20 py-2 rounded-xl text-xs font-bold transition">
                  <MessageSquare size={13} />
                  <span>Message</span>
                </button>
                <button id={`btn-call-${client.id}`} className="flex items-center justify-center gap-1.5 bg-stone-900 text-white hover:bg-stone-800 py-2 rounded-xl text-xs font-bold transition">
                  <Phone size={13} />
                  <span>Call</span>
                </button>
              </div>
            </div>
          ))}
        </div>
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

    </div>
  );
}