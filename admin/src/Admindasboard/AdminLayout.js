import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Clock,
  ClipboardList,
  BookOpen,
  CreditCard,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';

export default function AdminLayout({ children, activeRoute = 'dashboard', onNavigate }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'clients', label: 'Client Directory', icon: Users, badge: '42' },
    { id: 'schedule', label: 'Schedule Manager', icon: Calendar },
    { id: 'sessions', label: 'Session Logs', icon: Clock, alertBadge: '2' },
    { id: 'retention', label: 'Retention & Follow-Ups', icon: ClipboardList, alertBadge: '3' },
    { id: 'resources', label: 'Resource Library', icon: BookOpen },
    { id: 'billing', label: 'Billing Operations', icon: CreditCard },
    { id: 'settings', label: 'Practice Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#F7FAF9] text-slate-800 font-sans overflow-hidden">
      
      {/* MOBILE OVERLAY */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* PERSISTENT SIDEBAR */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0A2226] text-white flex flex-col justify-between 
        shrink-0 shadow-xl border-r border-[#153B42] transition-transform duration-200 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          {/* Logo & Branding */}
          <div className="p-6 flex items-center justify-between border-b border-[#18444A]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-[#1B7B87] rounded-xl flex items-center justify-center font-bold text-white shadow-md text-lg">
                P
              </div>
              <div>
                <h1 className="font-bold text-sm tracking-wider text-white">PSYCHOBEINGS</h1>
                <p className="text-[10px] text-[#3CD1E4] font-medium tracking-tight">Clinical Admin Portal</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="p-4 space-y-1 text-xs font-medium">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (onNavigate) onNavigate(item.id);
                    setIsMobileSidebarOpen(false);
                  }}
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

        {/* Footer Authorization Card */}
        <div className="p-4 border-t border-[#18444A]">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0F2D32] mb-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={16} />
            </div>
            <div className="truncate">
              <p className="text-xs font-semibold text-white truncate">Authorized Session</p>
              <p className="text-[10px] text-teal-300 truncate">Psychobeings Workspace</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all">
            <LogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#F7FAF9]">
        
        {/* TOP HEADER */}
        <header className="h-16 border-b border-slate-200 bg-white px-6 lg:px-8 flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight capitalize">
              {activeRoute.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input
                type="text"
                placeholder="Global admin search..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1B7B87] transition-all"
              />
            </div>

            <button className="relative p-2 text-slate-500 hover:text-slate-800 bg-slate-50 rounded-xl border border-slate-200 transition-all">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#1B7B87] rounded-full ring-2 ring-white" />
            </button>
          </div>
        </header>

        {/* DYNAMIC CHILD VIEW PAGE */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}