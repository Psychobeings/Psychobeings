import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  CheckCircle2, 
  X,
  Plus
} from 'lucide-react';

export default function ClientRosterWithSessionLogs() {
  // Client Roster State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [activeTab, setActiveTab] = useState('therapyJourney'); // 'therapyJourney', 'billing', 'followUps'
  const [selectedSessionNote, setSelectedSessionNote] = useState(null); // When viewing a specific session note
  const [isAddingSession, setIsAddingSession] = useState(false); // Modal for New Session Note

  // Form State for New Session Note
  const [newNoteData, setNewNoteData] = useState({
    sessionNumber: '',
    date: '',
    time: '',
    presenting: '',
    sessionFocus: '',
    treatmentPlan: '',
    intervention: '',
    progress: 'Stable',
    riskAssessment: 'Low',
    clientNotes: ''
  });

  // Mock Clients Data matching portal screens
  const [clients, setClients] = useState([
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
      caseSummary: 'The client is engaged in therapy to address procrastination, daily task management, self-care neglect, trust issues, and emotional distress from past traumas...',
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
          summary: 'The client struggles with procrastination, difficulty in daily task initiation and completion, low motivation for self-care, and emotional distress from past traumas...',
          details: {
            presenting: ['Persistent procrastination', 'Difficulty initiating tasks', 'Low self-care motivation'],
            sessionFocus: 'Reflecting on strategies and building behavioral activation routines.',
            treatmentPlan: ['Establish safety', 'CBT for procrastination', 'Sleep hygiene improvement'],
            intervention: 'PMR, Behavioural Activation',
            progress: 'Improved',
            riskAssessment: 'Low',
            clientNotes: 'Keep practicing the structured task breakdown.'
          }
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
  ]);

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveNewSession = (e) => {
    e.preventDefault();
    if (!selectedClient) return;

    const createdSession = {
      id: 's_' + Date.now(),
      sessionNumber: newNoteData.sessionNumber || `Session ${selectedClient.sessionHistory.length + 1}`,
      date: newNoteData.date || 'Today',
      time: newNoteData.time || '18:00',
      summary: newNoteData.sessionFocus || 'Session completed successfully.',
      details: {
        presenting: newNoteData.presenting ? newNoteData.presenting.split(',') : ['General counseling'],
        sessionFocus: newNoteData.sessionFocus,
        treatmentPlan: newNoteData.treatmentPlan ? newNoteData.treatmentPlan.split(',') : ['Targeted therapeutic goals'],
        intervention: newNoteData.intervention,
        progress: newNoteData.progress,
        riskAssessment: newNoteData.riskAssessment,
        clientNotes: newNoteData.clientNotes
      }
    };

    const updatedClients = clients.map(client => {
      if (client.id === selectedClient.id) {
        const updatedHistory = [createdSession, ...client.sessionHistory];
        const updatedClientObj = {
          ...client,
          completedSessions: client.completedSessions + 1,
          totalSessions: client.totalSessions + 1,
          sessionHistory: updatedHistory
        };
        setSelectedClient(updatedClientObj);
        return updatedClientObj;
      }
      return client;
    });

    setClients(updatedClients);
    setIsAddingSession(false);
    setNewNoteData({
      sessionNumber: '',
      date: '',
      time: '',
      presenting: '',
      sessionFocus: '',
      treatmentPlan: '',
      intervention: '',
      progress: 'Stable',
      riskAssessment: 'Low',
      clientNotes: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20 font-sans text-stone-800">
      
      {/* Top Header & Search Control */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-[2.5rem] border border-stone-200/80 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-stone-900 tracking-tight">Client Roster</h1>
          <p className="text-xs text-stone-500 font-medium mt-0.5">Manage clients, view comprehensive profiles, and log session notes.</p>
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

      {/* CLIENT PROFILE MODAL */}
      {selectedClient && !selectedSessionNote && !isAddingSession && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
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

            {/* Sub-tabs & Action Control */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
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
              </div>

              {activeTab === 'therapyJourney' && (
                <button
                  onClick={() => setIsAddingSession(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#237A88] text-white rounded-xl text-xs font-bold hover:bg-[#1b616d] transition-all cursor-pointer shadow-sm"
                >
                  <Plus size={14} />
                  <span>New Session Note</span>
                </button>
              )}
            </div>

            {activeTab === 'therapyJourney' && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-stone-500">Session History & Post-Session Logs</h3>
                  {selectedClient.sessionHistory.length === 0 ? (
                    <div className="text-center py-8 text-stone-400 text-xs font-medium bg-stone-50 rounded-2xl border border-stone-200">
                      No logs added yet. Click &quot;New Session Note&quot; above to log your first session.
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
                Billing records for {selectedClient.name}.
              </div>
            )}

          </div>
        </div>
      )}

      {/* NEW SESSION NOTE FORM MODAL */}
      {isAddingSession && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#237A88]/10 text-[#237A88] rounded-2xl">
                  <Plus size={18} />
                </div>
                <div>
                  <h2 className="text-sm font-black text-stone-900">Add New Session Note</h2>
                  <p className="text-[11px] text-stone-500 font-medium">For {selectedClient?.name}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAddingSession(false)}
                className="p-2 text-stone-400 hover:text-stone-600 rounded-xl bg-stone-50 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveNewSession} className="space-y-4 text-xs font-bold text-stone-700">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block mb-1 text-stone-500 uppercase text-[10px]">Session Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Session 1"
                    value={newNoteData.sessionNumber}
                    onChange={(e) => setNewNoteData({...newNoteData, sessionNumber: e.target.value})}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-stone-500 uppercase text-[10px]">Date</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 18 Aug"
                    value={newNoteData.date}
                    onChange={(e) => setNewNoteData({...newNoteData, date: e.target.value})}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-stone-500 uppercase text-[10px]">Time</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 19:00"
                    value={newNoteData.time}
                    onChange={(e) => setNewNoteData({...newNoteData, time: e.target.value})}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-stone-500 uppercase text-[10px]">Presenting Issues (Comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Procrastination, Anxiety, Sleep disturbance"
                  value={newNoteData.presenting}
                  onChange={(e) => setNewNoteData({...newNoteData, presenting: e.target.value})}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>

              <div>
                <label className="block mb-1 text-stone-500 uppercase text-[10px]">Session Focus & Discussion Summary</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Detail the core insights and discussion points..."
                  value={newNoteData.sessionFocus}
                  onChange={(e) => setNewNoteData({...newNoteData, sessionFocus: e.target.value})}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88] resize-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-stone-500 uppercase text-[10px]">Treatment Plan Goals (Comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. CBT reframing, Behavioural activation"
                  value={newNoteData.treatmentPlan}
                  onChange={(e) => setNewNoteData({...newNoteData, treatmentPlan: e.target.value})}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block mb-1 text-stone-500 uppercase text-[10px]">Intervention</label>
                  <input
                    type="text"
                    placeholder="e.g. PMR, Discussion"
                    value={newNoteData.intervention}
                    onChange={(e) => setNewNoteData({...newNoteData, intervention: e.target.value})}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-stone-500 uppercase text-[10px]">Progress</label>
                  <select
                    value={newNoteData.progress}
                    onChange={(e) => setNewNoteData({...newNoteData, progress: e.target.value})}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  >
                    <option value="Initial">Initial</option>
                    <option value="Stable">Stable</option>
                    <option value="Improved">Improved</option>
                    <option value="Challenged">Challenged</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-stone-500 uppercase text-[10px]">Risk Assessment</label>
                  <select
                    value={newNoteData.riskAssessment}
                    onChange={(e) => setNewNoteData({...newNoteData, riskAssessment: e.target.value})}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  >
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-stone-500 uppercase text-[10px]">Client Takeaways & Homework</label>
                <textarea
                  rows="2"
                  placeholder="Assignments or notes for the client..."
                  value={newNoteData.clientNotes}
                  onChange={(e) => setNewNoteData({...newNoteData, clientNotes: e.target.value})}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88] resize-none"
                />
              </div>

              <div className="pt-4 border-t border-stone-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddingSession(false)}
                  className="px-5 py-2.5 bg-stone-100 text-stone-600 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#237A88] text-white rounded-xl text-xs font-bold shadow-md cursor-pointer hover:bg-[#1b616d]"
                >
                  Save & Push to Log
                </button>
              </div>
            </form>

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