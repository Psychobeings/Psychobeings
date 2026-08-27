import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  Plus, 
  LogOut, 
  User 
} from 'lucide-react';

export default function Layout() {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Client Roster', path: '/clients', icon: Users },
    { label: 'Session Calendar', path: '/calendar', icon: Calendar },
    { label: 'Case History', path: '/case-history', icon: FileText },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-stone-50 text-stone-800">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-emerald-950 text-stone-200 flex flex-col justify-between border-r border-emerald-900">
        <div>
          {/* Brand Header */}
          <div className="p-6 flex items-center gap-3 border-b border-emerald-900/60">
            <div className="h-9 w-9 rounded-xl bg-amber-400 text-emerald-950 grid place-items-center font-bold text-lg">
              P
            </div>
            <div>
              <h1 className="font-semibold text-stone-100 text-base leading-tight">Psychobeings</h1>
              <span className="text-[10px] tracking-widest uppercase text-emerald-400">Clinical Portal</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-800/60 text-amber-300'
                        : 'text-stone-300 hover:bg-emerald-900/50 hover:text-stone-100'
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer / Sign Out */}
        <div className="p-4 border-t border-emerald-900/60">
          <button
            onClick={() => navigate('/signin')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-400 hover:bg-emerald-900/50 hover:text-stone-100 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Navbar */}
        <header className="h-16 bg-white border-b border-stone-200 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-stone-800">Psychologist Workspace</h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Action Button */}
            <button
              onClick={() => navigate('/notes/new')}
              className="flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-stone-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <Plus className="h-4 w-4" />
              <span>New Session Note</span>
            </button>

            {/* Divider */}
            <div className="h-6 w-[1px] bg-stone-200" />

            {/* User Profile Indicator */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-600">
                <User className="h-5 w-5" />
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-stone-800 leading-none">Dr. Alex Morgan</p>
                <p className="text-xs text-stone-500 mt-1">Clinical Psychologist</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}