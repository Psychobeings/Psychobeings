import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  LayoutGrid,
  List,
  Mail,
  Phone,
  ChevronRight,
  X,
  Calendar as CalendarIcon,
  FileText,
  UserCheck,
  UserPlus,
  Upload,
  UserX,
  Archive
} from 'lucide-react';

export default function ClientManagement() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('Active');
  const [selectedClient, setSelectedClient] = useState(null);

  // Initial Client Directory State
  const [clients, setClients] = useState([
    { id: 1, name: 'Alex Morgan', email: 'alex.morgan@example.com', phone: '+1 (555) 019-2834', status: 'Active', risk: 'Low', lastSession: '18 Aug 2026', totalSessions: 12, notes: 'Showing strong progress with CBT techniques. Sleep routines improved.', avatarColor: 'bg-[#0F2D32]' },
    { id: 2, name: 'Blake Taylor', email: 'blake.t@example.com', phone: '+1 (555) 014-9921', status: 'Active', risk: 'Low', lastSession: '20 Aug 2026', totalSessions: 8, notes: 'Focusing on stress reduction and mindfulness routines.', avatarColor: 'bg-[#1B7B87]' },
    { id: 3, name: 'Cameron Reed', email: 'cameron.reed@example.com', phone: '+1 (555) 017-4832', status: 'Active', risk: 'Low', lastSession: '14 Aug 2026', totalSessions: 15, notes: 'Workplace anxiety goals met. Transitioning to monthly check-ins.', avatarColor: 'bg-[#125861]' },
    { id: 4, name: 'Dakota Vance', email: 'dakota.v@example.com', phone: '+1 (555) 012-3049', status: 'Active', risk: 'High', lastSession: '05 Aug 2026', totalSessions: 4, notes: 'High drop-off risk. Follow-up email sent on Aug 15th.', avatarColor: 'bg-amber-700' },
    { id: 5, name: 'Emerson Brooks', email: 'e.brooks@example.com', phone: '+1 (555) 018-7741', status: 'Active', risk: 'Low', lastSession: '22 Aug 2026', totalSessions: 9, notes: 'Narrative therapy exercises assigned for weekly reflection.', avatarColor: 'bg-teal-700' },
    { id: 6, name: 'Finley Harper', email: 'finley.h@example.com', phone: '+1 (555) 015-6209', status: 'Inactive', risk: 'Medium', lastSession: '10 Jun 2026', totalSessions: 3, notes: 'Client paused sessions due to personal travel.', avatarColor: 'bg-slate-600' },
  ]);

  // Multi-Field Search & Filter Logic
  const filteredClients = useMemo(() => {
    return clients.filter(client => {
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        client.name.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query) ||
        client.phone.includes(query);
      const matchesRisk = riskFilter === 'all' || client.risk.toLowerCase() === riskFilter.toLowerCase();
      const matchesStatus = client.status === statusFilter;
      return matchesSearch && matchesRisk && matchesStatus;
    });
  }, [clients, searchTerm, riskFilter, statusFilter]);

  // Toggle Client Status (Active / Inactive / Archived)
  const handleStatusChange = (clientId, newStatus) => {
    setClients(prev => prev.map(c => c.id === clientId ? { ...c, status: newStatus } : c));
    if (selectedClient && selectedClient.id === clientId) {
      setSelectedClient(prev => ({ ...prev, status: newStatus }));
    }
  };

  return (
    <div className="p-8 space-y-6">
      
      {/* HEADER & TOP ACTIONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Client Directory</h1>
          <p className="text-xs text-slate-500">Manage, inspect, and track client profiles across your practice.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-all shadow-sm">
            <Upload size={14} />
            <span>Import CSV</span>
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#1B7B87]/20 transition-all">
            <UserPlus size={14} />
            <span>Add Client</span>
          </button>
        </div>
      </div>

      {/* FILTER & CONTROL BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        
        {/* Search Bar */}
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search name, email, or phone..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1B7B87] transition-all"
          />
        </div>

        {/* Status & Risk Filters */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Status Tab Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            {['Active', 'Inactive', 'Archived'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  statusFilter === status
                    ? 'bg-white text-[#1B7B87] shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Risk Level Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Filter size={13} /> Risk:
            </span>
            {['all', 'low', 'medium', 'high'].map((level) => (
              <button
                key={level}
                onClick={() => setRiskFilter(level)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                  riskFilter === level
                    ? 'bg-[#0F2D32] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'grid' ? 'bg-white text-[#1B7B87] shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'list' ? 'bg-white text-[#1B7B87] shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredClients.map((client) => (
            <div 
              key={client.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-[#1B7B87]/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-xl ${client.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{client.name}</h3>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full inline-block mt-1">
                        {client.status}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    client.risk === 'High' 
                      ? 'bg-rose-50 text-rose-700 border-rose-200' 
                      : client.risk === 'Medium'
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    {client.risk} Risk
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-2 truncate">
                    <Mail size={14} className="text-slate-400 shrink-0" />
                    <span className="truncate">{client.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-slate-400 shrink-0" />
                    <span>{client.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Last: {client.lastSession}</span>
                <button 
                  onClick={() => setSelectedClient(client)}
                  className="px-3 py-1.5 bg-[#0F2D32] hover:bg-[#125861] text-white font-semibold rounded-lg text-[11px] transition-all flex items-center gap-1"
                >
                  <span>Profile</span>
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-6">Client Name</th>
                <th className="py-3.5 px-6">Email Address</th>
                <th className="py-3.5 px-6">Phone</th>
                <th className="py-3.5 px-6">Risk Level</th>
                <th className="py-3.5 px-6">Last Session</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50/80 transition-all">
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-lg ${client.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0`}>
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-bold text-slate-900">{client.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-6 text-slate-600">{client.email}</td>
                  <td className="py-3.5 px-6 text-slate-600">{client.phone}</td>
                  <td className="py-3.5 px-6">
                    <span className={`px-2.5 py-0.5 rounded-full font-semibold text-[11px] border ${
                      client.risk === 'High' 
                        ? 'bg-rose-50 text-rose-700 border-rose-200' 
                        : client.risk === 'Medium'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {client.risk}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-slate-500">{client.lastSession}</td>
                  <td className="py-3.5 px-6 text-right">
                    <button 
                      onClick={() => setSelectedClient(client)}
                      className="px-3 py-1 bg-slate-100 hover:bg-[#1B7B87] hover:text-white text-slate-700 font-semibold rounded-lg text-xs transition-all"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CLIENT PROFILE DRAWER */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col justify-between">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-xl ${selectedClient.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                  {selectedClient.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{selectedClient.name}</h3>
                  <p className="text-xs text-slate-500">Client ID: #{selectedClient.id}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedClient(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Body Content */}
            <div className="p-6 space-y-6 flex-1 overflow-y-auto text-xs">
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Contact Details</p>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail size={14} className="text-[#1B7B87]" />
                  <span>{selectedClient.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone size={14} className="text-[#1B7B87]" />
                  <span>{selectedClient.phone}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100">
                  <div className="flex items-center gap-1.5 text-teal-800 font-medium mb-1">
                    <CalendarIcon size={14} />
                    <span>Last Session</span>
                  </div>
                  <p className="font-bold text-slate-900 text-sm">{selectedClient.lastSession}</p>
                </div>

                <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-medium mb-1">
                    <UserCheck size={14} />
                    <span>Completed</span>
                  </div>
                  <p className="font-bold text-slate-900 text-sm">{selectedClient.totalSessions} Sessions</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px] flex items-center gap-1">
                  <FileText size={13} /> Clinical Summary & Progress Notes
                </p>
                <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-600 leading-relaxed italic">
                  "{selectedClient.notes}"
                </p>
              </div>

              {/* Status Management Actions */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Account Actions</p>
                <div className="flex gap-2">
                  {selectedClient.status === 'Active' ? (
                    <button 
                      onClick={() => handleStatusChange(selectedClient.id, 'Inactive')}
                      className="flex-1 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-1"
                    >
                      <UserX size={14} /> Mark Inactive
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleStatusChange(selectedClient.id, 'Active')}
                      className="flex-1 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-1"
                    >
                      <UserCheck size={14} /> Reactivate Client
                    </button>
                  )}

                  <button 
                    onClick={() => handleStatusChange(selectedClient.id, 'Archived')}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-all flex items-center gap-1"
                  >
                    <Archive size={14} /> Archive
                  </button>
                </div>
              </div>

            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex gap-2">
              <button className="flex-1 py-2.5 bg-[#1B7B87] text-white font-semibold rounded-xl text-xs hover:bg-[#125861] transition-all">
                Schedule Session
              </button>
              <button 
                onClick={() => setSelectedClient(null)}
                className="px-4 py-2.5 bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs hover:bg-slate-300 transition-all"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}