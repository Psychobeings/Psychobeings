import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  X,
  Plus,
  Calendar,
  Clock,
  CheckCircle,
  Ban
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
      caseSummary: 'Client engaged in therapy addressing procrastination and task management.',
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

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20 font-sans text-stone-800">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-[2.5rem] border border-stone-200/80 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-stone-900 tracking-tight">Client Session Tracking</h1>
          <p className="text-xs text-stone-500 font-medium mt-0.5">Overview of client roster with session counters and booking integration.</p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs font-bold outline-none focus:border-[#237A88]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white rounded-[2.5rem] border border-stone-200/80 p-6 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
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

              <div className="grid grid-cols-3 gap-2 bg-stone-50 p-3 rounded-2xl text-center text-xs">
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase">Done</span>
                  <span className="font-black text-stone-800">{client.completedSessions}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase">Upcoming</span>
                  <span className="font-black text-[#237A88]">{client.upcomingSessions}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase">Total</span>
                  <span className="font-black text-stone-800">{client.totalSessions}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => { setSelectedClient(client); setSelectedSessionNote(null); }}
              className="w-full py-2.5 bg-[#237A88]/10 hover:bg-[#237A88] text-[#237A88] hover:text-white rounded-2xl text-xs font-bold transition-all text-center cursor-pointer"
            >
              View Profile & Metrics
            </button>
          </div>
        ))}
      </div>

      {selectedClient && !selectedSessionNote && !isAddingSession && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between pb-6 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-black text-base border border-[#237A88]/20">
                  {selectedClient.initials}
                </div>
                <div>
                  <h2 className="text-base font-black text-stone-900">{selectedClient.name}</h2>
                  <p className="text-xs text-stone-500 font-medium">{selectedClient.email} • {selectedClient.phone}</p>
                </div>
              </div>
              <button onClick={() => setSelectedClient(null)} className="p-2 text-stone-400 hover:text-stone-600 rounded-xl bg-stone-50 cursor-pointer">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-3xl border border-stone-200/60">
              <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl"><CheckCircle size={16} /></div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase">Completed</span>
                  <span className="text-sm font-black text-stone-900">{selectedClient.completedSessions}</span>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 flex items-center gap-3">
                <div className="p-2.5 bg-[#237A88]/10 text-[#237A88] rounded-xl"><Clock size={16} /></div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase">Upcoming</span>
                  <span className="text-sm font-black text-stone-900">{selectedClient.upcomingSessions}</span>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 flex items-center gap-3">
                <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl"><Ban size={16} /></div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase">Cancelled</span>
                  <span className="text-sm font-black text-stone-900">{selectedClient.cancelledSessions}</span>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 flex items-center gap-3">
                <div className="p-2.5 bg-stone-100 text-stone-600 rounded-xl"><Calendar size={16} /></div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase">Total Bookings</span>
                  <span className="text-sm font-black text-stone-900">{selectedClient.totalSessions}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('therapyJourney')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'therapyJourney' ? 'bg-[#237A88] text-white shadow-md' : 'text-stone-600 hover:bg-stone-50'}`}
                >
                  Therapy Journey
                </button>
                <button 
                  onClick={() => setActiveTab('bookings')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'bookings' ? 'bg-[#237A88] text-white shadow-md' : 'text-stone-600 hover:bg-stone-50'}`}
                >
                  Booking Schedule Logs
                </button>
              </div>

              {activeTab === 'therapyJourney' && (
                <button
                  onClick={() => setIsAddingSession(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#237A88] text-white rounded-xl text-xs font-bold hover:bg-[#1b616d] transition-all cursor-pointer shadow-sm"
                >
                  <Plus size={14} />
                  <span>Convert Booking to Note</span>
                </button>
              )}
            </div>

            {activeTab === 'therapyJourney' && (
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-500">Linked Session Logs</h3>
                {selectedClient.sessionHistory.length === 0 ? (
                  <div className="text-center py-8 text-stone-400 text-xs font-medium bg-stone-50 rounded-2xl border border-stone-200">
                    No session logs found.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedClient.sessionHistory.map((session) => (
                      <div key={session.id} className="bg-white p-5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-xs text-stone-900">{session.sessionNumber}</span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 bg-[#237A88]/10 text-[#237A88] rounded-md">
                              Booking Ref: {session.bookingId}
                            </span>
                          </div>
                          <p className="text-xs text-stone-500 font-medium">{session.date} • {session.time}</p>
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
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-500">Booking Schedule History</h3>
                <div className="space-y-3">
                  {selectedClient.bookingLogs.map((booking) => (
                    <div key={booking.bookingId} className="bg-stone-50 p-4 rounded-2xl border border-stone-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-stone-900">{booking.bookingId}</span>
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                            booking.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 
                            booking.status === 'Upcoming' ? 'bg-cyan-100 text-cyan-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
                          <span>{booking.date}</span>
                          <span>{booking.time}</span>
                          <span>{booking.mode}</span>
                        </div>
                      </div>

                      {booking.notesLinked ? (
                        <span className="text-xs font-bold text-[#237A88] bg-[#237A88]/10 px-3 py-1.5 rounded-xl">
                          Note Logged ✓
                        </span>
                      ) : (
                        booking.status === 'Upcoming' && (
                          <button
                            onClick={() => {
                              setNewNoteData(prev => ({ ...prev, bookingId: booking.bookingId, date: booking.date, time: booking.time.split(' - ')[0] }));
                              setActiveTab('therapyJourney');
                              setIsAddingSession(true);
                            }}
                            className="px-3 py-1.5 bg-[#237A88] text-white rounded-xl text-xs font-bold hover:bg-[#1b616d] cursor-pointer"
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

      {isAddingSession && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <h2 className="text-sm font-black text-stone-900">Create Session Note From Booking</h2>
              <button onClick={() => setIsAddingSession(false)} className="p-2 text-stone-400 hover:text-stone-600 rounded-xl bg-stone-50 cursor-pointer">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveNewSession} className="space-y-4 text-xs font-bold text-stone-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-stone-500 uppercase text-[10px]">Select Upcoming Booking</label>
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
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
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
                  <label className="block mb-1 text-stone-500 uppercase text-[10px]">Session Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Session 6"
                    value={newNoteData.sessionNumber}
                    onChange={(e) => setNewNoteData({...newNoteData, sessionNumber: e.target.value})}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-stone-500 uppercase text-[10px]">Session Discussion Focus</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Detail notes..."
                  value={newNoteData.sessionFocus}
                  onChange={(e) => setNewNoteData({...newNoteData, sessionFocus: e.target.value})}
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