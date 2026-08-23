import React, { useState } from 'react';
import { Search, Plus, Eye } from 'lucide-react';

const mockClients = [
  { id: 'CL-101', name: 'Aarav Sharma', age: 28, diagnosis: 'Generalized Anxiety Disorder', status: 'Active', sessions: 12 },
  { id: 'CL-102', name: 'Riya Gupta', age: 24, diagnosis: 'Mild Adjustment Disorder', status: 'Active', sessions: 8 },
  { id: 'CL-103', name: 'Karan Verma', age: 16, diagnosis: 'Academic Performance Stress', status: 'Active', sessions: 6 },
];

export default function ClientList({ onSelectClient, onAddClient }) {
  const [search, setSearch] = useState('');

  const filtered = mockClients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-5 max-w-7xl mx-auto text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Client Registry</h2>
          <p className="text-slate-400 text-xs mt-1">Manage client profiles and case history records.</p>
        </div>
        <button onClick={onAddClient} className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors">
          <Plus size={14} /> Add Client
        </button>
      </div>

      <div className="relative w-full sm:w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or ID..."
          className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold uppercase">
            <tr>
              <th className="p-3.5">Client ID / Name</th>
              <th className="p-3.5">Diagnosis</th>
              <th className="p-3.5">Total Sessions</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filtered.map((c) => (
              <tr key={c.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="p-3.5">
                  <p className="font-semibold text-white">{c.name}</p>
                  <p className="text-[10px] text-slate-400">{c.id} • {c.age} yrs</p>
                </td>
                <td className="p-3.5 text-slate-300">{c.diagnosis}</td>
                <td className="p-3.5 text-slate-300">{c.sessions} completed</td>
                <td className="p-3.5">
                  <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] border border-emerald-500/20">{c.status}</span>
                </td>
                <td className="p-3.5 text-right">
                  <button onClick={() => onSelectClient(c)} className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1 justify-end ml-auto">
                    <Eye size={14} /> Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}