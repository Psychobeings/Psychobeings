import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Phone, 
  Mail, 
  Clock, 
  FileText, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

const INITIAL_CLIENTS = [
  {
    id: 'PB-2026-001',
    name: 'Aarav Sharma',
    age: 26,
    gender: 'Male',
    contact: '+91 98765 43210',
    email: 'aarav.s@example.com',
    status: 'Active',
    primaryTherapy: 'Cognitive Behavioral Therapy (CBT)',
    lastSession: '2026-08-25',
    nextSession: '2026-09-01 at 10:00 AM',
    totalSessions: 12
  },
  {
    id: 'PB-2026-002',
    name: 'Ananya Verma',
    age: 31,
    gender: 'Female',
    contact: '+91 98123 45678',
    email: 'ananya.v@example.com',
    status: 'Active',
    primaryTherapy: 'Narrative Therapy & Mindfulness',
    lastSession: '2026-08-24',
    nextSession: '2026-08-31 at 02:30 PM',
    totalSessions: 8
  },
  {
    id: 'PB-2026-003',
    name: 'Rohan Mehta',
    age: 19,
    gender: 'Male',
    contact: '+91 97110 22334',
    email: 'rohan.m@example.com',
    status: 'Pending Intake',
    primaryTherapy: 'Adolescent & Academic Support',
    lastSession: 'N/A (Intake Scheduled)',
    nextSession: '2026-08-28 at 04:00 PM',
    totalSessions: 0
  },
  {
    id: 'PB-2026-004',
    name: 'Priya Nair',
    age: 42,
    gender: 'Female',
    contact: '+91 99580 11223',
    email: 'priya.nair@example.com',
    status: 'Inactive',
    primaryTherapy: 'Stress & Burnout Management',
    lastSession: '2026-06-15',
    nextSession: 'Unscheduled',
    totalSessions: 16
  }
];

export default function ClientsRoster() {
  const [clients] = useState(INITIAL_CLIENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Filter Logic
  const filteredClients = clients.filter((client) => {
    const matchesSearch = 
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const activeCount = clients.filter(c => c.status === 'Active').length;
  const pendingCount = clients.filter(c => c.status === 'Pending Intake').length;

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 font-sans text-stone-800">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#237A88]/10 text-[#237A88] text-xs font-semibold">
              <Sparkles size={13} />
              <span>Practice Directory</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">Client Roster</h1>
          <p className="text-xs text-stone-500">Manage intake profiles, therapeutic progress, and active caseloads</p>
        </div>

        <button 
          className="flex items-center justify-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all shadow-md shadow-[#237A88]/20"
        >
          <Plus size={16} />
          <span>New Client Intake</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-stone-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-stone-500">Total Clients</p>
            <p className="text-2xl font-bold text-stone-900 mt-1">{clients.length}</p>
          </div>
          <div className="h-10 w-10 rounded-2xl bg-stone-50 text-stone-600 flex items-center justify-center">
            <Users size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-stone-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-stone-500">Active Caseload</p>
            <p className="text-2xl font-bold text-[#237A88] mt-1">{activeCount}</p>
          </div>
          <div className="h-10 w-10 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center">
            <Sparkles size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-stone-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-stone-500">Pending Intakes</p>
            <p className="text-2xl font-bold text-amber-600 mt-1">{pendingCount}</p>
          </div>
          <div className="h-10 w-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock size={20} />
          </div>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search client by name, ID, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
          />
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <Filter size={15} className="text-stone-400 mr-1 hidden sm:block" />
          {['All', 'Active', 'Pending Intake', 'Inactive'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                statusFilter === status
                  ? 'bg-[#237A88] text-white shadow-sm'
                  : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Client List Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredClients.map((client) => (
          <div 
            key={client.id}
            className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold text-sm">
                  {client.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-stone-900 text-sm">{client.name}</h3>
                    <span className="text-[10px] text-stone-400 font-mono">({client.id})</span>
                  </div>
                  <p className="text-xs text-stone-500">{client.age} yrs • {client.gender}</p>
                </div>
              </div>

              {/* Status Badge */}
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                client.status === 'Active' 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : client.status === 'Pending Intake'
                  ? 'bg-amber-50 text-amber-700 border border-amber-200'
                  : 'bg-stone-100 text-stone-600 border border-stone-200'
              }`}>
                {client.status}
              </span>
            </div>

            {/* Middle Section Details */}
            <div className="bg-stone-50/70 p-3.5 rounded-2xl space-y-2 text-xs text-stone-600">
              <div className="flex items-center justify-between">
                <span className="font-medium text-stone-400">Modalities:</span>
                <span className="font-semibold text-stone-800 truncate max-w-[200px]">{client.primaryTherapy}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-stone-400">Next Session:</span>
                <span className="font-semibold text-[#237A88]">{client.nextSession}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-stone-400">Completed Sessions:</span>
                <span className="font-bold text-stone-800">{client.totalSessions}</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-500 pt-1">
              <div className="flex items-center gap-1.5 truncate">
                <Phone size={13} className="text-stone-400 flex-shrink-0" />
                <span className="truncate">{client.contact}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate">
                <Mail size={13} className="text-stone-400 flex-shrink-0" />
                <span className="truncate">{client.email}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 border-t border-stone-100 pt-3">
              <button 
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#237A88]/10 hover:bg-[#237A88]/20 text-[#237A88] rounded-xl text-xs font-semibold transition-colors"
              >
                <FileText size={14} />
                <span>Case File</span>
              </button>
              <button 
                className="flex items-center justify-center p-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-colors"
                title="Options"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredClients.length === 0 && (
        <div className="bg-white p-12 text-center rounded-3xl border border-stone-100 space-y-3">
          <Users size={32} className="mx-auto text-stone-300" />
          <p className="text-sm font-bold text-stone-700">No clients found</p>
          <p className="text-xs text-stone-400">Try adjusting your search query or status filter.</p>
        </div>
      )}

    </div>
  );
}