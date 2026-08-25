import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Sparkles, FileText, BellRing, Wallet, ArrowRight, Plus } from "lucide-react";
import { format, parseISO } from "date-fns";

function Stat({ label, value, sub, icon: Icon, tone = "emerald" }) {
  const toneMap = {
    emerald: "bg-emerald-900 text-stone-50",
    amber: "bg-amber-600 text-stone-50",
    stone: "bg-stone-100 text-stone-900",
  };
  return (
    <Card className="rounded-2xl border-stone-200 hover:shadow-md hover:-translate-y-0.5 transition-transform duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-stone-500">{label}</div>
            <div className="font-display text-3xl mt-2 text-stone-900">{value}</div>
            {sub && <div className="text-xs text-stone-500 mt-1">{sub}</div>}
          </div>
          <div className={`h-10 w-10 rounded-xl grid place-items-center ${toneMap[tone]}`}>
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const nav = useNavigate();

  useEffect(() => { api.get("/dashboard/stats").then((r) => setStats(r.data)); }, []);

  if (!stats) return <div className="text-stone-500">Loading dashboard…</div>;

  const fmtDT = (s) => { try { return format(parseISO(s), "MMM d, h:mm a"); } catch { return s; } };
  const fmtT = (s) => { try { return format(parseISO(s), "h:mm a"); } catch { return s; } };

  return (
    <div className="space-y-8 animate-fade-in-up" data-testid="dashboard-page">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-stone-500">Today · {format(new Date(), "EEEE, MMM d")}</div>
          <h1 className="font-display text-3xl sm:text-4xl mt-2 text-stone-900">
            A steady <span className="font-serif-mark italic text-emerald-900">day of care</span> ahead.
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button data-testid="qa-add-client" onClick={() => nav("/clients?new=1")} variant="outline" className="rounded-full border-stone-300">
            <Plus className="h-4 w-4 mr-1.5" /> Add client
          </Button>
          <Button data-testid="qa-schedule" onClick={() => nav("/calendar?new=1")} variant="outline" className="rounded-full border-stone-300">
            <Plus className="h-4 w-4 mr-1.5" /> Schedule
          </Button>
          <Button data-testid="qa-start-session" onClick={() => nav("/sessions?new=1")} className="rounded-full bg-emerald-900 hover:bg-emerald-700 text-stone-50">
            <Sparkles className="h-4 w-4 mr-1.5" /> Start session
          </Button>
          <Button data-testid="qa-add-note" onClick={() => nav("/notes?new=1")} className="rounded-full bg-amber-600 hover:bg-amber-700 text-stone-50">
            <FileText className="h-4 w-4 mr-1.5" /> Add note
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Stat label="Active clients" value={stats.active_clients} sub={`${stats.total_clients} total`} icon={Users} tone="emerald" />
        <Stat label="Pending notes" value={stats.pending_notes} sub="from completed sessions" icon={FileText} tone="amber" />
        <Stat label="Follow-ups due" value={stats.due_followups.length} sub="today or overdue" icon={BellRing} tone="stone" />
        <Stat label="Monthly revenue" value={`₹${Math.round(stats.monthly_revenue).toLocaleString()}`} sub="paid this month" icon={Wallet} tone="emerald" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 rounded-2xl border-stone-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-stone-500">Today</div>
                <h3 className="font-display text-xl text-stone-900">Sessions on the calendar</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => nav("/calendar")} data-testid="view-calendar-btn">
                Open calendar <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            {stats.today_sessions.length === 0 ? (
              <div className="text-sm text-stone-500 py-8 text-center border border-dashed border-stone-200 rounded-xl">
                No sessions scheduled today. Enjoy the space.
              </div>
            ) : (
              <ul className="divide-y divide-stone-100">
                {stats.today_sessions.map((s) => (
                  <li key={s.appointment_id} className="py-3 flex items-center gap-4">
                    <div className="text-emerald-900 font-display text-lg w-20">{fmtT(s.starts_at)}</div>
                    <div className="flex-1">
                      <div className="font-medium text-stone-900">{s.client_name}</div>
                      <div className="text-xs text-stone-500">{s.modality} · {s.duration_min} min</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-stone-100 text-stone-600">{s.status}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-stone-200">
          <CardContent className="p-6">
            <div className="text-[11px] tracking-[0.2em] uppercase text-stone-500">Follow-ups</div>
            <h3 className="font-display text-xl text-stone-900 mb-4">Care to close out</h3>
            {stats.due_followups.length === 0 ? (
              <div className="text-sm text-stone-500 py-4">All caught up.</div>
            ) : (
              <ul className="space-y-3">
                {stats.due_followups.slice(0, 5).map((f) => (
                  <li key={f.followup_id} className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <div className="text-sm font-medium text-stone-900">{f.client_name}</div>
                    <div className="text-xs text-stone-600 mt-0.5">{f.action}</div>
                    <div className="text-[11px] text-amber-700 mt-1">Due {fmtDT(f.due_at)}</div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border-stone-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-stone-500">This week</div>
              <h3 className="font-display text-xl text-stone-900">Upcoming sessions</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={() => nav("/sessions")}>
              All sessions <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          {stats.upcoming_sessions.length === 0 ? (
            <div className="text-sm text-stone-500 py-6 text-center border border-dashed border-stone-200 rounded-xl">
              Nothing on the horizon — a great time to plan.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.upcoming_sessions.map((s) => (
                <div key={s.appointment_id} className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                  <div className="text-xs text-stone-500">{fmtDT(s.starts_at)}</div>
                  <div className="font-medium text-stone-900 mt-1">{s.client_name}</div>
                  <div className="text-xs text-stone-600 mt-1">{s.modality}</div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
