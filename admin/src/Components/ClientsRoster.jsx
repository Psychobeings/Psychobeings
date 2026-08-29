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
  ArrowUpRight,
  Filter,
  Trash2,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Edit3,
  HeartPulse
} from 'lucide-react';

export default function ClientRosterWithEditFeature() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  
  const [selectedClient, setSelectedClient] = useState(null);
  const [activeTab, setActiveTab] = useState('therapyJourney'); 
  const [selectedSessionNote, setSelectedSessionNote] = useState(null);
  const [isAddingSession, setIsAddingSession] = useState(false);
  const [isEditingSession, setIsEditingSession] = useState(false);

  const [newNoteData, setNewNoteData] = useState({
    id: '',
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
      name: 'Oliver Vance',
      status: 'Active',
      risk: 'Moderate',
      initials: 'OV',
      email: 'oliver.vance.demo@example.com',
      phone: '+1 (555) 234-5678',
      gender: 'Male',
      caseSummary: 'Managing chronic stress related to corporate restructuring and executive leadership pressure.',
      presentingIssues: ['Executive burnout', 'Imposter syndrome', 'Sleep disruption'],
      completedSessions: 3,
      upcomingSessions: 1,
      cancelledSessions: 0,
      totalSessions: 4,
      suggestedSessions: 10,
      bookingLogs: [
        {
          bookingId: 'bk_d01',
          date: '10 Aug 2026',
          time: '14:00 - 15:00',
          mode: 'Online Video',
          status: 'Completed',
          notesLinked: 'ov_s1'
        },
        {
          bookingId: 'bk_d02',
          date: '02 Sep 2026',
          time: '14:00 - 15:00',
          mode: 'Online Video',
          status: 'Upcoming',
          notesLinked: null
        }
      ],
      sessionHistory: [
        {
          id: 'ov_s1',
          bookingId: 'bk_d01',
          sessionNumber: 'Session 3',
          date: '10 Aug 2026',
          time: '14:00',
          summary: 'Evaluated work-life balance strategies and cognitive distortions.',
          details: {
            presenting: ['Executive burnout', 'Imposter syndrome'],
            sessionFocus: 'Reframing negative performance expectations.',
            treatmentPlan: ['CBT framework', 'Mindfulness integration'],
            intervention: 'Cognitive Restructuring',
            progress: 'Stable',
            riskAssessment: 'Moderate',
            clientNotes: 'Practice daily grounding exercises before morning status meetings.'
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Elena Rostova',
      status: 'Active',
      risk: 'Low',
      initials: 'ER',
      email: 'elena.rostova.demo@example.com',
      phone: '+1 (555) 876-5432',
      gender: 'Female',
      caseSummary: 'Focusing on social anxiety management, interpersonal assertiveness, and cognitive restructuring.',
      presentingIssues: ['Social anxiety', 'Public speaking dread', 'Anticipatory panic'],
      completedSessions: 6,
      upcomingSessions: 1,
      cancelledSessions: 1,
      totalSessions: 8,
      suggestedSessions: 12,
      bookingLogs: [
        {
          bookingId: 'bk_d03',
          date: '18 Aug 2026',
          time: '16:30 - 17:30',
          mode: 'Online Video',
          status: 'Completed',
          notesLinked: 'er_s1'
        },
        {
          bookingId: 'bk_d04',
          date: '03 Sep 2026',
          time: '16:30 - 17:30',
          mode: 'Online Video',
          status: 'Upcoming',
          notesLinked: null
        }
      ],
      sessionHistory: [
        {
          id: 'er_s1',
          bookingId: 'bk_d03',
          sessionNumber: 'Session 6',
          date: '18 Aug 2026',
          time: '16:30',
          summary: 'Roleplaying professional presentations to minimize anticipatory anxiety.',
          details: {
            presenting: ['Social anxiety', 'Public speaking dread'],
            sessionFocus: 'Behavioral experiments and graded exposure.',
            treatmentPlan: ['Exposure therapy', 'Anxiety management'],
            intervention: 'Systematic Desensitization',
            progress: 'Improving',
            riskAssessment: 'Low',
            clientNotes: 'Completed baseline exposure homework successfully.'
          }
        }
      ]
    }
  ]);

  const handleDeleteClient = (clientId, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to remove this dummy client from your roster?')) {
      setClients(clients.filter(c => c.id !== clientId));
      if (selectedClient && selectedClient.id === clientId) {
        setSelectedClient(null);
      }
    }
  };

  const filteredClients = clients.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    const matchesRisk = riskFilter === 'All' || c.risk === riskFilter;
    return matchesSearch && matchesStatus && matchesRisk;
  });

  const handleSaveNewSession = (e) => {
    e.preventDefault();
    if (!selectedClient) return;

    const presentingArray = newNoteData.presenting 
      ? newNoteData.presenting.split(',').map(item => item.trim()) 
      : selectedClient.presentingIssues;

    const updatedClients = clients.map(client => {
      if (client.id === selectedClient.id) {
        let updatedHistory = [...client.sessionHistory];

        if (isEditingSession) {
          updatedHistory = updatedHistory.map(s => {
            if (s.id === newNoteData.id) {
              return {
                ...s,
                sessionNumber: newNoteData.sessionNumber,
                summary: newNoteData.sessionFocus,
                details: {
                  ...s.details,
                  presenting: presentingArray,
                  sessionFocus: newNoteData.sessionFocus,
                  intervention: newNoteData.intervention,
                  progress: newNoteData.progress,
                  riskAssessment: newNoteData.riskAssessment,
                  clientNotes: newNoteData.clientNotes
                }
              };
            }
            return s;
          });
        } else {
          const createdSession = {
            id: 's_' + Date.now(),
            bookingId: newNoteData.bookingId || 'bk_manual',
            sessionNumber: newNoteData.sessionNumber || `Session ${client.sessionHistory.length + 1}`,
            date: newNoteData.date || 'Today',
            time: newNoteData.time || '18:00',
            summary: newNoteData.sessionFocus || 'Session completed successfully.',
            details: {
              presenting: presentingArray,
              sessionFocus: newNoteData.sessionFocus,
              treatmentPlan: ['Targeted therapeutic goals'],
              intervention: newNoteData.intervention,
              progress: newNoteData.progress,
              riskAssessment: newNoteData.riskAssessment,
              clientNotes: newNoteData.clientNotes
            }
          };
          updatedHistory = [createdSession, ...updatedHistory];
        }

        const updatedBookings = client.bookingLogs.map(b => {
          if (b.bookingId === newNoteData.bookingId) {
            return { ...b, status: 'Completed' };
          }
          return b;
        });

        const completedCount = updatedBookings.filter(b => b.status === 'Completed').length;
        const upcomingCount = updatedBookings.filter(b => b.status === 'Upcoming').length;
        const cancelledCount = updatedBookings.filter(b => b.status === 'Cancelled').length;

        const mergedIssues = Array.from(new Set([...client.presentingIssues, ...presentingArray]));

        const updatedClientObj = {
          ...client,
          presentingIssues: mergedIssues,
          bookingLogs: updatedBookings,
          sessionHistory: updatedHistory,
          completedSessions: completedCount,
          upcomingSessions: upcomingCount,
          cancelledSessions: cancelledCount,
          totalSessions: updatedBookings.length,
          risk: newNoteData.riskAssessment
        };

        setSelectedClient(updatedClientObj);
        return updatedClientObj;
      }
      return client;
    });

    setClients(updatedClients);
    setIsAddingSession(false);
    setIsEditingSession(false);
    setNewNoteData({
      id: '',
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

  const handleOpenEditModal = (session) => {
    setIsEditingSession(true);
    setNewNoteData({
      id: session.id,
      bookingId: session.bookingId,
      sessionNumber: session.sessionNumber,
      date: session.date,
      time: session.time,
      presenting: session.details.presenting.join(', '),
      sessionFocus: session.details.sessionFocus,
      treatmentPlan: session.details.treatmentPlan.join(', '),
      intervention: session.details.intervention,
      progress: session.details.progress,
      riskAssessment: session.details.riskAssessment,
      clientNotes: session.details.clientNotes
    });
    setSelectedSessionNote(null);
    setIsAddingSession(true);
  };

  const getCompletionPercentage = (completed, suggested) => {
    if (!suggested || suggested === 0) return 0;
    return Math.min(Math.round((completed / suggested) * 100), 100);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#2D3130] font-sans selection:bg-[#E2F1F2] selection:text-[#123E45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Workspace Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#123E45] via-[#1B5D68] to-[#18757C] rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl shadow-[#123E45]/15 border border-white/10">
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute right-1/3 -bottom-20 h-60 w-60 rounded-full bg-[#88D9E6]/10 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E2F1F2] text-xs font-semibold tracking-wide backdrop-blur-md">
                <Sparkles size={13} className="text-[#88D9E6]" /> Psychobeings Clinical Roster
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Clinical Intelligence & Case History Hub
              </h1>
              <p className="text-sm text-teal-100/90 font-normal leading-relaxed">
                Seamlessly manage active client rosters, track longitudinal presenting issues, and maintain structured post-session clinical logs with live editing capabilities.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-white/15 px-5 py-4 rounded-2xl backdrop-blur-md shadow-inner shrink-0">
              <div className="p-3 rounded-xl bg-white/15 text-[#88D9E6]">
                <HeartPulse size={22} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider font-bold text-teal-200/80">Active Profiles</p>
                <p className="text-lg font-black text-white">{clients.length} Registered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Control & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-[2rem] border border-stone-200/70 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by client name, email, phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl text-xs font-semibold text-stone-800 placeholder-stone-400 outline-none focus:border-[#18757C] focus:bg-white focus:ring-4 focus:ring-[#18757C]/10 transition-all shadow-inner"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-[#FBFBFA] px-3.5 py-2.5 rounded-2xl border border-stone-200/80">
              <Filter size={14} className="text-stone-400" />
              <span className="text-[11px] font-bold text-stone-500 uppercase">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent text-xs font-bold text-stone-800 outline-none cursor-pointer"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-[#FBFBFA] px-3.5 py-2.5 rounded-2xl border border-stone-200/80">
              <SlidersHorizontal size={14} className="text-stone-400" />
              <span className="text-[11px] font-bold text-stone-500 uppercase">Risk:</span>
              <select
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
                className="bg-transparent text-xs font-bold text-stone-800 outline-none cursor-pointer"
              >
                <option value="All">All Risk</option>
                <option value="Low">Low Risk</option>
                <option value="Moderate">Moderate Risk</option>
                <option value="High">High Risk</option>
              </select>
            </div>

            <div className="flex items-center bg-[#FBFBFA] p-1 rounded-2xl border border-stone-200/80">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-[#18757C] text-white shadow-sm' : 'text-stone-500 hover:text-stone-900'}`}
                title="Grid View"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${viewMode === 'list' ? 'bg-[#18757C] text-white shadow-sm' : 'text-stone-500 hover:text-stone-900'}`}
                title="List View"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Client Cards Grid / List */}
        {filteredClients.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-stone-200/70 shadow-sm space-y-3">
            <div className="h-12 w-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
              <Filter size={20} />
            </div>
            <h2 className="text-sm font-bold text-stone-800">No matching client profiles found</h2>
            <p className="text-xs text-stone-400">Try adjusting your search filters or keyword criteria.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => {
              const progressPct = getCompletionPercentage(client.completedSessions, client.suggestedSessions);
              return (
                <div 
                  key={client.id} 
                  className="bg-white rounded-[2.5rem] border border-stone-200/80 p-6 shadow-sm hover:shadow-xl hover:border-[#18757C]/30 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#18757C]/20 to-[#18757C]/5 text-[#123E45] flex items-center justify-center font-black text-sm border border-[#18757C]/20 shadow-xs">
                          {client.initials}
                        </div>
                        <div>
                          <h2 className="text-sm font-black text-stone-900 group-hover:text-[#18757C] transition-colors">{client.name}</h2>
                          <p className="text-[11px] text-stone-400 font-medium truncate max-w-[160px]">{client.email}</p>
                        </div>
                      </div>
                      
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border shadow-2xs ${
                        client.risk === 'High' ? 'bg-rose-50 text-rose-700 border-rose-200/60' :
                        client.risk === 'Moderate' ? 'bg-amber-50 text-amber-700 border-amber-200/60' :
                        'bg-emerald-50 text-emerald-700 border-emerald-200/60'
                      }`}>
                        {client.risk} Risk
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Presenting Focus</span>
                      <div className="flex flex-wrap gap-1.5">
                        {client.presentingIssues.map((issue, idx) => (
                          <span key={idx} className="text-[10px] font-semibold px-2.5 py-1 bg-[#FBFBFA] border border-stone-200/60 text-stone-600 rounded-xl">
                            {issue}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 bg-[#FBFBFA] p-4 rounded-2xl border border-stone-200/60">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-stone-500 flex items-center gap-1.5"><TrendingUp size={13} className="text-[#18757C]" /> Plan Progress</span>
                        <span className="text-[#123E45]">{client.completedSessions} / {client.suggestedSessions} Sessions</span>
                      </div>
                      <div className="w-full bg-stone-200/70 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#18757C] to-[#88D9E6] h-full rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <button
                      onClick={() => { setSelectedClient(client); setSelectedSessionNote(null); }}
                      className="w-full py-3 bg-[#18757C]/10 hover:bg-[#18757C] text-[#18757C] hover:text-white rounded-2xl text-xs font-bold transition-all duration-200 text-center cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
                    >
                      <span>View Full Profile & History</span>
                      <ArrowUpRight size={14} />
                    </button>
                    <button
                      onClick={(e) => handleDeleteClient(client.id, e)}
                      className="w-full py-2.5 bg-rose-50/60 hover:bg-rose-100 text-rose-600 rounded-2xl text-xs font-semibold transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Trash2 size={13} />
                      <span>Remove Client</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] border border-stone-200/80 overflow-hidden shadow-sm">
            <div className="divide-y divide-stone-100">
              {filteredClients.map((client) => (
                <div key={client.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#FBFBFA]/80 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#18757C]/20 to-[#18757C]/5 text-[#123E45] flex items-center justify-center font-black text-sm border border-[#18757C]/20 shadow-xs">
                      {client.initials}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="text-sm font-black text-stone-900">{client.name}</h2>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200/50">{client.status}</span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 bg-stone-100 text-stone-700 rounded-full">Risk: {client.risk}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {client.presentingIssues.map((issue, idx) => (
                          <span key={idx} className="text-[10px] font-semibold text-stone-500 bg-[#FBFBFA] border border-stone-200/60 px-2 py-0.5 rounded-lg">
                            {issue}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => { setSelectedClient(client); setSelectedSessionNote(null); }}
                      className="px-4 py-2.5 bg-[#18757C]/10 text-[#18757C] hover:bg-[#18757C] hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>View Profile</span>
                      <ArrowUpRight size={13} />
                    </button>
                    <button
                      onClick={(e) => handleDeleteClient(client.id, e)}
                      className="p-2.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl transition-all cursor-pointer"
                      title="Delete Client"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CLIENT PROFILE MODAL */}
        {selectedClient && !selectedSessionNote && !isAddingSession && (
          <div className="fixed inset-0 bg-[#123E45]/40 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
            <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-start justify-between pb-6 border-b border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#18757C]/25 to-[#18757C]/10 text-[#123E45] flex items-center justify-center font-black text-xl border border-[#18757C]/20 shadow-sm">
                    {selectedClient.initials}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h2 className="text-xl font-black text-stone-900">{selectedClient.name}</h2>
                      <span className="text-[10px] font-extrabold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded-full">
                        {selectedClient.status}
                      </span>
                      <span className="text-[10px] font-extrabold px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/60 rounded-full">
                        Risk: {selectedClient.risk}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 font-medium">{selectedClient.email} • {selectedClient.phone} • {selectedClient.gender}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedClient(null)} 
                  className="p-3 text-stone-400 hover:text-stone-700 rounded-2xl bg-[#FBFBFA] hover:bg-stone-100 border border-stone-200/60 transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Case History & Presenting Issues Banner */}
              <div className="bg-gradient-to-br from-[#FBFBFA] to-[#E2F1F2]/30 p-6 rounded-3xl border border-stone-200/80 space-y-3">
                <div className="flex items-center gap-2 text-[#18757C]">
                  <Award size={18} />
                  <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">Comprehensive Case Summary</h3>
                </div>
                <p className="text-xs text-stone-700 font-medium leading-relaxed">{selectedClient.caseSummary}</p>
                
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold text-stone-400 uppercase">Tracked Issues:</span>
                  {selectedClient.presentingIssues.map((issue, idx) => (
                    <span key={idx} className="text-[11px] font-bold px-3 py-1 bg-white text-[#18757C] border border-stone-200/80 rounded-xl shadow-2xs">
                      • {issue}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><CheckCircle size={18} /></div>
                  <div>
                    <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Completed</span>
                    <span className="text-base font-black text-stone-900">{selectedClient.completedSessions}</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 bg-cyan-50 text-[#18757C] rounded-2xl"><Clock size={18} /></div>
                  <div>
                    <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Upcoming</span>
                    <span className="text-base font-black text-stone-900">{selectedClient.upcomingSessions}</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl"><Ban size={18} /></div>
                  <div>
                    <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Cancelled</span>
                    <span className="text-base font-black text-stone-900">{selectedClient.cancelledSessions}</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 bg-stone-100 text-stone-600 rounded-2xl"><Calendar size={18} /></div>
                  <div>
                    <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Total Sessions</span>
                    <span className="text-base font-black text-stone-900">{selectedClient.totalSessions}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 bg-[#FBFBFA] p-1.5 rounded-2xl border border-stone-200/70">
                  <button 
                    onClick={() => setActiveTab('therapyJourney')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'therapyJourney' ? 'bg-[#18757C] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'}`}
                  >
                    Therapy Journey ({selectedClient.sessionHistory.length})
                  </button>
                  <button 
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'bookings' ? 'bg-[#18757C] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'}`}
                  >
                    Booking Schedule ({selectedClient.bookingLogs.length})
                  </button>
                </div>

                {activeTab === 'therapyJourney' && (
                  <button
                    onClick={() => {
                      setIsEditingSession(false);
                      setNewNoteData({
                        id: '',
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
                      setIsAddingSession(true);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-[#18757C] text-white rounded-xl text-xs font-bold hover:bg-[#123E45] transition-all cursor-pointer shadow-sm"
                  >
                    <Plus size={14} />
                    <span>Convert Booking to Note</span>
                  </button>
                )}
              </div>

              {/* Journey Tab Content */}
              {activeTab === 'therapyJourney' && (
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-stone-400">Linked Post-Session Clinical Logs</h3>
                  {selectedClient.sessionHistory.length === 0 ? (
                    <div className="text-center py-12 text-stone-400 text-xs font-medium bg-[#FBFBFA] rounded-3xl border border-stone-200">
                      No session logs recorded yet. Convert an upcoming booking to log structured clinical notes.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {selectedClient.sessionHistory.map((session) => (
                        <div key={session.id} className="bg-white p-5 rounded-3xl border border-stone-200/80 hover:border-[#18757C]/40 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-2xs">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <span className="font-black text-xs text-stone-900 bg-stone-100 px-2.5 py-1 rounded-lg">{session.sessionNumber}</span>
                              <span className="text-[10px] font-extrabold px-2.5 py-0.5 bg-[#18757C]/10 text-[#18757C] rounded-md">
                                Ref: {session.bookingId}
                              </span>
                              <span className="text-[10px] font-bold px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-md">
                                Risk: {session.details.riskAssessment}
                              </span>
                            </div>
                            <p className="text-xs text-stone-700 font-semibold">{session.summary}</p>
                            
                            <div className="flex flex-wrap gap-1">
                              {session.details.presenting.map((pIssue, pIdx) => (
                                <span key={pIdx} className="text-[10px] font-semibold bg-[#FBFBFA] border border-stone-200/60 text-stone-600 px-2 py-0.5 rounded">
                                  {pIssue}
                                </span>
                              ))}
                            </div>
                            <p className="text-[11px] text-stone-400 font-medium">{session.date} at {session.time}</p>
                          </div>
                          
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => handleOpenEditModal(session)}
                              className="flex items-center gap-1 px-3.5 py-2.5 bg-[#FBFBFA] hover:bg-stone-100 border border-stone-200 text-stone-700 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
                              title="Edit Note"
                            >
                              <Edit3 size={13} />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => setSelectedSessionNote(session)}
                              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#18757C]/10 hover:bg-[#18757C] text-[#18757C] hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
                            >
                              <FileText size={14} />
                              <span>View Note</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Bookings Tab Content */}
              {activeTab === 'bookings' && (
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-stone-400">Booking Schedule History</h3>
                  <div className="space-y-3">
                    {selectedClient.bookingLogs.map((booking) => (
                      <div key={booking.bookingId} className="bg-white p-4 rounded-3xl border border-stone-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-2xs">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] font-bold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-md">{booking.bookingId}</span>
                            <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md ${
                              booking.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' :
                              booking.status === 'Upcoming' ? 'bg-cyan-50 text-[#18757C]' : 'bg-rose-50 text-rose-700'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <p className="text-xs text-stone-800 font-bold">{booking.date} • {booking.time} ({booking.mode})</p>
                        </div>

                        {booking.status === 'Upcoming' && (
                          <button
                            onClick={() => {
                              setIsEditingSession(false);
                              setNewNoteData({
                                id: '',
                                bookingId: booking.bookingId,
                                sessionNumber: '',
                                date: booking.date,
                                time: booking.time.split(' - ')[0],
                                presenting: '',
                                sessionFocus: '',
                                treatmentPlan: '',
                                intervention: '',
                                progress: 'Stable',
                                riskAssessment: 'Low',
                                clientNotes: ''
                              });
                              setActiveTab('therapyJourney');
                              setIsAddingSession(true);
                            }}
                            className="px-4 py-2.5 bg-[#18757C] text-white rounded-xl text-xs font-bold hover:bg-[#123E45] transition-all cursor-pointer shadow-sm"
                          >
                            Convert to Note
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* VIEW INDIVIDUAL SESSION NOTE MODAL */}
        {selectedSessionNote && selectedClient && (
          <div className="fixed inset-0 bg-[#123E45]/40 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
            <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-start justify-between pb-4 border-b border-stone-100">
                <div>
                  <span className="text-[10px] font-extrabold px-3 py-1 bg-[#18757C]/10 text-[#18757C] rounded-md uppercase tracking-wider">
                    {selectedSessionNote.sessionNumber} • {selectedClient.name}
                  </span>
                  <h2 className="text-base font-black text-stone-900 mt-2">{selectedSessionNote.summary}</h2>
                  <p className="text-xs text-stone-400 font-medium mt-0.5">{selectedSessionNote.date} at {selectedSessionNote.time} | Ref: {selectedSessionNote.bookingId}</p>
                </div>
                <button onClick={() => setSelectedSessionNote(null)} className="p-3 text-stone-400 hover:text-stone-700 rounded-2xl bg-[#FBFBFA] border border-stone-200/60 transition-all cursor-pointer">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4 text-xs font-medium">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FBFBFA] p-4 rounded-2xl border border-stone-200/60 space-y-1">
                    <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Progress Status</span>
                    <p className="font-bold text-stone-800 text-sm">{selectedSessionNote.details.progress}</p>
                  </div>
                  <div className="bg-[#FBFBFA] p-4 rounded-2xl border border-stone-200/60 space-y-1">
                    <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Risk Assessment</span>
                    <p className="font-bold text-stone-800 text-sm">{selectedSessionNote.details.riskAssessment}</p>
                  </div>
                </div>

                <div className="bg-[#FBFBFA] p-4 rounded-2xl border border-stone-200/60 space-y-2">
                  <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Presenting Issues Addressed</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSessionNote.details.presenting.map((issue, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-xl text-[#18757C] font-bold border border-stone-200/80 text-[11px] shadow-2xs">
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FBFBFA] p-4 rounded-2xl border border-stone-200/60 space-y-1">
                  <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Session Focus</span>
                  <p className="text-stone-700 leading-relaxed">{selectedSessionNote.details.sessionFocus}</p>
                </div>

                <div className="bg-[#FBFBFA] p-4 rounded-2xl border border-stone-200/60 space-y-1">
                  <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Core Therapeutic Intervention</span>
                  <p className="text-stone-700 leading-relaxed">{selectedSessionNote.details.intervention}</p>
                </div>

                <div className="bg-[#FBFBFA] p-4 rounded-2xl border border-stone-200/60 space-y-1">
                  <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">Client Homework & Takeaways</span>
                  <p className="text-stone-700 italic bg-white p-3 rounded-xl border border-stone-200/60">"{selectedSessionNote.details.clientNotes}"</p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex justify-between items-center">
                <button
                  onClick={() => handleOpenEditModal(selectedSessionNote)}
                  className="px-4 py-2.5 bg-[#FBFBFA] hover:bg-stone-100 border border-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                >
                  <Edit3 size={14} />
                  <span>Edit Note Details</span>
                </button>
                <button
                  onClick={() => setSelectedSessionNote(null)}
                  className="px-6 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ADD / EDIT SESSION NOTE MODAL */}
        {isAddingSession && selectedClient && (
          <div className="fixed inset-0 bg-[#123E45]/40 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
            <div className="bg-white rounded-[2.5rem] border border-stone-200 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h2 className="text-base font-black text-stone-900">
                    {isEditingSession ? 'Edit Clinical Session Note' : 'Convert Booking to Session Note'}
                  </h2>
                  <p className="text-xs text-stone-400 font-medium">
                    {isEditingSession ? `Modify clinical logs for ${selectedClient.name}` : `Record clinical notes & update presenting issues for ${selectedClient.name}`}
                  </p>
                </div>
                <button onClick={() => setIsAddingSession(false)} className="p-3 text-stone-400 hover:text-stone-700 rounded-2xl bg-[#FBFBFA] border border-stone-200/60 transition-all cursor-pointer">
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSaveNewSession} className="space-y-4 text-xs font-medium">
                {!isEditingSession && (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-stone-700 uppercase">Select Booking Slot</label>
                    <select
                      value={newNoteData.bookingId}
                      onChange={(e) => {
                        const found = selectedClient.bookingLogs.find(b => b.bookingId === e.target.value);
                        setNewNoteData(prev => ({ 
                          ...prev, 
                          bookingId: e.target.value,
                          date: found ? found.date : prev.date,
                          time: found ? found.time.split(' - ')[0] : prev.time
                        }));
                      }}
                      className="w-full p-3.5 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl font-bold text-stone-800 outline-none focus:border-[#18757C] focus:bg-white"
                      required
                    >
                      <option value="">-- Choose Booking Slot --</option>
                      {selectedClient.bookingLogs.map(b => (
                        <option key={b.bookingId} value={b.bookingId}>
                          {b.bookingId} — {b.date} ({b.status})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-stone-700 uppercase">Session Label</label>
                    <input
                      type="text"
                      placeholder="e.g. Session 4"
                      value={newNoteData.sessionNumber}
                      onChange={(e) => setNewNoteData({ ...newNoteData, sessionNumber: e.target.value })}
                      className="w-full p-3.5 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl font-bold text-stone-800 outline-none focus:border-[#18757C] focus:bg-white"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-stone-700 uppercase">Progress Status</label>
                    <select
                      value={newNoteData.progress}
                      onChange={(e) => setNewNoteData({ ...newNoteData, progress: e.target.value })}
                      className="w-full p-3.5 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl font-bold text-stone-800 outline-none focus:border-[#18757C] focus:bg-white"
                    >
                      <option value="Stable">Stable</option>
                      <option value="Improving">Improving</option>
                      <option value="Challenged">Challenged</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-stone-700 uppercase">Presenting Issues Addressed (Comma Separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Burnout, Sleep disruption"
                    value={newNoteData.presenting}
                    onChange={(e) => setNewNoteData({ ...newNoteData, presenting: e.target.value })}
                    className="w-full p-3.5 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl font-bold text-stone-800 outline-none focus:border-[#18757C] focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-stone-700 uppercase">Session Focus / Summary</label>
                  <input
                    type="text"
                    placeholder="e.g. Addressed cognitive distortions and reframing."
                    value={newNoteData.sessionFocus}
                    onChange={(e) => setNewNoteData({ ...newNoteData, sessionFocus: e.target.value })}
                    className="w-full p-3.5 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl font-bold text-stone-800 outline-none focus:border-[#18757C] focus:bg-white"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-stone-700 uppercase">Core Intervention Applied</label>
                  <input
                    type="text"
                    placeholder="e.g. CBT Cognitive Restructuring"
                    value={newNoteData.intervention}
                    onChange={(e) => setNewNoteData({ ...newNoteData, intervention: e.target.value })}
                    className="w-full p-3.5 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl font-bold text-stone-800 outline-none focus:border-[#18757C] focus:bg-white"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-stone-700 uppercase">Risk Assessment Level</label>
                  <select
                    value={newNoteData.riskAssessment}
                    onChange={(e) => setNewNoteData({ ...newNoteData, riskAssessment: e.target.value })}
                    className="w-full p-3.5 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl font-bold text-stone-800 outline-none focus:border-[#18757C] focus:bg-white"
                  >
                    <option value="Low">Low Risk</option>
                    <option value="Moderate">Moderate Risk</option>
                    <option value="High">High Risk</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-stone-700 uppercase">Client Homework / Takeaways</label>
                  <textarea
                    rows="3"
                    placeholder="Record client takeaways and homework instructions..."
                    value={newNoteData.clientNotes}
                    onChange={(e) => setNewNoteData({ ...newNoteData, clientNotes: e.target.value })}
                    className="w-full p-3.5 bg-[#FBFBFA] border border-stone-200/80 rounded-2xl font-bold text-stone-800 outline-none focus:border-[#18757C] focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsAddingSession(false)}
                    className="px-5 py-3 bg-[#FBFBFA] hover:bg-stone-100 border border-stone-200 text-stone-700 rounded-2xl font-bold transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#18757C] hover:bg-[#123E45] text-white rounded-2xl font-bold transition-all cursor-pointer shadow-md shadow-[#18757C]/20"
                  >
                    {isEditingSession ? 'Save Changes' : 'Save & Complete Note'}
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}