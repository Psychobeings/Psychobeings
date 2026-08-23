import React, { useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ClipboardCheck,
  FileText,
  LogOut,
  Mail,
  Menu,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  UserPlus,
  Sparkles,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const assessments = [
  { id: 'gad7', name: 'GAD-7', description: 'Anxiety symptoms', questions: 7, color: 'bg-amber-500/10 text-amber-700 border-amber-200' },
  { id: 'phq9', name: 'PHQ-9', description: 'Depression symptoms', questions: 9, color: 'bg-rose-500/10 text-rose-700 border-rose-200' },
  { id: 'rosenberg', name: 'Rosenberg', description: 'Self-esteem scale', questions: 10, color: 'bg-sky-500/10 text-sky-700 border-sky-200' },
];

const initialReports = [
  { id: 1, name: 'Aarav Mehta', email: 'aarav.mehta@email.com', completed: 'Today, 10:42 AM', status: 'Review needed', scores: { gad7: 'Moderate', phq9: 'Mild', rosenberg: 'High' } },
  { id: 2, name: 'Maya Singh', email: 'maya.singh@email.com', completed: 'Yesterday, 4:18 PM', status: 'Ready to share', scores: { gad7: 'Minimal', phq9: 'Minimal', rosenberg: 'High' } },
  { id: 3, name: 'Kabir Rao', email: 'kabir.rao@email.com', completed: '18 Aug 2026', status: 'Shared', scores: { gad7: 'Severe', phq9: 'Moderate', rosenberg: 'Low' } },
];

const Portal = ({ onLogout }) => {
  const [view, setView] = useState('invite');
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
    const selectedNames = assessments.filter((assessment) => selected.includes(assessment.id)).map((assessment) => assessment.name).join(', ');
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

  const filteredReports = reports.filter((report) => report.name.toLowerCase().includes(search.toLowerCase()) || report.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-900 font-sans antialiased">
      {/* Header Bar */}
      <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/80 px-6 backdrop-blur-md sm:px-8 lg:px-12">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e2a2a] to-[#123b3b] text-teal-200 shadow-md shadow-teal-900/10">
            <ShieldCheck size={22} />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-950">Psychobeings</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">Screening Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-xs font-semibold text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200/60 sm:block">
            Private Clinician Workspace
          </span>
          <button 
            onClick={onLogout} 
            title="Sign out" 
            className="hidden rounded-xl border border-slate-200/80 p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 active:scale-95 sm:block"
          >
            <LogOut size={18} />
          </button>
          <button onClick={() => setMobileNavOpen((current) => !current)} className="rounded-xl border border-slate-200 p-2.5 text-slate-600 sm:hidden">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px]">
        {/* Sidebar */}
        <aside className={`${mobileNavOpen ? 'block' : 'hidden'} absolute z-10 w-full border-b border-slate-200 bg-white p-4 sm:relative sm:block sm:min-h-[calc(100vh-5rem)] sm:w-72 sm:border-b-0 sm:border-r sm:border-slate-200/80 sm:bg-white/50 sm:p-6 backdrop-blur-sm`}>
          <nav className="space-y-1.5">
            <p className="mb-4 px-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-slate-500">Workspace</p>
            <button 
              onClick={() => { setView('invite'); setMobileNavOpen(false); }} 
              className={`flex w-full items-center gap-3.5 rounded-2xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-200 ${view === 'invite' ? 'bg-[#0e2a2a] text-white shadow-lg shadow-teal-900/10' : 'text-slate-600 hover:bg-slate-100/80'}`}
            >
              <UserPlus size={18} className={view === 'invite' ? 'text-teal-300' : 'text-slate-400'} /> Invite a Client
            </button>
            <button 
              onClick={() => { setView('reports'); setMobileNavOpen(false); }} 
              className={`flex w-full items-center gap-3.5 rounded-2xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-200 ${view === 'reports' ? 'bg-[#0e2a2a] text-white shadow-lg shadow-teal-900/10' : 'text-slate-600 hover:bg-slate-100/80'}`}
            >
              <BarChart3 size={18} className={view === 'reports' ? 'text-teal-300' : 'text-slate-400'} /> 
              <span>Assessment Reports</span>
              <span className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-bold ${view === 'reports' ? 'bg-teal-500/20 text-teal-200' : 'bg-amber-100 text-amber-800'}`}>2</span>
            </button>
          </nav>

          <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#0e2a2a] to-[#123b3b] p-6 text-white shadow-xl shadow-teal-950/10 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[20px] border-emerald-500/10" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-teal-500/20 p-2 text-teal-300">
                <Sparkles size={18} />
              </div>
              <p className="text-sm font-bold text-white">Thoughtful Diagnostics</p>
              <p className="mt-2 text-xs leading-5 text-teal-100/70">Screening scales facilitate insight. They support—rather than replace—clinical judgements.</p>
            </div>
          </div>

          <button onClick={onLogout} className="mt-8 flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-900 sm:hidden">
            <LogOut size={18} /> Sign Out
          </button>
        </aside>

        {/* Main Content Area */}
        <main className="w-full px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
          {view === 'invite' ? (
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 max-w-2xl">
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-700">New Invitation</span>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Begin with clarity.</h1>
                <p className="mt-3 text-base text-slate-500 leading-relaxed">Dispatch a custom assessment bundle prior to your client's initial consultation.</p>
              </div>

              <form onSubmit={sendInvite} className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                {/* Client Details Section */}
                <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all sm:p-8 hover:shadow-md">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">Client Information</h2>
                      <p className="mt-1 text-xs text-slate-500">Drafts an email invitation directly in your default mail app.</p>
                    </div>
                    <div className="rounded-2xl bg-teal-50/80 p-3 text-teal-700 border border-teal-100">
                      <Mail size={20} />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Client Name <span className="font-normal text-slate-400">(optional)</span>
                      </label>
                      <input 
                        value={client.name} 
                        onChange={(event) => setClient({ ...client, name: event.target.value })} 
                        placeholder="e.g. Aanya Kapoor" 
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10" 
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">Client Email</label>
                      <input 
                        type="email" 
                        required 
                        value={client.email} 
                        onChange={(event) => setClient({ ...client, email: event.target.value })} 
                        placeholder="client@domain.com" 
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10" 
                      />
                    </div>
                  </div>
                </section>

                {/* Screening Bundle Selection */}
                <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all sm:p-8 hover:shadow-md">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">Select Batteries</h2>
                      <p className="mt-1 text-xs text-slate-500">Choose scales to include in the bundle.</p>
                    </div>
                    <div className="rounded-2xl bg-teal-50/80 p-3 text-teal-700 border border-teal-100">
                      <ClipboardCheck size={20} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {assessments.map((assessment) => (
                      <button 
                        type="button" 
                        key={assessment.id} 
                        onClick={() => toggleAssessment(assessment.id)} 
                        className={`group flex w-full items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 ${selected.includes(assessment.id) ? 'border-teal-600 bg-teal-50/40 ring-1 ring-teal-600/30' : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'}`}
                      >
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold border ${assessment.color}`}>
                          {assessment.name === 'Rosenberg' ? 'RS' : assessment.name}
                        </span>
                        <span className="flex-1">
                          <span className="block text-sm font-bold text-slate-900">{assessment.name}</span>
                          <span className="block text-xs text-slate-500">{assessment.description} · {assessment.questions} Qs</span>
                        </span>
                        <span className={`flex h-6 w-6 items-center justify-center rounded-lg border transition-colors ${selected.includes(assessment.id) ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300 text-transparent'}`}>
                          <Check size={14} />
                        </span>
                      </button>
                    ))}
                  </div>

                  <button 
                    type="submit" 
                    disabled={!client.email || selected.length === 0} 
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all hover:bg-teal-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Send size={16} /> Prepare Email Invitation
                  </button>

                  {sent && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 py-2.5 rounded-xl border border-teal-200">
                      <CheckCircle2 size={16} className="text-teal-600" />
                      <span>Invitation loaded into email app</span>
                    </div>
                  )}
                </section>
              </form>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/60 p-4 text-xs leading-relaxed text-amber-900">
                <ShieldCheck className="mt-0.5 shrink-0 text-amber-700" size={18} />
                <p>Calculated screening scores are designed to guide preliminary discussions and should always be paired with standard clinical diagnostics.</p>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Review Queue</span>
                  <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Assessment Reports</h1>
                  <p className="mt-2 text-sm text-slate-500">Review and curate screening outcome summaries prior to sharing with patients.</p>
                </div>

                <div className="relative">
                  <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    value={search} 
                    onChange={(event) => setSearch(event.target.value)} 
                    placeholder="Search by name or email..." 
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-xs font-medium outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 sm:w-72" 
                  />
                </div>
              </div>

              <div className="grid gap-8 xl:grid-cols-[1fr_0.85fr]">
                {/* Reports List */}
                <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Completed Assessments <span className="ml-2 rounded-full bg-slate-200/60 px-2 py-0.5 text-slate-700">{filteredReports.length}</span>
                    </p>
                    <SlidersHorizontal size={16} className="text-slate-400" />
                  </div>

                  <div className="divide-y divide-slate-100">
                    {filteredReports.map((report) => (
                      <button 
                        key={report.id} 
                        onClick={() => setSelectedReport(report)} 
                        className={`group flex w-full items-center gap-4 px-6 py-4.5 text-left transition-all duration-200 hover:bg-slate-50/80 ${selectedReport.id === report.id ? 'bg-teal-50/40 border-l-4 border-teal-700' : ''}`}
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-sm font-bold text-slate-700">
                          {report.name.split(' ').map((part) => part[0]).join('')}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-slate-900">{report.name}</p>
                          <p className="mt-0.5 truncate text-xs text-slate-500">{report.email} • {report.completed}</p>
                        </div>

                        <span className={`hidden rounded-full px-3 py-1 text-[11px] font-bold sm:block ${
                          report.status === 'Review needed' ? 'bg-amber-100/80 text-amber-800' : 
                          report.status === 'Shared' ? 'bg-slate-100 text-slate-600' : 
                          'bg-emerald-100/80 text-emerald-800'
                        }`}>
                          {report.status}
                        </span>

                        <ChevronRight size={18} className="text-slate-300 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </section>

                {/* Report Detail Inspector */}
                <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Selected Dossier</span>
                      <h2 className="mt-1 text-2xl font-bold text-slate-950">{selectedReport.name}</h2>
                      <p className="text-xs text-slate-500">{selectedReport.email}</p>
                    </div>
                    <div className="rounded-2xl bg-teal-50 p-3 text-teal-700">
                      <FileText size={22} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Scale Summary</p>
                    {assessments.map((assessment) => (
                      <div key={assessment.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 px-4 py-3.5">
                        <div>
                          <p className="text-sm font-bold text-slate-900">{assessment.name}</p>
                          <p className="text-xs text-slate-500">{assessment.description}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                          selectedReport.scores[assessment.id] === 'Severe' || selectedReport.scores[assessment.id] === 'Moderate' || selectedReport.scores[assessment.id] === 'Low'
                            ? 'bg-amber-100 text-amber-900' 
                            : 'bg-emerald-100 text-emerald-900'
                        }`}>
                          {selectedReport.scores[assessment.id]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Sharing Decision</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => markReport('Ready to share')} 
                        className={`rounded-2xl border py-3 text-xs font-bold transition-all ${
                          selectedReport.status === 'Ready to share' 
                            ? 'border-teal-600 bg-teal-50 text-teal-800' 
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        Keep for Review
                      </button>
                      <button 
                        onClick={shareReport} 
                        className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-teal-800 active:scale-[0.99]"
                      >
                        <Mail size={15} /> Share Report
                      </button>
                    </div>
                    <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                      Sharing prepares an outbound message. You can append clinical observations before dispatching.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Portal;