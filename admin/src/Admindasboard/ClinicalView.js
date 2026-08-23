import React from 'react';
import { ClipboardList, FileText, ShieldCheck } from 'lucide-react';

const clinicalLabels = {
  notes: 'Session Notes',
  plans: 'Treatment Plans',
  assessments: 'Assessments',
  homework: 'Homework',
};

const ClinicalView = ({ tab }) => {
  const section = tab.replace('clinical-', '');
  const title = clinicalLabels[section] || 'Clinical workspace';

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Clinical workspace</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Keep structured clinical information organised for each client.</p>
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          {section === 'assessments' ? <ClipboardList size={22} /> : <FileText size={22} />}
        </div>
        <h2 className="mt-6 text-lg font-bold text-slate-950">{title} module</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">This workspace is ready for your secure clinical record workflow. Connect it to your approved records service before storing identifiable client information.</p>
        <div className="mt-6 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900">
          <ShieldCheck size={17} className="shrink-0" />
          <span>Use an approved, secure system for production clinical records.</span>
        </div>
      </section>
    </div>
  );
};

export default ClinicalView;
