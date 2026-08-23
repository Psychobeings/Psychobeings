import React from 'react';
import { CreditCard, Download } from 'lucide-react';

const mockInvoices = [
  { id: 'INV-2026-001', client: 'Aarav Sharma', amount: '₹1,500', date: '2026-08-18', status: 'Paid' },
  { id: 'INV-2026-002', client: 'Riya Gupta', amount: '₹1,500', date: '2026-08-20', status: 'Pending' },
];

export default function Invoices() {
  return (
    <div className="p-6 space-y-5 max-w-7xl mx-auto text-slate-100">
      <div>
        <h2 className="text-2xl font-bold text-white">Billing & Invoices</h2>
        <p className="text-slate-400 text-xs mt-1">Track payments and manage client billing records.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold uppercase">
            <tr>
              <th className="p-3.5">Invoice ID</th>
              <th className="p-3.5">Client</th>
              <th className="p-3.5">Amount</th>
              <th className="p-3.5">Date</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {mockInvoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="p-3.5 font-mono text-slate-300">{inv.id}</td>
                <td className="p-3.5 font-semibold text-white">{inv.client}</td>
                <td className="p-3.5 font-semibold text-emerald-400">{inv.amount}</td>
                <td className="p-3.5 text-slate-400">{inv.date}</td>
                <td className="p-3.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] ${
                    inv.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="p-3.5 text-right">
                  <button className="text-slate-400 hover:text-white p-1">
                    <Download size={14} />
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