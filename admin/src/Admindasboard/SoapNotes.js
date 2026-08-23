import React, { useState } from 'react';
import { FileText, Save } from 'lucide-react';

export default function SoapNotes() {
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState('');
  const [plan, setPlan] = useState('');

  return (
    <div className="p-6 space-y-5 max-w-4xl mx-auto text-slate-100">
      <div>
        <h2 className="text-2xl font-bold text-white">Clinical Note Entry</h2>
        <p className="text-slate-400 text-xs mt-1">Record SOAP notes for therapeutic sessions.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 text-xs">
        <div>
          <label className="block text-slate-300 font-semibold mb-1">Subjective (S)</label>
          <textarea
            value={subjective}
            onChange={(e) => setSubjective(e.target.value)}
            rows="3"
            placeholder="Client statements, reported feelings, and symptoms..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-semibold mb-1">Objective (O)</label>
          <textarea
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            rows="3"
            placeholder="Observational data, mood, affect, and behavior during session..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-semibold mb-1">Assessment (A)</label>
          <textarea
            value={assessment}
            onChange={(e) => setAssessment(e.target.value)}
            rows="3"
            placeholder="Therapist progress evaluations and treatment response..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-semibold mb-1">Plan (P)</label>
          <textarea
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            rows="3"
            placeholder="Assigned homework exercises and next session timing..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="pt-2 flex justify-end">
          <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors">
            <Save size={14} /> Save Clinical Note
          </button>
        </div>
      </div>
    </div>
  );
}