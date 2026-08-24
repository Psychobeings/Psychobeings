import React, { useState } from 'react';
import {
  Clock,
  FileText,
  Search,
  Filter,
  CheckCircle2,
  Lock,
  Edit3,
  Save,
  Plus,
  ChevronRight,
  Eye,
  User,
  AlertCircle
} from 'lucide-react';

export default function SessionLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'pending' | 'completed'
  const [selectedLog, setSelectedLog] = useState(null);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteContent, setNoteContent] = useState('');

  // Sample Session Records Data
  const [logs, setLogs] = useState([
    {
      id: 'LOG-8041',
      client: 'Alex Morgan',
      date: '24 Aug 2026',
      time: '09:00 AM',
      type: 'Cognitive Behavioral Therapy (CBT)',
      status: 'Completed',
      notesStatus: 'Signed & Locked',
      reflectionSubmitted: true,
      soapNote: {
        subjective: 'Client reports improved sleep patterns using daily box breathing techniques. Expresses minor anxiety regarding upcoming work presentation.',
        objective: 'Client appeared relaxed, attentive, and fully engaged. Completed all assigned thought logs from prior week.',
        assessment: 'Progressing well on anxiety management goals. Demonstrating increased cognitive reframing abilities.',
        plan: 'Continue daily box breathing. Assign narrative reflection on workplace accomplishments before next session.'
      }
    },
    {
      id: 'LOG-8042',
      client: 'Dakota Vance',
      date: '22 Aug 2026',
      time: '02:00 PM',
      type: 'Intake & Risk Assessment',
      status: 'Completed',
      notesStatus: 'Draft Pending',
      reflectionSubmitted: false,
      soapNote: {
        subjective: 'Client shared feeling overwhelmed by academic stress and isolation.',
        objective: 'Affect slightly restricted. Showed slight hesitation during family history discussion.',
        assessment: 'Identified elevated drop-off risk and moderate stress symptoms.',
        plan: 'Schedule follow-up check-in within 5 days. Send grounding exercise worksheet.'
      }
    },
    {
      id: 'LOG-8043',
      client: 'Cameron Reed',
      date: '20 Aug 2026',
      time: '11:30 AM',
      type: 'Narrative Therapy Session',
      status: 'Completed',
      notesStatus: 'Signed & Locked',
      reflectionSubmitted: true,
      soapNote: {
        subjective: 'Client discussed progress on separating self-identity from high-pressure work achievements.',
        objective: 'Calm posture, open body language. Expressed clarity regarding boundary setting.',
        assessment: 'Strong therapeutic alignment. Goals for workplace boundaries effectively met.',
        plan: 'Transition to bi-weekly maintenance sessions.'
      }
    }
  ]);

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.client.toLowerCase().includes(searchTerm.toLowerCase()) || log.id.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === 'pending') return matchesSearch && log.notesStatus === 'Draft Pending';
    if (activeTab === 'completed') return matchesSearch && log.notesStatus === 'Signed & Locked';
    return matchesSearch;
  });

  const handleSelectLog = (log) => {
    setSelectedLog(log);
    setNoteContent(log.soapNote.subjective);
    setIsEditingNote(false);
  };

  return (
    <div className="p-8 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Clinical Records & Session Logs</h1>
          <p className="text-xs text-slate-500">Document private session notes, review client reflection forms, and lock SOAP entries.</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#1B7B87]/20 transition-all">
          <Plus size={14} />
          <span>New Session Log</span>
        </button>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by client name or Log ID..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1B7B87] transition-all"
          />
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {[
            { id: 'all', label: 'All Logs' },
            { id: 'pending', label: 'Pending Drafts' },
            { id: 'completed', label: 'Locked Notes' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab.id ? 'bg-white text-[#1B7B87] shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LOGS LISTING TABLE/LIST */}
        <div className="lg:col-span-2 space-y-3">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              onClick={() => handleSelectLog(log)}
              className={`p-5 bg-white rounded-2xl border transition-all cursor-pointer ${
                selectedLog?.id === log.id
                  ? 'border-[#1B7B87] ring-1 ring-[#1B7B87] shadow-md'
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{log.client}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({log.id})</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{log.type}</p>
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {log.date} at {log.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                    log.notesStatus === 'Signed & Locked'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {log.notesStatus}
                  </span>
                  <ChevronRight size={16} className="text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOG DETAIL & CLINICAL NOTE VIEW */}
        <div className="space-y-4">
          {selectedLog ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{selectedLog.client}</h3>
                  <p className="text-xs text-slate-400 font-mono">{selectedLog.id} • {selectedLog.date}</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                  <Lock size={12} className="text-[#1B7B87]" />
                  <span>Confidential</span>
                </div>
              </div>

              {/* SOAP Note Structure */}
              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-[#1B7B87] uppercase text-[10px] tracking-wider">Subjective</span>
                  <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 leading-relaxed">
                    {selectedLog.soapNote.subjective}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-[#1B7B87] uppercase text-[10px] tracking-wider">Objective</span>
                  <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 leading-relaxed">
                    {selectedLog.soapNote.objective}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-[#1B7B87] uppercase text-[10px] tracking-wider">Assessment</span>
                  <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 leading-relaxed">
                    {selectedLog.soapNote.assessment}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-[#1B7B87] uppercase text-[10px] tracking-wider">Plan</span>
                  <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 leading-relaxed">
                    {selectedLog.soapNote.plan}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-3 border-t border-slate-100 flex gap-2">
                <button className="flex-1 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5">
                  <Save size={14} />
                  <span>Sign & Lock Record</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-400 space-y-2">
              <FileText size={28} className="mx-auto text-slate-300" />
              <p className="text-xs font-semibold">Select a session log to review clinical SOAP notes.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}