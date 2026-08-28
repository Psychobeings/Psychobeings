import React, { useState } from 'react';
import { 
  FileText, 
  CheckSquare, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Search,
  Clock,
  ArrowLeft,
  Plus
} from 'lucide-react';

export default function PostSessionActivities() {
  // Navigation & View State: 'dashboard' | 'client-workspace'
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedSession, setSelectedSession] = useState(null);

  // Dashboard Filters State
  const [filterTab, setFilterTab] = useState('all'); // all | follow-up | notes | completed
  const [searchQuery, setSearchQuery] = useState('');

  // Client Workspace Active Sub-Tab: 'notes' | 'reflections' | 'tasks' | 'submit'
  const [workspaceTab, setWorkspaceTab] = useState('notes');

  // Form States for Client Workspace
  const [presentingConcerns, setPresentingConcerns] = useState('Chronic work stress, sleep fragmentation, and situational anxiety related to performance evaluations.');
  const [sessionFocus, setSessionFocus] = useState('Anxiety management & reframing catastrophic thoughts');
  
  // Case History & Screening Sections
  const [developmentalHistory, setDevelopmentalHistory] = useState('No major developmental trauma reported. Supportive family dynamic during childhood.');
  const [medicalHistory, setMedicalHistory] = useState('No chronic illness. Occasional tension headaches during high-stress periods.');
  const [socialHistory, setSocialHistory] = useState('Strong peer support network, though currently experiencing boundary fatigue at workplace.');
  const [screeningMeasures, setScreeningMeasures] = useState('GAD-7 Score: 14 (Moderate-Severe Anxiety) \nPHQ-9 Score: 8 (Mild Depression)');

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

  // Mock Sessions List matching your dashboard screenshot
  const [sessionsList, setSessionsList] = useState([
    {
      id: 1,
      clientName: 'Diksha Bharti',
      date: '25 Aug 2026',
      rawDate: '2026-08-25',
      time: '9:00 PM',
      status: 'Notes Pending',
      statusType: 'notes'
    },
    {
      id: 2,
      clientName: 'Juhi Chaineva',
      date: '24 Aug 2026',
      rawDate: '2026-08-24',
      time: '6:30 PM',
      status: 'Needs Follow-up',
      statusType: 'follow-up'
    },
    {
      id: 3,
      clientName: 'Aarav Sharma',
      date: '22 Aug 2026',
      rawDate: '2026-08-22',
      time: '4:00 PM',
      status: 'Completed',
      statusType: 'completed'
    }
  ]);

  // Open client workspace from card button
  const handleOpenWorkspace = (session) => {
    setSelectedSession(session);
    setCurrentView('client-workspace');
    setWorkspaceTab('notes');
  };

  // AI Reflection Generator Mock
  const handleGenerateAiReflection = () => {
    setIsGeneratingAi(true);
    setTimeout(() => {
      setAiReflection(
        `Clinical AI Insight for Focus: "${sessionFocus}"\n\n` +
        `The client demonstrated strong cognitive flexibility today when exploring catastrophic thoughts around work performance. ` +
        `Recommended therapeutic posture for upcoming sessions: Validate underlying perfectionistic drivers while gently reinforcing somatic grounding exercises.`
      );
      setIsGeneratingAi(false);
    }, 800);
  };

  // Add custom homework task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newCustomTask.trim()) return;
    setHomeworkTasks([...homeworkTasks, { id: Date.now(), task: newCustomTask, assigned: true }]);
    setNewCustomTask('');
  };

  const toggleTaskAssignment = (id) => {
    setHomeworkTasks(homeworkTasks.map(t => t.id === id ? { ...t, assigned: !t.assigned } : t));
  };

  // Handle Submit & Preview completion
  const handleFinalSubmit = () => {
    alert(`Post-session documentation and tasks successfully finalized and dispatched for ${selectedSession?.clientName}!`);
    // Update session status in list
    setSessionsList(sessionsList.map(s => s.id === selectedSession.id ? { ...s, status: 'Completed', statusType: 'completed' } : s));
    setCurrentView('dashboard');
  };

  // Filter sessions
  const filteredSessions = sessionsList.filter(s => {
    const matchesSearch = s.clientName.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterTab === 'all') return matchesSearch;
    if (filterTab === 'follow-up') return matchesSearch && s.statusType === 'follow-up';
    if (filterTab === 'notes') return matchesSearch && s.statusType === 'notes';
    if (filterTab === 'completed') return matchesSearch && s.statusType === 'completed';
    return matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto font-sans text-stone-800 pb-16 px-4 sm:px-6">

      {/* VIEW 1: SESSIONS DASHBOARD (Matching your screenshot style) */}
      {currentView === 'dashboard' && (
        <div className="space-y-6">
          
          {/* Header */}
          <div className="pt-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#237A88]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#237A88]">Post-Session Activities</span>
            </div>
            <h1 className="text-2xl font-bold text-stone-900 mt-1">Your Sessions</h1>
            <p className="text-xs text-stone-500 mt-0.5">Track follow-ups, notes, and tasks for completed sessions.</p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Retention</span>
                <div className="text-2xl font-black text-stone-900 mt-1">76%</div>
                <span className="text-[11px] text-stone-500">Active vs total clients</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                📈
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Active Clients</span>
                <div className="text-2xl font-black text-stone-900 mt-1">13</div>
                <span className="text-[11px] text-stone-500">Booked more than once</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                👥
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Sessions</span>
                <div className="text-2xl font-black text-stone-900 mt-1">49</div>
                <span className="text-[11px] text-stone-500">Since you started</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center font-bold">
                ⏱️
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 pt-2">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-3.5 text-stone-400" />
              <input 
                type="text"
                placeholder="Search by client name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-stone-200/80 text-xs font-semibold text-stone-800 shadow-sm focus:outline-none focus:border-[#237A88]"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilterTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filterTab === 'all' ? 'bg-[#7344C0] text-white shadow-sm' : 'bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                All Sessions
              </button>
              <button
                onClick={() => setFilterTab('follow-up')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filterTab === 'follow-up' ? 'bg-[#7344C0] text-white shadow-sm' : 'bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                Needs Follow-up
              </button>
              <button
                onClick={() => setFilterTab('notes')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filterTab === 'notes' ? 'bg-[#7344C0] text-white shadow-sm' : 'bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                Needs Notes
              </button>
              <button
                onClick={() => setFilterTab('completed')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filterTab === 'completed' ? 'bg-[#7344C0] text-white shadow-sm' : 'bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                Completed
              </button>
            </div>
          </div>

          {/* Sessions List Section */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
              <span>25 AUG</span>
              <span>1</span>
            </div>

            {filteredSessions.map((session) => (
              <div 
                key={session.id}
                className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition hover:border-[#237A88]/40"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {session.clientName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        session.statusType === 'notes' ? 'bg-amber-100 text-amber-800' :
                        session.statusType === 'follow-up' ? 'bg-purple-100 text-purple-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {session.status}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-stone-900 mt-1">{session.clientName}</h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                      <Clock size={12} />
                      <span>{session.date} • {session.time}</span>
                    </p>
                  </div>
                </div>

                {/* Action Buttons matching screenshot */}
                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  <button 
                    onClick={() => handleOpenWorkspace(session)}
                    className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 transition flex items-center gap-1.5"
                  >
                    <span>Follow-up Options</span>
                  </button>
                  <button 
                    onClick={() => handleOpenWorkspace(session)}
                    className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 transition flex items-center gap-1.5"
                  >
                    <span>Profile</span>
                  </button>
                  <button 
                    onClick={() => handleOpenWorkspace(session)}
                    className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                  >
                    <FileText size={14} />
                    <span>Notes | Reflections | Tasks</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* VIEW 2: CLIENT WORKSPACE (Notes & Reflections, AI Box, Tasks, Submit Preview) */}
      {currentView === 'client-workspace' && selectedSession && (
        <div className="space-y-6">
          
          {/* Top Bar with Back Button & Active Client Indicator */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200/85 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                title="Back to Sessions"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#237A88] animate-pulse" />
                  <h1 className="text-base font-bold text-stone-900">Session Workspace: <span className="text-[#237A88]">{selectedSession.clientName}</span></h1>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">Session Date: <span className="font-semibold text-stone-700">{selectedSession.date}</span></p>
              </div>
            </div>

            {/* Sub-Tab Navigation Buttons */}
            <div className="flex items-center bg-stone-100 p-1 rounded-xl flex-wrap justify-center gap-1">
              <button
                onClick={() => setWorkspaceTab('notes')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'notes' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                a) Your Notes
              </button>
              <button
                onClick={() => setWorkspaceTab('reflections')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'reflections' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                b) Reflections
              </button>
              <button
                onClick={() => setWorkspaceTab('tasks')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'tasks' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                c) Assign Tasks
              </button>
              <button
                onClick={() => setWorkspaceTab('submit')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  workspaceTab === 'submit' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                d) Submit & Preview
              </button>
            </div>
          </div>

          {/* TAB A: YOUR NOTES (Presenting concerns, Session Focus, Case history sections & Screening measures) */}
          {workspaceTab === 'notes' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
                <FileText size={18} className="text-[#237A88]" />
                <h2 className="text-sm font-bold text-stone-900">Comprehensive Clinical Notes & Case History</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Presenting Concerns</label>
                  <textarea 
                    rows="3"
                    value={presentingConcerns}
                    onChange={(e) => setPresentingConcerns(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Session Focus</label>
                  <input 
                    type="text"
                    value={sessionFocus}
                    onChange={(e) => setSessionFocus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              {/* Case History Sections */}
              <div className="border-t border-stone-100 pt-5 space-y-4">
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Case History Sections</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-600 block">Developmental History</label>
                    <textarea 
                      rows="3"
                      value={developmentalHistory}
                      onChange={(e) => setDevelopmentalHistory(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-600 block">Medical History</label>
                    <textarea 
                      rows="3"
                      value={medicalHistory}
                      onChange={(e) => setMedicalHistory(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-600 block">Social History</label>
                    <textarea 
                      rows="3"
                      value={socialHistory}
                      onChange={(e) => setSocialHistory(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Screening Measures Section */}
              <div className="border-t border-stone-100 pt-5 space-y-2">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Screening Measures & Standardized Tests</label>
                <textarea 
                  rows="3"
                  value={screeningMeasures}
                  onChange={(e) => setScreeningMeasures(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none font-mono"
                />
              </div>

              <div className="flex justify-end pt-2">
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

          {/* TAB B: REFLECTIONS (AI Generator Box based on Session Focus) */}
          {workspaceTab === 'reflections' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
                <Sparkles size={18} className="text-[#237A88]" />
                <h2 className="text-sm font-bold text-stone-900">AI Clinical Reflections Generator</h2>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Current Session Focus Reference</span>
                  <span className="text-[11px] font-semibold text-[#237A88] bg-[#237A88]/10 px-2.5 py-0.5 rounded-md">Auto-linked</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800">
                  {sessionFocus}
                </div>
                <p className="text-[11px] text-stone-500">
                  Click below to generate professional clinical reflections and thematic insights automatically synthesized from the session focus above.
                </p>

                <button
                  onClick={handleGenerateAiReflection}
                  disabled={isGeneratingAi}
                  className="w-full py-3 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <Sparkles size={16} />
                  <span>{isGeneratingAi ? 'Synthesizing Clinical Insights...' : 'Generate AI Reflections for this Session'}</span>
                </button>
              </div>

              {/* Generated Reflection Output Box */}
              {aiReflection && (
                <div className="space-y-2 animate-fadeIn">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Generated Clinical Reflection Box</label>
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
                  onClick={() => setWorkspaceTab('notes')}
                  className="px-4 py-2.5 border border-stone-200 text-stone-700 rounded-xl text-xs font-bold hover:bg-stone-50 transition"
                >
                  Back to Notes
                </button>
                <button
                  onClick={() => setWorkspaceTab('tasks')}
                  className="px-5 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <span>Proceed to Assign Tasks</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* TAB C: ASSIGN TASKS (Homeworks and Worksheets) */}
          {workspaceTab === 'tasks' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2">
                  <CheckSquare size={18} className="text-[#237A88]" />
                  <h2 className="text-sm font-bold text-stone-900">Assign Homeworks & Worksheets</h2>
                </div>
                <span className="text-xs font-semibold text-stone-500">{homeworkTasks.filter(t => t.assigned).length} Tasks Selected</span>
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

              {/* Add Custom Task Form */}
              <form onSubmit={handleAddTask} className="flex gap-2 pt-2">
                <input 
                  type="text" 
                  placeholder="Add custom worksheet or therapeutic exercise..."
                  value={newCustomTask}
                  onChange={(e) => setNewCustomTask(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                />
                <button 
                  type="submit"
                  className="px-4 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-sm"
                >
                  <Plus size={14} />
                  <span>Add Task</span>
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

          {/* TAB D: SUBMIT WITH PREVIEW */}
          {workspaceTab === 'submit' && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
                <ShieldCheck size={18} className="text-[#237A88]" />
                <h2 className="text-sm font-bold text-stone-900">Post-Session Preview & Final Dispatch</h2>
              </div>

              {/* Preview Card */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">Client Name</span>
                  <span className="font-bold text-stone-900">{selectedSession.clientName}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">Session Date</span>
                  <span className="font-bold text-stone-900">{selectedSession.date}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">Session Focus</span>
                  <span className="font-bold text-stone-800">{sessionFocus}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">Screening Status</span>
                  <span className="font-bold text-[#237A88]">Recorded & Logged</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
                  <span className="text-stone-500 font-medium">AI Reflections Box</span>
                  <span className="font-bold text-stone-800">{aiReflection ? 'Generated & Attached' : 'Not Generated'}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500 font-medium">Assigned Worksheets / Tasks</span>
                  <span className="font-bold text-[#237A88]">{homeworkTasks.filter(t => t.assigned).length} active modules</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
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
                  <span>Submit & Dispatch to Client</span>
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