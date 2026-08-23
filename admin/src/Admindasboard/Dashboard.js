import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, FileText, CreditCard, Settings, LogOut } from 'lucide-react';

export default function Dashboard({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Overview', path: '/admin/overview', icon: LayoutDashboard },
    { name: 'Clients', path: '/admin/clients', icon: Users },
    { name: 'Appointments', path: '/admin/appointments', icon: Calendar },
    { name: 'Clinical Notes', path: '/admin/notes', icon: FileText },
    { name: 'Payments', path: '/admin/payments', icon: CreditCard },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="h-9 w-9 bg-teal-500 rounded-xl font-bold text-slate-950 flex items-center justify-center text-lg">
              P
            </div>
            <div>
              <h1 className="font-bold text-white text-sm">PSYCHOBEINGS</h1>
              <p className="text-[10px] text-teal-400 font-medium">Admin Portal</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </aside>

      {/* Dynamic Sub-Page Content */}
      <main className="flex-1 overflow-y-auto bg-slate-950">
        <Outlet />
      </main>
    </div>
  );
}