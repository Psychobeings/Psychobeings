import React from 'react';
import { Search, Filter, UserPlus, ArrowUpDown } from 'lucide-react';

const clientsList = [
  { id: 1, name: 'Amit Paul', email: 'amitpaul0904@gmail.com', phone: '+91 9085020338', status: 'Active', risk: 'Low' },
  { id: 2, name: 'Ami Kohli', email: 'amikohli010@gmail.com', phone: '+91 0991092244', status: 'Active', risk: 'Low' },
  { id: 3, name: 'DEEPANSHU RAWAT', email: 'rawat.deepanshu@gmail.com', phone: '+91 8076050838', status: 'Active', risk: 'High' },
  { id: 4, name: 'Diksha Bharti', email: 'dikshabharti18276@gmail.com', phone: '+91 08084308255', status: 'Active', risk: 'High' },
  { id: 5, name: 'Diya Ghosh', email: 'diyaghosh017@gmail.com', phone: '+91 8447672134', status: 'Active', risk: 'Low' },
  { id: 6, name: 'Garima', email: 'garimashakya025@gmail.com', phone: '+91 07042748895', status: 'Active', risk: 'Low' },
];

const ClientsView = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Clients</h1>
          <p className="text-xs text-slate-500 mt-0.5">15 total active dossiers</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 rounded-xl bg-[#7c24a6] px-4 py-2 text-xs font-bold text-white shadow-sm">
            <UserPlus size={14} /> Add Client
          </button>
          <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700">
            Migrate Clients
          </button>
        </div>
      </div>

      {/* Filter and Table Card */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search by name, email, phone..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-xs font-medium outline-none focus:border-[#7c24a6]"
            />
          </div>
          <button className="flex items-center gap-1 rounded-2xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600">
            <Filter size={13} /> Status
          </button>
          <button className="flex items-center gap-1 rounded-2xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600">
            <ArrowUpDown size={13} /> Sort
          </button>
        </div>

        {/* Client Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-100 font-bold uppercase text-slate-400">
              <tr>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clientsList.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50/60">
                  <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-[#7c24a6] text-xs font-extrabold">
                      {client.name.substring(0, 2).toUpperCase()}
                    </span>
                    {client.name}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium">{client.email}</td>
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{client.phone}</td>
                  <td className="py-3.5 px-4">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-800">
                      {client.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                      client.risk === 'High' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {client.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientsView;