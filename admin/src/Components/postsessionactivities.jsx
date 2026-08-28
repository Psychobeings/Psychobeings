import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Mic, 
  Type, 
  Plus, 
  Search, 
  Library, 
  Send, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';
import { initialTasks, readyAssessments } from '../Data/worksheetsData';

export default function PostSessionActivities({ clientName = "Diksha Bharti", onBack, onSubmitComplete }) {
  const [currentStep, setCurrentStep] = useState(1); // 1: Notes, 2: Reflections, 3: Tasks/Assessments, 4: Submit
  
  // Step 1 State: Notes
  const [presentingProblem, setPresentingProblem] = useState(
    "- Need for emotional support and reassurance from partner.\n- Stress-related fainting episodes since last year.\n- Anger and increasing trust-related concerns.\n- Current occupational stress and difficulties at work."
  );
  const [sessionFocus, setSessionFocus] = useState(
    "The session focused on reviewing the client's progress following the previous session. The client reported that she had implemented the feedback and strategies discussed during the last session. She described feeling emotionally lighter, with a reduction in crying spells and an improvement in her appetite.\n\nThe client also reported that there were instances of conflict with her partner during the week, noting that she was able to manage her dissatisfaction without reacting intensely. She identified that she was able to manage her emotional overwhelm, preventing the usual hurtful following conflicts."
  );

  // Step 2 State: Reflections
  const [reflectionText, setReflectionText] = useState(
    "During the session, the client made progress by previously discussed strategies, noting a decrease in emotional distress and an improvement in appetite. Despite this, she continues to face challenges in her relationship, experiencing conflict and struggling with trust issues due to perceived dishonesty from her partner. The client is uncertain about the future of their relationship, especially concerning trust and honesty. Goals for therapy include focusing on emotional regulation, managing stress, and improving communication within relationships, while continuously monitoring safety due to a past suicide attempt. The therapeutic focus will address relationship difficulties, anger management, and the impact of occupational stress on the client's well-being."
  );
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiGenerated, setAiGenerated] = useState(false);

  // Step 3 State: Tasks & Assessments
  const [taskTab, setTaskTab] = useState('library'); // 'library' or 'assessments'
  const [taskSearch, setTaskSearch] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [clientEmail, setClientEmail] = useState('');

  // Handlers for Task Selection
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

  return (
    <div className="max-w-5xl mx-auto font-sans text-stone-800 pb-12">
      {/* Top Header Bar with Client Context & Back */}
      <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-[#237A88] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#237A88]/10 border border-[#237A88]/20">
          <div className="h-6 w-6 rounded-full bg-[#237A88] text-white flex items-center justify-center font-bold text-xs shadow-sm">
            {clientName.charAt(0)}
          </div>
          <span className="text-xs font-bold text-[#237A88]">{clientName}</span>
        </div>
      </div>

      {/* Wizard Progress Steps Indicator Bar */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm mb-8">
        <div className="flex items-center justify-between relative max-w-2xl mx-auto">
          {/* Connecting Line background */}
          <div className="absolute left-8 right-8 top-4 h-[2px] bg-stone-200 -z-0" />

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
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-sm ${
                    isCompleted 
                      ? 'bg-[#237A88] text-white' 
                      : isCurrent 
                      ? 'bg-[#237A88] text-white ring-4 ring-[#237A88]/20' 
                      : 'bg-white border-2 border-stone-300 text-stone-400'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 size={16} /> : item.step}
                </div>
                <span className={`text-xs mt-2 font-semibold ${isCurrent ? 'text-[#237A88]' : 'text-stone-500'}`}>
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
            <h2 className="text-lg font-bold text-stone-900">Your Notes</h2>
            <p className="text-xs text-stone-500 mt-0.5">Private notes for your records only.</p>
          </div>

          {/* Presenting Problem Field */}
          <div className="space-y-2 border border-stone-200 rounded-2xl p-4 bg-stone-50/50">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Presenting Problem</label>
              <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded-md font-semibold">optional</span>
            </div>
            <textarea
              rows={4}
              value={presentingProblem}
              onChange={(e) => setPresentingProblem(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-xl p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#237A88]/30 leading-relaxed font-mono"
            />
            <div className="flex justify-end gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-semibold transition">
                <Mic size={13} /> Voice
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-semibold transition">
                <Type size={13} /> Text
              </button>
            </div>
          </div>

          {/* Session Focus Field */}
          <div className="space-y-2 border border-stone-200 rounded-2xl p-4 bg-stone-50/50">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Session Focus</label>
              <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded-md font-semibold">optional</span>
            </div>
            <textarea
              rows={6}
              value={sessionFocus}
              onChange={(e) => setSessionFocus(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-xl p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#237A88]/30 leading-relaxed font-mono"
            />
            <div className="flex justify-between items-center">
              <button className="text-xs text-[#237A88] font-bold hover:underline flex items-center gap-1">
                <Plus size={14} /> Add more details
              </button>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-semibold transition">
                  <Mic size={13} /> Voice
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-semibold transition">
                  <Type size={13} /> Text
                </button>
              </div>
            </div>
          </div>

          {/* Footer Action Navigation */}
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
            <h2 className="text-lg font-bold text-stone-900">Reflections</h2>
            <p className="text-xs text-stone-500 mt-0.5">Send a reflection to your client, like a prescription.</p>
          </div>

          {/* Reflection Editor Box */}
          <div className="border border-stone-200 rounded-2xl p-5 bg-gradient-to-br from-stone-50 to-[#237A88]/5 space-y-4">
            <textarea
              rows={8}
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
                  <CheckCircle2 size={13} /> Generated & can still be edited
                </span>
              )}
            </div>
          </div>

          {/* Footer Action Navigation */}
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
              <h2 className="text-lg font-bold text-stone-900">Assign Tasks & Assessments</h2>
              <p className="text-xs text-stone-500 mt-0.5">Give your client something to work on between sessions.</p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-1.5 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2 rounded-xl text-xs font-semibold transition shadow-sm"
            >
              <Plus size={14} />
              <span>Create New Task</span>
            </button>
          </div>

          {/* Sub-tabs for Library vs Ready Assessments */}
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
            <button
              onClick={() => setTaskTab('library')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                taskTab === 'library'
                  ? 'bg-[#237A88] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Library size={14} />
              <span>Worksheet Library</span>
            </button>
            <button
              onClick={() => setTaskTab('assessments')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                taskTab === 'assessments'
                  ? 'bg-[#237A88] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <FileText size={14} />
              <span>Clinical Assessments ({readyAssessments.length})</span>
            </button>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3 text-stone-400" size={16} />
            <input
              type="text"
              placeholder={taskTab === 'library' ? "Search tasks and worksheets..." : "Search GAD-7, PHQ-9, RSES..."}
              value={taskSearch}
              onChange={(e) => setTaskSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#237A88]/30"
            />
          </div>

          {/* Tab Content: Tasks Library */}
          {taskTab === 'library' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {initialTasks
                .filter(t => t.title.toLowerCase().includes(taskSearch.toLowerCase()))
                .map((task) => {
                  const isSelected = selectedTasks.some(t => t.id === task.id);
                  return (
                    <div 
                      key={task.id} 
                      className={`border rounded-xl p-4 flex flex-col justify-between transition-all ${
                        isSelected ? 'border-[#237A88] bg-[#237A88]/5 shadow-sm' : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <div>
                        <h3 className="font-bold text-stone-900 text-sm mb-1">{task.title}</h3>
                        <p className="text-xs text-stone-500 mb-4 line-clamp-3 leading-relaxed">
                          {task.description}
                        </p>
                      </div>
                      <button
                        onClick={() => handleToggleTask(task)}
                        className={`w-full py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                            : 'bg-stone-900 text-white hover:bg-stone-800'
                        }`}
                      >
                        <Plus size={14} className={isSelected ? 'rotate-45 transition-transform' : ''} />
                        <span>{isSelected ? 'Remove Task' : 'Add to Assignment'}</span>
                      </button>
                    </div>
                  );
                })}
            </div>
          )}

          {/* Tab Content: Ready Assessments */}
          {taskTab === 'assessments' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {readyAssessments.map((assessment) => (
                <div key={assessment.id} className="border border-stone-200 rounded-xl p-5 bg-white flex flex-col justify-between shadow-sm hover:border-[#237A88]/50 transition">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-base text-stone-900">{assessment.acronym}</span>
                      <span className="text-[10px] bg-[#237A88]/10 text-[#237A88] px-2 py-0.5 rounded-full font-bold">
                        {assessment.questionsCount} Questions
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-stone-700 mb-2">{assessment.title}</h4>
                    <p className="text-xs text-stone-500 mb-4 leading-relaxed">{assessment.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedAssessment(assessment);
                      setAssessmentModalOpen(true);
                    }}
                    className="w-full bg-[#237A88] text-white text-xs py-2 rounded-lg font-bold hover:bg-[#1C646F] transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Send size={13} />
                    <span>Assign via Email</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Summary Box of Selected Items */}
          <div className="border border-dashed border-stone-300 rounded-2xl p-4 bg-stone-50">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Selected Tasks for {clientName} ({selectedTasks.length})
            </h4>
            {selectedTasks.length === 0 ? (
              <p className="text-xs text-stone-400 italic">No tasks selected yet. Pick items from the library above.</p>
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

          {/* Footer Action Navigation */}
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
              <span>Continue to Submit</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 4: SUBMIT & FINALIZE ================= */}
      {currentStep === 4 && (
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-10 text-center space-y-6 max-w-xl mx-auto">
          <div className="w-16 h-16 bg-[#237A88]/10 text-[#237A88] rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={32} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">All done!</h2>
            <p className="text-xs text-stone-500 mt-1">Submit this session to finalize your notes and dispatch activities.</p>
          </div>

          {/* Summary Checklist */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-left space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
              <CheckCircle2 size={15} className="text-[#237A88]" />
              <span>Presenting problem recorded</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
              <CheckCircle2 size={15} className="text-[#237A88]" />
              <span>Session focus documented</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
              <CheckCircle2 size={15} className="text-[#237A88]" />
              <span>Reflection for client prepared</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
              <CheckCircle2 size={15} className="text-[#237A88]" />
              <span>{selectedTasks.length} task(s) assigned</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={onSubmitComplete}
              className="w-full flex items-center justify-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white py-3.5 rounded-2xl text-xs font-bold shadow-lg shadow-[#237A88]/25 transition"
            >
              <ShieldCheck size={16} />
              <span>Submit Session Notes</span>
            </button>
            <div className="flex justify-center items-center gap-1.5 text-[10px] text-stone-400 font-medium">
              <ShieldCheck size={12} /> 256-bit encryption • HIPAA compliant
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex justify-between">
            <button
              onClick={() => setCurrentStep(3)}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100 transition border border-stone-200"
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* Assessment Assign Modal */}
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

      {/* Create New Task Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl border border-stone-200 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-stone-900">Create New Task</h3>
              <button onClick={() => setIsCreateModalOpen(false)} className="text-stone-400 hover:text-stone-600 font-bold">×</button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Task Title</label>
                <input type="text" placeholder="e.g. Grounding 5-4-3-2-1" className="w-full border border-stone-200 rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-[#237A88]/30" />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Instructions</label>
                <textarea rows={3} placeholder="Provide instructions..." className="w-full border border-stone-200 rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-[#237A88]/30" />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
              <button onClick={() => setIsCreateModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl border border-stone-200">Cancel</button>
              <button onClick={() => { alert('Task created successfully!'); setIsCreateModalOpen(false); }} className="px-5 py-2 text-xs font-semibold bg-[#237A88] text-white hover:bg-[#1C646F] rounded-xl shadow-sm">Save Task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}