import React, { useState } from 'react';
import {
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Filter,
  LogOut,
  Mail,
  Menu,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  UserPlus,
} from 'lucide-react';

const assessments = [
  { id: 'gad7', name: 'GAD-7', description: 'Anxiety Scale', questions: 7, badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/80' },
  { id: 'phq9', name: 'PHQ-9', description: 'Depression Index', questions: 9, badgeColor: 'bg-rose-50 text-rose-700 border-rose-200/80' },
  { id: 'rosenberg', name: 'Rosenberg', description: 'Self-Esteem Scale', questions: 10, badgeColor: 'bg-sky-50 text-sky-700 border-sky-200/80' },
];

const initialReports = [
  { id: 1, name: 'Aarav Mehta', email: 'aarav.mehta@email.com', completed: 'Today, 10:42 AM', status: 'Review needed', scores: { gad7: 'Moderate', phq9: 'Mild', rosenberg: 'High' } },
  { id: 2, name: 'Maya Singh', email: 'maya.singh@email.com', completed: 'Yesterday, 4:18 PM', status: 'Ready to share', scores: { gad7: 'Minimal', phq9: 'Minimal', rosenberg: 'High' } },
  { id: 3, name: 'Kabir Rao', email: 'kabir.rao@email.com', completed: '18 Aug 2026', status: 'Shared', scores: { gad7: 'Severe', phq9: 'Moderate', rosenberg: 'Low' } },
];

const AssessmentPortal = ({ onLogout }) => {
  const [view, setView] = useState('reports'); // Default to clinical queue
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [client, setClient] = useState({ name: '', email: '' });
  const [selected, setSelected] = useState(['gad7', 'phq9', 'rosenberg']);
  const [sent, setSent] = useState(false);
  const [reports, setReports] = useState(initialReports);
  const [selectedReport, setSelectedReport] = useState(initialReports[0]);
  const [search, setSearch] = useState('');

  const toggleAssessment = (id) => {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const sendInvite = (event) => {
    event.preventDefault();
    if (!client.email || selected.length === 0) return;
    const selectedNames = assessments.filter((a) => selected.includes(a.id)).map((a) => a.name).join(', ');
    const subject = encodeURIComponent('Your Psychobeings pre-screening assessment');
    const body = encodeURIComponent(`Hello ${client.name || 'there'},\n\nPlease complete your Psychobeings pre-screening assessment: ${selectedNames}.\n\nYour responses will be reviewed privately by your care team.\n\nWarmly,\nPsychobeings`);
    window.location.href = `mailto:${client.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const markReport = (status) => {
    const nextStatus = status === 'Ready to share' ? 'Review needed' : status;
    setReports((current) => current.map((report) => report.id === selectedReport.id ? { ...report, status: nextStatus } : report));
    setSelectedReport((current) => ({ ...current, status: nextStatus }));
  };

  const shareReport = () => {
    const body = encodeURIComponent(`Hello ${selectedReport.name},\n\nYour pre-screening assessment report is ready to discuss with your Psychobeings practitioner.\n\nThis report is not a diagnosis. Your practitioner will help you understand the results during your session.\n\nWarmly,\nPsychobeings`);
    window.location.href = `mailto:${selectedReport.email}?subject=Your Psychobeings assessment report&body=${body}`;
    markReport('Shared');
  };

  const filteredReports = reports.filter((report) => 
    report.name.toLowerCase().includes(search.toLowerCase()) || 
    report.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full bg-slate-100 text-slate-900 font-sans overflow-hidden antialiased">
      
      {/* 1. Left Navigation Bar */}
      <aside className={`${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-[#0b2222] text-white transition-transform duration-300 md:static md:translate-x-0`}>
        {/* Brand Bar */}
        <div className="flex h-16 items-center gap-3 border-b border-teal-900/40 px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="block text-sm font-bold tracking-tight text-white">Psychobeings</span>
            <span className="block text-[10px] uppercase font-bold tracking-widest text-teal-400">Clinical Suite</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4">
          <button 
            onClick={() => { setView('invite'); setMobileNavOpen(false); }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-teal-900/40 transition hover:bg-teal-500 active:scale-95"
          >
            <Plus size={16} /> Invite Patient
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3">
          <button 
            onClick={() => { setView('reports'); setMobileNavOpen(false); }} 
            className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-xs font-semibold transition ${view === 'reports' ? 'bg-teal-950/80 text-teal-200 border border-teal-800/40' : 'text-teal-100/60 hover:bg-teal-900/30 hover:text-white'}`}
          >
            <BarChart3 size={16} /> Patient Queue 
            <span className="ml-auto rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">2</span>
          </button>
          
          <button 
            onClick={() => { setView('invite'); setMobileNavOpen(false); }} 
            className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-xs font-semibold transition ${view === 'invite' ? 'bg-teal-950/80 text-teal-200 border border-teal-800/40' : 'text-teal-100/60 hover:bg-teal-900/30 hover:text-white'}`}
          >
            <UserPlus size={16} /> Send Assessment
          </button>
        </nav>

        {/* Bottom User Info */}
        <div className="border-t border-teal-900/40 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-800/60 text-xs font-bold text-teal-200">
              DR
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-xs font-semibold text-white">Practitioner Workspace</p>
              <p className="truncate text-[10px] text-teal-200/50">Clinician ID: #84920</p>
            </div>
            <button onClick={onLogout} title="Log Out" className="text-teal-200/50 hover:text-white transition">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="text-slate-500 md:hidden">
              <Menu size={20} />
            </button>
            <h1 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              {view === 'reports' ? 'Screening Queue' : 'New Screening Invitation'}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-medium text-slate-600">HIPAA Compliant Session</span>
          </div>
        </header>

        {/* View Switcher */}
        {view === 'reports' ? (
          /* Split View: Patient Queue Panel + Inspection Detail Panel */
          <div className="flex flex-1 overflow-hidden">
            
            {/* Middle Panel: Filterable List */}
            <section className="flex w-full flex-col border-r border-slate-200 bg-white md:w-80 lg:w-96">
              {/* Search & Filter Controls */}
              <div className="p-4 border-b border-slate-100 space-y-3">
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder="Search patients..." 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs font-medium outline-none transition focus:border-teal-600 focus:bg-white" 
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                  <span>{filteredReports.length} Records</span>
                  <button className="flex items-center gap-1 hover:text-slate-900"><Filter size={12} /> Filter</button>
                </div>
              </div>

              {/* Patient List */}
              <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                {filteredReports.map((report) => (
                  <div
                    key={report.id}
                    onClick={() => setSelectedReport(report)}
                    className={`flex cursor-pointer items-start gap-3 p-4 transition ${selectedReport.id === report.id ? 'bg-teal-50/50 border-l-4 border-teal-700' : 'hover:bg-slate-50'}`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                      {report.name.split(' ').map((p) => p[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-xs font-bold text-slate-900">{report.name}</p>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          report.status === 'Review needed' ? 'bg-amber-100 text-amber-800' : 
                          report.status === 'Shared' ? 'bg-slate-100 text-slate-600' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="truncate text-[11px] text-slate-400 mt-0.5">{report.completed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Right Panel: Detailed Dossier Inspector */}
            <section className="hidden flex-1 overflow-y-auto bg-slate-50 p-6 md:block lg:p-10">
              <div className="mx-auto max-w-2xl space-y-6">
                
                {/* Dossier Header */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Selected Dossier</span>
                      <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedReport.name}</h2>
                      <p className="text-xs text-slate-500">{selectedReport.email}</p>
                    </div>
                    <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                      <FileText size={20} />
                    </div>
                  </div>
                </div>

                {/* Score Cards Grid */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Screening Battery Results</h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {assessments.map((assessment) => (
                      <div key={assessment.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-800">{assessment.name}</span>
                          <span className="text-[10px] text-slate-400">{assessment.questions} Qs</span>
                        </div>
                        <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-bold ${
                          selectedReport.scores[assessment.id] === 'Severe' || selectedReport.scores[assessment.id] === 'Moderate' || selectedReport.scores[assessment.id] === 'Low'
                            ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'
                        }`}>
                          {selectedReport.scores[assessment.id]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decision Banner */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Clinical Workflow Actions</h3>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => markReport('Ready to share')} 
                      className={`flex-1 rounded-xl border py-3 text-xs font-bold transition ${selectedReport.status === 'Ready to share' ? 'border-teal-600 bg-teal-50 text-teal-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      Keep for Review
                    </button>
                    <button 
                      onClick={shareReport} 
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow transition hover:bg-teal-800"
                    >
                      <Mail size={14} /> Share Report
                    </button>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-400">
                    Sharing opens an email draft containing structured results for client review.
                  </p>
                </div>

              </div>
            </section>
          </div>
        ) : (
          /* Single Column Focused Layout: Form for Invitation */
          <div className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Configure Screening Invitation</h2>
                <p className="mt-1 text-xs text-slate-500">Select diagnostic assessments to send to your client prior to their next session.</p>
              </div>

              <form onSubmit={sendInvite} className="space-y-6">
                
                {/* Step 1: Patient Data */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">1. Patient Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                      <input 
                        value={client.name} 
                        onChange={(e) => setClient({ ...client, name: e.target.value })}
                        placeholder="e.g. Jane Doe" 
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-teal-600 focus:bg-white" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={client.email} 
                        onChange={(e) => setClient({ ...client, email: e.target.value })}
                        placeholder="jane@example.com" 
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-teal-600 focus:bg-white" 
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Diagnostic Batteries */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">2. Select Batteries</h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {assessments.map((assessment) => (
                      <div 
                        key={assessment.id} 
                        onClick={() => toggleAssessment(assessment.id)}
                        className={`cursor-pointer rounded-xl border p-4 text-left transition ${selected.includes(assessment.id) ? 'border-teal-600 bg-teal-50/40' : 'border-slate-200 hover:border-slate-300'}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${assessment.badgeColor}`}>
                            {assessment.name}
                          </span>
                          <span className={`flex h-4 w-4 items-center justify-center rounded border ${selected.includes(assessment.id) ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'}`}>
                            <Check size={10} />
                          </span>
                        </div>
                        <p className="text-xs font-bold text-slate-900">{assessment.description}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{assessment.questions} Questions</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={!client.email || selected.length === 0}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-xs font-bold text-white shadow transition hover:bg-teal-800 disabled:opacity-40"
                >
                  <Send size={15} /> Generate Mail Draft
                </button>

                {sent && (
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-teal-50 border border-teal-200 p-3 text-xs font-bold text-teal-800">
                    <CheckCircle2 size={16} className="text-teal-600" /> Invitation prepared in email app.
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default AssessmentPortal;