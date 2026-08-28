import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  Search, 
  Library, 
  Send, 
  FileText, 
  ShieldCheck,
  Mic,
  Type
} from 'lucide-react';

// Local fallbacks integrated directly so the component runs safely out-of-the-box
const initialTasks = [
  { id: 1, title: 'Thought Record', description: 'Log automatic thoughts, emotions, and alternative perspectives daily.' },
  { id: 2, title: 'Behavioral Activation Schedule', description: 'Plan and track rewarding or pleasurable activities throughout the week.' },
  { id: 3, title: 'Mindfulness Breathing', description: 'Practice 10 minutes of diaphragmatic breathing twice a day.' }
];

const readyAssessments = [
  { id: 'gad-7', acronym: 'GAD-7', title: 'Generalized Anxiety Disorder 7-item scale', questionsCount: 7, description: 'Measures severity of generalized anxiety symptoms.' },
  { id: 'phq-9', acronym: 'PHQ-9', title: 'Patient Health Questionnaire', questionsCount: 9, description: 'Screening tool for depression severity.' }
];

export default function PostSessionActivities({ clientName = "Diksha Bharti", onBack, onSubmitComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Step 1 State: Notes
  const [presentingProblem, setPresentingProblem] = useState(
    "- Need for emotional support and reassurance from partner.\n- Stress-related fainting episodes since last year.\n- Anger and increasing trust-related concerns.\n- Current occupational stress and difficulties at work."
  );
  const [sessionFocus, setSessionFocus] = useState(
    "The session focused on reviewing the client's progress following the previous session. The client reported that she had implemented the feedback and strategies discussed during the last session. She described feeling emotionally lighter, with a reduction in crying spells and an improvement in her appetite."
  );

  // Step 2 State: Reflections
  const [reflectionText, setReflectionText] = useState(
    "During the session, the client made progress by previously discussed strategies, noting a decrease in emotional distress and an improvement in appetite. Despite this, she continues to face challenges in her relationship, experiencing conflict and struggling with trust issues due to perceived dishonesty from her partner."
  );
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiGenerated, setAiGenerated] = useState(false);

  // Step 3 State: Tasks & Assessments
  const [taskTab, setTaskTab] = useState('library');
  const [taskSearch, setTaskSearch] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [clientEmail, setClientEmail] = useState('');

  // Create Task Form State
  const [newTaskType, setNewTaskType] = useState('Worksheet');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskInstruction, setNewTaskInstruction] = useState('');
  const [newTaskFreq, setNewTaskFreq] = useState('None');
  const [newTaskTime, setNewTaskTime] = useState('None');

  const handleToggleTask = (task) => {
    if (selectedTasks.find(t => t.id === task.id)) {
      setSelectedTasks(selectedTasks.filter(t => t.id !== task.id));
    } else {
      setSelectedTasks([...selectedTasks, task]);
    }
  };

  const handleGenerateAIReflection = () => {
    setIsGeneratingAI(true);
    setTimeout(() => {
      setIsGeneratingAI(false);
      setAiGenerated(true);
      setReflectionText(
        "Reflecting on today's session, the client demonstrated commendable self-awareness regarding emotional patterns and interpersonal friction. By continuing to practice structured affect regulation and validating emotional experiences, we are laying a solid groundwork for relational stability."
      );
    }, 1500);
  };

  const handleAssignAssessmentSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully assigned assessment ${selectedAssessment.acronym} to ${clientEmail}`);
    setAssessmentModalOpen(false);
    setClientEmail('');
  };

  const handleSaveNewTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    const customTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskInstruction || 'Custom created task item.'
    };
    setSelectedTasks([...selectedTasks, customTask]);
    setIsCreateModalOpen(false);
    setNewTaskTitle('');
    setNewTaskInstruction('');
  };

  return (
    <div className="max-w-4xl mx-auto font-sans text-stone-800 pb-16 px-4">
      {/* Top Header Bar matching the exact screenshot flow */}
      <div className="flex items-center justify-between mb-6 pt-2">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#237A88] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm">
          <div className="h-5 w-5 rounded-full bg-[#237A88] text-white flex items-center justify-center font-bold text-[10px]">
            {clientName.charAt(0)}
          </div>
          <span className="text-xs font-bold text-stone-900">{clientName}</span>
        </div>
      </div>

      {/* Step Indicator Progress Bar matching screenshots */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm mb-6">
        <div className="flex items-center justify-between relative max-w-lg mx-auto">
          <div className="absolute left-6 right-6 top-4 h-[2px] bg-stone-200 -z-0" />

          {[
            { step: 1, label: 'Your Notes' },
            { step: 2, label: 'Reflections' },
            { step: 3, label: 'Assign Tasks' },
            { step: 4, label: 'Submit' },
          ].map((item) => {
            const isCompleted = currentStep > item.step;
            const isCurrent = currentStep === item.step;

            return (
              <div key={item.step} className="flex flex-col items-center relative z-10 cursor-pointer" onClick={() => setCurrentStep(item.step)}>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-sm ${
                    isCompleted 
                      ? 'bg-[#237A88] text-white' 
                      : isCurrent 
                      ? 'bg-[#237A88] text-white ring-4 ring-[#237A88]/20' 
                      : 'bg-white border-2 border-stone-300 text-stone-400'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 size={14} /> : item.step}
                </div>
                <span className={`text-[11px] mt-2 font-semibold ${isCurrent ? 'text-[#237A88]' : 'text-stone-500'}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= STEP 1: YOUR NOTES ================= */}
      {currentStep === 1 && (
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-base font-bold text-stone-900">Your Notes</h2>
            <p className="text-xs text-stone-500 mt-0.5">Private notes for your records only.</p>
          </div>

          <div className="space-y-2 border border-stone-200 rounded-2xl p-4 bg-stone-50/40">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-stone-700">Presenting Problem</label>
              <span className="text-[10px] bg-stone-200/80 text-stone-600 px-2 py-0.5 rounded font-semibold">optional</span>
            </div>
            <textarea
              rows={4}
              value={presentingProblem}
              onChange={(e) => setPresentingProblem(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-xl p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#237A88]/30 font-mono leading-relaxed"
            />
            <div className="flex justify-end gap-2 pt-1">
              <button className="flex items-center gap-1 bg-[#237A88] text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-sm">
                <Mic size={11} /> Voice
              </button>
              <button className="flex items-center gap-1 bg-stone-200 text-stone-700 px-2.5 py-1 rounded-lg text-[10px] font-bold">
                <Type size={11} /> Text
              </button>
            </div>
          </div>

          <div className="space-y-2 border border-stone-200 rounded-2xl p-4 bg-stone-50/40">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-stone-700">Session Focus</label>
              <span className="text-[10px] bg-stone-200/80 text-stone-600 px-2 py-0.5 rounded font-semibold">optional</span>
            </div>
            <textarea
              rows={5}
              value={sessionFocus}
              onChange={(e) => setSessionFocus(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-xl p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#237A88]/30 font-mono leading-relaxed"
            />
            <div className="flex justify-end gap-2 pt-1">
              <button className="flex items-center gap-1 bg-[#237A88] text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-sm">
                <Mic size={11} /> Voice
              </button>
              <button className="flex items-center gap-1 bg-stone-200 text-stone-700 px-2.5 py-1 rounded-lg text-[10px] font-bold">
                <Type size={11} /> Text
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-6 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-[#237A88]/20 transition"
            >
              <span>Continue</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 2: REFLECTIONS ================= */}
      {currentStep === 2 && (
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-base font-bold text-stone-900">Reflections</h2>
            <p className="text-xs text-stone-500 mt-0.5">Send a reflection to your client, like a prescription.</p>
          </div>

          <div className="border border-stone-200 rounded-2xl p-5 bg-gradient-to-br from-stone-50 to-[#237A88]/5 space-y-4">
            <textarea
              rows={7}
              value={reflectionText}
              onChange={(e) => setReflectionText(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-xl p-4 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#237A88]/30 leading-relaxed font-sans shadow-sm"
            />
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handleGenerateAIReflection}
                disabled={isGeneratingAI}
                className="flex items-center gap-2 bg-[#237A88]/10 hover:bg-[#237A88]/20 text-[#237A88] px-4 py-2 rounded-xl text-xs font-bold transition border border-[#237A88]/20"
              >
                <Sparkles size={14} />
                <span>{isGeneratingAI ? 'Generating with AI...' : 'Generate with AI'}</span>
              </button>

              {aiGenerated && (
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 size={13} /> Generated | can still be edited
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100 transition border border-stone-200"
            >
              Back
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="flex items-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-6 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-[#237A88]/20 transition"
            >
              <span>Continue</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 3: ASSIGN TASKS & ASSESSMENTS ================= */}
      {currentStep === 3 && (
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-base font-bold text-stone-900">Assign Tasks</h2>
              <p className="text-xs text-stone-500 mt-0.5">Give your client something to work on between sessions.</p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-1.5 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2 rounded-xl text-xs font-semibold transition shadow-sm"
            >
              <Plus size={14} />
              <span>Create</span>
            </button>
          </div>

          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <button
              onClick={() => setTaskTab('library')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                taskTab === 'library' ? 'bg-[#237A88] text-white shadow-sm' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Library size={13} />
              <span>Library ({initialTasks.length})</span>
            </button>
            <button
              onClick={() => setTaskTab('assessments')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                taskTab === 'assessments' ? 'bg-[#237A88] text-white shadow-sm' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <FileText size={13} />
              <span>Last Session ({readyAssessments.length})</span>
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3.5 top-3 text-stone-400" size={15} />
            <input
              type="text"
              placeholder="Search tasks..."
              value={taskSearch}
              onChange={(e) => setTaskSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#237A88]/30"
            />
          </div>

          {taskTab === 'library' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {initialTasks
                .filter(t => t.title.toLowerCase().includes(taskSearch.toLowerCase()))
                .map((task) => {
                  const isSelected = selectedTasks.some(t => t.id === task.id);
                  return (
                    <div 
                      key={task.id} 
                      className={`border rounded-xl p-3.5 flex flex-col justify-between transition-all ${
                        isSelected ? 'border-[#237A88] bg-[#237A88]/5 shadow-sm' : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <div>
                        <h3 className="font-bold text-stone-900 text-xs mb-1">{task.title}</h3>
                        <p className="text-[11px] text-stone-500 mb-3 line-clamp-3 leading-relaxed">{task.description}</p>
                      </div>
                      <button
                        onClick={() => handleToggleTask(task)}
                        className={`w-full py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
                          isSelected ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200' : 'bg-[#237A88]/10 text-[#237A88] hover:bg-[#237A88]/20'
                        }`}
                      >
                        <Plus size={13} className={isSelected ? 'rotate-45 transition-transform' : ''} />
                        <span>{isSelected ? 'Remove' : 'Add'}</span>
                      </button>
                    </div>
                  );
                })}
            </div>
          )}

          {taskTab === 'assessments' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {readyAssessments.map((assessment) => (
                <div key={assessment.id} className="border border-stone-200 rounded-xl p-4 bg-white flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex justify-between items-start mb-1.5">
                      <span className="font-bold text-sm text-stone-900">{assessment.acronym}</span>
                      <span className="text-[9px] bg-[#237A88]/10 text-[#237A88] px-2 py-0.5 rounded-full font-bold">
                        {assessment.questionsCount} Ques
                      </span>
                    </div>
                    <h4 className="text-[11px] font-bold text-stone-700 mb-1.5">{assessment.title}</h4>
                    <p className="text-[11px] text-stone-500 mb-3 leading-relaxed">{assessment.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedAssessment(assessment);
                      setAssessmentModalOpen(true);
                    }}
                    className="w-full bg-[#237A88] text-white text-[11px] py-1.5 rounded-lg font-bold hover:bg-[#1C646F] transition flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Send size={12} />
                    <span>Assign via Email</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="border border-dashed border-stone-300 rounded-2xl p-4 bg-stone-50/50">
            <h4 className="text-xs font-bold text-stone-700 mb-2">
              Selected Tasks ({selectedTasks.length})
            </h4>
            {selectedTasks.length === 0 ? (
              <p className="text-[11px] text-stone-400 italic">Add tasks from the library above to assign them.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {selectedTasks.map(t => (
                  <span key={t.id} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 shadow-sm">
                    <span>{t.title}</span>
                    <button onClick={() => handleToggleTask(t)} className="text-stone-400 hover:text-rose-600">×</button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2">
            <button className="w-full flex items-center justify-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white py-2.5 rounded-xl text-xs font-bold shadow-md shadow-[#237A88]/20 transition">
              <span>Assign Tasks Now</span>
            </button>
            <p className="text-[10px] text-stone-400 text-center mt-1.5">Select tasks above to assign them independently of session notes.</p>
          </div>

          <div className="flex justify-between pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100 transition border border-stone-200"
            >
              Back
            </button>
            <button
              onClick={() => setCurrentStep(4)}
              className="flex items-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-6 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-[#237A88]/20 transition"
            >
              <span>Continue</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 4: SUBMIT & FINALIZE ================= */}
      {currentStep === 4 && (
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-10 text-center space-y-6 max-w-lg mx-auto">
          <div className="w-14 h-14 bg-[#237A88]/10 text-[#237A88] rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={28} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-stone-900">All done!</h2>
            <p className="text-xs text-stone-500 mt-1">Submit this session to finalize your notes.</p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-left space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
              <CheckCircle2 size={14} className="text-[#237A88]" />
              <span>Presenting problem</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
              <CheckCircle2 size={14} className="text-[#237A88]" />
              <span>Session focus</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
              <CheckCircle2 size={14} className="text-[#237A88]" />
              <span>Reflection for client</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
              <CheckCircle2 size={14} className="text-[#237A88]" />
              <span>{selectedTasks.length} tasks assigned</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 pt-1">
            <button
              onClick={onSubmitComplete}
              className="w-full flex items-center justify-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-[#237A88]/25 transition"
            >
              <ShieldCheck size={15} />
              <span>Submit Session</span>
            </button>
            <div className="flex justify-center items-center gap-1.5 text-[10px] text-stone-400 font-medium">
              <ShieldCheck size={11} /> 256-bit encryption • HIPAA compliant
            </div>
          </div>

          <div className="pt-3 border-t border-stone-100 flex justify-between">
            <button
              onClick={() => setCurrentStep(3)}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100 transition border border-stone-200"
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* Create New Task Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl border border-stone-200 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-stone-100">
              <h3 className="text-base font-bold text-stone-900">Create New Task</h3>
              <button onClick={() => setIsCreateModalOpen(false)} className="text-stone-400 hover:text-stone-600 font-bold text-lg">×</button>
            </div>
            
            <form onSubmit={handleSaveNewTask} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Type</label>
                <input 
                  type="text" 
                  value={newTaskType} 
                  onChange={(e) => setNewTaskType(e.target.value)}
                  placeholder="e.g. Worksheet, Exercise, Scale" 
                  className="w-full border border-stone-200 rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-[#237A88]/30 bg-stone-50" 
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Title</label>
                <input 
                  type="text" 
                  required 
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="Task title" 
                  className="w-full border border-stone-200 rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-[#237A88]/30" 
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Instruction</label>
                <textarea 
                  rows={3} 
                  value={newTaskInstruction}
                  onChange={(e) => setNewTaskInstruction(e.target.value)}
                  placeholder="Task instructions. Type / for snippets" 
                  className="w-full border border-stone-200 rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-[#237A88]/30" 
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Default Frequency</label>
                  <select 
                    value={newTaskFreq}
                    onChange={(e) => setNewTaskFreq(e.target.value)}
                    className="w-full border border-stone-200 rounded-xl p-2.5 outline-none bg-white"
                  >
                    <option value="None">None</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Default Time of Day</label>
                  <select 
                    value={newTaskTime}
                    onChange={(e) => setNewTaskTime(e.target.value)}
                    className="w-full border border-stone-200 rounded-xl p-2.5 outline-none bg-white"
                  >
                    <option value="None">None</option>
                    <option value="Morning">Morning</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
              </div>

              <div className="border border-stone-200 rounded-xl p-3 bg-stone-50/50 flex justify-between items-center">
                <span className="text-stone-500 text-[11px]">None attached. You can attach up to 5.</span>
                <button type="button" className="text-xs font-bold text-[#237A88] hover:underline">Attach a Worksheet</button>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
                <button 
                  type="button" 
                  onClick={() => setIsCreateModalOpen(false)} 
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl border border-stone-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 text-xs font-semibold bg-[#237A88] text-white hover:bg-[#1C646F] rounded-xl shadow-sm"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Assessment Modal */}
      {assessmentModalOpen && selectedAssessment && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl border border-stone-200">
            <h3 className="text-base font-bold text-stone-900 mb-1">Assign {selectedAssessment.acronym}</h3>
            <p className="text-xs text-stone-500 mb-4">Send this assessment directly to your client via email.</p>
            <form onSubmit={handleAssignAssessmentSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Client Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="client@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-[#237A88]/30 outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button 
                  type="button" 
                  onClick={() => setAssessmentModalOpen(false)} 
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl border border-stone-200 transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 text-xs font-semibold bg-[#237A88] text-white hover:bg-[#1C646F] rounded-xl shadow-sm transition"
                >
                  Send Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}