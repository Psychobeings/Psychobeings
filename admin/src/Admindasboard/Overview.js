import React from 'react';
import { Users, Calendar, IndianRupee, AlertCircle, Clock, ArrowUpRight } from 'lucide-react';

export default function Overview({ onNavigate }) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto text-slate-100">
      <div>
        <h2 className="text-2xl font-bold text-white">Practice Overview</h2>
        <p className="text-slate-400 text-xs mt-1">Real-time stats and daily operational highlights.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Total Clients</p>
            <h3 className="text-2xl font-bold text-white mt-1">24</h3>
            <span className="text-[10px] text-emerald-400 font-medium">↑ 2 new this week</span>
          </div>
          <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg">
            <Users size={20} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Today's Sessions</p>
            <h3 className="text-2xl font-bold text-white mt-1">3</h3>
            <span className="text-[10px] text-teal-400 font-medium">Next at 12:00 PM</span>
          </div>
          <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg">
            <Calendar size={20} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Monthly Revenue</p>
            <h3 className="text-2xl font-bold text-white mt-1">₹42,500</h3>
            <span className="text-[10px] text-emerald-400 font-medium">12% growth</span>
          </div>
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
            <IndianRupee size={20} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">High Risk Alerts</p>
            <h3 className="text-2xl font-bold text-amber-400 mt-1">1</h3>
            <span className="text-[10px] text-amber-400 font-medium">Requires review</span>
          </div>
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
            <AlertCircle size={20} />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-semibold text-sm text-slate-200 flex items-center gap-2">
              <Clock size={16} className="text-teal-400" /> Scheduled Today
            </h3>
            <button onClick={() => onNavigate('appointments')} className="text-xs text-teal-400 hover:underline flex items-center gap-1">
              View Calendar <ArrowUpRight size={12} />
            </button>
          </div>

          <div className="space-y-2">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 flex items-center justify-between">
              <div>
                <p className="font-semibold text-xs text-white">Aarav Sharma</p>
                <p className="text-[11px] text-slate-400">Individual Therapy • 10:00 AM</p>
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Completed</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 flex items-center justify-between">
              <div>
                <p className="font-semibold text-xs text-white">Riya Gupta</p>
                <p className="text-[11px] text-slate-400">Follow-up • 12:00 PM</p>
              </div>
              <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">In Progress</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
          <h3 className="font-semibold text-sm text-slate-200 border-b border-slate-800 pb-3">Quick Navigation</h3>
          <button onClick={() => onNavigate('clients')} className="w-full text-left p-2.5 bg-slate-950 hover:bg-slate-800 text-xs font-medium text-slate-300 rounded-lg border border-slate-800 transition-colors">
            + Manage Client Roster
          </button>
          <button onClick={() => onNavigate('notes')} className="w-full text-left p-2.5 bg-slate-950 hover:bg-slate-800 text-xs font-medium text-slate-300 rounded-lg border border-slate-800 transition-colors">
            + Log Clinical Note
          </button>
          <button onClick={() => onNavigate('payments')} className="w-full text-left p-2.5 bg-slate-950 hover:bg-slate-800 text-xs font-medium text-slate-300 rounded-lg border border-slate-800 transition-colors">
            + Review Invoices
          </button>
        </div>
      </div>
    </div>
  );
}