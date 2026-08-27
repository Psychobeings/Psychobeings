import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  Plus, 
  LogOut, 
  Menu,
  X,
  Sparkles,
  Bell,
  Search
} from 'lucide-react';
import logo from '../Assets/Psychobeings.png';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/signin');
  };

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Client Roster', path: '/clients', icon: Users },
    { label: 'Session Calendar', path: '/calendar', icon: Calendar },
    { label: 'Case History', path: '/case-history', icon: FileText },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-[#F4F7F6] text-stone-800 font-sans">
      {/* Mobile Drawer Backdrop */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 bg-stone-900/40 z-40 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* Sidebar Navigation */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-stone-200/80 
          flex flex-col justify-between transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div>
          {/* Logo Header */}
          <div className="p-6 flex items-center justify-between border-b border-stone-100">
            <img src={logo} alt="Psychobeings" className="h-10 w-auto object-contain" />
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-stone-400 hover:text-stone-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* Sidebar Nav Links */}
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

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-stone-100 space-y-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-stone-50">
            <div className="h-9 w-9 rounded-xl bg-[#237A88] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-[#237A88]/20">
              PB
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-stone-900 truncate">Psychobeings Team</p>
              <p className="text-[10px] text-stone-500 truncate">Practitioner Portal</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TOP NAVIGATION BAR */}
        <header className="bg-white border-b border-stone-200/80 sticky top-0 z-30 shadow-sm">
          {/* Top Bar Row */}
          <div className="h-16 px-4 sm:px-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-stone-600 hover:bg-stone-50 rounded-xl lg:hidden"
              >
                <Menu size={20} />
              </button>

              <div className="hidden md:flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#237A88]/10 text-[#237A88] text-xs font-semibold">
                  <Sparkles size={13} />
                  <span>Clinical Workspace</span>
                </span>
              </div>
            </div>

            {/* Global Search Bar */}
            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3.5 top-3 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search clients, notes, or appointments..."
                  className="w-full pl-10 pr-4 py-2 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none transition-all focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
                />
              </div>
            </div>

            {/* Quick Actions & Profile */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-50 rounded-xl transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-[#237A88] rounded-full" />
              </button>

              <button
                onClick={() => navigate('/notes/new')}
                className="flex items-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2 rounded-2xl text-xs font-semibold transition-all shadow-md shadow-[#237A88]/20"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">New Note</span>
              </button>

              <div className="h-6 w-[1px] bg-stone-200" />

              <div className="flex items-center gap-3 cursor-pointer">
                <div className="h-9 w-9 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold text-xs border border-[#237A88]/20">
                  PB
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-bold text-stone-900 leading-none">Practitioner</p>
                  <p className="text-[10px] text-stone-500 mt-1 font-medium">Psychobeings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Navigation Tabs Row */}
          <div className="px-4 sm:px-8 flex items-center gap-2 overflow-x-auto border-t border-stone-100 scrollbar-none">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`
                    py-2.5 px-3.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-all duration-200
                    ${isActive 
                      ? 'border-[#237A88] text-[#237A88]' 
                      : 'border-transparent text-stone-500 hover:text-stone-900 hover:border-stone-200'}
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </header>

        {/* Dynamic Outlet Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}