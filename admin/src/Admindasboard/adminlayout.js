import React, { useState } from 'react';
import { 
  Users, Calendar, FileText, CreditCard, Shield, 
  Plus, Lock
} from 'lucide-react';

// Import sub-views
import OverviewTab from './Overviewtab';
import ClientsTab from './ClientsView';
import NotesTab from './NotesTab.';
import NewAppointmentModal from './NewAppointmentModal';

export default function CounselingApp() {
  const [activeTab, setActiveTab] = useState('overview');
  const [privacyMode, setPrivacyMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between p-4 shrink-0">
        <div>
          <div className="flex items-center gap-3 px-2 py-3 mb-6 border-b border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-semibold text-white text-sm tracking-wide">Aura Health</h1>
              <p className="text-[11px] text-slate-400">Clinical Admin v3.2</p>
            </div>
          </div>

          <nav className="space-y-1.5">
            {[
              { id: 'overview', label: 'Overview', icon: Calendar },
              { id: 'clients', label: 'Client Directory', icon: Users },
              { id: 'notes', label: 'Clinical Notes', icon: FileText },
              { id: 'billing', label: 'Billing & Claims', icon: CreditCard },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    activeTab === item.id 
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/40' 
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* HIPAA Safety Guard Toggle */}
        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-teal-400" />
              PHI Privacy Mode
            </span>
            <input 
              type="checkbox" 
              checked={privacyMode} 
              onChange={() => setPrivacyMode(!privacyMode)}
              className="accent-teal-500 h-4 w-4 rounded cursor-pointer"
            />
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5">Masks client names for public displays</p>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-900/50">
        {/* Top Navbar */}
        <header className="h-16 bg-slate-950/60 border-b border-slate-800/80 px-6 flex items-center justify-between shrink-0 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-white capitalize">{activeTab}</h2>
            {privacyMode && (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
                PHI Masked
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-medium transition shadow-md shadow-teal-950"
            >
              <Plus className="w-4 h-4" />
              Schedule Session
            </button>
          </div>
        </header>

        {/* View Router */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'overview' && <OverviewTab privacyMode={privacyMode} />}
          {activeTab === 'clients' && <ClientsTab privacyMode={privacyMode} />}
          {activeTab === 'notes' && <NotesTab privacyMode={privacyMode} />}
        </div>
      </main>

      {/* Booking Modal */}
      {isModalOpen && <NewAppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}