import React, { useState } from 'react';
import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  LogOut,
  Megaphone,
  Settings,
  Star,
  Users,
} from 'lucide-react';

import DashboardView from './DashboardView';
import ClientsView from './ClientsView';
import ClinicalView from './ClinicalView';
import PaymentsView from './PaymentsView';

const AdminLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [clientsExpanded, setClientsExpanded] = useState(true);
  const [appointmentsExpanded, setAppointmentsExpanded] = useState(false);
  const [clinicalExpanded, setClinicalExpanded] = useState(false);
  const [paymentsExpanded, setPaymentsExpanded] = useState(false);

  return (
    <div className="flex h-screen w-full bg-slate-100 text-slate-900 font-sans overflow-hidden antialiased">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-[#0b2222] text-white">
        <div className="flex flex-col border-b border-teal-900/40 p-5">
          <span className="text-base font-extrabold tracking-tight text-white">PSYCHOBEINGS</span>
          <span className="text-[10px] font-semibold text-teal-300/80">Psychological Wellness & Therapy</span>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 text-xs font-medium">
          {/* Dashboard */}
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition ${
              activeTab === 'dashboard' ? 'bg-teal-950/80 text-teal-200 border border-teal-800/40' : 'text-teal-100/70 hover:bg-teal-900/30'
            }`}
          >
            <Home size={16} /> <span>Dashboard</span>
          </button>

          {/* Clients */}
          <div>
            <button
              onClick={() => setClientsExpanded(!clientsExpanded)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-teal-100/70 hover:bg-teal-900/30"
            >
              <div className="flex items-center gap-3">
                <Users size={16} /> <span>Clients</span>
              </div>
              <ChevronDown size={14} className={`transition-transform ${clientsExpanded ? 'rotate-180' : ''}`} />
            </button>
            {clientsExpanded && (
              <div className="ml-7 mt-1 space-y-1 border-l border-teal-900/50 pl-3">
                {['all', 'active', 'followup', 'closed'].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveTab(`clients-${sub}`)}
                    className={`block w-full py-1 text-left capitalize ${
                      activeTab === `clients-${sub}` ? 'font-bold text-teal-300' : 'text-teal-200/60 hover:text-white'
                    }`}
                  >
                    {sub === 'closed' ? '└─' : '├─'} {sub === 'followup' ? 'Follow-up' : sub}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Appointments */}
          <div>
            <button
              onClick={() => setAppointmentsExpanded(!appointmentsExpanded)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-teal-100/70 hover:bg-teal-900/30"
            >
              <div className="flex items-center gap-3">
                <Calendar size={16} /> <span>Appointments</span>
              </div>
              <ChevronDown size={14} className={`transition-transform ${appointmentsExpanded ? 'rotate-180' : ''}`} />
            </button>
            {appointmentsExpanded && (
              <div className="ml-7 mt-1 space-y-1 border-l border-teal-900/50 pl-3">
                <button
                  onClick={() => setActiveTab('appointments-calendar')}
                  className={`block w-full py-1 text-left ${activeTab === 'appointments-calendar' ? 'font-bold text-teal-300' : 'text-teal-200/60 hover:text-white'}`}
                >
                  ├─ Calendar
                </button>
                <button
                  onClick={() => setActiveTab('appointments-availability')}
                  className={`block w-full py-1 text-left ${activeTab === 'appointments-availability' ? 'font-bold text-teal-300' : 'text-teal-200/60 hover:text-white'}`}
                >
                  └─ Availability
                </button>
              </div>
            )}
          </div>

          {/* Clinical */}
          <div>
            <button
              onClick={() => setClinicalExpanded(!clinicalExpanded)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-teal-100/70 hover:bg-teal-900/30"
            >
              <div className="flex items-center gap-3">
                <FileText size={16} /> <span>Clinical</span>
              </div>
              <ChevronDown size={14} className={`transition-transform ${clinicalExpanded ? 'rotate-180' : ''}`} />
            </button>
            {clinicalExpanded && (
              <div className="ml-7 mt-1 space-y-1 border-l border-teal-900/50 pl-3">
                {[
                  { id: 'notes', label: 'Session Notes', prefix: '├─' },
                  { id: 'plans', label: 'Treatment Plans', prefix: '├─' },
                  { id: 'assessments', label: 'Assessments', prefix: '├─' },
                  { id: 'homework', label: 'Homework', prefix: '└─' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(`clinical-${item.id}`)}
                    className={`block w-full py-1 text-left ${
                      activeTab === `clinical-${item.id}` ? 'font-bold text-teal-300' : 'text-teal-200/60 hover:text-white'
                    }`}
                  >
                    {item.prefix} {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Payments */}
          <div>
            <button
              onClick={() => setPaymentsExpanded(!paymentsExpanded)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-teal-100/70 hover:bg-teal-900/30"
            >
              <div className="flex items-center gap-3">
                <CreditCard size={16} /> <span>Payments</span>
              </div>
              <ChevronDown size={14} className={`transition-transform ${paymentsExpanded ? 'rotate-180' : ''}`} />
            </button>
            {paymentsExpanded && (
              <div className="ml-7 mt-1 space-y-1 border-l border-teal-900/50 pl-3">
                {[
                  { id: 'transactions', label: 'Transactions', prefix: '├─' },
                  { id: 'packages', label: 'Packages', prefix: '├─' },
                  { id: 'pending', label: 'Pending', prefix: '└─' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(`payments-${item.id}`)}
                    className={`block w-full py-1 text-left ${
                      activeTab === `payments-${item.id}` ? 'font-bold text-teal-300' : 'text-teal-200/60 hover:text-white'
                    }`}
                  >
                    {item.prefix} {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Standalone Items */}
          {[
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'marketing', label: 'Marketing', icon: Megaphone },
            { id: 'reviews', label: 'Reviews', icon: Star },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition ${
                  activeTab === item.id ? 'bg-teal-950/80 text-teal-200 border border-teal-800/40' : 'text-teal-100/70 hover:bg-teal-900/30'
                }`}
              >
                <Icon size={16} /> <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-teal-900/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold">Admin Panel</span>
            <button onClick={onLogout} title="Log Out" className="text-teal-200/50 hover:text-white">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Dynamic View Loader */}
      <main className="flex-1 overflow-y-auto bg-slate-50 p-8">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab.startsWith('clients') && <ClientsView tab={activeTab} />}
        {activeTab.startsWith('clinical') && <ClinicalView tab={activeTab} />}
        {activeTab.startsWith('payments') && <PaymentsView tab={activeTab} />}
        {activeTab.startsWith('appointments') && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-bold capitalize">Appointments — {activeTab.replace('appointments-', '')}</h1>
            <p className="mt-2 text-xs text-slate-500">Manage therapy calendar and weekly availability slots.</p>
          </div>
        )}
        {['analytics', 'marketing', 'reviews', 'settings'].includes(activeTab) && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-bold capitalize">{activeTab}</h1>
            <p className="mt-2 text-xs text-slate-500">Configured module for {activeTab}.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminLayout;