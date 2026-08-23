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
} from 'lucide-react';

const assessments = [
  { id: 'gad7', name: 'GAD-7', description: 'Anxiety symptoms', questions: 7, color: 'bg-amber-100 text-amber-800' },
  { id: 'phq9', name: 'PHQ-9', description: 'Depression symptoms', questions: 9, color: 'bg-rose-100 text-rose-800' },
  { id: 'rosenberg', name: 'Rosenberg', description: 'Self-esteem scale', questions: 10, color: 'bg-sky-100 text-sky-800' },
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
    <div className="min-h-screen bg-[#f5f7f4] text-slate-900">
      <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123b3b] text-teal-100"><ShieldCheck size={21} /></div>
          <div><p className="text-lg font-bold tracking-tight text-slate-950">Psychobeings</p><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Screening portal</p></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-500 sm:block">Private clinician workspace</span>
          <button onClick={onLogout} title="Sign out" className="hidden rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 sm:block"><LogOut size={19} /></button>
          <button onClick={() => setMobileNavOpen((current) => !current)} className="rounded-lg p-2 text-slate-500 sm:hidden"><Menu size={21} /></button>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px]">
        <aside className={`${mobileNavOpen ? 'block' : 'hidden'} absolute z-10 w-full border-b border-slate-200 bg-white p-4 sm:relative sm:block sm:min-h-[calc(100vh-5rem)] sm:w-64 sm:border-b-0 sm:border-r sm:p-6`}>
          <nav className="space-y-2">
            <p className="mb-4 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Workspace</p>
            <button onClick={() => { setView('invite'); setMobileNavOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold ${view === 'invite' ? 'bg-[#e3f1ed] text-[#145c58]' : 'text-slate-500 hover:bg-slate-50'}`}><UserPlus size={18} /> Invite a client</button>
            <button onClick={() => { setView('reports'); setMobileNavOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold ${view === 'reports' ? 'bg-[#e3f1ed] text-[#145c58]' : 'text-slate-500 hover:bg-slate-50'}`}><BarChart3 size={18} /> Assessment reports <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">2</span></button>
          </nav>
          <div className="mt-10 rounded-2xl bg-[#123b3b] p-5 text-white"><ShieldCheck size={21} className="mb-5 text-amber-200" /><p className="text-sm font-bold">A thoughtful first step</p><p className="mt-2 text-xs leading-5 text-teal-50/70">Screenings support a conversation. They do not replace clinical judgement or diagnosis.</p></div>
          <button onClick={onLogout} className="mt-8 flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-400 hover:text-slate-900 sm:hidden"><LogOut size={18} /> Sign out</button>
        </aside>

        <main className="w-full px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          {view === 'invite' ? (
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 max-w-2xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">New invitation</p><h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Begin with a clearer picture.</h1><p className="mt-4 text-base leading-7 text-slate-500">Send a private pre-screening bundle before your client’s first conversation.</p></div>
              <form onSubmit={sendInvite} className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><div className="mb-8 flex items-start justify-between"><div><h2 className="text-lg font-bold">Client details</h2><p className="mt-1 text-sm text-slate-500">The invitation will open in your email client.</p></div><div className="rounded-xl bg-teal-50 p-3 text-teal-700"><Mail size={20} /></div></div><div className="space-y-5"><label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Client name <span className="font-normal text-slate-400">(optional)</span></span><input value={client.name} onChange={(event) => setClient({ ...client, name: event.target.value })} placeholder="e.g. Aanya Kapoor" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10" /></label><label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Client email</span><input type="email" required value={client.email} onChange={(event) => setClient({ ...client, email: event.target.value })} placeholder="client@email.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10" /></label></div></section>
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><div className="mb-6 flex items-start justify-between"><div><h2 className="text-lg font-bold">Choose screenings</h2><p className="mt-1 text-sm text-slate-500">Select what you want to understand.</p></div><ClipboardCheck className="text-teal-700" size={21} /></div><div className="space-y-3">{assessments.map((assessment) => <button type="button" key={assessment.id} onClick={() => toggleAssessment(assessment.id)} className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${selected.includes(assessment.id) ? 'border-teal-300 bg-teal-50/60' : 'border-slate-200 hover:border-slate-300'}`}><span className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold ${assessment.color}`}>{assessment.name === 'Rosenberg' ? 'RS' : assessment.name}</span><span className="flex-1"><span className="block text-sm font-bold">{assessment.name}</span><span className="block text-xs text-slate-500">{assessment.description} · {assessment.questions} questions</span></span><span className={`flex h-5 w-5 items-center justify-center rounded-md border ${selected.includes(assessment.id) ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300 text-transparent'}`}><Check size={13} /></span></button>)}</div><button type="submit" disabled={!client.email || selected.length === 0} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-40"><Send size={17} /> Create email invitation</button>{sent && <p className="mt-4 text-center text-sm font-semibold text-teal-700">Invitation prepared in your email client.</p>}</section>
              </form>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><ShieldCheck className="mt-0.5 shrink-0" size={18} /><p>Responses are intended for clinical discussion and should be interpreted alongside your professional assessment.</p></div>
            </div>
          ) : (
            <div className="mx-auto max-w-6xl"><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Review queue</p><h1 className="text-4xl font-bold tracking-tight text-slate-950">Assessment reports</h1><p className="mt-3 text-base text-slate-500">Review results before deciding what your client receives.</p></div><div className="relative"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search clients" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-teal-500 sm:w-64" /></div></div><div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]"><section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><p className="text-sm font-bold">Completed screenings <span className="ml-1 text-slate-400">{filteredReports.length}</span></p><SlidersHorizontal size={17} className="text-slate-400" /></div><div className="divide-y divide-slate-100">{filteredReports.map((report) => <button key={report.id} onClick={() => setSelectedReport(report)} className={`flex w-full items-center gap-4 px-5 py-5 text-left transition hover:bg-slate-50 ${selectedReport.id === report.id ? 'bg-teal-50/50' : ''}`}><div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">{report.name.split(' ').map((part) => part[0]).join('')}</div><span className="min-w-0 flex-1"><span className="block truncate text-sm font-bold">{report.name}</span><span className="mt-1 block truncate text-xs text-slate-400">{report.email} · {report.completed}</span></span><span className={`hidden rounded-full px-2.5 py-1 text-[11px] font-bold sm:block ${report.status === 'Review needed' ? 'bg-amber-100 text-amber-800' : report.status === 'Shared' ? 'bg-slate-100 text-slate-500' : 'bg-teal-100 text-teal-800'}`}>{report.status}</span><ArrowUpRight size={17} className="text-slate-300" /></button>)}</div></section><section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Report overview</p><h2 className="mt-2 text-2xl font-bold">{selectedReport.name}</h2><p className="mt-1 text-sm text-slate-500">{selectedReport.email}</p></div><FileText className="text-teal-700" size={21} /></div><div className="mt-8 space-y-3">{assessments.map((assessment) => <div key={assessment.id} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-4"><span><span className="block text-sm font-bold">{assessment.name}</span><span className="block text-xs text-slate-400">{assessment.description}</span></span><span className={`rounded-full px-3 py-1 text-xs font-bold ${selectedReport.scores[assessment.id] === 'Severe' || selectedReport.scores[assessment.id] === 'Moderate' || selectedReport.scores[assessment.id] === 'Low' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}`}>{selectedReport.scores[assessment.id]}</span></div>)}</div><div className="mt-8 border-t border-slate-100 pt-6"><p className="mb-3 text-sm font-bold">Sharing decision</p><div className="grid grid-cols-2 gap-3"><button onClick={() => markReport('Ready to share')} className={`rounded-xl border py-3 text-sm font-bold transition ${selectedReport.status === 'Ready to share' ? 'border-teal-500 bg-teal-50 text-teal-800' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}>Keep for review</button><button onClick={shareReport} className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-bold text-white transition hover:bg-teal-700"><Mail size={16} /> Share report</button></div><p className="mt-4 text-xs leading-5 text-slate-400">Sharing opens a prepared email. Add your clinical context before sending.</p></div></section></div></div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Portal;
