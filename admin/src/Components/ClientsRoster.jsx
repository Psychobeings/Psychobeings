import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Eye, 
  Trash2, 
  Edit3, 
  X, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Sparkles, 
  MessageSquare, 
  Send,
  Download,
  AlertCircle,
  UserPlus,
  PlusCircle
} from 'lucide-react';

const INITIAL_CLIENTS = [
  {
    id: 'c-101',
    name: 'Alex Johnson',
    status: 'Active',
    email: 'alex.j@example.com',
    phone: '+91 9876543210',
    gender: 'Male',
    dob: '12 May 1995',
    intakeFilled: true,
    consentFilled: true,
    caseSummary: 'Managing mild work-related stress and anxiety through cognitive restructuring and mindfulness techniques.',
    stats: { completed: 3, upcoming: 1, cancelled: 0, total: 4 },
    suggestedSessions: 8,
    sessionHistory: [
      { id: 's-201', num: 1, date: 'Jan 10', time: '15:00', summary: 'Initial intake and baseline stress assessment.' },
      { id: 's-202', num: 2, date: 'Jan 17', time: '15:00', summary: 'Identified major professional stressors and cognitive distortions.' },
      { id: 's-203', num: 3, date: 'Jan 24', time: '15:00', summary: 'Introduced deep breathing and structured time-management strategies.' }
    ],
    billing: { totalEarned: 4500, sessions: 3, pendingDues: 0, history: [] }
  },
  {
    id: 'c-102',
    name: 'Sam Smith',
    status: 'Active',
    email: 'sam.smith@example.com',
    phone: '+91 9123456789',
    gender: 'Non-binary',
    dob: '22 Aug 1998',
    intakeFilled: true,
    consentFilled: true,
    caseSummary: 'Addressing interpersonal communication challenges and emotional regulation strategies.',
    stats: { completed: 2, upcoming: 0, cancelled: 1, total: 3 },
    suggestedSessions: 10,
    sessionHistory: [
      { id: 's-204', num: 1, date: 'Feb 01', time: '17:00', summary: 'Explored interpersonal conflict patterns.' },
      { id: 's-205', num: 2, date: 'Feb 08', time: '17:00', summary: 'Practiced assertive communication scripts.' }
    ],
    billing: { totalEarned: 3000, sessions: 2, pendingDues: 1500, history: [] }
  },
  {
    id: 'c-103',
    name: 'Taylor Davis',
    status: 'Active',
    email: 'taylor.d@example.com',
    phone: '+91 9988776655',
    gender: 'Female',
    dob: '05 Nov 2000',
    intakeFilled: true,
    consentFilled: true,
    caseSummary: 'General academic adjustment support and habit formation.',
    stats: { completed: 1, upcoming: 1, cancelled: 0, total: 2 },
    suggestedSessions: 6,
    sessionHistory: [
      { id: 's-206', num: 1, date: 'Feb 12', time: '11:00', summary: 'Academic goal mapping and study routine setup.' }
    ],
    billing: { totalEarned: 1500, sessions: 1, pendingDues: 0, history: [] }
  },
  {
    id: 'c-104',
    name: 'Jordan Lee',
    status: 'Active',
    email: 'jordan.lee@example.com',
    phone: '+91 9811223344',
    gender: 'Male',
    dob: '19 Jul 1992',
    intakeFilled: true,
    consentFilled: true,
    caseSummary: 'N/A',
    stats: { completed: 0, upcoming: 1, cancelled: 0, total: 1 },
    suggestedSessions: 8,
    sessionHistory: [],
    billing: { totalEarned: 0, sessions: 0, pendingDues: 1500, history: [] }
  },
  {
    id: 'c-105',
    name: 'Morgan Brown',
    status: 'Active',
    email: 'morgan.b@example.com',
    phone: '+91 9700112233',
    gender: 'Female',
    dob: '30 Jan 1997',
    intakeFilled: true,
    consentFilled: true,
    caseSummary: 'Building self-esteem and navigating life transitions.',
    stats: { completed: 4, upcoming: 0, cancelled: 0, total: 4 },
    suggestedSessions: 12,
    sessionHistory: [
      { id: 's-207', num: 1, date: 'Jan 05', time: '10:00', summary: 'Intake and transition history review.' },
      { id: 's-208', num: 2, date: 'Jan 12', time: '10:00', summary: 'Core belief identification.' },
      { id: 's-209', num: 3, date: 'Jan 19', time: '10:00', summary: 'Reframing inner critical dialogue.' },
      { id: 's-210', num: 4, date: 'Jan 26', time: '10:00', summary: 'Consolidating self-compassion tools.' }
    ],
    billing: { totalEarned: 6000, sessions: 4, pendingDues: 0, history: [] }
  },
  {
    id: 'c-106',
    name: 'Chris Wilson',
    status: 'Active',
    email: 'chris.w@example.com',
    phone: '+91 9655443322',
    gender: 'Male',
    dob: '14 Oct 1994',
    intakeFilled: true,
    consentFilled: true,
    caseSummary: 'N/A',
    stats: { completed: 0, upcoming: 0, cancelled: 1, total: 1 },
    suggestedSessions: 6,
    sessionHistory: [],
    billing: { totalEarned: 0, sessions: 0, pendingDues: 500, history: [] }
  }
];

export default function ClientsRoster() {
  const [clients, setClients] = useState(INITIAL_CLIENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [activeTab, setActiveTab] = useState('Therapy Journey');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  // Modal Navigation States
  const [modalStep, setModalStep] = useState(null); // null | 'addForm' | 'newBooking'
  const [activeSessionNote, setActiveSessionNote] = useState(null);

  // New session form state for an existing profile
  const [isAddingSession, setIsAddingSession] = useState(false);
  const [newSessionData, setNewSessionData] = useState({ date: '', time: '', summary: '' });

  const [editFormData, setEditFormData] = useState({ name: '', email: '', phone: '', gender: 'Male', dob: '' });
  const [addFormData, setAddFormData] = useState({ name: '', email: '', phone: '', gender: 'Male', dob: '', caseSummary: '' });
  const [bookingFormData, setBookingFormData] = useState({ date: '', time: '', notes: '' });

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phone.includes(searchQuery)
  );

  const handleOpenProfile = (client) => {
    setSelectedClient(client);
    setActiveTab('Therapy Journey');
    setIsAddingSession(false);
  };

  const handleOpenEdit = (client) => {
    setEditFormData({
      name: client.name,
      email: client.email,
      phone: client.phone,
      gender: client.gender || 'Male',
      dob: client.dob || ''
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!selectedClient) return;

    const updated = clients.map(c => {
      if (c.id === selectedClient.id) {
        return { ...c, ...editFormData };
      }
      return c;
    });

    setClients(updated);
    setSelectedClient(prev => ({ ...prev, ...editFormData }));
    setIsEditModalOpen(false);
  };

  const handleAddClientOnly = (e) => {
    e.preventDefault();
    const newId = `c-${Date.now().toString().slice(-3)}`;
    const newClientObj = {
      id: newId,
      name: addFormData.name,
      status: 'Active',
      email: addFormData.email,
      phone: addFormData.phone,
      gender: addFormData.gender,
      dob: addFormData.dob,
      intakeFilled: true,
      consentFilled: true,
      caseSummary: addFormData.caseSummary || 'Initial intake pending formal review.',
      stats: { completed: 0, upcoming: 0, cancelled: 0, total: 0 },
      suggestedSessions: 8,
      sessionHistory: [],
      billing: { totalEarned: 0, sessions: 0, pendingDues: 0, history: [] }
    };

    setClients([newClientObj, ...clients]);
    setAddFormData({ name: '', email: '', phone: '', gender: 'Male', dob: '', caseSummary: '' });
    setModalStep(null);
  };

  const handleAddClientAndBooking = (e) => {
    e.preventDefault();
    const newId = `c-${Date.now().toString().slice(-3)}`;
    const newClientObj = {
      id: newId,
      name: addFormData.name,
      status: 'Active',
      email: addFormData.email,
      phone: addFormData.phone,
      gender: addFormData.gender,
      dob: addFormData.dob,
      intakeFilled: true,
      consentFilled: true,
      caseSummary: bookingFormData.notes || addFormData.caseSummary || 'Initial booking scheduled.',
      stats: { completed: 0, upcoming: 1, cancelled: 0, total: 1 },
      suggestedSessions: 8,
      sessionHistory: [
        {
          id: `s-${Date.now().toString().slice(-4)}`,
          num: 1,
          date: bookingFormData.date || 'TBD',
          time: bookingFormData.time || '00:00',
          summary: bookingFormData.notes || 'Initial booking scheduled upon client creation.'
        }
      ],
      billing: { totalEarned: 0, sessions: 0, pendingDues: 0, history: [] }
    };

    setClients([newClientObj, ...clients]);
    setAddFormData({ name: '', email: '', phone: '', gender: 'Male', dob: '', caseSummary: '' });
    setBookingFormData({ date: '', time: '', notes: '' });
    setModalStep(null);
  };

  const handleSaveNewSession = (e) => {
    e.preventDefault();
    if (!selectedClient) return;

    const nextNum = selectedClient.sessionHistory.length + 1;
    const sessionObj = {
      id: `s-${Date.now().toString().slice(-4)}`,
      num: nextNum,
      date: newSessionData.date || 'Today',
      time: newSessionData.time || '00:00',
      summary: newSessionData.summary || 'Session conducted.'
    };

    const updatedHistory = [sessionObj, ...selectedClient.sessionHistory];
    const updatedStats = {
      ...selectedClient.stats,
      completed: selectedClient.stats.completed + 1,
      total: selectedClient.stats.total + 1
    };

    const updatedClient = {
      ...selectedClient,
      sessionHistory: updatedHistory,
      stats: updatedStats
    };

    setClients(clients.map(c => c.id === selectedClient.id ? updatedClient : c));
    setSelectedClient(updatedClient);
    setNewSessionData({ date: '', time: '', summary: '' });
    setIsAddingSession(false);
  };

  const handleDeleteClient = (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(prev => prev.filter(c => c.id !== id));
      if (selectedClient?.id === id) setSelectedClient(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 font-sans text-stone-800">
      
      {/* Search & Filter Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search by name, email, phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] text-xs shadow-sm transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setModalStep('addForm')}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-2xl text-xs font-semibold shadow-sm transition-all"
          >
            <UserPlus size={14} />
            <span>Add Client</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-stone-200 text-stone-700 rounded-2xl text-xs font-semibold shadow-sm hover:bg-stone-50 transition-all">
            <SlidersHorizontal size={14} />
            <span>Status</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-stone-200 text-stone-700 rounded-2xl text-xs font-semibold shadow-sm hover:bg-stone-50 transition-all">
            <AlertCircle size={14} />
            <span>Risk</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-stone-200 text-stone-700 rounded-2xl text-xs font-semibold shadow-sm hover:bg-stone-50 transition-all">
            <ArrowUpDown size={14} />
            <span>Sort</span>
          </button>
        </div>
      </div>

      {/* Grid of Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredClients.map((client) => {
          const initials = client.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

          return (
            <div 
              key={client.id}
              className="bg-white rounded-3xl border border-stone-200/80 p-5 shadow-sm space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#237A88]/15 text-[#237A88] flex items-center justify-center font-bold text-sm">
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm">{client.name}</h3>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {client.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-stone-600 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400">📞</span>
                    <span className="font-medium text-stone-700">{client.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400">✉️</span>
                    <span className="font-medium text-stone-700 truncate">{client.email}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-100">
                <button
                  onClick={() => handleOpenProfile(client)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-2xl bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-bold transition-all border border-sky-100"
                >
                  <Eye size={14} />
                  <span>View Profile</span>
                </button>

                <button
                  onClick={() => handleDeleteClient(client.id)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 text-rose-500 hover:text-rose-700 text-xs font-bold transition-all"
                >
                  <Trash2 size={13} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* CLIENT PROFILE MODAL */}
      {selectedClient && !activeSessionNote && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 max-w-2xl w-full my-8 space-y-6 shadow-2xl border border-stone-100 relative max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#237A88]/15 text-[#237A88] flex items-center justify-center font-bold text-base">
                  {selectedClient.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-stone-900">{selectedClient.name}</h2>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                      ● {selectedClient.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-stone-500 mt-1">
                    <span>✉️ {selectedClient.email}</span>
                    <span>📞 {selectedClient.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-stone-500 mt-1">
                    {selectedClient.dob && <span>🎂 {selectedClient.dob}</span>}
                    <span>👤 Gender: {selectedClient.gender || 'Male'}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(selectedClient)}
                  className="flex items-center gap-1 px-3 py-1.5 border border-stone-200 hover:bg-stone-50 text-stone-700 rounded-xl text-xs font-semibold transition-all"
                >
                  <Edit3 size={14} />
                  <span>Edit Profile</span>
                </button>
                <button 
                  onClick={() => setSelectedClient(null)}
                  className="p-1.5 hover:bg-stone-100 rounded-xl text-stone-400"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className={`flex items-center gap-1 px-3 py-1 rounded-full font-semibold ${
                selectedClient.intakeFilled ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-stone-100 text-stone-500'
              }`}>
                <CheckCircle2 size={13} /> Intake filled
              </span>
              <span className={`flex items-center gap-1 px-3 py-1 rounded-full font-semibold ${
                selectedClient.consentFilled ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-stone-100 text-stone-500'
              }`}>
                <CheckCircle2 size={13} /> Consent filled
              </span>

              {selectedClient.sessionHistory && selectedClient.sessionHistory.length > 0 && (
                <button 
                  onClick={() => setActiveSessionNote(selectedClient.sessionHistory[0])}
                  className="ml-auto text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 bg-sky-50 px-3 py-1 rounded-full border border-sky-200"
                >
                  <FileText size={13} />
                  <span>View Intake & Consent Form</span>
                </button>
              )}
            </div>

            <div className="flex border-b border-stone-200 text-xs font-bold text-stone-500 gap-6">
              {[
                { label: 'Therapy Journey', icon: Sparkles },
                { label: 'Billing', icon: FileText },
                { label: 'Follow Ups', icon: MessageSquare }
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.label;
                return (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(tab.label)}
                    className={`pb-2.5 flex items-center gap-1.5 transition-all border-b-2 ${
                      isActive 
                        ? 'border-[#237A88] text-[#237A88]' 
                        : 'border-transparent hover:text-stone-800'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: THERAPY JOURNEY */}
            {activeTab === 'Therapy Journey' && (
              <div className="space-y-6">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                    <FileText size={14} className="text-[#237A88]" />
                    <span>Case Summary</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {selectedClient.caseSummary}
                  </p>
                </div>

                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#237A88]" />
                      Session Tracker
                    </span>
                    <button
                      onClick={() => setIsAddingSession(!isAddingSession)}
                      className="flex items-center gap-1 px-3 py-1 bg-[#237A88] text-white rounded-xl text-xs font-semibold hover:bg-[#1C646F] transition-all"
                    >
                      <PlusCircle size={13} />
                      <span>{isAddingSession ? 'Cancel' : 'Add Session'}</span>
                    </button>
                  </div>

                  {/* Add Session Form Drawer */}
                  {isAddingSession && (
                    <form onSubmit={handleSaveNewSession} className="bg-white p-4 rounded-2xl border border-[#237A88]/30 space-y-3 text-xs mt-3">
                      <p className="font-bold text-[#237A88]">Record New Session Notes</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="font-semibold text-stone-700">Date</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Feb 25"
                            value={newSessionData.date}
                            onChange={(e) => setNewSessionData({ ...newSessionData, date: e.target.value })}
                            className="w-full px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-stone-700">Time</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 16:00"
                            value={newSessionData.time}
                            onChange={(e) => setNewSessionData({ ...newSessionData, time: e.target.value })}
                            className="w-full px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-stone-700">Session Summary / Notes</label>
                        <textarea
                          rows="2"
                          required
                          placeholder="Discussed coping mechanisms..."
                          value={newSessionData.summary}
                          onChange={(e) => setNewSessionData({ ...newSessionData, summary: e.target.value })}
                          className="w-full px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88] resize-none"
                        />
                      </div>
                      <div className="flex justify-end gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setIsAddingSession(false)}
                          className="px-3 py-1.5 bg-stone-100 text-stone-600 rounded-xl font-semibold"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-[#237A88] text-white rounded-xl font-semibold shadow-sm hover:bg-[#1C646F]"
                        >
                          Save Session
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-4 gap-2 text-center pt-2">
                    <div className="bg-white p-2.5 rounded-xl border border-stone-200/80">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-1 text-[10px] font-bold">✓</div>
                      <p className="text-base font-bold text-stone-900">{selectedClient.stats.completed}</p>
                      <p className="text-[10px] text-stone-400 font-semibold">Completed</p>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-stone-200/80">
                      <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto mb-1 text-[10px] font-bold">⏱</div>
                      <p className="text-base font-bold text-stone-900">{selectedClient.stats.upcoming}</p>
                      <p className="text-[10px] text-stone-400 font-semibold">Upcoming</p>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-stone-200/80">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto mb-1 text-[10px] font-bold">✕</div>
                      <p className="text-base font-bold text-stone-900">{selectedClient.stats.cancelled}</p>
                      <p className="text-[10px] text-stone-400 font-semibold">Cancelled</p>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-stone-200/80">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto mb-1 text-[10px] font-bold">∑</div>
                      <p className="text-base font-bold text-stone-900">{selectedClient.stats.total}</p>
                      <p className="text-[10px] text-stone-400 font-semibold">Total</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-stone-500">
                      <span>{selectedClient.stats.completed} of {selectedClient.suggestedSessions} suggested sessions</span>
                      <span>{selectedClient.suggestedSessions > 0 ? Math.round((selectedClient.stats.completed / selectedClient.suggestedSessions) * 100) : 0}%</span>
                    </div>
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#237A88] h-full rounded-full transition-all" 
                        style={{ width: `${selectedClient.suggestedSessions > 0 ? (selectedClient.stats.completed / selectedClient.suggestedSessions) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-stone-400">Session History</h4>
                  
                  {selectedClient.sessionHistory.length === 0 ? (
                    <div className="text-center py-8 text-stone-400 text-xs font-medium bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                      No completed sessions yet.
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                      {selectedClient.sessionHistory.map((sess) => (
                        <div key={sess.id} className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="px-2.5 py-1 bg-[#237A88]/10 text-[#237A88] rounded-xl text-center font-bold text-xs">
                                <div>{sess.date}</div>
                              </div>
                              <div>
                                <h5 className="font-bold text-stone-900 text-xs">Session {sess.num}</h5>
                                <p className="text-[10px] text-stone-400 font-medium">🕒 {sess.time}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => setActiveSessionNote(sess)}
                              className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all"
                            >
                              <FileText size={13} />
                              <span>View Notes</span>
                            </button>
                          </div>
                          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                            {sess.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: BILLING */}
            {activeTab === 'Billing' && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-emerald-50/70 border border-emerald-200 p-3.5 rounded-2xl">
                    <p className="text-[10px] font-bold text-emerald-800 uppercase">Total Earned</p>
                    <p className="text-lg font-bold text-emerald-900">₹{selectedClient.billing.totalEarned}</p>
                  </div>
                  <div className="bg-[#237A88]/10 border border-[#237A88]/20 p-3.5 rounded-2xl">
                    <p className="text-[10px] font-bold text-[#237A88] uppercase">Sessions</p>
                    <p className="text-lg font-bold text-[#237A88]">{selectedClient.billing.sessions}</p>
                  </div>
                  <div className="bg-rose-50/70 border border-rose-200 p-3.5 rounded-2xl">
                    <p className="text-[10px] font-bold text-rose-800 uppercase">Pending Dues</p>
                    <p className="text-lg font-bold text-rose-900">₹{selectedClient.billing.pendingDues}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2 text-xs">
                    <select className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1 text-stone-700 font-semibold outline-none">
                      <option>All Payments</option>
                    </select>
                    <select className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1 text-stone-700 font-semibold outline-none">
                      <option>All Months</option>
                    </select>
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-stone-200 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-50">
                    <Download size={13} />
                    <span>Export CSV</span>
                  </button>
                </div>

                <div className="border border-stone-200 rounded-2xl p-4 space-y-3 bg-stone-50">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                    <span>Individual Sessions ({selectedClient.billing.sessions})</span>
                  </div>
                  {selectedClient.sessionHistory.length === 0 ? (
                    <p className="text-xs text-stone-400 text-center py-4">No billing records linked to sessions yet.</p>
                  ) : (
                    <div className="space-y-2">
                      {selectedClient.sessionHistory.map(sess => (
                        <div key={sess.id} className="flex items-center justify-between bg-white p-3 rounded-xl border border-stone-200/80 text-xs">
                          <div>
                            <p className="font-bold text-stone-900">Session {sess.num} ({sess.date})</p>
                            <p className="text-[10px] text-stone-400">Standard Consultation Fee</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-emerald-700">₹1500</p>
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">Paid</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: FOLLOW UPS */}
            {activeTab === 'Follow Ups' && (
              <div className="space-y-4 py-2">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                      <MessageSquare size={14} className="text-[#237A88]" />
                      <span>Quick Follow-up Message</span>
                    </div>
                    <span className="text-[10px] text-stone-400 font-semibold">Direct WhatsApp / Email Integration</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Send automated check-ins or session reminders directly to {selectedClient.name} via their registered phone or email address.
                  </p>
                  <div className="flex gap-2 pt-1">
                    <input
                      type="text"
                      placeholder="Type a quick check-in message..."
                      className="flex-1 px-3 py-2 bg-white border border-stone-200 rounded-xl text-xs outline-none focus:border-[#237A88]"
                    />
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-[#237A88] text-white rounded-xl text-xs font-bold hover:bg-[#1C646F] transition-all">
                      <Send size={13} />
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* SESSION NOTE / FORM MODAL */}
      {activeSessionNote && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl border border-stone-100">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-[#237A88]" />
                <h3 className="font-bold text-stone-900 text-sm">
                  {activeSessionNote.num ? `Session ${activeSessionNote.num} Notes` : 'Intake & Consent Form Details'}
                </h3>
              </div>
              <button onClick={() => setActiveSessionNote(null)} className="p-1 hover:bg-stone-100 rounded-lg text-stone-400">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-700">
              {activeSessionNote.num ? (
                <>
                  <div className="flex justify-between bg-stone-50 p-3 rounded-xl">
                    <span><strong>Date:</strong> {activeSessionNote.date}</span>
                    <span><strong>Time:</strong> {activeSessionNote.time}</span>
                  </div>
                  <div className="space-y-1 bg-stone-50 p-3 rounded-xl">
                    <p className="font-bold text-stone-900">Summary & Observations:</p>
                    <p className="text-stone-600 leading-relaxed">{activeSessionNote.summary}</p>
                  </div>
                </>
              ) : (
                <div className="space-y-2 bg-stone-50 p-3 rounded-xl">
                  <p className="font-bold text-stone-900">Verified Client Documentation</p>
                  <p className="text-stone-600">Client has successfully filled out all mandatory intake questionnaires and digital therapy consent forms prior to commencement of sessions.</p>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveSessionNote(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT PROFILE MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <form onSubmit={handleSaveEdit} className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-stone-100 text-xs">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-bold text-stone-900 text-sm">Edit Client Profile</h3>
              <button type="button" onClick={() => setIsEditModalOpen(false)} className="text-stone-400 hover:text-stone-600">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-semibold text-stone-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700">Email Address</label>
                <input
                  type="email"
                  required
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700">Phone Number</label>
                <input
                  type="text"
                  required
                  value={editFormData.phone}
                  onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-stone-700">Gender</label>
                  <select
                    value={editFormData.gender}
                    onChange={(e) => setEditFormData({ ...editFormData, gender: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Date of Birth</label>
                  <input
                    type="text"
                    placeholder="e.g. 12 May 1995"
                    value={editFormData.dob}
                    onChange={(e) => setEditFormData({ ...editFormData, dob: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-stone-100 text-stone-600 rounded-xl font-semibold hover:bg-stone-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#237A88] text-white rounded-xl font-bold shadow-sm hover:bg-[#1C646F]"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ADD CLIENT WORKFLOW MODAL */}
      {modalStep !== null && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-stone-100 text-xs">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-bold text-stone-900 text-sm">
                {modalStep === 'addForm' ? 'Add Client Details' : 'Schedule Initial Booking'}
              </h3>
              <button onClick={() => setModalStep(null)} className="text-stone-400 hover:text-stone-600">
                <X size={16} />
              </button>
            </div>

            {modalStep === 'addForm' ? (
              <form onSubmit={(e) => { e.preventDefault(); setModalStep('newBooking'); }} className="space-y-3">
                <div>
                  <label className="font-semibold text-stone-700">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter client name"
                    value={addFormData.name}
                    onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="client@example.com"
                    value={addFormData.email}
                    onChange={(e) => setAddFormData({ ...addFormData, email: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Phone Number</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 XXXXXXXXXX"
                    value={addFormData.phone}
                    onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold text-stone-700">Gender</label>
                    <select
                      value={addFormData.gender}
                      onChange={(e) => setAddFormData({ ...addFormData, gender: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-stone-700">Date of Birth</label>
                    <input
                      type="text"
                      placeholder="e.g. 15 Aug 1996"
                      value={addFormData.dob}
                      onChange={(e) => setAddFormData({ ...addFormData, dob: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Case Summary / Initial Notes</label>
                  <textarea
                    rows="2"
                    placeholder="Primary concerns or presentation..."
                    value={addFormData.caseSummary}
                    onChange={(e) => setAddFormData({ ...addFormData, caseSummary: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88] resize-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalStep(null)}
                    className="px-4 py-2 bg-stone-100 text-stone-600 rounded-xl font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#237A88] text-white rounded-xl font-bold shadow-sm hover:bg-[#1C646F]"
                  >
                    Next: Booking Details
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleAddClientAndBooking} className="space-y-3">
                <p className="text-stone-500 font-medium">Set up the initial session details for <strong>{addFormData.name}</strong>.</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold text-stone-700">Session Date</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mar 02"
                      value={bookingFormData.date}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, date: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-stone-700">Time Slot</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 14:00"
                      value={bookingFormData.time}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, time: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Booking / Session Notes</label>
                  <textarea
                    rows="2"
                    placeholder="Initial intake session structure..."
                    value={bookingFormData.notes}
                    onChange={(e) => setBookingFormData({ ...bookingFormData, notes: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88] resize-none"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={handleAddClientOnly}
                    className="text-stone-500 font-bold hover:underline"
                  >
                    Skip Booking & Save Only
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#237A88] text-white rounded-xl font-bold shadow-sm hover:bg-[#1C646F]"
                  >
                    Save Client & Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}