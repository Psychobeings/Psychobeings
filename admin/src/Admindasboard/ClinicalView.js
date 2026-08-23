import React, { useState } from 'react';
import { BookOpen, ClipboardList, Plus } from 'lucide-react';

const worksheetLibrary = [
  { title: 'Box Breathing Technique', description: 'Inhale slowly through your nose for 4 seconds, hold for 4 seconds, exhale for 4 seconds.' },
  { title: 'Thought Journal', description: 'Record situations driving worry, notice automatic thoughts, and state an alternative balanced response.' },
  { title: 'Anger Triggers Worksheet', description: 'Identify standard recurring situations driving immediate frustration or resentment.' },
  { title: 'Pendulation Exercise', description: 'Find a comfortable position and alternate focus between physical comfort and tension.' },
];

const ClinicalView = () => {
  const [tab, setTab] = useState('tasks');

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Tasks & Worksheets</h1>
        <button className="flex items-center gap-1.5 rounded-2xl bg-[#7c24a6] px-4 py-2.5 text-xs font-bold text-white shadow-sm">
          <Plus size={15} /> Create New
        </button>
      </div>

      <div className="flex gap-3 border-b border-slate-200 pb-3">
        {['Tasks', 'Assessments', 'Worksheet Library'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t.toLowerCase())}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
              tab === t.toLowerCase()
                ? 'bg-purple-100 text-[#7c24a6]'
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {worksheetLibrary.map((item, idx) => (
          <div key={idx} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalView;