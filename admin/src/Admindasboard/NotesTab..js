import React, { useState } from 'react';
import { Save, CheckCircle, FileCode } from 'lucide-react';

export default function NotesTab({ privacyMode }) {
  const [noteType, setNoteType] = useState('SOAP');
  const [formData, setFormData] = useState({ subjective: '', objective: '', assessment: '', plan: '' });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Interactive Note Writing Canvas */}
      <div className="lg:col-span-2 bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Clinical Note Editor</h3>
            <p className="text-xs text-slate-400">Client: {privacyMode ? "Client #102" : "David Miller"} (Session #12)</p>
          </div>
          <div className="flex gap-2">
            {['SOAP', 'BIRP', 'DAP'].map((fmt) => (
              <button
                key={fmt}
                onClick={() => setNoteType(fmt)}
                className={`px-2.5 py-1 text-xs rounded font-medium border ${
                  noteType === fmt 
                    ? 'bg-teal-500/20 border-teal-500 text-teal-300' 
                    : 'border-slate-800 text-slate-400 hover:bg-slate-900'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Form Sections */}
        <div className="space-y-3 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">Subjective (Client's self-reported feelings & updates)</label>
            <textarea 
              rows={3} 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-teal-500 outline-none"
              placeholder="Client states anxiety levels dropped from 8/10 to 5/10 over the past week..."
              value={formData.subjective}
              onChange={(e) => setFormData({...formData, subjective: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Objective (Therapist's observations & clinical presentation)</label>
            <textarea 
              rows={3} 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-teal-500 outline-none"
              placeholder="Client arrived on time, well-groomed, engaged with eye contact..."
              value={formData.objective}
              onChange={(e) => setFormData({...formData, objective: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Assessment (Clinical evaluation & progress tracking)</label>
            <textarea 
              rows={2} 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-teal-500 outline-none"
              placeholder="Showing improvement in cognitive restructuring exercises..."
              value={formData.assessment}
              onChange={(e) => setFormData({...formData, assessment: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Plan (Interventions & homework for next session)</label>
            <textarea 
              rows={2} 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-teal-500 outline-none"
              placeholder="Continue daily thought log; practice 4-7-8 breathing during stressors..."
              value={formData.plan}
              onChange={(e) => setFormData({...formData, plan: e.target.value})}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
          <button className="px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-900">
            Save Draft
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-xs font-medium text-white">
            <CheckCircle className="w-3.5 h-3.5" /> Sign & Lock Record
          </button>
        </div>
      </div>

      {/* Note Audit History Side Panel */}
      <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-semibold text-white border-b border-slate-800 pb-3">Recent Documentation Audit</h3>
        <div className="space-y-3 text-xs">
          {[
            { id: "NOTE-882", date: "Aug 22", client: "Maya Lin", status: "Signed", author: "Dr. Thorne" },
            { id: "NOTE-881", date: "Aug 21", client: "Sarah Jenkins", status: "Pending Signature", author: "Dr. Thorne" },
            { id: "NOTE-880", date: "Aug 20", client: "James Ross", status: "Draft", author: "M. Vance" },
          ].map((item) => (
            <div key={item.id} className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/60 flex justify-between items-center">
              <div>
                <p className="font-medium text-slate-200">{privacyMode ? "Client Record" : item.client}</p>
                <p className="text-[10px] text-slate-500">{item.id} • {item.date} by {item.author}</p>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] ${
                item.status === 'Signed' ? 'bg-teal-500/10 text-teal-400' : 'bg-rose-500/10 text-rose-400'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}