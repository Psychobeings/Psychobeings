import React, { useState } from 'react';
import { 
  FileText, 
  CheckSquare, 
  Smile, 
  Sparkles, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function PostSessionActivities() {
  const [activeTab, setActiveTab] = useState('notes'); // notes | homework | review
  
  // Clinical Notes & Reflection State
  const [sessionTheme, setSessionTheme] = useState('Anxiety management & reframing catastrophic thoughts');
  const [clientMood, setClientMood] = useState('Reflective / Calmer');
  const [clinicalObservations, setClinicalObservations] = useState(
    'Client responded well to cognitive restructuring techniques. Discussed boundary setting at workplace.'
  );

  // Homework & Follow-up State
  const [homeworkTasks, setHomeworkTasks] = useState([
    { id: 1, task: 'Daily 10-minute mindfulness breathing log', assigned: true },
    { id: 2, task: 'Complete thought record worksheet for triggering events', assigned: true },
    { id: 3, task: 'Practice progressive muscle relaxation before sleep', assigned: false }
  ]);

  const [newCustomTask, setNewCustomTask] = useState('');

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

  return (
    <div className="max-w-5xl mx-auto font-sans text-stone-800 pb-16 space-y-6">
      
      {/* Top Header Section */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200/85 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#237A88] animate-pulse" />
            <h1 className="text-base font-bold text-stone-900">Post-Session Debrief & Activities</h1>
          </div>
          <p className="text-xs text-stone-500 mt-0.5">Active Client: <span className="font-semibold text-stone-700">Diksha Bharti</span> • Session #4</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-stone-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'notes' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Clinical Notes
          </button>
          <button
            onClick={() => setActiveTab('homework')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'homework' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Homework & Tasks
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'review' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Summary & Dispatch
          </button>
        </div>
      </div>

      {/* TAB 1: CLINICAL NOTES & REFLECTIONS */}
      {activeTab === 'notes' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
              <FileText size={18} className="text-[#237A88]" />
              <h2 className="text-sm font-bold text-stone-900">Session Documentation</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">Core Theme / Focus Area</label>
                <input 
                  type="text" 
                  value={sessionTheme}
                  onChange={(e) => setSessionTheme(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">Clinical Observations & Insights</label>
                <textarea 
                  rows="5"
                  value={clinicalObservations}
                  onChange={(e) => setClinicalObservations(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88] resize-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                <Smile size={18} className="text-[#237A88]" />
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Client Presentation</h3>
              </div>
              
              <div className="space-y-2">
                <span className="text-[11px] text-stone-500 font-medium block">Observed Affect / Mood</span>
                <select 
                  value={clientMood}
                  onChange={(e) => setClientMood(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                >
                  <option>Reflective / Calmer</option>
                  <option>Anxious / High Arousal</option>
                  <option>Withdrawn / Quiet</option>
                  <option>Progressive / Open</option>
                </select>
              </div>

              <div className="pt-2">
                <div className="p-3 bg-[#237A88]/10 rounded-xl border border-[#237A88]/20 flex items-start gap-2 text-xs text-[#237A88]">
                  <ShieldCheck size={16} className="shrink-0 mt-0.5" />
                  <span>All session records are encrypted and compliant with clinical privacy standards.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: HOMEWORK & BETWEEN-SESSION ACTIVITIES */}
      {activeTab === 'homework' && (
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2">
              <CheckSquare size={18} className="text-[#237A88]" />
              <h2 className="text-sm font-bold text-stone-900">Assign Between-Session Activities</h2>
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
              placeholder="Add custom therapeutic exercise or journal prompt..."
              value={newCustomTask}
              onChange={(e) => setNewCustomTask(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
            />
            <button 
              type="submit"
              className="px-4 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              Add Task
            </button>
          </form>
        </div>
      )}

      {/* TAB 3: REVIEW & CLIENT DISPATCH */}
      {activeTab === 'review' && (
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
            <Sparkles size={18} className="text-[#237A88]" />
            <h2 className="text-sm font-bold text-stone-900">Post-Session Summary & Client Handout</h2>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
              <span className="text-stone-500 font-medium">Session Focus</span>
              <span className="font-bold text-stone-800">{sessionTheme}</span>
            </div>
            <div className="flex justify-between items-center text-xs border-b border-stone-200 pb-3">
              <span className="text-stone-500 font-medium">Assigned Exercises</span>
              <span className="font-bold text-[#237A88]">{homeworkTasks.filter(t => t.assigned).length} active modules</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-stone-500 font-medium">Follow-Up Recommended</span>
              <span className="font-bold text-stone-800">In 1 Week (Next Tuesday)</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <Clock size={14} />
              <span>Auto-saves drafts securely.</span>
            </div>
            <button 
              onClick={() => alert("Summary and homework tasks successfully dispatched to client portal!")}
              className="flex items-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm"
            >
              <span>Dispatch Summary to Client</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}