import React from 'react';

const PaymentsView = ({ tab }) => {
  const section = tab.replace('payments-', '');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 capitalize">Payments — {section}</h1>
        <p className="text-xs text-slate-500 mt-1">Review billing history, therapy packages, and open invoices.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">{section} Module</h2>
        <p className="text-xs text-slate-500">
          Track revenue receipts and issue follow-up payment links to patients.
        </p>
      </div>
    </div>
  );
};

export default PaymentsView;