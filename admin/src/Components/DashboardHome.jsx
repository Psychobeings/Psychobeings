import React, { useState } from 'react';
import { Calendar, Users, FileText, CreditCard, Settings, LogOut, ChevronRight, Plus, Search, Bell, Activity} from 'lucide-react';

export default function PractitionerPortalApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Session Ended</h2>
          <p className="text-stone-500 text-sm mb-6">You have been securely signed out of the Psychobeings Practice OS.</p>
          <button onClick={() => setIsLoggedIn(true)} className="w-full bg-stone-900 text-white font-medium py-3 rounded-full hover:bg-stone-800 transition text-sm">Sign Back In</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col justify-between hidden md:flex sticky top-0 h-screen">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-stone-100">
            <span className="text-xl font-semibold tracking-tight text-stone-900">Psychobeings</span>
            <span className="ml-2 text-[10px] uppercase tracking-widest bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded font-medium">OS</span>
          </div>
          
          <nav className="p-6 space-y-1.5 text-sm font-medium">
            <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${activeTab === 'dashboard' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}>
              <Activity className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <button onClick={() => setActiveTab('schedule')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${activeTab === 'schedule' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}>
              <Calendar className="w-4 h-4" />
              <span>Schedule & Calendar</span>
            </button>
            <button onClick={() => setActiveTab('clients')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${activeTab === 'clients' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}>
              <Users className="w-4 h-4" />
              <span>Clients & EHR</span>
            </button>
            <button onClick={() => setActiveTab('notes')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${activeTab === 'notes' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}>
              <FileText className="w-4 h-4" />
              <span>Clinical Notes</span>
            </button>
            <button onClick={() => setActiveTab('billing')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${activeTab === 'billing' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}>
              <CreditCard className="w-4 h-4" />
              <span>Billing & Invoices</span>
            </button>
            <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${activeTab === 'settings' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}>
              <Settings className="w-4 h-4" />
              <span>Practice Settings</span>
            </button>
          </nav>
        </div>

        <div className="p-6 border-t border-stone-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-700 text-xs">PK</div>
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-stone-900 truncate">Clinical Lead</p>
                <p className="text-[10px] text-stone-500 truncate">Psychobeings Practice</p>
              </div>
            </div>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center justify-center space-x-2 border border-stone-200 text-stone-600 hover:text-stone-900 text-xs font-medium py-2.5 rounded-xl transition">
            <LogOut className="w-3.5 h-3.5" />
            <span>Secure Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-stone-200 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center space-x-4 w-96">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
              <input type="text" placeholder="Search clients, notes, appointments..." className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-stone-900" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-stone-900 rounded-full"></span>
            </button>
            <div className="h-6 w-px bg-stone-200"></div>
            <button onClick={() => setActiveTab('schedule')} className="bg-stone-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl hover:bg-stone-800 transition flex items-center space-x-2">
              <Plus className="w-3.5 h-3.5" />
              <span>New Session</span>
            </button>
          </div>
        </header>

        {/* Dynamic Tab Layouts */}
        <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
          {activeTab === 'dashboard' && <DashboardView setActiveTab={setActiveTab} />}
          {activeTab === 'schedule' && <ScheduleView />}
          {activeTab === 'clients' && <ClientsView />}
          {activeTab === 'notes' && <NotesView />}
          {activeTab === 'billing' && <BillingView />}
          {activeTab === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  );
}

// 1. DASHBOARD VIEW
function DashboardView({ setActiveTab }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Practice Overview</h1>
        <p className="text-stone-500 text-xs mt-1">Here is a summary of your schedule and client updates for today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Today's Sessions</p>
          <p className="text-3xl font-bold text-stone-900 mt-2">5</p>
          <span className="text-[11px] text-stone-500 mt-1 block">Next session in 35 mins</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Active Clients</p>
          <p className="text-3xl font-bold text-stone-900 mt-2">28</p>
          <span className="text-[11px] text-stone-500 mt-1 block">+2 new intakes this week</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Pending Notes</p>
          <p className="text-3xl font-bold text-stone-900 mt-2">2</p>
          <span className="text-[11px] text-amber-600 mt-1 block font-medium">Requires completion</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Monthly Revenue</p>
          <p className="text-3xl font-bold text-stone-900 mt-2">$4,850</p>
          <span className="text-[11px] text-emerald-600 mt-1 block font-medium">94% collection rate</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-stone-900 text-sm">Today's Schedule</h2>
            <button onClick={() => setActiveTab('schedule')} className="text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center space-x-1">
              <span>View Calendar</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-3">
            {[
              { time: '10:00 AM - 11:00 AM', client: 'Aarav M.', type: 'Individual Therapy (CBT)', status: 'Completed' },
              { time: '11:30 AM - 12:30 PM', client: 'Priya S.', type: 'Initial Consultation', status: 'Upcoming' },
              { time: '02:00 PM - 03:00 PM', client: 'Family V.', type: 'Family Systems Session', status: 'Scheduled' },
              { time: '03:30 PM - 04:30 PM', client: 'Rohan K.', type: 'Follow-up Progress Review', status: 'Scheduled' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-100 text-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-stone-900"></div>
                  <div>
                    <p className="font-semibold text-stone-900">{item.client} — <span className="font-normal text-stone-600">{item.type}</span></p>
                    <p className="text-[11px] text-stone-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${item.status === 'Completed' ? 'bg-stone-200 text-stone-700' : 'bg-stone-900 text-white'}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-stone-900 text-sm mb-4">Quick Actions</h2>
            <div className="space-y-2.5 text-xs">
              <button onClick={() => setActiveTab('notes')} className="w-full text-left p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition font-medium text-stone-800 flex items-center justify-between">
                <span>Draft Progress Note</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button onClick={() => setActiveTab('clients')} className="w-full text-left p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition font-medium text-stone-800 flex items-center justify-between">
                <span>Add New Client Profile</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button onClick={() => setActiveTab('billing')} className="w-full text-left p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition font-medium text-stone-800 flex items-center justify-between">
                <span>Generate Invoice</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-100 text-[11px] text-stone-600">
            <p className="font-semibold text-stone-900 mb-1">HIPAA Compliance Check</p>
            All records encrypted end-to-end. Last compliance sweep verified zero vulnerabilities.
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. SCHEDULE VIEW
function ScheduleView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Schedule & Calendar</h1>
          <p className="text-stone-500 text-xs mt-1">Manage your weekly calendar, booking links, and session time slots.</p>
        </div>
        <button className="bg-stone-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl hover:bg-stone-800 transition">Add Appointment</button>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm text-center py-16">
        <Calendar className="w-12 h-12 text-stone-300 mx-auto mb-3" />
        <h3 className="font-semibold text-stone-900 text-sm">Interactive Master Calendar Grid</h3>
        <p className="text-stone-500 text-xs mt-1">Integrates with client portal online booking rules and automated reminders.</p>
      </div>
    </div>
  );
}

// 3. CLIENTS VIEW
function ClientsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Clients & EHR Records</h1>
          <p className="text-stone-500 text-xs mt-1">Secure repository of client profiles, diagnostic forms, and contact details.</p>
        </div>
        <button className="bg-stone-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl hover:bg-stone-800 transition">Register New Client</button>
      </div>
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider">
          <span>Client Name</span>
          <span>Modality</span>
          <span>Status</span>
          <span>Last Session</span>
        </div>
        {[
          { name: 'Aarav Malhotra', modality: 'CBT', status: 'Active', last: 'Today' },
          { name: 'Priya Sharma', modality: 'Narrative Therapy', status: 'Intake', last: 'Pending' },
          { name: 'Rohan Kapoor', modality: 'Family Systems', status: 'Active', last: '3 days ago' },
        ].map((c, i) => (
          <div key={i} className="p-4 border-b border-stone-100 flex items-center justify-between text-xs hover:bg-stone-50 transition cursor-pointer">
            <span className="font-semibold text-stone-900">{c.name}</span>
            <span className="text-stone-600">{c.modality}</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-stone-100 text-stone-800">{c.status}</span>
            <span className="text-stone-400">{c.last}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. NOTES VIEW
function NotesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Clinical Notes & Documentation</h1>
        <p className="text-stone-500 text-xs mt-1">Modality-aligned progress notes and structured diagnostic charting.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm text-center py-16">
        <FileText className="w-12 h-12 text-stone-300 mx-auto mb-3" />
        <h3 className="font-semibold text-stone-900 text-sm">Modality-Specific Note Templates</h3>
        <p className="text-stone-500 text-xs mt-1">Select from CBT thought records, narrative frameworks, or standard SOAP notes.</p>
      </div>
    </div>
  );
}

// 5. BILLING VIEW
function BillingView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Billing & Invoices</h1>
        <p className="text-stone-500 text-xs mt-1">Automated fee collection, itemized invoices, and payment tracking.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm text-center py-16">
        <CreditCard className="w-12 h-12 text-stone-300 mx-auto mb-3" />
        <h3 className="font-semibold text-stone-900 text-sm">Financial Management Ledger</h3>
        <p className="text-stone-500 text-xs mt-1">Track outstanding balances and generate secure payment links for clients.</p>
      </div>
    </div>
  );
}

// 6. SETTINGS VIEW
function SettingsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Practice Settings</h1>
        <p className="text-stone-500 text-xs mt-1">Configure user permissions, calendar availability, and clinic branding.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm text-center py-16">
        <Settings className="w-12 h-12 text-stone-300 mx-auto mb-3" />
        <h3 className="font-semibold text-stone-900 text-sm">Practice Configuration Console</h3>
        <p className="text-stone-500 text-xs mt-1">Manage associate clinician permissions and secure storage preferences.</p>
      </div>
    </div>
  );
}