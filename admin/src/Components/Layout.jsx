import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  CheckSquare, 
  Settings, 
  LogOut, 
  Menu,
  X,
  Notebook,
  Mail
} from 'lucide-react';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/signin');
  };

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Client Roster', path: '/clients', icon: Users },
    { label: 'Session Calendar', path: '/calendar', icon: Calendar },
    { label: 'Case History', path: '/case-history', icon: FileText },
    { label: 'Tasks & Worksheets', path: '/tasks-worksheets', icon: CheckSquare },
    { label: 'Post-session Activities', path: '/post-session-activities', icon: Notebook },
    { label: 'Messages', path: '/messages', icon: Mail },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-[#F4F7F6] text-stone-800 font-sans">
      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 bg-stone-900/40 z-40 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* Sidebar Navigation Drawer */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-stone-200/80 
          flex flex-col justify-between transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div>
          {/* Brand Logo & Header */}
          <div className="p-6 flex items-center justify-between border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#237A88] text-white flex items-center justify-center font-bold text-base shadow-md shadow-[#237A88]/20">
                P
              </div>
              <div>
                <h1 className="font-bold text-stone-900 text-base leading-tight">Psychobeings</h1>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#237A88]">Clinical Portal</span>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-stone-400 hover:text-stone-600 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Sidebar Navigation Items */}
          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#237A88]/10 text-[#237A88]'
                        : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`h-4 w-4 ${isActive ? 'text-[#237A88]' : 'text-stone-400'}`} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer / Profile & Sign Out */}
        <div className="p-4 border-t border-stone-100 space-y-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-stone-50">
            <div className="h-8 w-8 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold text-xs">
              PB
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-stone-900 truncate">Psychobeings Team</p>
              <p className="text-[10px] text-stone-500 truncate">Practitioner Workspace</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Navbar */}
        <header className="h-16 bg-white border-b border-stone-200/80 px-4 sm:px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-stone-600 hover:bg-stone-50 rounded-xl lg:hidden cursor-pointer"
            >
              <Menu size={20} />
            </button>

            {/* Vertical Divider */}
            <div className="h-6 w-[1px] bg-stone-200 hidden lg:block" />

            {/* Header Title Context */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-stone-400">Workspace</h2>
              <p className="text-sm font-bold text-stone-900">Psychobeings Clinical Portal</p>
            </div>
          </div>

          {/* Right Header Side Profile Indicator */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold text-xs border border-[#237A88]/20">
              PB
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-stone-900 leading-none">Psychobeings Team</p>
              <p className="text-[10px] text-stone-500 mt-1 font-medium">Practitioner Workspace</p>
            </div>
          </div>
        </header>

        {/* Dynamic Nested Route Content Page Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}