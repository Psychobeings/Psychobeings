import React, { useState, useEffect } from 'react';
import { 
  Save, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  User, 
  AlertCircle, 
  Activity, 
  Heart, 
  Brain,
  Users,
  ShieldAlert, 
  Eye, 
  FileSearch, 
  Stethoscope 
} from 'lucide-react';

const INITIAL_FORM_DATA = {
  // 1. Demographic & Identifying Data
  clientNameId: '',
  ageGender: '',
  contactInfo: '',
  maritalFamilyStatus: '',
  educationOccupation: '',
  referralSource: '',

  // 2. Chief Complaint & Presenting Problem
  coreIssue: '',
  timeline: '',
  precipitatingFactors: '',

  // 3. History of Presenting Illness (HPI)
  symptomProfile: '',
  impactOnFunctioning: '',
  previousCoping: '',

  // 4. Biological Functions & Somatic History
  sleepPattern: '',
  appetiteWeight: '',
  libido: '',
  menstrualCycle: '',

  // 5. Personal History & Developmental Background
  earlyChildhood: '',
  schoolAcademicHistory: '',
  employmentHistory: '',
  romanticMaritalHistory: '',

  // 6. Family & Psychosocial Dynamics
  familyStructure: '',
  familyEnvironment: '',
  socialSupport: '',

  // 7. Medical, Psychiatric, & Substance History
  physicalHealth: '',
  psychiatricHistory: '',
  substanceUse: '',

  // 8. Behavioral Observations & MSE
  appearanceHygiene: '',
  attitudeRapport: '',
  affectMood: '',
  thoughtContentProcess: '',
  insightJudgment: '',

  // 9. Diagnostic Impression & Formulations
  provisionalDiagnosis: '',
  psychologicalFormulation: '',

  // 10. Counselling & Treatment Plan
  therapeuticGoals: '',
  modalities: '',
  sessionPlan: ''
};

export default function CaseHistory() {
  const [formData, setFormData] = useState(() => {
    const savedDraft = localStorage.getItem('psychobeings_case_history_draft');
    return savedDraft ? JSON.parse(savedDraft) : INITIAL_FORM_DATA;
  });

  const [saveStatus, setSaveStatus] = useState('saved'); // 'saved', 'saving', 'unsaved'
  const [lastSavedTime, setLastSavedTime] = useState(null);

  // Auto-Save Effect
  useEffect(() => {
    setSaveStatus('unsaved');
    const timer = setTimeout(() => {
      setSaveStatus('saving');
      localStorage.setItem('psychobeings_case_history_draft', JSON.stringify(formData));
      setTimeout(() => {
        setSaveStatus('saved');
        setLastSavedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleManualSave = () => {
    setSaveStatus('saving');
    localStorage.setItem('psychobeings_case_history_draft', JSON.stringify(formData));
    setTimeout(() => {
      setSaveStatus('saved');
      setLastSavedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 400);
  };

  const handleResetForm = () => {
    if (window.confirm('Are you sure you want to clear this entire intake form? Unsaved text will be erased.')) {
      setFormData(INITIAL_FORM_DATA);
      localStorage.removeItem('psychobeings_case_history_draft');
      setSaveStatus('saved');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16 font-sans text-stone-800">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 bg-[#F4F7F6]/90 backdrop-blur-md py-4 z-20 border-b border-stone-200/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#237A88]/10 text-[#237A88] text-xs font-semibold">
              <Sparkles size={13} />
              <span>Clinical Intake & Profiling</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">Clinical Case History</h1>
          <p className="text-xs text-stone-500">Structured assessment format for counselling psychology</p>
        </div>

        {/* Action Controls & Auto-Save Indicator */}
        <div className="flex items-center gap-3">
          <div className="text-xs text-stone-500 font-medium px-3 py-1.5 rounded-xl bg-white border border-stone-200/80 shadow-sm flex items-center gap-2">
            {saveStatus === 'saving' && (
              <>
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                <span>Auto-saving...</span>
              </>
            )}
            {saveStatus === 'unsaved' && (
              <>
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span>Unsaved changes</span>
              </>
            )}
            {saveStatus === 'saved' && (
              <>
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Draft Saved {lastSavedTime ? `at ${lastSavedTime}` : ''}</span>
              </>
            )}
          </div>

          <button
            onClick={handleResetForm}
            className="p-2.5 text-stone-500 hover:text-rose-600 hover:bg-rose-50 border border-stone-200 rounded-2xl transition-colors shadow-sm"
            title="Reset Form"
          >
            <RotateCcw size={16} />
          </button>

          <button
            onClick={handleManualSave}
            className="flex items-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all shadow-md shadow-[#237A88]/20"
          >
            <Save size={15} />
            <span>Save Case Record</span>
          </button>
        </div>
      </div>

      {/* Form Grid Sections */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">

        {/* Section 1: Demographic & Identifying Data */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <User size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">1. Demographic & Identifying Data</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Client Name / ID</label>
              <input
                type="text"
                name="clientNameId"
                value={formData.clientNameId}
                onChange={handleChange}
                placeholder="Full name or confidential code..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Age & Gender</label>
              <input
                type="text"
                name="ageGender"
                value={formData.ageGender}
                onChange={handleChange}
                placeholder="e.g. 28, Female"
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Contact Information</label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="Phone, emergency contact, email..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Marital & Family Status</label>
              <input
                type="text"
                name="maritalFamilyStatus"
                value={formData.maritalFamilyStatus}
                onChange={handleChange}
                placeholder="Relationship status, living arrangements..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Education & Occupation</label>
              <input
                type="text"
                name="educationOccupation"
                value={formData.educationOccupation}
                onChange={handleChange}
                placeholder="Academic level, job role..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Referral Source</label>
              <input
                type="text"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                placeholder="Self, doctor, workplace counselor..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Chief Complaint & Presenting Problem */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <AlertCircle size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">2. Chief Complaint & Presenting Problem</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Core Issue (Client's Own Words)</label>
              <textarea
                name="coreIssue"
                rows={2}
                value={formData.coreIssue}
                onChange={handleChange}
                placeholder="Primary reason for seeking therapy..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Timeline</label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="Duration, onset date, frequency..."
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Precipitating Factors</label>
                <input
                  type="text"
                  name="precipitatingFactors"
                  value={formData.precipitatingFactors}
                  onChange={handleChange}
                  placeholder="Recent events, stressors, triggers..."
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: History of Presenting Illness (HPI) */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <Activity size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">3. History of Presenting Illness (HPI) / Problem History</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Symptom Profile</label>
              <textarea
                name="symptomProfile"
                rows={3}
                value={formData.symptomProfile}
                onChange={handleChange}
                placeholder="Emotional, cognitive, behavioral indicators..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Impact on Functioning</label>
              <textarea
                name="impactOnFunctioning"
                rows={3}
                value={formData.impactOnFunctioning}
                onChange={handleChange}
                placeholder="Effects on work, academics, family..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Previous Coping Mechanisms</label>
              <textarea
                name="previousCoping"
                rows={3}
                value={formData.previousCoping}
                onChange={handleChange}
                placeholder="Self-help, strategies tried, outcomes..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Biological Functions & Somatic History */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <Heart size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">4. Biological Functions & Somatic History</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Sleep Pattern</label>
              <textarea
                name="sleepPattern"
                rows={2}
                value={formData.sleepPattern}
                onChange={handleChange}
                placeholder="Initial/middle/terminal insomnia, hypersomnia, quality..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Appetite & Weight</label>
              <textarea
                name="appetiteWeight"
                rows={2}
                value={formData.appetiteWeight}
                onChange={handleChange}
                placeholder="Loss of appetite, emotional eating, weight changes..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Libido (Sexual Desire)</label>
              <textarea
                name="libido"
                rows={2}
                value={formData.libido}
                onChange={handleChange}
                placeholder="Changes in baseline, situational dysfunction..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Menstrual Cycle</label>
              <textarea
                name="menstrualCycle"
                rows={2}
                value={formData.menstrualCycle}
                onChange={handleChange}
                placeholder="Regularity, amenorrhea, PMDD, emotional shifts..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Personal History & Developmental Background */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <Brain size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">5. Personal History & Developmental Background</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Early Childhood</label>
              <textarea
                name="earlyChildhood"
                rows={2}
                value={formData.earlyChildhood}
                onChange={handleChange}
                placeholder="Milestones, complications, early temperament..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">School & Academic History</label>
              <textarea
                name="schoolAcademicHistory"
                rows={2}
                value={formData.schoolAcademicHistory}
                onChange={handleChange}
                placeholder="Performance, peer relationships, bullying..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Employment History</label>
              <textarea
                name="employmentHistory"
                rows={2}
                value={formData.employmentHistory}
                onChange={handleChange}
                placeholder="Job stability, workplace stress, goals..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Romantic & Marital History</label>
              <textarea
                name="romanticMaritalHistory"
                rows={2}
                value={formData.romanticMaritalHistory}
                onChange={handleChange}
                placeholder="Past relationships, current dynamics..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

        {/* Section 6: Family & Psychosocial Dynamics */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <Users size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">6. Family & Psychosocial Dynamics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Family Structure</label>
              <textarea
                name="familyStructure"
                rows={2}
                value={formData.familyStructure}
                onChange={handleChange}
                placeholder="Parents, siblings, key caregivers..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Family Environment</label>
              <textarea
                name="familyEnvironment"
                rows={2}
                value={formData.familyEnvironment}
                onChange={handleChange}
                placeholder="Communication, conflicts, trauma..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Social Support</label>
              <textarea
                name="socialSupport"
                rows={2}
                value={formData.socialSupport}
                onChange={handleChange}
                placeholder="Friends, community, social life quality..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

        {/* Section 7: Medical, Psychiatric, & Substance History */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <ShieldAlert size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">7. Medical, Psychiatric, & Substance History</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Physical Health</label>
              <textarea
                name="physicalHealth"
                rows={2}
                value={formData.physicalHealth}
                onChange={handleChange}
                placeholder="Chronic conditions, illnesses, neuro..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Psychiatric History</label>
              <textarea
                name="psychiatricHistory"
                rows={2}
                value={formData.psychiatricHistory}
                onChange={handleChange}
                placeholder="Past diagnoses, therapy, hospitalizations..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Substance Use</label>
              <textarea
                name="substanceUse"
                rows={2}
                value={formData.substanceUse}
                onChange={handleChange}
                placeholder="Alcohol, nicotine, prescription, recreational..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

        {/* Section 8: Behavioral Observations & Mental Status Examination */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <Eye size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">8. Behavioral Observations & Mental Status Examination (MSE)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Appearance & Hygiene</label>
              <input
                type="text"
                name="appearanceHygiene"
                value={formData.appearanceHygiene}
                onChange={handleChange}
                placeholder="Neatness, grooming, posture..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Attitude & Rapport</label>
              <input
                type="text"
                name="attitudeRapport"
                value={formData.attitudeRapport}
                onChange={handleChange}
                placeholder="Cooperative, guarded, anxious..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Affect & Mood</label>
              <input
                type="text"
                name="affectMood"
                value={formData.affectMood}
                onChange={handleChange}
                placeholder="Depressed, anxious, flat, expansive..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Thought Content & Process</label>
              <input
                type="text"
                name="thoughtContentProcess"
                value={formData.thoughtContentProcess}
                onChange={handleChange}
                placeholder="Logical vs tangential, obsessions..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <label className="block text-xs font-bold text-stone-700 mb-1">Insight & Judgment</label>
              <input
                type="text"
                name="insightJudgment"
                value={formData.insightJudgment}
                onChange={handleChange}
                placeholder="Awareness level & decision-making capacity..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

        {/* Section 9: Diagnostic Impression & Formulations */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <FileSearch size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">9. Diagnostic Impression & Formulations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Provisional Diagnosis (DSM-5-TR / ICD-11)</label>
              <textarea
                name="provisionalDiagnosis"
                rows={3}
                value={formData.provisionalDiagnosis}
                onChange={handleChange}
                placeholder="Provisional diagnostic codes & clinical impressions..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Psychological Formulation (4 P's Framework)</label>
              <textarea
                name="psychologicalFormulation"
                rows={3}
                value={formData.psychologicalFormulation}
                onChange={handleChange}
                placeholder="Predisposing, precipitating, perpetuating, and protective factors..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

        {/* Section 10: Counselling & Treatment Plan */}
        <section className="bg-white p-6 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3 text-[#237A88]">
            <Stethoscope size={18} />
            <h2 className="text-sm font-bold tracking-tight text-stone-900">10. Counselling & Treatment Plan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Therapeutic Goals (SMART)</label>
              <textarea
                name="therapeuticGoals"
                rows={3}
                value={formData.therapeuticGoals}
                onChange={handleChange}
                placeholder="Short-term & long-term measurable goals..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Modalities</label>
              <textarea
                name="modalities"
                rows={3}
                value={formData.modalities}
                onChange={handleChange}
                placeholder="CBT, ACT, Narrative Therapy, Psychodynamic..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Session Plan</label>
              <textarea
                name="sessionPlan"
                rows={3}
                value={formData.sessionPlan}
                onChange={handleChange}
                placeholder="Recommended frequency & proposed reassessment schedule..."
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50/70 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
              />
            </div>
          </div>
        </section>

      </form>
    </div>
  );
}