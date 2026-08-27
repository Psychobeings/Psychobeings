import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Calendar, 
  ShieldAlert, 
  Brain, 
  ChevronRight,
  ClipboardList
} from 'lucide-react';

export default function CaseHistory() {
  const [selectedClientId, setSelectedClientId] = useState(1);

  // Mock list of client case records
  const caseRecords = [
    {
      id: 1,
      name: "Sarah Jenkins",
      age: 29,
      gender: "Female",
      primaryDiagnosis: "Generalized Anxiety Disorder (300.02)",
      secondaryDiagnosis: "Mild Major Depressive Episode",
      startDate: "Oct 12, 2025",
      totalSessions: 14,
      status: "Active",
      riskLevel: "Low",
      formulation: "Client presents with persistent worry, physiological tension, and sleep disturbances linked to perfectionistic expectations in corporate environment.",
      historyNotes: [
        {
          id: 101,
          date: "Aug 20, 2026",
          type: "Session Summary",
          title: "Cognitive Restructuring & Sleep Hygiene",
          content: "Reviewed thought record sheets targeting catastrophic interpretations of work feedback. Patient demonstrated effective identification of cognitive distortions.",
          author: "Dr. Alex Morgan"
        },
        {
          id: 102,
          date: "May 14, 2026",
          type: "Progress Review",
          title: "Mid-Treatment Outcome Evaluation",
          content: "GAD-7 score reduced from 16 (Severe) at intake to 8 (Mild). Client reports improved coping tools during acute stressors.",
          author: "Dr. Alex Morgan"
        },
        {
          id: 103,
          date: "Oct 12, 2025",
          type: "Intake Assessment",
          title: "Comprehensive Clinical Evaluation",
          content: "Initial clinical interview completed. Mental Status Examination intact with anxious affect. Established initial treatment plan around CBT framework.",
          author: "Dr. Alex Morgan"
        }
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 34,
      gender: "Male",
      primaryDiagnosis: "Adjustment Disorder with Anxious Mood",
      secondaryDiagnosis: "None",
      startDate: "Jan 08, 2026",
      totalSessions: 8,
      status: "Active",
      riskLevel: "None",
      formulation: "Adjusting to recent career transition and severe work-life imbalance.",
      historyNotes: [
        {
          id: 201,
          date: "Aug 15, 2026",
          type: "Session Summary",
          title: "Boundary Setting & Stress Management",
          content: "Explored interpersonal boundary setting with manager. Role-played assertiveness techniques.",
          author: "Dr. Alex Morgan"
        }
      ]
    }
  ];

  const activeClient = caseRecords.find((c) => c.id === selectedClientId) || caseRecords[0];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-stone-200">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Case History Records</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            Clinical formulations, longitudinal notes, and diagnostic histories.
          </p>
        </div>
        <button className="px-4 py-2 bg-emerald-900 text-white rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Case Entry
        </button>
      </div>

      {/* Main Grid: Client List (Left) + Detail Workspace (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Case Directory (4 Columns) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-3 text-stone-400" />
            <input
              type="text"
              placeholder="Search case files..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 transition-all"
            />
          </div>

          <div className="bg-white border border-stone-200 rounded-xl shadow-sm divide-y divide-stone-100 overflow-hidden">
            {caseRecords.map((client) => (
              <div
                key={client.id}
                onClick={() => setSelectedClientId(client.id)}
                className={`p-4 cursor-pointer transition-colors flex items-center justify-between ${
                  selectedClientId === client.id
                    ? 'bg-emerald-50/70 border-l-4 border-emerald-900'
                    : 'hover:bg-stone-50'
                }`}
              >
                <div>
                  <h3 className="font-medium text-stone-900 text-sm">{client.name}</h3>
                  <p className="text-xs text-stone-500 mt-0.5">{client.primaryDiagnosis}</p>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-stone-400">
                    <span>{client.totalSessions} Sessions</span>
                    <span>•</span>
                    <span>Started {client.startDate}</span>
                  </div>
                </div>
                <ChevronRight className={`h-4 w-4 ${selectedClientId === client.id ? 'text-emerald-900' : 'text-stone-300'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Detailed Case Record (8 Columns) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Client Summary Banner */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-emerald-900/10 text-emerald-900 flex items-center justify-center font-bold text-lg">
                  {activeClient.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-stone-900">{activeClient.name}</h2>
                  <p className="text-xs text-stone-500">{activeClient.age} Y/O • {activeClient.gender}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                  {activeClient.status}
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-stone-100 text-stone-700 flex items-center gap-1">
                  <ShieldAlert className="h-3 w-3 text-amber-600" />
                  Risk: {activeClient.riskLevel}
                </span>
              </div>
            </div>

            {/* Diagnostic Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                <span className="font-semibold text-stone-700 uppercase tracking-wider text-[10px] block mb-1">
                  Primary Diagnostic Impression
                </span>
                <p className="text-stone-900 font-medium">{activeClient.primaryDiagnosis}</p>
              </div>

              <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                <span className="font-semibold text-stone-700 uppercase tracking-wider text-[10px] block mb-1">
                  Secondary / Differential
                </span>
                <p className="text-stone-900 font-medium">{activeClient.secondaryDiagnosis}</p>
              </div>
            </div>

            {/* Case Formulation */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-stone-500 tracking-wider mb-1">
                <Brain className="h-3.5 w-3.5 text-emerald-900" />
                Case Formulation Summary
              </div>
              <p className="text-sm text-stone-700 bg-stone-50/70 p-3.5 rounded-lg border border-stone-100 leading-relaxed">
                {activeClient.formulation}
              </p>
            </div>
          </div>

          {/* Chronological Case History Notes */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-stone-600" />
              Chronological Case History & Milestones
            </h3>

            <div className="space-y-4">
              {activeClient.historyNotes.map((note) => (
                <div key={note.id} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-md font-medium bg-stone-100 text-stone-700">
                      {note.type}
                    </span>
                    <span className="text-stone-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {note.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-stone-900">{note.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{note.content}</p>

                  <div className="pt-2 flex justify-between items-center text-[11px] text-stone-400 border-t border-stone-100 mt-3">
                    <span>Recorded by: {note.author}</span>
                    <button className="text-emerald-900 font-medium hover:underline">View Full Record</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}