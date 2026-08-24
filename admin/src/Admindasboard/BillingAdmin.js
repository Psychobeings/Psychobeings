import React, { useState } from 'react';
import {
  CreditCard,
  DollarSign,
  Plus,
  Search,
  Filter,
  Download,
  Send,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ExternalLink,
  Receipt
} from 'lucide-react';

export default function BillingAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Billing & Invoicing Records State
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2026-089',
      clientName: 'Dakota Vance',
      service: 'Individual Therapy (60 min)',
      date: '18 Aug 2026',
      dueDate: '25 Aug 2026',
      amount: '$150.00',
      status: 'Overdue',
      paymentMethod: 'Credit Card',
      avatarColor: 'bg-rose-700'
    },
    {
      id: 'INV-2026-088',
      clientName: 'Finley Harper',
      service: 'Cognitive Assessment & Intake',
      date: '20 Aug 2026',
      dueDate: '27 Aug 2026',
      amount: '$220.00',
      status: 'Pending',
      paymentMethod: 'Bank Transfer',
      avatarColor: 'bg-amber-700'
    },
    {
      id: 'INV-2026-087',
      clientName: 'Jordan Lee',
      service: 'Narrative Therapy Session',
      date: '22 Aug 2026',
      dueDate: '22 Aug 2026',
      amount: '$150.00',
      status: 'Paid',
      paymentMethod: 'Stripe Auto-pay',
      avatarColor: 'bg-[#125861]'
    },
    {
      id: 'INV-2026-086',
      clientName: 'Alex Morgan',
      service: 'Follow-up Consultation',
      date: '15 Aug 2026',
      dueDate: '22 Aug 2026',
      amount: '$130.00',
      status: 'Paid',
      paymentMethod: 'Credit Card',
      avatarColor: 'bg-[#1B7B87]'
    }
  ]);

  const filteredInvoices = invoices.filter(inv => {
    const matchesSearch = inv.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || inv.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || inv.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Billing & Financial Admin</h1>
          <p className="text-xs text-slate-500">Track session payments, issue client invoices, and review practice revenue performance.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all">
            <Download size={14} />
            <span>Export Statement</span>
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#1B7B87]/20 transition-all">
            <Plus size={15} />
            <span>Create Invoice</span>
          </button>
        </div>
      </div>

      {/* METRIC SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Revenue (Aug)</span>
            <div className="p-2 bg-teal-50 text-[#1B7B87] rounded-lg">
              <DollarSign size={16} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">$8,450.00</h3>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">↑ 12% from last month</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Collected</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <CheckCircle2 size={16} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">$6,800.00</h3>
          <p className="text-[11px] text-slate-400 mt-1">80.4% settled</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Outstandings</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Clock size={16} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">$1,500.00</h3>
          <p className="text-[11px] text-amber-700 font-medium mt-1">4 pending invoices</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overdue Payments</span>
            <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
              <AlertCircle size={16} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">$150.00</h3>
          <p className="text-[11px] text-rose-700 font-medium mt-1">1 high priority action</p>
        </div>
      </div>

      {/* SEARCH AND FILTER */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search invoice ID or client name..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1B7B87] transition-all"
          />
        </div>

        <div className="flex items-center gap-1.5">
          <Filter size={13} className="text-slate-400" />
          <span className="text-xs font-semibold text-slate-500">Status:</span>
          {['all', 'paid', 'pending', 'overdue'].map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                statusFilter === status
                  ? 'bg-[#0F2D32] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* INVOICES TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-3.5">Invoice ID</th>
                <th className="px-6 py-3.5">Client</th>
                <th className="px-6 py-3.5">Service</th>
                <th className="px-6 py-3.5">Issue / Due Date</th>
                <th className="px-6 py-3.5">Amount</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/80 transition-all">
                  <td className="px-6 py-4 font-mono font-semibold text-slate-900">
                    {inv.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`h-7 w-7 rounded-lg ${inv.avatarColor} text-white font-bold flex items-center justify-center text-[10px]`}>
                        {inv.clientName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-bold text-slate-800">{inv.clientName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">
                    {inv.service}
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-[11px]">
                    <div>Issue: {inv.date}</div>
                    <div className="text-slate-400">Due: {inv.dueDate}</div>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">
                    {inv.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border inline-flex items-center gap-1 ${
                      inv.status === 'Paid'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : inv.status === 'Pending'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}>
                      {inv.status === 'Paid' && <CheckCircle2 size={11} />}
                      {inv.status === 'Pending' && <Clock size={11} />}
                      {inv.status === 'Overdue' && <AlertCircle size={11} />}
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {inv.status !== 'Paid' && (
                        <button className="p-1.5 text-slate-400 hover:text-[#1B7B87] hover:bg-slate-100 rounded-lg transition-all" title="Send Reminder">
                          <Send size={14} />
                        </button>
                      )}
                      <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all" title="Download Invoice">
                        <Download size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}