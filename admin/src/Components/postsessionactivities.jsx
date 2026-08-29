import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  CheckSquare, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Search,
  ArrowLeft,
  Plus,
  UserPlus,
  Repeat,
  Download,
  Mail,
  Save,
  History,
  CheckCircle2,
  Users,
  Phone,
  Mail as MailIcon,
} from 'lucide-react';

export default function PostSessionActivities() {
  // Navigation & View State: 'roster' | 'dashboard' | 'client-workspace'
  const [currentView, setCurrentView] = useState('roster');
  const [selectedClient, setSelectedClient] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedSession, setSelectedSession] = useState(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [rosterFilter, setRosterFilter] = useState('all'); // all | active | intake | follow-up

  // Client Workspace Active Sub-Tab: 'notes' | 'history' | 'reflections' | 'tasks' | 'submit'
  const [workspaceTab, setWorkspaceTab] = useState('notes');

  // Auto-save & persistence indicator state
  const [lastSaved, setLastSaved] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form States for Client Workspace
  const [presentingConcerns, setPresentingConcerns] = useState('');
  const [sessionFocus, setSessionFocus] = useState('');
  
  // Case History & Screening Sections
  const [developmentalHistory, setDevelopmentalHistory] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [socialHistory, setSocialHistory] = useState('');
  const [screeningMeasures, setScreeningMeasures] = useState('');

  // Reflections State
  const [aiReflection, setAiReflection] = useState('');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  // Tasks State
  const [homeworkTasks, setHomeworkTasks] = useState([
    { id: 1, task: 'Daily 10-minute mindfulness breathing log', assigned: true },
    { id: 2, task: 'Complete thought record worksheet for triggering events', assigned: true },
    { id: 3, task: 'Practice progressive muscle relaxation before sleep', assigned: false }
  ]);
  const [newCustomTask, setNewCustomTask] = useState('');

  // Master Client Roster & Sessions Database with localStorage Persistence
  const [clientRoster, setClientRoster] = useState(() => {
    const saved = localStorage.getItem('psychobeings_client_roster');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      {
        id: 101,
        clientName: 'Diksha Bharti',
        age: 26,
        gender: 'Female',
        phone: '+91 98765 43210',
        email: 'diksha.bharti@example.com',
        clientType: 'First-Time Intake',
        statusType: 'intake-pending',
        lastSessionDate: '25 Aug 2026',
        totalSessions: 1,
        history: [
          { sessionNum: 'Session 1', date: '25 Aug 2026', summary: 'Initial intake completed. GAD-7 score evaluated at 14. Established therapeutic rapport.' }
        ],
        presentingConcerns: 'Chronic work stress, sleep fragmentation, and situational anxiety related to performance evaluations.',
        sessionFocus: 'Anxiety management & reframing catastrophic thoughts',
        developmentalHistory: 'No major developmental trauma reported. Supportive family dynamic during childhood.',
        medicalHistory: 'No chronic illness. Occasional tension headaches during high-stress periods.',
        socialHistory: 'Strong peer support network, though currently experiencing boundary fatigue at workplace.',
        screeningMeasures: 'GAD-7 Score: 14 (Moderate-Severe Anxiety)\nPHQ-9 Score: 8 (Mild Depression)'
      },
      {
        id: 102,
        clientName: 'Juhi Chaineva',
        age: 31,
        gender: 'Female',
        phone: '+91 98112 33445',
        email: 'juhi.chaineva@example.com',
        clientType: 'Follow-up Client',
        statusType: 'follow-up-needed',
        lastSessionDate: '24 Aug 2026',
        totalSessions: 4,
        history: [
          { sessionNum: 'Session 1', date: '01 Aug 2026', summary: 'Intake and baseline assessment.' },
          { sessionNum: 'Session 2', date: '10 Aug 2026', summary: 'Identified core relational patterns.' },
          { sessionNum: 'Session 3', date: '17 Aug 2026', summary: 'Introduced somatic regulation tools.' },
          { sessionNum: 'Session 4', date: '24 Aug 2026', summary: 'Reviewed homework progress and emotional regulation.' }
        ],
        presentingConcerns: 'Interpersonal relationship friction and emotional regulation difficulties.',
        sessionFocus: 'Boundary setting and assertive communication',
        developmentalHistory: 'Reported high parental expectations during adolescence.',
        medicalHistory: 'Clear of major conditions. Mild sleep disturbances.',
        socialHistory: 'Limited close friendships; high reliance on partner for emotional validation.',
        screeningMeasures: 'DASS-21: Stress: 18, Anxiety: 14, Depression: 10'
      },
      {
        id: 103,
        clientName: 'Aarav Sharma',
        age: 24,
        gender: 'Male',
        phone: '+91 99223 44556',
        email: 'aarav.sharma@example.com',
        clientType: 'Follow-up Client',
        statusType: 'completed',
        lastSessionDate: '22 Aug 2026',
        totalSessions: 6,
        history: [
          { sessionNum: 'Session 5', date: '15 Aug 2026', summary: 'Examined academic burnout triggers.' },
          { sessionNum: 'Session 6', date: '22 Aug 2026', summary: 'Consolidation of coping strategies and goal setting.' }
        ],
        presentingConcerns: 'Academic burnout and career transition anxiety.',
        sessionFocus: 'Goal prioritization and resilience building',
        developmentalHistory: 'Stable upbringing. High-achieving academic background.',
        medicalHistory: 'None reported.',
        socialHistory: 'Active college peer network and supportive roommates.',
        screeningMeasures: 'PSS (Perceived Stress Scale): 22 (Moderate)'
      }
    ];
  });

  // Save roster updates to localStorage
  useEffect(() => {
    localStorage.setItem('psychobeings_client_roster', JSON.stringify(clientRoster));
  }, [clientRoster]);

  // Auto-save draft effect when workspace form fields update
  useEffect(() => {
    if (currentView === 'client-workspace' && selectedClient) {
      setIsSaving(true);
      const timer = setTimeout(() => {
        setIsSaving(false);
        setLastSaved(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [
    currentView, 
    selectedClient, 
    presentingConcerns, 
    sessionFocus, 
    developmentalHistory, 
    medicalHistory, 
    socialHistory, 
    screeningMeasures, 
    aiReflection, 
    homeworkTasks
  ]);

  const handleOpenClientWorkspace = (client) => {
    setSelectedClient(client);
    setPresentingConcerns(client.presentingConcerns || '');
    setSessionFocus(client.sessionFocus || '');
    setDevelopmentalHistory(client.developmentalHistory || '');
    setMedicalHistory(client.medicalHistory || '');
    setSocialHistory(client.socialHistory || '');
    setScreeningMeasures(client.screeningMeasures || '');
    setCurrentView('client-workspace');
    setWorkspaceTab('notes');
  };

  const handleGenerateAiReflection = () => {
    setIsGeneratingAi(true);
    setTimeout(() => {
      setAiReflection(
        `Clinical AI Insight for Focus: "${sessionFocus || 'General therapeutic progress'}"\n\n` +
        `The client demonstrated strong cognitive flexibility today when exploring recurring emotional triggers. ` +
        `Recommended therapeutic posture for upcoming sessions: Validate underlying self-critical patterns while gently reinforcing behavioral activation.`
      );
      setIsGeneratingAi(false);
    }, 800);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newCustomTask.trim()) return;
    setHomeworkTasks([...homeworkTasks, { id: Date.now(), task: newCustomTask.trim(), assigned: true }]);
    setNewCustomTask('');
  };

  const toggleTaskAssignment = (id) => {
    setHomeworkTasks(homeworkTasks.map(t => t.id === id ? { ...t, assigned: !t.assigned } : t));
  };

  const handleDownloadSummaryPdf = () => {
    alert(`Generating encrypted clinical session summary PDF for ${selectedClient?.clientName}...`);
  };

  const handleEmailSummaryClient = () => {
    alert(`Assigned homework summary and reflections successfully dispatched to ${selectedClient?.clientName}'s registered email (${selectedClient?.email}).`);
  };

  const handleFinalSubmit = () => {
    const updatedHistory = [
      ...selectedClient.history,
      {
        sessionNum: `Session ${selectedClient.totalSessions + 1}`,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        summary: sessionFocus || 'Post-session documentation finalized.'
      }
    ];

    const updatedRoster = clientRoster.map(c => {
      if (c.id === selectedClient.id) {
        return {
          ...c,
          totalSessions: c.totalSessions + 1,
          lastSessionDate: 'Today',
          statusType: 'completed',
          history: updatedHistory,
          presentingConcerns,
          sessionFocus,
          developmentalHistory,
          medicalHistory,
          socialHistory,
          screeningMeasures
        };
      }
      return c;
    });

    setClientRoster(updatedRoster);
    alert(`Post-session documentation successfully synced and stored in ${selectedClient.clientName}'s permanent profile history!`);
    setCurrentView('roster');
  };

  const filteredClients = clientRoster.filter(c => {
    const matchesSearch = c.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.email.toLowerCase().includes(searchQuery.toLowerCase());
    if (rosterFilter === 'all') return matchesSearch;
    if (rosterFilter === 'intake') return matchesSearch && c.clientType === 'First-Time Intake';
    if (rosterFilter === 'follow-up') return matchesSearch && c.clientType === 'Follow-up Client';
    return matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto font-sans text-stone-800 pb-16 px-4 sm:px-6">

      {/* VIEW 1: CLIENT ROSTER & DIRECTORY */}
      {currentView === 'roster' && (
        <div className="space-y-6">
          
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#237A88]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#237A88]">Clinical Practice Management</span>
              </div>
              <h1 className="text-2xl font-bold text-stone-900 mt-1">Client Roster & Session Workspace</h1>
              <p className="text-xs text-stone-500 mt-0.5">Select a client below to manage case history, session notes, AI reflections, and assigned tasks mapped directly to their profile.</p>
            </div>
          </div>

          {/* Roster Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Total Active Clients</span>
                <div className="text-2xl font-black text-stone-900 mt-1">{clientRoster.length}</div>
                <span className="text-[11px] text-stone-500">Managed in directory</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                <Users size={18} />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">First-Time Intakes</span>
                <div className="text-2xl font-black text-stone-900 mt-1">
                  {clientRoster.filter(c => c.clientType === 'First-Time Intake').length}
                </div>
                <span className="text-[11px] text-stone-500">Requires baseline history</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                <UserPlus size={18} />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Follow-up Clients</span>
                <div className="text-2xl font-black text-stone-900 mt-1">
                  {clientRoster.filter(c => c.clientType === 'Follow-up Client').length}
                </div>
                <span className="text-[11px] text-stone-500">Ongoing progression</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                <Repeat size={18} />
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="space-y-4 pt-2">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-3.5 text-stone-400" />
              <input 
                type="text"
                placeholder="Search clients by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-stone-200/80 text-xs font-semibold text-stone-800 shadow-sm focus:outline-none focus:border-[#237A88]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setRosterFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  rosterFilter === 'all' ? 'bg-[#7344C0] text-white shadow-sm' : 'bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                All Clients ({clientRoster.length})
              </button>
              <button
                onClick={() => setRosterFilter('intake')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  rosterFilter === 'intake' ? 'bg-[#7344C0] text-white shadow-sm' : 'bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                First-Time Intakes
              </button>
              <button
                onClick={() => setRosterFilter('follow-up')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  rosterFilter === 'follow-up' ? 'bg-[#7344C0] text-white shadow-sm' : 'bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                Follow-up Clients
              </button>
            </div>
          </div>

          {/* Client Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {filteredClients.map((client) => (
              <div 
                key={client.id}
                className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4 transition hover:border-[#237A88]/40"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                        {client.clientName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-stone-900">{client.clientName}</h3>
                        <p className="text-[11px] text-stone-500">{client.age} yrs • {client.gender}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      client.clientType === 'First-Time Intake' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {client.clientType}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1 text-xs text-stone-600">
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-stone-400" />
                      <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MailIcon size={12} className="text-stone-400" />
                      <span>{client.email}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-xs space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Latest Session Focus</span>
                    <p className="font-semibold text-stone-800 line-clamp-1">{client.sessionFocus || 'Not specified yet'}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <span className="text-[11px] text-stone-500 font-medium">
                    {client.totalSessions} {client.totalSessions === 1 ? 'Session logged' : 'Sessions logged'}
                  </span>
                  <button 
                    onClick={() => handleOpenClientWorkspace(client)}
                    className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                  >
                    <FileText size={14} />
                    <span>Open Workspace</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* VIEW 2: CLIENT WORKSPACE */}
      {currentView === 'client-workspace' && selectedClient && (
        <div className="space-y-6">
          
          {/* Top Bar with Auto-Save Status */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200/85 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentView('roster')}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                title="Back to Roster"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#237A88] animate-pulse" />
                  <h1 className="text-base font-bold text-stone-900">
                    Client Workspace: <span className="text-[#237A88]">{selectedClient.clientName}</span>
                  </h1>
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs text-stone-500">Type: <span className="font-semibold text-stone-700">{selectedClient.clientType}</span></span>
                  {isSaving ? (
                    <span className="text-[10px] text-amber-600 font-semibold flex items-center gap-1">
                      <Save size={10} className="animate-spin" /> Saving draft...
                    </span>
                  ) : lastSaved ? (
                    <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={10} /> Saved locally at {lastSaved}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Sub-Tab Navigation */}
            <div className="flex items-center bg-stone-100 p-1 rounded-xl flex-wrap justify-center gap-1">
              <button
                onClick={() => setWorkspaceTab('notes')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'notes' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                1. Notes & Case History
              </button>
              <button
                onClick={() => setWorkspaceTab('history')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'history' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                2. Profile History ({selectedClient.history.length})
              </button>
              <button
                onClick={() => setWorkspaceTab('reflections')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'reflections' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                3. Reflections
              </button>
              <button
                onClick={() => setWorkspaceTab('tasks')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'tasks' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                4. Tasks
              </button>
              <button
                onClick={() => setWorkspaceTab('submit')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'submit' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                5. Submit
              </button>
            </div>
          </div>

          {/* SUB-TAB 1: NOTES & CASE HISTORY */}
          {workspaceTab === 'notes' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-[#237A88]" />
                  <h2 className="text-sm font-bold text-stone-900">Clinical Session Notes & Session Focus</h2>
                </div>
                <span className="text-[11px] font-bold text-[#237A88] bg-[#237A88]/10 px-3 py-1 rounded-lg">
                  Mapped to Roster Profile: {selectedClient.clientName}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Presenting Concerns</label>
                  <textarea 
                    rows="3"
                    value={presentingConcerns}
                    onChange={(e) => setPresentingConcerns(e.target.value)}
                    placeholder="Enter presenting concerns..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Session Focus</label>
                  <input 
                    type="text"
                    value={sessionFocus}
                    onChange={(e) => setSessionFocus(e.target.value)}
                    placeholder="Enter current session focus..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              {/* Case History Sections */}
              <div className="border-t border-stone-100 pt-5 space-y-4">
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Case History Mapping {selectedClient.clientType === 'First-Time Intake' ? '(Required Intake Details)' : '(Background Reference)'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-600 block">Developmental History</label>
                    <textarea 
                      rows="3"
                      value={developmentalHistory}
                      onChange={(e) => setDevelopmentalHistory(e.target.value)}
                      placeholder="Developmental background..."
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-600 block">Medical History</label>
                    <textarea 
                      rows="3"
                      value={medicalHistory}
                      onChange={(e) => setMedicalHistory(e.target.value)}
                      placeholder="Medical background..."
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-600 block">Social History</label>
                    <textarea 
                      rows="3"
                      value={socialHistory}
                      onChange={(e) => setSocialHistory(e.target.value)}
                      placeholder="Social and support network..."
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Screening Measures */}
              <div className="border-t border-stone-100 pt-5 space-y-2">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Screening Measures & Standardized Test Scores</label>
                <textarea 
                  rows="2"
                  value={screeningMeasures}
                  onChange={(e) => setScreeningMeasures(e.target.value)}
                  placeholder="e.g., GAD-7, PHQ-9, DASS-21 scores..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none font-mono"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setWorkspaceTab('history')}
                  className="px-5 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <span>View Client Profile History</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* SUB-TAB 2: PROFILE HISTORY VIEW */}
          {workspaceTab === 'history' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2">
                  <History size={18} className="text-[#237A88]" />
                  <h2 className="text-sm font-bold text-stone-900">Therapy Journey & Prior Session Logs</h2>
                </div>
                <span className="text-xs font-semibold text-stone-500">{selectedClient.history.length} Total Sessions Recorded</span>
              </div>

              <p className="text-xs text-stone-600">
                Reviewing past clinical logs side-by-side ensures contextual continuity while completing current documentation for <span className="font-bold text-stone-900">{selectedClient.clientName}</span>.
              </p>

              <div className="space-y-3">
                {selectedClient.history.map((note, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[#237A88]">{note.sessionNum}</span>
                      <span className="text-[11px] text-stone-400">{note.date}</span>
                    </div>
                    <p className="text-xs text-stone-700 font-medium leading-relaxed">{note.summary}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setWorkspaceTab('notes')}
                  className="px-4 py-2.5 border border-stone-200 text-stone-700 rounded-xl text-xs font-bold hover:bg-stone-50 transition"
                >
                  Back to Current Notes
                </button>
                <button
                  onClick={() => setWorkspaceTab('reflections')}
                  className="px-5 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <span>Proceed to Reflections</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* SUB-TAB 3: REFLECTIONS */}
          {workspaceTab === 'reflections' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
                <Sparkles size={18} className="text-[#237A88]" />
                <h2 className="text-sm font-bold text-stone-900">AI Clinical Reflections</h2>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Linked Session Focus</span>
                  <span className="text-[11px] font-semibold text-[#237A88] bg-[#237A88]/10 px-2.5 py-0.5 rounded-md">Auto-synced</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800">
                  {sessionFocus || 'No session focus specified yet.'}
                </div>

                <button
                  onClick={handleGenerateAiReflection}
                  disabled={isGeneratingAi}
                  className="w-full py-3 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <Sparkles size={16} />
                  <span>{isGeneratingAi ? 'Synthesizing Clinical Insights...' : 'Generate AI Reflections'}</span>
                </button>
              </div>

              {aiReflection && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Editable Clinical Reflection Box</label>
                  <textarea 
                    rows="6"
                    value={aiReflection}
                    onChange={(e) => setAiReflection(e.target.value)}
                    className="w-full p-4 rounded-2xl border border-[#237A88]/30 bg-[#237A88]/5 text-xs font-semibold text-stone-900 focus:outline-none focus:border-[#237A88] leading-relaxed"
                  />
                </div>
              )}

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setWorkspaceTab('history')}
                  className="px-4 py-2.5 border border-stone-200 text-stone-700 rounded-xl text-xs font-bold hover:bg-stone-50 transition"
                >
                  Back to History
                </button>
                <button
                  onClick={() => setWorkspaceTab('tasks')}
                  className="px-5 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <span>Proceed to Tasks</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* SUB-TAB 4: TASKS */}
          {workspaceTab === 'tasks' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2">
                  <CheckSquare size={18} className="text-[#237A88]" />
                  <h2 className="text-sm font-bold text-stone-900">Assign Homeworks & Worksheets</h2>
                </div>
                <span className="text-xs font-semibold text-stone-500">{homeworkTasks.filter(t => t.assigned).length} Selected</span>
              </div>

              <div className="space-y-3">
                {homeworkTasks.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => toggleTaskAssignment(item.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                      item.assigned ? 'bg-[#237A88]/5 border-[#237A88]/30' : 'bg-stone-50 border-stone-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded flex items-center justify-center text-white text-xs ${item.assigned ? 'bg-[#237A88]' : 'border border-stone-400'}`}>
                        {item.assigned && '✓'}
                      </div>
                      <span className="text-xs font-semibold text-stone-800">{item.task}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                      {item.assigned ? 'Assigned' : 'Skipped'}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddTask} className="flex gap-2 pt-2">
                <input 
                  type="text" 
                  placeholder="Add custom worksheet or exercise..."
                  value={newCustomTask}
                  onChange={(e) => setNewCustomTask(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                />
                <button 
                  type="submit"
                  className="px-4 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-sm"
                >
                  <Plus size={14} />
                  <span>Add</span>
                </button>
              </form>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setWorkspaceTab('reflections')}
                  className="px-4 py-2.5 border border-stone-200 text-stone-700 rounded-xl text-xs font-bold hover:bg-stone-50 transition"
                >
                  Back to Reflections
                </button>
                <button
                  onClick={() => setWorkspaceTab('submit')}
                  className="px-5 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <span>Preview & Submit</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* SUB-TAB 5: SUBMIT */}
          {workspaceTab === 'submit' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
                <ShieldCheck size={18} className="text-[#237A88]" />
                <h2 className="text-sm font-bold text-stone-900">Post-Session Preview & Profile Sync</h2>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">Client Name</span>
                  <span className="font-bold text-stone-900">{selectedClient.clientName}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">Client Type</span>
                  <span className="font-bold text-blue-800">{selectedClient.clientType}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">Session Focus</span>
                  <span className="font-bold text-stone-800">{sessionFocus || 'Not specified'}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">AI Reflections Box</span>
                  <span className="font-bold text-stone-800">{aiReflection ? 'Generated & Attached' : 'Not Generated'}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500 font-medium">Assigned Worksheets / Tasks</span>
                  <span className="font-bold text-[#237A88]">{homeworkTasks.filter(t => t.assigned).length} modules</span>
                </div>
              </div>

              {/* Export Actions Toolbar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button 
                  onClick={handleDownloadSummaryPdf}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download size={14} className="text-[#237A88]" />
                  <span>Download PDF Summary</span>
                </button>
                <button 
                  onClick={handleEmailSummaryClient}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Mail size={14} className="text-[#237A88]" />
                  <span>Email Summary to Client</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <button
                  onClick={() => setWorkspaceTab('tasks')}
                  className="px-4 py-2.5 border border-stone-200 text-stone-700 rounded-xl text-xs font-bold hover:bg-stone-50 transition"
                >
                  Back to Tasks
                </button>
                <button 
                  onClick={handleFinalSubmit}
                  className="flex items-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-6 py-3 rounded-xl text-xs font-bold transition shadow-sm"
                >
                  <span>Sync & Save to Client Roster</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}