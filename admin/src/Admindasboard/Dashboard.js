import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  CreditCard, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  AlertCircle, 
  Clock, 
  IndianRupee, 
  Save, 
  Download 
} from 'lucide-react';

// --- INLINE SUB-PAGE COMPONENTS ---

function OverviewSection() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto text-slate-100">
      <div>
        <h2 className="text-2xl font-bold text-white">Practice Overview</h2>
        <p className="text-slate-400 text-xs mt-1">Real-time stats and daily operational highlights.</p>
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

      <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4">
        <h3 className="font-semibold text-sm text-slate-200 flex items-center gap-2">
          <Clock size={16} className="text-teal-400" /> Today's Appointments
        </h3>
        <div className="space-y-2">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <p className="font-semibold text-xs text-white">Aarav Sharma</p>
              <p className="text-[11px] text-slate-400">Individual Therapy • 10:00 AM</p>
            </div>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Completed</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <p className="font-semibold text-xs text-white">Riya Gupta</p>
              <p className="text-[11px] text-slate-400">Follow-up • 12:00 PM</p>
            </div>
            <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientsSection() {
  const [search, setSearch] = useState('');
  const clients = [
    { id: 'CL-101', name: 'Aarav Sharma', age: 28, diagnosis: 'Generalized Anxiety Disorder', status: 'Active', sessions: 12 },
    { id: 'CL-102', name: 'Riya Gupta', age: 24, diagnosis: 'Mild Adjustment Disorder', status: 'Active', sessions: 8 },
    { id: 'CL-103', name: 'Karan Verma', age: 16, diagnosis: 'Academic Performance Stress', status: 'Active', sessions: 6 },
  ];

  const filtered = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 space-y-5 max-w-7xl mx-auto text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Client Roster</h2>
          <p className="text-slate-400 text-xs mt-1">Manage intake records and active cases.</p>
        </div>
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5">
          <Plus size={14} /> Add Client
        </button>
      </div>

      <div className="relative w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search client name or ID..."
          className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold uppercase">
            <tr>
              <th className="p-3.5">Client ID / Name</th>
              <th className="p-3.5">Primary Diagnosis</th>
              <th className="p-3.5">Sessions</th>
              <th className="p-3.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filtered.map((c) => (
              <tr key={c.id} className="hover:bg-slate-800/40">
                <td className="p-3.5">
                  <p className="font-semibold text-white">{c.name}</p>
                  <p className="text-[10px] text-slate-400">{c.id} • {c.age} yrs</p>
                </td>
                <td className="p-3.5 text-slate-300">{c.diagnosis}</td>
                <td className="p-3.5 text-slate-300">{c.sessions} completed</td>
                <td className="p-3.5">
                  <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] border border-emerald-500/20">{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AppointmentsSection() {
  const slots = [
    { time: '09:00 AM', client: 'Available Slot', status: 'Free' },
    { time: '10:00 AM', client: 'Aarav Sharma', status: 'Booked' },
    { time: '12:00 PM', client: 'Riya Gupta', status: 'Booked' },
  ];

  return (
    <div className="p-6 space-y-5 max-w-7xl mx-auto text-slate-100">
      <h2 className="text-2xl font-bold text-white">Appointments Calendar</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
        {slots.map((slot, index) => (
          <div key={index} className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-400 w-20">{slot.time}</span>
            <span className={`font-semibold ${slot.status === 'Booked' ? 'text-white' : 'text-slate-500'}`}>{slot.client}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded ${slot.status === 'Booked' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-slate-800 text-slate-400'}`}>{slot.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotesSection() {
  return (
    <div className="p-6 space-y-4 max-w-4xl mx-auto text-slate-100">
      <h2 className="text-2xl font-bold text-white">SOAP Clinical Notes</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 text-xs">
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Subjective (S)</label>
          <textarea rows="2" placeholder="Client statements..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Objective (O)</label>
          <textarea rows="2" placeholder="Observational findings..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Assessment (A)</label>
          <textarea rows="2" placeholder="Therapeutic evaluation..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Plan (P)</label>
          <textarea rows="2" placeholder="Next steps & interventions..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-teal-500" />
        </div>
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 ml-auto">
          <Save size={14} /> Save Note
        </button>
      </div>
    </div>
  );
}

function PaymentsSection() {
  return (
    <div className="p-6 space-y-5 max-w-7xl mx-auto text-slate-100">
      <h2 className="text-2xl font-bold text-white">Invoices & Billing</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
          <div>
            <p className="font-semibold text-white">Aarav Sharma — INV-2026-001</p>
            <p className="text-[10px] text-slate-400">18 Aug 2026</p>
          </div>
          <span className="font-bold text-emerald-400">₹1,500 (Paid)</span>
        </div>
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="p-6 space-y-5 max-w-4xl mx-auto text-slate-100">
      <h2 className="text-2xl font-bold text-white">Portal Settings</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs">
        <p className="text-slate-300 font-semibold">Organization: Psychobeings</p>
        <p className="text-slate-400">Admin Email: contact@psychobeings.com</p>
      </div>
    </div>
  );
}

// --- MAIN DASHBOARD CONTAINER ---

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'clients', name: 'Clients', icon: Users },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'notes', name: 'Clinical Notes', icon: FileText },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="h-9 w-9 bg-teal-500 rounded-xl font-bold text-slate-950 flex items-center justify-center text-lg">
              P
            </div>
            <div>
              <h1 className="font-bold text-white text-sm">PSYCHOBEINGS</h1>
              <p className="text-[10px] text-teal-400 font-medium">Admin Portal</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-950">
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'clients' && <ClientsSection />}
        {activeTab === 'appointments' && <AppointmentsSection />}
        {activeTab === 'notes' && <NotesSection />}
        {activeTab === 'payments' && <PaymentsSection />}
        {activeTab === 'settings' && <SettingsSection />}
      </main>
    </div>
  );
}