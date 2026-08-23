import React, { useState } from 'react';
import {
  ArrowUpRight,
  Bell,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  UserRound,
  Users,
} from 'lucide-react';

const appointments = [
  { time: '10:00 AM', name: 'Aarav Mehta', type: 'Individual therapy', mode: 'Video', tone: 'bg-[#f3e8f9] text-[#7c24a6]' },
  { time: '12:30 PM', name: 'Maya Singh', type: 'Initial consultation', mode: 'Video', tone: 'bg-[#e8f3f2] text-[#28746d]' },
  { time: '04:00 PM', name: 'Kabir Rao', type: 'Follow-up session', mode: 'In person', tone: 'bg-[#fff4df] text-[#a46814]' },
];

const followUps = [
  { initials: 'DR', name: 'Deepanshu Rawat', note: 'No session in 57 days', priority: 'High', color: 'bg-rose-100 text-rose-700' },
  { initials: 'DG', name: 'Diya Ghosh', note: 'Check-in due today', priority: 'Today', color: 'bg-amber-100 text-amber-700' },
  { initials: 'GS', name: 'Garima Sharma', note: 'Assessment report ready', priority: 'Review', color: 'bg-purple-100 text-[#7c24a6]' },
];

const DashboardView = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [completed, setCompleted] = useState([]);
  const filteredAppointments = appointments.filter((appointment) => appointment.name.toLowerCase().includes(query.toLowerCase()));
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">{today}</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-[#3b1254]">Good morning, Amanpreet.</h1>
          <p className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-500"><Sparkles size={14} className="text-[#7c24a6]" /> Here is your practice at a glance.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onNavigate('clients')} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-purple-300 hover:text-[#7c24a6]"><UserRound size={15} /> Add client</button>
          <button onClick={() => onNavigate('schedule')} className="flex items-center gap-2 rounded-xl bg-[#7c24a6] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#681d8c]"><Plus size={15} /> New appointment</button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric icon={Users} label="Active clients" value="24" detail="+3 this month" accent="text-[#7c24a6]" />
        <Metric icon={Calendar} label="Today’s sessions" value="3" detail="1 remaining" accent="text-[#28746d]" />
        <Metric icon={FileText} label="Reports to review" value="2" detail="Needs your attention" accent="text-[#a46814]" />
        <Metric icon={MessageCircle} label="Follow-ups due" value="5" detail="2 due today" accent="text-rose-600" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Practice rhythm</p><h2 className="mt-2 text-xl font-bold text-slate-950">Today’s agenda</h2></div><button onClick={() => onNavigate('schedule')} className="flex items-center gap-1 text-xs font-bold text-[#7c24a6] hover:text-[#681d8c]">Open schedule <ArrowUpRight size={14} /></button></div>
          <div className="relative mt-7 space-y-3 before:absolute before:bottom-4 before:left-[43px] before:top-4 before:w-px before:bg-slate-200">{filteredAppointments.map((appointment) => <div key={appointment.name} className="relative flex items-center gap-4 rounded-2xl p-3 transition hover:bg-slate-50"><div className="w-14 shrink-0 text-right text-[11px] font-bold text-slate-500">{appointment.time}</div><div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#7c24a6] shadow-sm" /><div className="flex min-w-0 flex-1 items-center justify-between gap-3"><div className="min-w-0"><p className="truncate text-sm font-bold text-slate-900">{appointment.name}</p><p className="mt-1 truncate text-xs text-slate-400">{appointment.type}</p></div><div className="hidden items-center gap-2 sm:flex"><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${appointment.tone}`}>{appointment.mode}</span><button title="More appointment options" className="text-slate-300 hover:text-slate-700"><MoreHorizontal size={16} /></button></div></div></div>)}</div>
        </section>

        <section className="rounded-3xl bg-[#3b1254] p-6 text-white shadow-sm sm:p-7"><div className="flex items-center justify-between"><div className="rounded-xl bg-white/10 p-2.5 text-purple-100"><Clock3 size={19} /></div><span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold text-emerald-200">On track</span></div><p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-200">This month</p><h2 className="mt-3 text-3xl font-black">₹48,600</h2><p className="mt-2 text-xs text-purple-100/65">Collected across 31 completed sessions</p><div className="mt-8 h-2 rounded-full bg-white/10"><div className="h-2 w-3/4 rounded-full bg-[#d7a8e9]" /></div><div className="mt-3 flex justify-between text-[10px] font-semibold text-purple-100/60"><span>₹48.6k collected</span><span>₹64k goal</span></div><button onClick={() => onNavigate('billing')} className="mt-8 flex items-center gap-1 text-xs font-bold text-white hover:text-purple-200">View billing overview <ChevronRight size={14} /></button></section>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Care continuity</p><h2 className="mt-2 text-lg font-bold">Follow-ups needing care</h2></div><button onClick={() => onNavigate('followups')} className="text-xs font-bold text-[#7c24a6]">See all</button></div><div className="mt-5 space-y-2">{followUps.map((client) => <div key={client.name} className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-slate-50"><div className={`flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-extrabold ${client.color}`}>{client.initials}</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold text-slate-800">{client.name}</p><p className="mt-1 truncate text-[11px] text-slate-400">{client.note}</p></div><span className={`rounded-full px-2 py-1 text-[10px] font-bold ${client.color}`}>{client.priority}</span><button onClick={() => setCompleted((current) => [...current, client.name])} title="Mark follow-up complete" className={`rounded-lg p-1.5 ${completed.includes(client.name) ? 'bg-emerald-100 text-emerald-700' : 'text-slate-300 hover:bg-slate-100 hover:text-slate-700'}`}><CheckCircle2 size={17} /></button></div>)}</div></section>
        <section className="rounded-3xl border border-purple-100 bg-purple-50/60 p-6 shadow-sm sm:p-7"><div className="flex items-center gap-2"><Bell size={16} className="text-[#7c24a6]" /><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7c24a6]">Smart suggestions</p></div><h2 className="mt-3 text-lg font-bold text-slate-900">A little less admin, a little more presence.</h2><div className="mt-5 space-y-3"><Suggestion text="2 assessment reports are ready for clinical review." action="Review reports" onClick={() => onNavigate('tasks')} /><Suggestion text="5 follow-ups can be planned for this week." action="Plan follow-ups" onClick={() => onNavigate('followups')} /><Suggestion text="Your profile is missing your consultation hours." action="Update profile" onClick={() => onNavigate('settings')} /></div></section>
      </div>

      <div className="relative"><Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Quickly find a client in today’s agenda" className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-xs outline-none transition focus:border-[#7c24a6] focus:ring-4 focus:ring-purple-500/10" /></div>
    </div>
  );
};

const Metric = ({ icon: Icon, label, value, detail, accent }) => <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><p className="text-xs font-bold text-slate-500">{label}</p><Icon size={17} className={accent} /></div><p className="mt-5 text-2xl font-black text-slate-950">{value}</p><p className="mt-1 text-[11px] font-medium text-slate-400">{detail}</p></div>;
const Suggestion = ({ text, action, onClick }) => <div className="flex items-center gap-3 rounded-2xl bg-white/75 p-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[#7c24a6]"><Sparkles size={13} /></span><p className="flex-1 text-xs font-medium leading-5 text-slate-700">{text}</p><button onClick={onClick} className="shrink-0 text-[10px] font-bold text-[#7c24a6] hover:underline">{action}</button></div>;

export default DashboardView;
