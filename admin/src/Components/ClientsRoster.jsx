import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  X,
  Plus,
  Calendar,
  Clock,
  CheckCircle,
  Ban,
  TrendingUp,
  Award,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function ClientRosterWithBookingSummary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [activeTab, setActiveTab] = useState('therapyJourney'); 
  const [selectedSessionNote, setSelectedSessionNote] = useState(null);
  const [isAddingSession, setIsAddingSession] = useState(false);

  const [newNoteData, setNewNoteData] = useState({
    bookingId: '',
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

  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'Avni Kohli',
      status: 'Active',
      initials: 'AK',
      email: 'avnikohli01@gmail.com',
      phone: '+91 09981002244',
      gender: 'Female',
      caseSummary: 'Client engaged in therapy addressing procrastination, task management, and behavioral activation routines.',
      completedSessions: 5,
      upcomingSessions: 1,
      cancelledSessions: 0,
      totalSessions: 6,
      suggestedSessions: 12,
      bookingLogs: [
        {
          bookingId: 'bk_101',
          date: '14 Jul 2026',
          time: '19:00 - 20:00',
          mode: 'Online Video',
          status: 'Completed',
          notesLinked: 's5'
        },
        {
          bookingId: 'bk_102',
          date: '28 Jul 2026',
          time: '19:00 - 20:00',
          mode: 'Online Video',
          status: 'Upcoming',
          notesLinked: null
        }
      ],
      sessionHistory: [
        {
          id: 's5',
          bookingId: 'bk_101',
          sessionNumber: 'Session 5',
          date: '14 Jul 2026',
          time: '19:00',
          summary: 'Struggling with procrastination and daily task initiation.',
          details: {
            presenting: ['Persistent procrastination', 'Difficulty initiating tasks'],
            sessionFocus: 'Reflecting on strategies and building behavioral activation routines.',
            treatmentPlan: ['Establish safety', 'CBT for procrastination'],
            intervention: 'PMR, Behavioural Activation',
            progress: 'Improved',
            riskAssessment: 'Low',
            clientNotes: 'Keep practicing structured task breakdown.'
          }
        }
      ]
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
      bookingId: newNoteData.bookingId || 'bk_manual',
      sessionNumber: newNoteData.sessionNumber || `Session ${selectedClient.sessionHistory.length + 1}`,
      date: newNoteData.date || 'Today',
      time: newNoteData.time || '18:00',
      summary: newNoteData.sessionFocus || 'Session completed successfully.',
      details: {
        presenting: newNoteData.presenting ? newNoteData.presenting.split(',') : ['General counseling'],
        sessionFocus: newNoteData.sessionFocus,
        treatmentPlan: newNoteData.treatmentPlan ? newNoteData.treatmentPlan.split(',') : ['Targeted goals'],
        intervention: newNoteData.intervention,
        progress: newNoteData.progress,
        riskAssessment: newNoteData.riskAssessment,
        clientNotes: newNoteData.clientNotes
      }
    };

    const updatedClients = clients.map(client => {
      if (client.id === selectedClient.id) {
        const updatedHistory = [createdSession, ...client.sessionHistory];
        
        const updatedBookings = client.bookingLogs.map(b => {
          if (b.bookingId === newNoteData.bookingId) {
            return { ...b, status: 'Completed', notesLinked: createdSession.id };
          }
          return b;
        });

        const completedCount = updatedBookings.filter(b => b.status === 'Completed').length;
        const upcomingCount = updatedBookings.filter(b => b.status === 'Upcoming').length;
        const cancelledCount = updatedBookings.filter(b => b.status === 'Cancelled').length;

        const updatedClientObj = {
          ...client,
          bookingLogs: updatedBookings,
          sessionHistory: updatedHistory,
          completedSessions: completedCount,
          upcomingSessions: upcomingCount,
          cancelledSessions: cancelledCount,
          totalSessions: updatedBookings.length
        };
        setSelectedClient(updatedClientObj);
        return updatedClientObj;
      }
      return client;
    });

    setClients(updatedClients);
    setIsAddingSession(false);
    setNewNoteData({
      bookingId: '',
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

  const getCompletionPercentage = (completed, suggested) => {
    if (!suggested || suggested === 0) return 0;
    return Math.min(Math.round((completed / suggested) * 100), 100);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20 font-sans text-stone-800">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-[2.5rem] border border-stone-200/80 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#237A88]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-[#237A88]/10 text-[#237A88] text-[10px] font-extrabold rounded-full flex items-center gap-1">
              <Sparkles size={10} /> Clinical Practice Dashboard
            </span>
          </div>
          <h1 className="text-xl font-black text-stone-900 tracking-tight">Client Session Tracking</h1>
          <p className="text-xs text-stone-500 font-medium mt-0.5">Manage rosters, monitor treatment plan velocity, and convert bookings instantly.</p>
        </div>

        <div className="relative w-full sm:w-72 z-10">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search by client name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-xs font-bold outline-none focus:border-[#237A88] transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Roster Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => {
          const progressPct = getCompletionPercentage(client.completedSessions, client.suggestedSessions);
          return (
            <div key={client.id} className="bg-white rounded-[2.5rem] border border-stone-200/80 p-6 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#237A88]/20 to-[#237A88]/5 text-[#237A88] flex items-center justify-center font-black text-sm border border-[#237A88]/20 shadow-sm">
                      {client.initials}
                    </div>
                    <div>
                      <h2 className="text-sm font-black text-stone-900 group-hover:text-[#237A88] transition-colors">{client.name}</h2>
                      <p className="text-[11px] text-stone-400 font-medium">{client.email}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200/50">
                    {client.status}
                  </span>
                </div>

                {/* Treatment Progress Bar */}
                <div className="space-y-1.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-100">
                  <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-stone-500 flex items-center gap-1"><TrendingUp size={12} /> Treatment Plan Progress</span>
                    <span className="text-[#237A88]">{client.completedSessions} / {client.suggestedSessions} Sessions</span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#237A88] h-full rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
                  </div>
                </div>

                {/* Quick Counter Row */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-stone-50/80 p-2.5 rounded-xl border border-stone-100">
                    <span className="block text-[10px] text-stone-400 font-bold uppercase">Done</span>
                    <span className="font-black text-stone-800 text-sm">{client.completedSessions}</span>
                  </div>
                  <div className="bg-[#237A88]/5 p-2.5 rounded-xl border border-[#237A88]/10">
                    <span className="block text-[10px] text-[#237A88] font-bold uppercase">Upcoming</span>
                    <span className="font-black text-[#237A88] text-sm">{client.upcomingSessions}</span>
                  </div>
                  <div className="bg-stone-50/80 p-2.5 rounded-xl border border-stone-100">
                    <span className="block text-[10px] text-stone-400 font-bold uppercase">Total</span>
                    <span className="font-black text-stone-800 text-sm">{client.totalSessions}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => { setSelectedClient(client); setSelectedSessionNote(null); }}
                className="w-full py-3 bg-[#237A88]/10 hover:bg-[#237A88] text-[#237A88] hover:text-white rounded-2xl text-xs font-bold transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>View Profile & Metrics</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          );
        })}
      </div>

      {/* CLIENT PROFILE MODAL */}
      {selectedClient && !selectedSessionNote && !isAddingSession && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between pb-6 border-b border-stone-100">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#237A88]/20 to-[#237A88]/5 text-[#237A88] flex items-center justify-center font-black text-lg border border-[#237A88]/20 shadow-sm">
                  {selectedClient.initials}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-black text-stone-900">{selectedClient.name}</h2>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                      {selectedClient.status}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium">{selectedClient.email} • {selectedClient.phone} • {selectedClient.gender}</p>
                </div>
              </div>
              <button onClick={() => setSelectedClient(null)} className="p-2.5 text-stone-400 hover:text-stone-600 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-all cursor-pointer">
                <X size={18} />
              </button>
            </div>

            {/* Case Summary Banner */}
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 flex items-start gap-3">
              <Award size={18} className="text-[#237A88] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-black uppercase text-stone-400 tracking-wider">Clinical Case Summary</span>
                <p className="text-xs text-stone-700 font-medium mt-0.5">{selectedClient.caseSummary}</p>
              </div>
            </div>

            {/* SESSION METRICS SUMMARY CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-3xl border border-stone-200/60">
              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-sm">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><CheckCircle size={18} /></div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Completed</span>
                  <span className="text-base font-black text-stone-900">{selectedClient.completedSessions}</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-sm">
                <div className="p-3 bg-[#237A88]/10 text-[#237A88] rounded-2xl"><Clock size={18} /></div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Upcoming</span>
                  <span className="text-base font-black text-stone-900">{selectedClient.upcomingSessions}</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-sm">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl"><Ban size={18} /></div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Cancelled</span>
                  <span className="text-base font-black text-stone-900">{selectedClient.cancelledSessions}</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-sm">
                <div className="p-3 bg-stone-100 text-stone-600 rounded-2xl"><Calendar size={18} /></div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Total Bookings</span>
                  <span className="text-base font-black text-stone-900">{selectedClient.totalSessions}</span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('therapyJourney')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'therapyJourney' ? 'bg-[#237A88] text-white shadow-md' : 'text-stone-600 hover:bg-stone-50'}`}
                >
                  Therapy Journey ({selectedClient.sessionHistory.length})
                </button>
                <button 
                  onClick={() => setActiveTab('bookings')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'bookings' ? 'bg-[#237A88] text-white shadow-md' : 'text-stone-600 hover:bg-stone-50'}`}
                >
                  Booking Schedule Logs ({selectedClient.bookingLogs.length})
                </button>
              </div>

              {activeTab === 'therapyJourney' && (
                <button
                  onClick={() => setIsAddingSession(true)}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-[#237A88] text-white rounded-xl text-xs font-bold hover:bg-[#1b616d] transition-all cursor-pointer shadow-sm"
                >
                  <Plus size={14} />
                  <span>Convert Booking to Note</span>
                </button>
              )}
            </div>

            {/* Tab 1: Therapy Journey */}
            {activeTab === 'therapyJourney' && (
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-400">Linked Session Logs</h3>
                {selectedClient.sessionHistory.length === 0 ? (
                  <div className="text-center py-10 text-stone-400 text-xs font-medium bg-stone-50 rounded-2xl border border-stone-200">
                    No session logs found yet. Convert an upcoming booking to start tracking progress.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedClient.sessionHistory.map((session) => (
                      <div key={session.id} className="bg-white p-5 rounded-2xl border border-stone-200/80 hover:border-[#237A88]/40 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5">
                            <span className="font-black text-xs text-stone-900 bg-stone-100 px-2.5 py-1 rounded-lg">{session.sessionNumber}</span>
                            <span className="text-[10px] font-extrabold px-2.5 py-0.5 bg-[#237A88]/10 text-[#237A88] rounded-md">
                              Booking Ref: {session.bookingId}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md">
                              Risk: {session.details.riskAssessment}
                            </span>
                          </div>
                          <p className="text-xs text-stone-600 font-medium pt-1">{session.summary}</p>
                          <p className="text-[11px] text-stone-400 font-medium">{session.date} at {session.time}</p>
                        </div>
                        <button
                          onClick={() => setSelectedSessionNote(session)}
                          className="flex items-center gap-1.5 px-4 py-2.5 bg-[#237A88]/10 hover:bg-[#237A88] text-[#237A88] hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 shadow-sm"
                        >
                          <FileText size={14} />
                          <span>View Full Notes</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Bookings */}
            {activeTab === 'bookings' && (
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-400">Booking Schedule History</h3>
                <div className="space-y-3">
                  {selectedClient.bookingLogs.map((booking) => (
                    <div key={booking.bookingId} className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-stone-950">{booking.bookingId}</span>
                          <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                            booking.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 
                            booking.status === 'Upcoming' ? 'bg-cyan-100 text-cyan-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
                          <span className="flex items-center gap-1"><Calendar size={12} /> {booking.date}</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {booking.time}</span>
                          <span className="text-stone-400">• {booking.mode}</span>
                        </div>
                      </div>

                      {booking.notesLinked ? (
                        <span className="text-xs font-bold text-[#237A88] bg-[#237A88]/10 px-3 py-1.5 rounded-xl flex items-center gap-1">
                          <CheckCircle size={12} /> Note Logged
                        </span>
                      ) : (
                        booking.status === 'Upcoming' && (
                          <button
                            onClick={() => {
                              setNewNoteData(prev => ({ ...prev, bookingId: booking.bookingId, date: booking.date, time: booking.time.split(' - ')[0] }));
                              setActiveTab('therapyJourney');
                              setIsAddingSession(true);
                            }}
                            className="px-4 py-2 bg-[#237A88] text-white rounded-xl text-xs font-bold hover:bg-[#1b616d] cursor-pointer shadow-sm transition-all"
                          >
                            Convert to Note
                          </button>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* DETAILED SESSION NOTE VIEW MODAL */}
      {selectedSessionNote && selectedClient && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <span className="text-[10px] font-black uppercase text-[#237A88] tracking-wider">{selectedSessionNote.sessionNumber}</span>
                <h2 className="text-base font-black text-stone-900">{selectedClient.name} — Clinical Session Record</h2>
              </div>
              <button onClick={() => setSelectedSessionNote(null)} className="p-2.5 text-stone-400 hover:text-stone-600 rounded-2xl bg-stone-50 cursor-pointer">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase">Date & Time</span>
                  <p className="font-bold text-stone-800 mt-0.5">{selectedSessionNote.date} at {selectedSessionNote.time}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase">Booking Reference</span>
                  <p className="font-bold text-[#237A88] mt-0.5">{selectedSessionNote.bookingId}</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Presenting Concerns</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSessionNote.details.presenting.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-stone-100 text-stone-700 font-bold rounded-xl">{item}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Session Focus & Interventions</span>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 space-y-2">
                  <p className="text-stone-700 font-medium"><strong className="text-stone-900">Focus:</strong> {selectedSessionNote.details.sessionFocus}</p>
                  <p className="text-stone-700 font-medium"><strong className="text-stone-900">Intervention:</strong> {selectedSessionNote.details.intervention}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200/60">
                  <span className="text-[10px] font-bold text-stone-400 uppercase">Client Progress</span>
                  <p className="font-black text-emerald-700 mt-0.5">{selectedSessionNote.details.progress}</p>
                </div>
                <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200/60">
                  <span className="text-[10px] font-bold text-stone-400 uppercase">Risk Assessment</span>
                  <p className="font-black text-stone-800 mt-0.5">{selectedSessionNote.details.riskAssessment}</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Clinical Takeaways & Notes</span>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 text-stone-700 font-medium">
                  {selectedSessionNote.details.clientNotes}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => setSelectedSessionNote(null)}
                className="px-6 py-2.5 bg-[#237A88] text-white rounded-xl text-xs font-bold shadow-md cursor-pointer hover:bg-[#1b616d]"
              >
                Close Record
              </button>
            </div>

          </div>
        </div>
      )}

      {/* NEW SESSION NOTE FORM MODAL */}
      {isAddingSession && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <h2 className="text-sm font-black text-stone-900">Create Session Note From Booking</h2>
              <button onClick={() => setIsAddingSession(false)} className="p-2.5 text-stone-400 hover:text-stone-600 rounded-2xl bg-stone-50 cursor-pointer">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveNewSession} className="space-y-4 text-xs font-bold text-stone-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1.5 text-stone-400 uppercase text-[10px]">Select Upcoming Booking Slot</label>
                  <select
                    required
                    value={newNoteData.bookingId}
                    onChange={(e) => {
                      const selectedB = selectedClient?.bookingLogs.find(b => b.bookingId === e.target.value);
                      setNewNoteData({
                        ...newNoteData, 
                        bookingId: e.target.value,
                        date: selectedB ? selectedB.date : newNoteData.date,
                        time: selectedB ? selectedB.time.split(' - ')[0] : newNoteData.time
                      });
                    }}
                    className="w-full px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] shadow-inner"
                  >
                    <option value="">-- Choose Booking Slot --</option>
                    {selectedClient?.bookingLogs.filter(b => b.status === 'Upcoming').map(b => (
                      <option key={b.bookingId} value={b.bookingId}>
                        {b.bookingId} ({b.date})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1.5 text-stone-400 uppercase text-[10px]">Session Name / Number</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Session 6"
                    value={newNoteData.sessionNumber}
                    onChange={(e) => setNewNoteData({...newNoteData, sessionNumber: e.target.value})}
                    className="w-full px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1.5 text-stone-400 uppercase text-[10px]">Session Discussion Focus</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Detail primary topics discussed..."
                  value={newNoteData.sessionFocus}
                  onChange={(e) => setNewNoteData({...newNoteData, sessionFocus: e.target.value})}
                  className="w-full px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] resize-none shadow-inner"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1.5 text-stone-400 uppercase text-[10px]">Client Progress Status</label>
                  <select
                    value={newNoteData.progress}
                    onChange={(e) => setNewNoteData({...newNoteData, progress: e.target.value})}
                    className="w-full px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] shadow-inner"
                  >
                    <option value="Improving">Improving</option>
                    <option value="Stable">Stable</option>
                    <option value="Challenged">Challenged</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1.5 text-stone-400 uppercase text-[10px]">Risk Assessment</label>
                  <select
                    value={newNoteData.riskAssessment}
                    onChange={(e) => setNewNoteData({...newNoteData, riskAssessment: e.target.value})}
                    className="w-full px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] shadow-inner"
                  >
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1.5 text-stone-400 uppercase text-[10px]">Interventions Used</label>
                <input
                  type="text"
                  placeholder="e.g. CBT, Behavioural Activation, PMR"
                  value={newNoteData.intervention}
                  onChange={(e) => setNewNoteData({...newNoteData, intervention: e.target.value})}
                  className="w-full px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] shadow-inner"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-stone-400 uppercase text-[10px]">Clinical Takeaways & Notes</label>
                <textarea
                  rows="2"
                  placeholder="Key homework or session takeaways..."
                  value={newNoteData.clientNotes}
                  onChange={(e) => setNewNoteData({...newNoteData, clientNotes: e.target.value})}
                  className="w-full px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] resize-none shadow-inner"
                />
              </div>

              <div className="pt-4 border-t border-stone-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddingSession(false)}
                  className="px-5 py-3 bg-stone-100 text-stone-600 rounded-2xl text-xs font-bold cursor-pointer hover:bg-stone-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#237A88] text-white rounded-2xl text-xs font-bold shadow-md cursor-pointer hover:bg-[#1b616d] transition-all"
                >
                  Save & Update Counts
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}