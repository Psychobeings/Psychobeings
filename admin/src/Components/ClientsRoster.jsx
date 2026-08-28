import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  CheckCircle2, 
  X 
} from 'lucide-react';

export default function ClientRosterWithSessionLogs() {
  // Client Roster State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [activeTab, setActiveTab] = useState('therapyJourney'); // 'therapyJourney', 'billing', 'followUps'
  const [selectedSessionNote, setSelectedSessionNote] = useState(null); // When viewing a specific session note

  // Mock Clients Data matching portal screens
  const clients = [
    {
      id: 1,
      name: 'Amit Paul',
      status: 'Active',
      initials: 'AP',
      email: 'amitpaul0904@gmail.com',
      phone: '+91 9086020336',
      gender: 'Male',
      intakeFilled: true,
      consentFilled: true,
      caseSummary: 'N/A',
      completedSessions: 0,
      upcomingSessions: 0,
      cancelledSessions: 0,
      totalSessions: 1,
      suggestedSessions: 12,
      sessionHistory: []
    },
    {
      id: 2,
      name: 'Avni Kohli',
      status: 'Active',
      initials: 'AK',
      email: 'avnikohli01@gmail.com',
      phone: '+91 09981002244',
      gender: 'Female',
      intakeFilled: true,
      consentFilled: true,
      caseSummary: 'The client is engaged in therapy to address procrastination, daily task management, self-care neglect, trust issues, and emotional distress from past traumas, with a focus on safety due to suicidality. Therapy embraces CBT, Behavioural Activation, and strategies for sleep and social support, while gradually confronting trauma-related distress. The client continues to struggle with sleep, friendship beliefs, and emotional regulation, despite therapy engagement. The plan prioritizes mental stability, addressing core beliefs, and building social support, with an eye towards trauma processing once the client is more stabilized. A recent session highlighted the challenges in setting difficulties and tendency to procrastinate, reinforcing the need for the outlined treatment plan.',
      completedSessions: 5,
      upcomingSessions: 0,
      cancelledSessions: 0,
      totalSessions: 6,
      suggestedSessions: 12,
      sessionHistory: [
        {
          id: 's5',
          sessionNumber: 'Session 5',
          date: '14 Jul',
          time: '19:00',
          summary: 'The client struggles with procrastination, difficulty in daily task initiation and completion, low motivation for self-care, boredom in family interactions, trust issues, and emotional distress from past traumas. During the session, the focus was on understanding...',
          details: {
            presenting: [
              'Persistent procrastination',
              'Difficulty initiating and completing daily tasks',
              'Reduced motivation for self-care',
              'Feelings of boredom and dissatisfaction with family interactions',
              'Difficulty trusting others',
              'Emotional distress related to multiple traumatic experiences.'
            ],
            sessionFocus: 'The client attended the session after a two-week break, which she had intentionally requested to provide herself with time to reflect on and implement the strategies discussed in previous sessions...',
            treatmentPlan: [
              'Establish safety and continuously monitor suicide risk.',
              'Cognitive Behaviour Therapy (CBT) for anxiety, depression, and procrastination.',
              'Behavioural Activation to increase engagement in meaningful activities.',
              'Improve sleep hygiene.'
            ],
            intervention: 'Progressive Muscle Relaxation (PMR), Behavioural Activation',
            progress: 'Improved',
            riskAssessment: 'Low',
            symptoms: 'Anxiety, Procrastination, Sleep disturbance',
            medicalStateExam: 'Oriented, cooperative, and attentive. Affect anxious and reactive.',
            behavioralHistory: 'Pre-morbid functioning generally functional prior to current difficulties. Childhood trauma history influencing emotional functioning.',
            medications: 'None reported.',
            substanceUse: 'Smoking: Present (approx 20 cigarettes in one year).',
            clientNotes: 'Over the past two weeks, you gave yourself the space to pause and reflect on the strategies we discussed...',
            assignments: [
              { id: 1, title: 'Sleep Hygiene Routine', status: 'Completed', frequency: 'Everyday', instruction: 'Maintain consistent sleep schedule.' },
              { id: 2, title: 'Anger Triggers Worksheet', status: 'Completed', frequency: 'None', instruction: 'Analyze recent anger episodes.' }
            ]
          }
        },
        {
          id: 's4',
          sessionNumber: 'Session 4',
          date: '31 Jul',
          time: '19:00',
          summary: 'The client, presenting issues of procrastination, difficulty with daily tasks, lack of motivation for self-care, boredom in family interactions, trust issues, and emotional distress from trauma, was scheduled for therapy. The focus was to employ CBT for...',
          details: { presenting: ['Procrastination', 'Low motivation'], sessionFocus: 'Focused on CBT techniques for procrastination.', treatmentPlan: ['CBT target focus'], intervention: 'CBT', progress: 'Steady', riskAssessment: 'Low', symptoms: 'Anxiety', medicalStateExam: 'Stable', behavioralHistory: 'None', medications: 'None', substanceUse: 'None', clientNotes: 'Keep up the practice.', assignments: [] }
        },
        {
          id: 's3',
          sessionNumber: 'Session 3',
          date: '24 Jul',
          time: '19:00',
          summary: 'The client struggled with procrastination, daily task initiation and completion, self-care, dissatisfaction with family interactions, trust issues, and emotional distress from past traumas. During the session, focus was placed on recent irritability in social interactions,...',
          details: { presenting: ['Procrastination'], sessionFocus: 'Social interactions focus.', treatmentPlan: ['Interpersonal boundaries'], intervention: 'Discussion', progress: 'Moderate', riskAssessment: 'Low', symptoms: 'Anxiety', medicalStateExam: 'Stable', behavioralHistory: 'None', medications: 'None', substanceUse: 'None', clientNotes: 'Reflect on boundaries.', assignments: [] }
        },
        {
          id: 's2',
          sessionNumber: 'Session 2',
          date: '17 Jul',
          time: '19:00',
          summary: 'The client, struggling with procrastination, daily task initiation and completion, self-care, dissatisfaction with family interactions, trust issues, and emotional distress from past traumas. During the session, focus was placed on recent irritability in social interactions,...',
          details: { presenting: ['Procrastination'], sessionFocus: 'Task initiation focus.', treatmentPlan: ['Behavioral activation'], intervention: 'Activation', progress: 'Stable', riskAssessment: 'Low', symptoms: 'Anxiety', medicalStateExam: 'Stable', behavioralHistory: 'None', medications: 'None', substanceUse: 'None', clientNotes: 'Try task breakdown.', assignments: [] }
        },
        {
          id: 's1',
          sessionNumber: 'Session 1',
          date: '10 Jul',
          time: '19:00',
          summary: 'The client, struggling with procrastination, daily task initiation and completion, self-care, dissatisfaction with family interactions, trust issues, and emotional distress from past traumas. During the session, focus was placed on recent irritability in social interactions,...',
          details: { presenting: ['Initial intake issues'], sessionFocus: 'Intake and goal setting.', treatmentPlan: ['Goal establishment'], intervention: 'Clinical Interview', progress: 'Initial', riskAssessment: 'Low', symptoms: 'Anxiety', medicalStateExam: 'Stable', behavioralHistory: 'None', medications: 'None', substanceUse: 'None', clientNotes: 'Welcome session.', assignments: [] }
        }
      ]
    },
    {
      id: 3,
      name: 'Deepanshu Rawat',
      status: 'Active',
      initials: 'DR',
      email: 'rawat.deepanshu@gmail.com',
      phone: '+91 8078750838',
      gender: 'Male',
      intakeFilled: true,
      consentFilled: true,
      caseSummary: 'N/A',
      completedSessions: 2,
      upcomingSessions: 1,
      cancelledSessions: 0,
      totalSessions: 3,
      suggestedSessions: 8,
      sessionHistory: []
    }
  ];

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20 font-sans text-stone-800">
      
      {/* Top Header & Search Control */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-[2.5rem] border border-stone-200/80 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-stone-900 tracking-tight">Client Roster</h1>
          <p className="text-xs text-stone-500 font-medium mt-0.5">Manage clients, view comprehensive profiles, and access post-session logs.</p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-72">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs font-bold outline-none focus:border-[#237A88]"
            />
          </div>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white rounded-[2.5rem] border border-stone-200/80 p-6 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-black text-sm border border-[#237A88]/20">
                    {client.initials}
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-stone-900">{client.name}</h2>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                      {client.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs font-medium text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="text-stone-400 font-semibold w-12">Email:</span>
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-stone-400 font-semibold w-12">Phone:</span>
                  <span>{client.phone}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
              <button
                onClick={() => { setSelectedClient(client); setSelectedSessionNote(null); }}
                className="flex-1 py-2.5 bg-[#237A88]/10 hover:bg-[#237A88] text-[#237A88] hover:text-white rounded-2xl text-xs font-bold transition-all text-center cursor-pointer"
              >
                View Profile & Logs
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CLIENT PROFILE MODAL WITH POST-SESSION LOGS MAPPING */}
      {selectedClient && !selectedSessionNote && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-black text-base border border-[#237A88]/20">
                  {selectedClient.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-black text-stone-900">{selectedClient.name}</h2>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                      {selectedClient.status}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium mt-0.5">{selectedClient.email} • {selectedClient.phone}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedClient(null)}
                className="p-2 text-stone-400 hover:text-stone-600 rounded-xl bg-stone-50 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Intake & Consent Pills */}
            <div className="flex items-center gap-3 text-xs">
              <span className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 ${selectedClient.intakeFilled ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-stone-50 text-stone-500'}`}>
                <CheckCircle2 size={14} /> Intake Filled
              </span>
              <span className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 ${selectedClient.consentFilled ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-stone-50 text-stone-500'}`}>
                <CheckCircle2 size={14} /> Consent Filled
              </span>
            </div>

            {/* Profile Sub-tabs */}
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
              <button 
                onClick={() => setActiveTab('therapyJourney')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'therapyJourney' ? 'bg-[#237A88] text-white shadow-md' : 'text-stone-600 hover:bg-stone-50'}`}
              >
                Therapy Journey
              </button>
              <button 
                onClick={() => setActiveTab('billing')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'billing' ? 'bg-[#237A88] text-white shadow-md' : 'text-stone-600 hover:bg-stone-50'}`}
              >
                Billing
              </button>
              <button 
                onClick={() => setActiveTab('followUps')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'followUps' ? 'bg-[#237A88] text-white shadow-md' : 'text-stone-600 hover:bg-stone-50'}`}
              >
                Follow Ups
              </button>
            </div>

            {/* Tab 1: Therapy Journey & Session Logs Mapping */}
            {activeTab === 'therapyJourney' && (
              <div className="space-y-6">
                <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#237A88]">Case Summary</h3>
                  <p className="text-xs font-medium text-stone-700 leading-relaxed">{selectedClient.caseSummary}</p>
                </div>

                {/* Session Tracker */}
                <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#237A88]">Session Tracker</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <div className="text-base font-black text-[#237A88]">{selectedClient.completedSessions}</div>
                      <div className="text-[10px] text-stone-400 font-bold uppercase">Completed</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <div className="text-base font-black text-amber-600">{selectedClient.upcomingSessions}</div>
                      <div className="text-[10px] text-stone-400 font-bold uppercase">Upcoming</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <div className="text-base font-black text-rose-600">{selectedClient.cancelledSessions}</div>
                      <div className="text-[10px] text-stone-400 font-bold uppercase">Cancelled</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <div className="text-base font-black text-stone-800">{selectedClient.totalSessions}</div>
                      <div className="text-[10px] text-stone-400 font-bold uppercase">Total</div>
                    </div>
                  </div>
                </div>

                {/* Session History & Notes Link */}
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-stone-500">Session History & Post-Session Logs</h3>
                  {selectedClient.sessionHistory.length === 0 ? (
                    <div className="text-center py-8 text-stone-400 text-xs font-medium bg-stone-50 rounded-2xl border border-stone-200">
                      No completed sessions or post-session logs yet.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {selectedClient.sessionHistory.map((session) => (
                        <div key={session.id} className="bg-white p-5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-black text-xs text-stone-900">{session.sessionNumber}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 bg-stone-100 text-stone-600 rounded-md">{session.date} • {session.time}</span>
                            </div>
                            <p className="text-xs text-stone-500 font-medium line-clamp-1">{session.summary}</p>
                          </div>
                          <button
                            onClick={() => setSelectedSessionNote(session)}
                            className="flex items-center gap-1.5 px-4 py-2 bg-[#237A88]/10 hover:bg-[#237A88] text-[#237A88] hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0"
                          >
                            <FileText size={14} />
                            <span>View Notes</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="py-12 text-center text-xs text-stone-500 font-medium">
                Billing and payment records for {selectedClient.name}.
              </div>
            )}

            {activeTab === 'followUps' && (
              <div className="py-12 text-center text-xs text-stone-500 font-medium">
                Follow-up automation settings for {selectedClient.name}.
              </div>
            )}

          </div>
        </div>
      )}

      {/* DETAILED POST-SESSION LOG / SESSION NOTES VIEW MODAL */}
      {selectedSessionNote && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#237A88]/10 text-[#237A88] rounded-2xl">
                  <FileText size={18} />
                </div>
                <div>
                  <h2 className="text-sm font-black text-stone-900">Session Notes & Post-Session Log</h2>
                  <p className="text-[11px] text-stone-500 font-medium">{selectedSessionNote.sessionNumber} • {selectedSessionNote.date}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedSessionNote(null)}
                className="p-2 text-stone-400 hover:text-stone-600 rounded-xl bg-stone-50 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Note Sections */}
            <div className="space-y-6 text-xs">
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/60 space-y-2">
                <h3 className="font-black uppercase tracking-wider text-[#237A88]">Presenting / Clinical Presentation</h3>
                <ul className="space-y-1.5">
                  {selectedSessionNote.details.presenting.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-700 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#237A88] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/60 space-y-2">
                <h3 className="font-black uppercase tracking-wider text-[#237A88]">Session Focus & Discussion</h3>
                <p className="text-stone-700 font-medium leading-relaxed">{selectedSessionNote.details.sessionFocus}</p>
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/60 space-y-2">
                <h3 className="font-black uppercase tracking-wider text-[#237A88]">Treatment Plan</h3>
                <ul className="space-y-1.5">
                  {selectedSessionNote.details.treatmentPlan.map((tp, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-stone-700 font-medium">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                      <span>{tp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 space-y-1">
                  <span className="font-bold text-[#237A88] uppercase tracking-wider">Intervention Applied</span>
                  <p className="font-medium text-stone-800">{selectedSessionNote.details.intervention}</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 space-y-1">
                  <span className="font-bold text-[#237A88] uppercase tracking-wider">Client Progress</span>
                  <p className="font-medium text-stone-800">{selectedSessionNote.details.progress}</p>
                </div>
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/60 space-y-2">
                <h3 className="font-black uppercase tracking-wider text-[#237A88]">Client Takeaways & Homework</h3>
                <p className="text-stone-700 font-medium leading-relaxed">{selectedSessionNote.details.clientNotes}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => setSelectedSessionNote(null)}
                className="px-6 py-2.5 bg-[#237A88] text-white rounded-2xl text-xs font-bold shadow-md cursor-pointer"
              >
                Close Notes
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}