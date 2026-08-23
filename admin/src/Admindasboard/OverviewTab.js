import React from 'react';
import { Clock, UserCheck, AlertCircle, DollarSign } from 'lucide-react';

const APPOINTMENTS = [
  { id: 101, time: "09:00 AM", client: "Sarah Jenkins", therapist: "Dr. Aris Thorne", type: "Individual Therapy", mode: "In-Person", status: "Completed" },
  { id: 102, time: "10:30 AM", client: "David Miller", therapist: "Elena Rostova, LMFT", type: "Couples Therapy", mode: "Telehealth", status: "In-Progress" },
  { id: 103, time: "01:00 PM", client: "Maya Lin", therapist: "Dr. Aris Thorne", type: "EMDR Trauma Processing", mode: "In-Person", status: "Scheduled" },
  { id: 104, time: "02:30 PM", client: "James Ross", therapist: "Marcus Vance, LCSW", type: "CBT Intake", mode: "Telehealth", status: "Scheduled" },
];

export default function OverviewTab({ privacyMode }) {
  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Today's Sessions", val: "14", desc: "4 Telehealth, 10 In-person", icon: Clock, color: "text-teal-400" },
          { label: "Pending Intakes", val: "5", desc: "Requires admin review", icon: UserCheck, color: "text-amber-400" },
          { label: "Unsigned SOAP Notes", val: "3", desc: "2 past due threshold", icon: AlertCircle, color: "text-rose-400" },
          { label: "Uncollected Copays", val: "$380.00", desc: "4 outstanding transactions", icon: DollarSign, color: "text-emerald-400" },
        ].map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-start">
                <span className="text-xs text-slate-400 font-medium">{m.label}</span>
                <Icon className={`w-4 h-4 ${m.color}`} />
              </div>
              <p className="text-2xl font-bold text-white mt-2">{m.val}</p>
              <p className="text-[11px] text-slate-500 mt-1">{m.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Appointment Schedule */}
      <div className="bg-slate-950/80 rounded-xl border border-slate-800 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center">
          <h3 className="font-semibold text-white text-sm">Today's Appointment Schedule</h3>
          <span className="text-xs text-slate-400">Sunday, August 23, 2026</span>
        </div>
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-900/60 text-slate-400 uppercase tracking-wider border-b border-slate-800">
              <th className="px-5 py-3 font-medium">Time</th>
              <th className="px-5 py-3 font-medium">Client Name</th>
              <th className="px-5 py-3 font-medium">Practitioner</th>
              <th className="px-5 py-3 font-medium">Session Type</th>
              <th className="px-5 py-3 font-medium">Modality</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {APPOINTMENTS.map((app) => (
              <tr key={app.id} className="hover:bg-slate-900/40">
                <td className="px-5 py-3 font-medium text-white">{app.time}</td>
                <td className="px-5 py-3 font-medium">
                  {privacyMode ? `Client #${app.id}` : app.client}
                </td>
                <td className="px-5 py-3 text-slate-400">{app.therapist}</td>
                <td className="px-5 py-3">{app.type}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                    app.mode === 'Telehealth' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {app.mode}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    app.status === 'Completed' ? 'bg-teal-500/10 text-teal-400' :
                    app.status === 'In-Progress' ? 'bg-amber-500/10 text-amber-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}