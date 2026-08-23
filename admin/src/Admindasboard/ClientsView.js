import React from 'react';

const ClinicalView = ({ tab }) => {
  const section = tab.replace('clinical-', '');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 capitalize">Clinical — {section}</h1>
        <p className="text-xs text-slate-500 mt-1">Access psychological assessments, case formulations, and progress notes.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Workspace for {section}</h2>
        <p className="text-xs text-slate-500">
          Integrated clinical tools for therapeutic documentation and homework tracking.
        </p>
      </div>
    </div>
  );
};

export default ClinicalView;