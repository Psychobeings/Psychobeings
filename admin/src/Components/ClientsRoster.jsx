import React, { useState } from 'react';
import { 
  Search, 
  ArrowUpDown, 
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
  UserPlus,
  PlusCircle,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  ChevronRight,
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
    billing: { totalEarned: 4500, sessions: 3, pendingDues: 0, history: [
      { id: 'b-1', date: 'Jan 10', amount: 1500, status: 'Paid', method: 'UPI' },
      { id: 'b-2', date: 'Jan 17', amount: 1500, status: 'Paid', method: 'Credit Card' },
      { id: 'b-3', date: 'Jan 24', amount: 1500, status: 'Paid', method: 'UPI' }
    ] }
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
    billing: { totalEarned: 3000, sessions: 2, pendingDues: 1500, history: [
      { id: 'b-4', date: 'Feb 01', amount: 1500, status: 'Paid', method: 'UPI' },
      { id: 'b-5', date: 'Feb 08', amount: 1500, status: 'Pending', method: 'Net Banking' }
    ] }
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
    billing: { totalEarned: 1500, sessions: 1, pendingDues: 0, history: [
      { id: 'b-6', date: 'Feb 12', amount: 1500, status: 'Paid', method: 'UPI' }
    ] }
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
    caseSummary: 'Initial consultation preparation and diagnostic charting.',
    stats: { completed: 0, upcoming: 1, cancelled: 0, total: 1 },
    suggestedSessions: 8,
    sessionHistory: [],
    billing: { totalEarned: 0, sessions: 0, pendingDues: 1500, history: [
      { id: 'b-7', date: 'Upcoming', amount: 1500, status: 'Pending', method: 'Cash' }
    ] }
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
    billing: { totalEarned: 6000, sessions: 4, pendingDues: 0, history: [
      { id: 'b-8', date: 'Jan 05', amount: 1500, status: 'Paid', method: 'UPI' },
      { id: 'b-9', date: 'Jan 12', amount: 1500, status: 'Paid', method: 'UPI' },
      { id: 'b-10', date: 'Jan 19', amount: 1500, status: 'Paid', method: 'Credit Card' },
      { id: 'b-11', date: 'Jan 26', amount: 1500, status: 'Paid', method: 'UPI' }
    ] }
  },
  {
    id: 'c-106',
    name: 'Chris Wilson',
    status: 'Inactive',
    email: 'chris.w@example.com',
    phone: '+91 9655443322',
    gender: 'Male',
    dob: '14 Oct 1994',
    intakeFilled: true,
    consentFilled: true,
    caseSummary: 'Paused therapy due to personal travel commitments.',
    stats: { completed: 0, upcoming: 0, cancelled: 1, total: 1 },
    suggestedSessions: 6,
    sessionHistory: [],
    billing: { totalEarned: 0, sessions: 0, pendingDues: 500, history: [
      { id: 'b-12', date: 'Feb 02', amount: 500, status: 'Pending', method: 'UPI' }
    ] }
  }
];

export default function ClientsData() {
  const [clients, setClients] = useState(INITIAL_CLIENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedClient, setSelectedClient] = useState(null);
  const [activeTab, setActiveTab] = useState('Therapy Journey');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  // Modal Navigation & Sub-workflows
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
  const [activeSessionNote, setActiveSessionNote] = useState(null);

  // New session form state for existing profile
  const [isAddingSession, setIsAddingSession] = useState(false);
  const [newSessionData, setNewSessionData] = useState({ date: '', time: '', summary: '' });

  // Edit and Add Form States
  const [editFormData, setEditFormData] = useState({ name: '', email: '', phone: '', gender: 'Male', dob: '' });
  const [addFormData, setAddFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    gender: 'Male', 
    dob: '', 
    caseSummary: '',
    suggestedSessions: 8,
    sessionDate: '',
    sessionTime: '',
    sessionNotes: ''
  });

  const filteredClients = clients.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenProfile = (client) => {
    setSelectedClient(client);
    setActiveTab('Therapy Journey');
    setIsAddingSession(false);
    setActiveSessionNote(null);
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

  const handleAddNewClient = (e) => {
    e.preventDefault();
    const newId = `c-${Date.now().toString().slice(-3)}`;
    const hasBooking = addFormData.sessionDate && addFormData.sessionTime;

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
      caseSummary: addFormData.caseSummary || 'Initial intake assessment and diagnostic charting.',
      stats: { 
        completed: 0, 
        upcoming: hasBooking ? 1 : 0, 
        cancelled: 0, 
        total: hasBooking ? 1 : 0 
      },
      suggestedSessions: Number(addFormData.suggestedSessions) || 8,
      sessionHistory: hasBooking ? [
        {
          id: `s-${Date.now().toString().slice(-4)}`,
          num: 1,
          date: addFormData.sessionDate,
          time: addFormData.sessionTime,
          summary: addFormData.sessionNotes || 'Scheduled initial therapy session.'
        }
      ] : [],
      billing: { 
        totalEarned: 0, 
        sessions: 0, 
        pendingDues: hasBooking ? 1500 : 0, 
        history: hasBooking ? [
          { id: `b-${Date.now().toString().slice(-4)}`, date: addFormData.sessionDate, amount: 1500, status: 'Pending', method: 'UPI' }
        ] : [] 
      }
    };

    setClients([newClientObj, ...clients]);
    setAddFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      gender: 'Male', 
      dob: '', 
      caseSummary: '', 
      suggestedSessions: 8,
      sessionDate: '',
      sessionTime: '',
      sessionNotes: ''
    });
    setIsAddClientModalOpen(false);
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
      summary: newSessionData.summary || 'Session conducted successfully.'
    };

    const updatedHistory = [sessionObj, ...selectedClient.sessionHistory];
    const updatedStats = {
      ...selectedClient.stats,
      completed: selectedClient.stats.completed + 1,
      total: selectedClient.stats.total + 1
    };

    const updatedBilling = {
      ...selectedClient.billing,
      totalEarned: selectedClient.billing.totalEarned + 1500,
      sessions: selectedClient.billing.sessions + 1,
      history: [
        { id: `b-${Date.now().toString().slice(-4)}`, date: newSessionData.date || 'Today', amount: 1500, status: 'Paid', method: 'UPI' },
        ...selectedClient.billing.history
      ]
    };

    const updatedClient = {
      ...selectedClient,
      sessionHistory: updatedHistory,
      stats: updatedStats,
      billing: updatedBilling
    };

    setClients(clients.map(c => c.id === selectedClient.id ? updatedClient : c));
    setSelectedClient(updatedClient);
    setNewSessionData({ date: '', time: '', summary: '' });
    setIsAddingSession(false);
  };

  const handleDeleteClient = (id, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this client record?')) {
      setClients(prev => prev.filter(c => c.id !== id));
      if (selectedClient?.id === id) setSelectedClient(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20 font-sans text-stone-800 px-4 sm:px-6">
      
      {/* Top Header & Search Toolbar */}
      <div className="bg-white p-6 rounded-[2.5rem] border border-stone-200/80 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-xl font-black text-stone-900 tracking-tight">Clients Database</h1>
            <p className="text-xs text-stone-500 font-medium mt-0.5">Manage clinical profiles, session logs, therapy roadmaps, and billing records.</p>
          </div>
          
          <button
            onClick={() => setIsAddClientModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-2xl text-xs font-bold shadow-md shadow-[#237A88]/20 transition-all cursor-pointer shrink-0"
          >
            <UserPlus size={16} />
            <span>Add New Client</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
          <div className="relative flex-1 min-w-[280px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by client name, email, or phone number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] text-xs transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-stone-50 border border-stone-200 rounded-2xl p-1 text-xs font-bold">
              {['All', 'Active', 'Inactive'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    statusFilter === status 
                      ? 'bg-[#237A88] text-white shadow-xs' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <button className="flex items-center gap-1.5 px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-stone-700 rounded-2xl text-xs font-semibold shadow-xs hover:bg-stone-100 transition-all cursor-pointer">
              <ArrowUpDown size={14} />
              <span>Sort</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredClients.map((client) => {
          const initials = client.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

          return (
            <div 
              key={client.id}
              onClick={() => handleOpenProfile(client)}
              className="bg-white rounded-[2rem] border border-stone-200/80 p-6 shadow-sm space-y-4 hover:shadow-md hover:border-[#237A88]/40 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#237A88] text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-[#237A88]/20 group-hover:scale-105 transition-transform">
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm group-hover:text-[#237A88] transition-colors">{client.name}</h3>
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mt-1 ${
                        client.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-600'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${client.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`} />
                        {client.status}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleDeleteClient(client.id, e)}
                    className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all cursor-pointer"
                    title="Delete Client"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                <div className="space-y-2 text-xs text-stone-600 pt-1">
                  <div className="flex items-center gap-2.5 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                    <Phone size={13} className="text-[#237A88]" />
                    <span className="font-semibold text-stone-700">{client.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                    <Mail size={13} className="text-[#237A88]" />
                    <span className="font-semibold text-stone-700 truncate">{client.email}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-stone-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400 font-bold uppercase text-[10px]">Sessions Completed</span>
                  <span className="font-black text-stone-900 bg-stone-100 px-2.5 py-0.5 rounded-lg">{client.stats.completed} / {client.suggestedSessions}</span>
                </div>

                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#237A88] h-full rounded-full transition-all" 
                    style={{ width: `${Math.round((client.stats.completed / client.suggestedSessions) * 100)}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-[#237A88] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Open Clinical Profile</span>
                    <ChevronRight size={14} />
                  </span>
                  <span className="text-xs font-bold text-stone-700 bg-stone-50 px-2.5 py-1 rounded-xl border border-stone-200/60">
                    ₹{client.billing.totalEarned} Earned
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= CLIENT PROFILE MODAL ================= */}
      {selectedClient && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-3xl w-full my-8 space-y-6 shadow-2xl border border-stone-200 relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Profile Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-stone-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#237A88] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#237A88]/20">
                  {selectedClient.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-black text-stone-900">{selectedClient.name}</h2>
                    <span className={`text-[10px] font-extrabold px-3 py-0.5 rounded-full ${
                      selectedClient.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-600'
                    }`}>
                      ● {selectedClient.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-stone-500 font-medium mt-1">
                    <span className="flex items-center gap-1"><Mail size={12} className="text-[#237A88]" /> {selectedClient.email}</span>
                    <span className="flex items-center gap-1"><Phone size={12} className="text-[#237A88]" /> {selectedClient.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-stone-400 font-medium mt-1">
                    {selectedClient.dob && <span>🎂 {selectedClient.dob}</span>}
                    <span>👤 Gender: {selectedClient.gender || 'Male'}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(selectedClient)}
                  className="flex items-center gap-1.5 px-3.5 py-2 border border-stone-200 hover:bg-stone-50 text-stone-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  <Edit3 size={14} />
                  <span>Edit</span>
                </button>
                <button 
                  onClick={() => setSelectedClient(null)}
                  className="h-8 w-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold border ${
                selectedClient.intakeFilled ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-stone-50 text-stone-400 border-stone-200'
              }`}>
                <CheckCircle2 size={14} /> Intake Form Verified
              </span>
              <span className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold border ${
                selectedClient.consentFilled ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-stone-50 text-stone-400 border-stone-200'
              }`}>
                <ShieldCheck size={14} /> Consent Agreement Signed
              </span>
            </div>

            {/* Profile Navigation Tabs */}
            <div className="flex border-b border-stone-200 text-xs font-bold text-stone-500 gap-8">
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
                    onClick={() => { setActiveTab(tab.label); setActiveSessionNote(null); }}
                    className={`pb-3 flex items-center gap-2 transition-all border-b-2 cursor-pointer ${
                      isActive 
                        ? 'border-[#237A88] text-[#237A88] font-black' 
                        : 'border-transparent hover:text-stone-800'
                    }`}
                  >
                    <Icon size={15} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* ================= TAB 1: THERAPY JOURNEY ================= */}
            {activeTab === 'Therapy Journey' && !activeSessionNote && (
              <div className="space-y-6">
                
                {/* Case Summary Card */}
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-black text-stone-900 uppercase tracking-wider">
                      <FileText size={15} className="text-[#237A88]" />
                      <span>Clinical Case Summary</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">Secure Record</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-medium">
                    {selectedClient.caseSummary}
                  </p>
                </div>

                {/* Session Tracker & Stats */}
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-black text-stone-900 uppercase tracking-wider">
                      <Calendar size={15} className="text-[#237A88]" />
                      <span>Session Tracker & Analytics</span>
                    </div>
                    <button
                      onClick={() => setIsAddingSession(!isAddingSession)}
                      className="flex items-center gap-1.5 px-3.5 py-2 bg-[#237A88] text-white rounded-xl text-xs font-bold hover:bg-[#1C646F] transition-all cursor-pointer shadow-xs"
                    >
                      <PlusCircle size={14} />
                      <span>{isAddingSession ? 'Cancel' : 'Record Session'}</span>
                    </button>
                  </div>

                  {/* Add Session Form Drawer */}
                  {isAddingSession && (
                    <form onSubmit={handleSaveNewSession} className="bg-white p-5 rounded-2xl border border-[#237A88]/40 space-y-3.5 text-xs shadow-sm animate-in fade-in duration-200">
                      <p className="font-black text-[#237A88] text-sm">Add New Session Notes & Metrics</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="font-bold text-stone-700">Session Date</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Feb 28"
                            value={newSessionData.date}
                            onChange={(e) => setNewSessionData({ ...newSessionData, date: e.target.value })}
                            className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-stone-700">Time</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 16:00"
                            value={newSessionData.time}
                            onChange={(e) => setNewSessionData({ ...newSessionData, time: e.target.value })}
                            className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="font-bold text-stone-700">Session Summary & Therapeutic Progress</label>
                        <textarea
                          rows="3"
                          required
                          placeholder="Discussed cognitive reframing techniques and homework completion..."
                          value={newSessionData.summary}
                          onChange={(e) => setNewSessionData({ ...newSessionData, summary: e.target.value })}
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88] resize-none"
                        />
                      </div>
                      <div className="flex justify-end gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setIsAddingSession(false)}
                          className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl font-bold cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl font-bold shadow-sm cursor-pointer"
                        >
                          Save & Log Session
                        </button>
                      </div>
                    </form>
                  )}

                  {/* 4 Analytics KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-1">
                    <div className="bg-white p-3 rounded-2xl border border-stone-200/80 shadow-xs">
                      <p className="text-lg font-black text-emerald-700">{selectedClient.stats.completed}</p>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mt-0.5">Completed</p>
                    </div>

                    <div className="bg-white p-3 rounded-2xl border border-stone-200/80 shadow-xs">
                      <p className="text-lg font-black text-sky-700">{selectedClient.stats.upcoming}</p>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mt-0.5">Upcoming</p>
                    </div>

                    <div className="bg-white p-3 rounded-2xl border border-stone-200/80 shadow-xs">
                      <p className="text-lg font-black text-rose-700">{selectedClient.stats.cancelled}</p>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mt-0.5">Cancelled</p>
                    </div>

                    <div className="bg-white p-3 rounded-2xl border border-stone-200/80 shadow-xs">
                      <p className="text-lg font-black text-indigo-700">{selectedClient.stats.total}</p>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mt-0.5">Total Sessions</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-xs font-bold text-stone-600">
                      <span>Progress toward target ({selectedClient.stats.completed} of {selectedClient.suggestedSessions} suggested)</span>
                      <span>{Math.round((selectedClient.stats.completed / selectedClient.suggestedSessions) * 100)}%</span>
                    </div>
                    <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#237A88] h-full rounded-full transition-all" 
                        style={{ width: `${Math.min(100, (selectedClient.stats.completed / selectedClient.suggestedSessions) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Session History Log List */}
                <div className="space-y-3">
                  <h4 className="font-black text-stone-900 text-xs uppercase tracking-wider">Session History Log</h4>
                  
                  {selectedClient.sessionHistory.length === 0 ? (
                    <div className="text-center py-8 text-stone-400 text-xs font-medium bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                      No session history logs recorded yet.
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                      {selectedClient.sessionHistory.map((sess) => (
                        <div key={sess.id} className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2 hover:border-[#237A88]/40 transition-all">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="px-3 py-1.5 bg-[#237A88]/10 text-[#237A88] rounded-xl font-bold text-xs">
                                {sess.date}
                              </div>
                              <div>
                                <h5 className="font-bold text-stone-900 text-xs">Session #{sess.num}</h5>
                                <p className="text-[10px] text-stone-400 font-bold flex items-center gap-1 mt-0.5">
                                  <Clock size={11} /> {sess.time}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => setActiveSessionNote(sess)}
                              className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                            >
                              <FileText size={13} />
                              <span>View Notes</span>
                            </button>
                          </div>
                          <p className="text-xs text-stone-600 leading-relaxed font-medium">
                            {sess.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* ================= VIEW INDIVIDUAL SESSION NOTE SUB-VIEW ================= */}
            {activeTab === 'Therapy Journey' && activeSessionNote && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#237A88] text-white flex items-center justify-center font-bold text-xs">
                      #{activeSessionNote.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm">Session #{activeSessionNote.num} Clinical Record</h3>
                      <p className="text-xs text-stone-500">{activeSessionNote.date} at {activeSessionNote.time}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveSessionNote(null)}
                    className="px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    ← Back to Journey
                  </button>
                </div>

                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80 space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-stone-400 uppercase tracking-wider text-[10px]">Session Notes & Clinical Summary</h4>
                    <p className="text-stone-800 font-medium leading-relaxed bg-white p-4 rounded-xl border border-stone-200/60">
                      {activeSessionNote.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                      <span className="text-[10px] font-bold text-stone-400 uppercase">Therapeutic Modality</span>
                      <p className="font-bold text-stone-800">CBT & Mindfulness Interventions</p>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                      <span className="text-[10px] font-bold text-stone-400 uppercase">Next Steps / Homework</span>
                      <p className="font-bold text-stone-800">Daily mood journaling & thought records</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 2: BILLING ================= */}
            {activeTab === 'Billing' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-emerald-50/80 border border-emerald-200 p-4 rounded-2xl space-y-1">
                    <p className="text-[10px] font-black text-emerald-800 uppercase tracking-wider">Total Earned</p>
                    <p className="text-2xl font-black text-emerald-900">₹{selectedClient.billing.totalEarned}</p>
                  </div>
                  <div className="bg-[#237A88]/10 border border-[#237A88]/20 p-4 rounded-2xl space-y-1">
                    <p className="text-[10px] font-black text-[#237A88] uppercase tracking-wider">Billed Sessions</p>
                    <p className="text-2xl font-black text-[#237A88]">{selectedClient.billing.sessions}</p>
                  </div>
                  <div className="bg-rose-50/80 border border-rose-200 p-4 rounded-2xl space-y-1">
                    <p className="text-[10px] font-black text-rose-800 uppercase tracking-wider">Pending Dues</p>
                    <p className="text-2xl font-black text-rose-900">₹{selectedClient.billing.pendingDues}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2 text-xs">
                    <select className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5 text-stone-700 font-bold outline-none">
                      <option>All Payment Statuses</option>
                    </select>
                  </div>
                  <button 
                    onClick={() => alert(`Exporting billing records for ${selectedClient.name}...`)}
                    className="flex items-center gap-1.5 px-4 py-2 border border-stone-200 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-50 transition-all cursor-pointer"
                  >
                    <Download size={14} />
                    <span>Export CSV</span>
                  </button>
                </div>

                {/* Billing History Table */}
                <div className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-50">
                  <div className="bg-stone-100/70 px-4 py-3 border-b border-stone-200 flex items-center justify-between text-xs font-bold text-stone-700 uppercase tracking-wider">
                    <span>Transaction Date</span>
                    <span>Method</span>
                    <span>Amount</span>
                    <span>Status</span>
                  </div>
                  <div className="divide-y divide-stone-200/60 max-h-60 overflow-y-auto">
                    {selectedClient.billing.history.length === 0 ? (
                      <div className="text-center py-8 text-stone-400 text-xs font-medium">
                        No billing transactions recorded.
                      </div>
                    ) : (
                      selectedClient.billing.history.map((item) => (
                        <div key={item.id} className="px-4 py-3 flex items-center justify-between text-xs bg-white">
                          <span className="font-bold text-stone-800">{item.date}</span>
                          <span className="font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg">{item.method}</span>
                          <span className="font-black text-stone-900">₹{item.amount}</span>
                          <span className={`font-bold px-2.5 py-1 rounded-full text-[10px] ${
                            item.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 3: FOLLOW UPS ================= */}
            {activeTab === 'Follow Ups' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-stone-900 text-xs uppercase tracking-wider">Automated Assistant Follow-ups</h4>
                    <span className="text-xs font-bold text-[#237A88] bg-[#237A88]/10 px-3 py-1 rounded-full">WhatsApp / Email</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-medium">
                    Send instant follow-up reminders or check-in prompts directly to {selectedClient.name} via the Psychobeings AI Assistant.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-900">Session Follow-up Check-in</span>
                        <span className="text-[10px] text-stone-400 font-bold">Automated template</span>
                      </div>
                      <p className="text-stone-600 italic">
                        "Hi {selectedClient.name}, checking in on how you've been feeling since our last session. Would you like to schedule our next follow-up?"
                      </p>
                      <button 
                        onClick={() => alert(`Follow-up reminder sent to ${selectedClient.name}!`)}
                        className="flex items-center gap-1.5 px-4 py-2 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs"
                      >
                        <Send size={13} />
                        <span>Send Follow-Up Message Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-stone-100 flex justify-end">
              <button 
                onClick={() => setSelectedClient(null)}
                className="px-6 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= ADD NEW CLIENT MODAL ================= */}
      {isAddClientModalOpen && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-lg w-full my-8 space-y-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                  <UserPlus size={20} />
                </div>
                <div>
                  <h3 className="text-base font-black text-stone-900">Add New Client</h3>
                  <p className="text-xs text-stone-500">Create a clinical record and optional initial booking.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAddClientModalOpen(false)}
                className="h-8 w-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAddNewClient} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-stone-700">Client Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={addFormData.name}
                  onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="priya@example.com"
                    value={addFormData.email}
                    onChange={(e) => setAddFormData({ ...addFormData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Phone Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 43210"
                    value={addFormData.phone}
                    onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Gender</label>
                  <select
                    value={addFormData.gender}
                    onChange={(e) => setAddFormData({ ...addFormData, gender: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Date of Birth</label>
                  <input
                    type="text"
                    placeholder="15 Aug 1996"
                    value={addFormData.dob}
                    onChange={(e) => setAddFormData({ ...addFormData, dob: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700">Initial Case Summary / Presenting Concern</label>
                <textarea
                  rows="2"
                  placeholder="Briefly describe presenting concern..."
                  value={addFormData.caseSummary}
                  onChange={(e) => setAddFormData({ ...addFormData, caseSummary: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88] resize-none"
                />
              </div>

              <div className="pt-2 border-t border-stone-100 space-y-3">
                <p className="font-black text-stone-900">Schedule Initial Session (Optional)</p>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Date e.g. Mar 01"
                    value={addFormData.sessionDate}
                    onChange={(e) => setAddFormData({ ...addFormData, sessionDate: e.target.value })}
                    className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                  <input
                    type="text"
                    placeholder="Time e.g. 14:00"
                    value={addFormData.sessionTime}
                    onChange={(e) => setAddFormData({ ...addFormData, sessionTime: e.target.value })}
                    className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2.5 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddClientModalOpen(false)}
                  className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white font-bold rounded-xl shadow-md cursor-pointer"
                >
                  Save & Create Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= EDIT CLIENT PROFILE MODAL ================= */}
      {isEditModalOpen && selectedClient && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center pb-3 border-b border-stone-100">
              <h3 className="text-base font-black text-stone-900">Edit Client Profile</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="h-7 w-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                <X size={15} />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-stone-700">Name</label>
                <input
                  type="text"
                  required
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-stone-700">Email</label>
                <input
                  type="email"
                  required
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-stone-700">Phone</label>
                <input
                  type="text"
                  required
                  value={editFormData.phone}
                  onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 bg-stone-100 font-bold rounded-xl text-stone-600">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#237A88] text-white font-bold rounded-xl">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}