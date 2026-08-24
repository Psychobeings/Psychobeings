import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Brain,
  CreditCard,
  BarChart3,
  Megaphone,
  Star,
  Settings,
  ChevronDown,
  ChevronRight,
  LogOut,
  Sparkles,
  IndianRupee,
  AlertCircle
} from 'lucide-react';

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [openSubmenus, setOpenSubmenus] = useState({
    clients: true,
    appointments: false,
    clinical: true,
    payments: false,
  });

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4 overflow-y-auto">
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="h-9 w-9 bg-teal-600 rounded-xl font-bold text-white flex items-center justify-center text-lg shadow-md shadow-teal-900/40">
              P
            </div>
            <div>
              <h1 className="font-bold text-white text-sm tracking-wide">PSYCHOBEINGS</h1>
              <p className="text-[10px] text-teal-400 font-medium tracking-tight">
                Wellness & Therapy
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1 text-xs font-medium">
            {/* 🏠 Dashboard */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </button>

            {/* 👥 Clients */}
            <div>
              <button
                onClick={() => toggleSubmenu('clients')}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Users size={16} />
                  <span>Clients</span>
                </div>
                {openSubmenus.clients ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {openSubmenus.clients && (
                <div className="ml-7 pl-2 border-l border-slate-800 space-y-1 mt-1">
                  {[
                    { id: 'clients-all', label: 'All Clients' },
                    { id: 'clients-active', label: 'Active' },
                    { id: 'clients-followup', label: 'Follow-up' },
                    { id: 'clients-closed', label: 'Closed' },
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveTab(sub.id)}
                      className={`w-full text-left py-1.5 px-2 rounded-md transition-colors ${
                        activeTab === sub.id
                          ? 'text-teal-400 bg-teal-500/10 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 📅 Appointments */}
            <div>
              <button
                onClick={() => toggleSubmenu('appointments')}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={16} />
                  <span>Appointments</span>
                </div>
                {openSubmenus.appointments ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {openSubmenus.appointments && (
                <div className="ml-7 pl-2 border-l border-slate-800 space-y-1 mt-1">
                  {[
                    { id: 'appointments-calendar', label: 'Calendar' },
                    { id: 'appointments-availability', label: 'Availability' },
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveTab(sub.id)}
                      className={`w-full text-left py-1.5 px-2 rounded-md transition-colors ${
                        activeTab === sub.id
                          ? 'text-teal-400 bg-teal-500/10 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 🧠 Clinical */}
            <div>
              <button
                onClick={() => toggleSubmenu('clinical')}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Brain size={16} />
                  <span>Clinical</span>
                </div>
                {openSubmenus.clinical ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {openSubmenus.clinical && (
                <div className="ml-7 pl-2 border-l border-slate-800 space-y-1 mt-1">
                  {[
                    { id: 'clinical-notes', label: 'Session Notes' },
                    { id: 'clinical-plans', label: 'Treatment Plans' },
                    { id: 'clinical-assessments', label: 'Assessments' },
                    { id: 'clinical-homework', label: 'Homework' },
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveTab(sub.id)}
                      className={`w-full text-left py-1.5 px-2 rounded-md transition-colors ${
                        activeTab === sub.id
                          ? 'text-teal-400 bg-teal-500/10 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 💳 Payments */}
            <div>
              <button
                onClick={() => toggleSubmenu('payments')}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CreditCard size={16} />
                  <span>Payments</span>
                </div>
                {openSubmenus.payments ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {openSubmenus.payments && (
                <div className="ml-7 pl-2 border-l border-slate-800 space-y-1 mt-1">
                  {[
                    { id: 'payments-transactions', label: 'Transactions' },
                    { id: 'payments-packages', label: 'Packages' },
                    { id: 'payments-pending', label: 'Pending' },
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveTab(sub.id)}
                      className={`w-full text-left py-1.5 px-2 rounded-md transition-colors ${
                        activeTab === sub.id
                          ? 'text-teal-400 bg-teal-500/10 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 📊 Analytics */}
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'analytics'
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <BarChart3 size={16} />
              <span>Analytics</span>
            </button>

            {/* 📣 Marketing */}
            <button
              onClick={() => setActiveTab('marketing')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'marketing'
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Megaphone size={16} />
              <span>Marketing</span>
            </button>

            {/* ⭐ Reviews */}
            <button
              onClick={() => setActiveTab('reviews')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'reviews'
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Star size={16} />
              <span>Reviews</span>
            </button>

            {/* ⚙️ Settings */}
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'settings'
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Settings size={16} />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* Sign Out Action */}
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors mt-6"
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </aside>

      {/* MAIN WORKSPACE CONTENT AREA */}
      <main className="flex-1 overflow-y-auto bg-slate-950 p-6">
        {activeTab === 'dashboard' && <MainDashboardView onNavigate={setActiveTab} />}
        {activeTab === 'clinical-notes' && <ClinicalNotesView />}
        {activeTab !== 'dashboard' && activeTab !== 'clinical-notes' && (
          <GenericModuleView title={activeTab.replace('-', ' ').toUpperCase()} />
        )}
      </main>
    </div>
  );
}

// --- SUB-VIEWS ---

function MainDashboardView({ onNavigate }) {
  return (
    <div className="space-y-6 max-w-7xl mx-auto text-slate-100">
      <div>
        <h2 className="text-2xl font-bold text-white">Practice Overview</h2>
        <p className="text-slate-400 text-xs mt-1">Operational stats and active therapy sessions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Total Clients</p>
            <h3 className="text-2xl font-bold text-white mt-1">24</h3>
            <span className="text-[10px] text-emerald-400 font-medium">↑ 2 new this week</span>
          </div>
          <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg">
            <Users size={20} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Today's Sessions</p>
            <h3 className="text-2xl font-bold text-white mt-1">3</h3>
            <span className="text-[10px] text-teal-400 font-medium">Next at 12:00 PM</span>
          </div>
          <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg">
            <Calendar size={20} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Monthly Revenue</p>
            <h3 className="text-2xl font-bold text-white mt-1">₹42,500</h3>
            <span className="text-[10px] text-emerald-400 font-medium">12% growth</span>
          </div>
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
            <IndianRupee size={20} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Risk Alerts</p>
            <h3 className="text-2xl font-bold text-amber-400 mt-1">1</h3>
            <span className="text-[10px] text-amber-400 font-medium">Requires review</span>
          </div>
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
            <AlertCircle size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClinicalNotesView() {
  return (
    <div className="max-w-4xl mx-auto space-y-5 text-xs text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">SOAP Session Notes</h2>
          <p className="text-slate-400 mt-1">Record confidential therapy logs securely.</p>
        </div>
        <button className="bg-teal-500 text-slate-950 font-bold px-3 py-2 rounded-lg flex items-center gap-1.5">
          <Sparkles size={14} /> AI Dictation Assistant
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Subjective (S)</label>
          <textarea rows="2" placeholder="Client reported experience..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Objective (O)</label>
          <textarea rows="2" placeholder="Therapist observations..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Assessment (A)</label>
          <textarea rows="2" placeholder="Clinical interpretation..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Plan (P)</label>
          <textarea rows="2" placeholder="Interventions and goals..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-teal-500" />
        </div>
      </div>
    </div>
  );
}

function GenericModuleView({ title }) {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-white capitalize">{title}</h2>
      <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl text-center text-slate-400 text-xs">
        Module workspace for <span className="text-teal-400 font-semibold">{title}</span> is ready for data binding.
      </div>
    </div>
  );
}