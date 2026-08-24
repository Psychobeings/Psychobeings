import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Clock,
  ClipboardList,
  CreditCard,
  BookOpen,
  Settings,
  LogOut,
  Search,
  Bell,
  Plus,
  LayoutGrid,
  List,
  Filter,
  Phone,
  Mail,
  MoreVertical,
  UserPlus,
  Upload,
  ChevronRight
} from 'lucide-react';

export default function PsychobeingsWorkspace() {
  const [activeNav, setActiveNav] = useState('Clients');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('all');

  // Dummy Client Roster Data
  const clientsData = [
    { id: 1, name: 'Alex Morgan', email: 'alex.morgan@example.com', phone: '+1 (555) 019-2834', status: 'Active', risk: 'Low', lastSession: '18 Aug 2026', avatarColor: 'bg-emerald-700' },
    { id: 2, name: 'Blake Taylor', email: 'blake.t@example.com', phone: '+1 (555) 014-9921', status: 'Active', risk: 'Low', lastSession: '20 Aug 2026', avatarColor: 'bg-[#1B7B87]' },
    { id: 3, name: 'Cameron Reed', email: 'cameron.reed@example.com', phone: '+1 (555) 017-4832', status: 'Active', risk: 'Low', lastSession: '14 Aug 2026', avatarColor: 'bg-[#0F2D32]' },
    { id: 4, name: 'Dakota Vance', email: 'dakota.v@example.com', phone: '+1 (555) 012-3049', status: 'Active', risk: 'High', lastSession: '05 Aug 2026', avatarColor: 'bg-amber-700' },
    { id: 5, name: 'Emerson Brooks', email: 'e.brooks@example.com', phone: '+1 (555) 018-7741', status: 'Active', risk: 'Low', lastSession: '22 Aug 2026', avatarColor: 'bg-teal-700' },
    { id: 6, name: 'Finley Harper', email: 'finley.h@example.com', phone: '+1 (555) 015-6209', status: 'Active', risk: 'Low', lastSession: '23 Aug 2026', avatarColor: 'bg-slate-700' },
    { id: 7, name: 'Jordan Hayes', email: 'jordan.hayes@example.com', phone: '+1 (555) 011-8472', status: 'Active', risk: 'Low', lastSession: '21 Aug 2026', avatarColor: 'bg-[#125861]' },
    { id: 8, name: 'Morgan Ellis', email: 'morgan.e@example.com', phone: '+1 (555) 016-3920', status: 'Active', risk: 'Medium', lastSession: '29 Jul 2026', avatarColor: 'bg-[#1B7B87]' },
  ];

  // Filtering Logic
  const filteredClients = clientsData.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === 'all' || client.risk.toLowerCase() === riskFilter.toLowerCase();
    return matchesSearch && matchesRisk;
  });

  return (
    <div className="flex h-screen bg-[#F7FAF9] text-slate-800 font-sans overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-[#0A2226] text-white flex flex-col justify-between shrink-0 shadow-xl border-r border-[#153B42]">
        <div>
          {/* Brand Header */}
          <div className="p-6 flex items-center gap-3 border-b border-[#18444A]">
            <div className="h-9 w-9 bg-[#1B7B87] rounded-xl flex items-center justify-center font-bold text-white shadow-md text-lg">
              P
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-wider text-white">PSYCHOBEINGS</h1>
              <p className="text-[10px] text-[#3CD1E4] font-medium tracking-tight">Wellness & Therapy</p>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="p-4 space-y-1 text-xs font-medium">
            {[
              { id: 'Home', label: 'Home', icon: LayoutDashboard },
              { id: 'Schedule', label: 'Schedule', icon: Calendar },
              { id: 'Sessions', label: 'Sessions', icon: Clock },
              { id: 'Clients', label: 'Clients', icon: Users, badge: clientsData.length },
              { id: 'Follow Ups', label: 'Follow Ups', icon: ClipboardList, alertBadge: '3' },
              { id: 'Tasks', label: 'Tasks & Worksheets', icon: BookOpen },
              { id: 'Billing', label: 'Billing', icon: CreditCard },
              { id: 'Settings', label: 'Settings', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-[#1B7B87] text-white font-semibold shadow-md shadow-[#1B7B87]/30' 
                      : 'text-slate-300 hover:text-white hover:bg-[#12363C]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={17} className={isActive ? 'text-white' : 'text-slate-400'} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-[#12363C] text-slate-300 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                      {item.badge}
                    </span>
                  )}
                  {item.alertBadge && (
                    <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-amber-500/30">
                      {item.alertBadge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile / Logout */}
        <div className="p-4 border-t border-[#18444A]">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#0F2D32] mb-3">
            <div className="h-8 w-8 rounded-lg bg-[#1B7B87] flex items-center justify-center font-bold text-xs text-white">
              PB
            </div>
            <div className="truncate">
              <p className="text-xs font-semibold text-white">Therapist Portal</p>
              <p className="text-[10px] text-teal-300 truncate">Psychobeings Workspace</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all">
            <LogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#F7FAF9]">
        
        {/* TOP HEADER BAR */}
        <header className="h-16 border-b border-slate-200 bg-white px-8 flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Client Directory</h2>
            <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full text-xs font-semibold border border-slate-200">
              {filteredClients.length} Total
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Input */}
            <div className="relative w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search name or email..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1B7B87] focus:ring-2 focus:ring-[#1B7B87]/10 transition-all"
              />
            </div>

            {/* Notifications Button */}
            <button className="relative p-2 text-slate-500 hover:text-slate-800 bg-slate-50 rounded-xl border border-slate-200 transition-all">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#1B7B87] rounded-full ring-2 ring-white" />
            </button>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all border border-slate-200">
                <Upload size={14} />
                <span>Import Data</span>
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#1B7B87]/20 transition-all">
                <UserPlus size={14} />
                <span>Add Client</span>
              </button>
            </div>
          </div>
        </header>

        {/* WORKSPACE BODY */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          
          {/* CONTROLS BAR (Filters & View Toggles) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-1">
                <Filter size={14} /> Risk Status:
              </span>
              {['all', 'low', 'medium', 'high'].map((level) => (
                <button
                  key={level}
                  onClick={() => setRiskFilter(level)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                    riskFilter === level
                      ? 'bg-[#0F2D32] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Layout Toggle Buttons */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#1B7B87] shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <LayoutGrid size={15} />
                <span>Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-[#1B7B87] shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <List size={15} />
                <span>List</span>
              </button>
            </div>
          </div>

          {/* GRID VIEW DISPLAY */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredClients.map((client) => (
                <div 
                  key={client.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-[#1B7B87]/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Card Top Row */}
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

                    {/* Contact Specs */}
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

                  {/* Card Footer Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">Session: {client.lastSession}</span>
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 bg-slate-100 hover:bg-[#1B7B87] hover:text-white text-slate-600 rounded-lg transition-all" title="Call Client">
                        <Phone size={14} />
                      </button>
                      <button className="px-3 py-1.5 bg-[#0F2D32] hover:bg-[#125861] text-white font-semibold rounded-lg text-[11px] transition-all flex items-center gap-1">
                        <span>Profile</span>
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LIST VIEW DISPLAY */}
          {viewMode === 'list' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-6">Client Name</th>
                    <th className="py-3.5 px-6">Email Address</th>
                    <th className="py-3.5 px-6">Phone</th>
                    <th className="py-3.5 px-6">Status</th>
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
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold text-[11px]">
                          {client.status}
                        </span>
                      </td>
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
                        <div className="flex items-center justify-end gap-2">
                          <button className="px-3 py-1 bg-slate-100 hover:bg-[#1B7B87] hover:text-white text-slate-700 font-semibold rounded-lg text-xs transition-all">
                            View Profile
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}