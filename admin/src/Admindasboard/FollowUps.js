import React, { useState } from 'react';
import {
  AlertTriangle,
  Send,
  CheckCircle,
  Clock,
  UserX,
  TrendingUp,
  RefreshCw,
  Mail,
  PhoneCall,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function RetentionEngine() {
  const [filter, setFilter] = useState('all');

  const [atRiskClients, setAtRiskClients] = useState([
    {
      id: 1,
      name: 'Dakota Vance',
      lastSession: '05 Aug 2026',
      daysInactive: 19,
      riskScore: 'High',
      reason: 'Missed scheduled follow-up & no intake submission.',
      recommendedAction: 'Send Re-engagement Email',
      outreachHistory: 'Initial reminder sent on Aug 15',
      avatarColor: 'bg-rose-700'
    },
    {
      id: 2,
      name: 'Finley Harper',
      lastSession: '10 Jun 2026',
      daysInactive: 75,
      riskScore: 'High',
      reason: 'Extended break without scheduled return.',
      recommendedAction: 'Manual Phone Check-in',
      outreachHistory: 'No outreach this month',
      avatarColor: 'bg-amber-700'
    },
    {
      id: 3,
      name: 'Jordan Lee',
      lastSession: '01 Aug 2026',
      daysInactive: 23,
      riskScore: 'Medium',
      reason: 'Completed 3 sessions; cancelled last check-in.',
      recommendedAction: 'Send Homework Reminder',
      outreachHistory: 'Automated SMS sent Aug 12',
      avatarColor: 'bg-[#125861]'
    }
  ]);

  const filteredList = atRiskClients.filter(client => {
    if (filter === 'high') return client.riskScore === 'High';
    if (filter === 'medium') return client.riskScore === 'Medium';
    return true;
  });

  return (
    <div className="p-8 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Client Retention & Follow-Up Engine</h1>
          <p className="text-xs text-slate-500">Monitor engagement decay, manage re-engagement workflows, and boost client retention.</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#1B7B87]/20 transition-all">
          <RefreshCw size={14} />
          <span>Run Retention Scan</span>
        </button>
      </div>

      {/* METRICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0 border border-rose-100">
            <AlertTriangle size={22} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">At-Risk Clients</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-0.5">3 Clients</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">
            <TrendingUp size={22} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Re-engagement Rate</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-0.5">68.4%</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 bg-teal-50 text-[#1B7B87] rounded-xl flex items-center justify-center shrink-0 border border-teal-100">
            <Clock size={22} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg. Inactive Window</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-0.5">18 Days</h3>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">Filter Risk Level:</span>
          {['all', 'high', 'medium'].map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                filter === level
                  ? 'bg-[#0F2D32] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* ACTION QUEUE LIST */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
        {filteredList.map((client) => (
          <div key={client.id} className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50/80 transition-all">
            
            <div className="flex items-start gap-4">
              <div className={`h-11 w-11 rounded-xl ${client.avatarColor} text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-sm`}>
                {client.name.split(' ').map(n => n[0]).join('')}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-slate-900 text-sm">{client.name}</h3>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    client.riskScore === 'High'
                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {client.riskScore} Drop-off Risk
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium">{client.reason}</p>

                <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span>Last session: {client.lastSession} ({client.daysInactive} days ago)</span>
                  <span>•</span>
                  <span>{client.outreachHistory}</span>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-2 self-end lg:self-center shrink-0">
              <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all">
                <Mail size={14} />
                <span>Automated Email</span>
              </button>

              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-sm transition-all">
                <Send size={14} />
                <span>{client.recommendedAction}</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}