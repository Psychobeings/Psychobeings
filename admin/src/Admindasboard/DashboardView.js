import React from 'react';
import { Calendar, Users, FileCheck, DollarSign } from 'lucide-react';

const DashboardView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-xs text-slate-500 mt-1">Overview of clinical operations and scheduled client sessions.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Total Clients</span>
            <Users size={18} className="text-teal-600" />
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">128</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Today's Sessions</span>
            <Calendar size={18} className="text-teal-600" />
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">6</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Pending Reviews</span>
            <FileCheck size={18} className="text-amber-500" />
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">3</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Monthly Revenue</span>
            <DollarSign size={18} className="text-emerald-600" />
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">₹1,42,000</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;