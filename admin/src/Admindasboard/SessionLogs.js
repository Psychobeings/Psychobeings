import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Plus } from "lucide-react";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";

const fmt = (s) => { try { return format(parseISO(s), "MMM d · h:mm a"); } catch { return s; } };

export default function Sessions() {
  const [items, setItems] = useState([]);
  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);
  const [clientId, setClientId] = useState("");
  const [modality, setModality] = useState("In-person");
  const [params, setParams] = useSearchParams();
  const nav = useNavigate();

  const load = () => Promise.all([api.get("/sessions"), api.get("/clients")]).then(([a, b]) => { setItems(a.data); setClients(b.data); });
  useEffect(() => { load(); }, []);
  useEffect(() => { if (params.get("new") === "1") { setOpen(true); params.delete("new"); setParams(params, { replace: true }); } }, [params, setParams]);

  const start = async () => {
    if (!clientId) return toast.error("Choose a client");
    const { data } = await api.post("/sessions", { client_id: clientId, modality, status: "in-progress" });
    setOpen(false);
    nav(`/sessions/${data.session_id}`);
  };

  return (
    <div className="space-y-6 animate-fade-in-up" data-testid="sessions-page">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-stone-500">The room</div>
          <h1 className="font-display text-3xl text-stone-900 mt-1">Sessions</h1>
        </div>
        <Button onClick={() => setOpen(true)} data-testid="new-session-btn" className="rounded-full bg-emerald-900 hover:bg-emerald-700 text-stone-50">
          <Sparkles className="h-4 w-4 mr-1.5" /> Start session
        </Button>
      </div>

      {items.length === 0 ? (
        <Card className="rounded-2xl border-dashed border-stone-300 bg-stone-50"><CardContent className="p-12 text-center text-stone-500">
          <div className="font-display text-xl text-stone-700">No sessions yet</div><p className="mt-2 text-sm">Start your first session to build a session history.</p>
        </CardContent></Card>
      ) : (
        <div className="grid gap-3">
          {items.map((s) => (
            <div key={s.session_id} onClick={() => nav(`/sessions/${s.session_id}`)} data-testid={`session-row-${s.session_id}`}
              className="p-5 rounded-xl bg-white border border-stone-200 hover:shadow-sm cursor-pointer flex items-center gap-6 transition-shadow duration-200">
              <div>
                <div className="text-emerald-900 font-display text-lg">{fmt(s.scheduled_at)}</div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 mt-1">{s.modality} · {s.duration_min}m</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-stone-900">{s.client_name}</div>
                <div className="text-sm text-stone-600 truncate">{s.focus || "—"}</div>
              </div>
              <span className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full ${s.status === "completed" ? "bg-emerald-50 text-emerald-900" : s.status === "in-progress" ? "bg-amber-50 text-amber-700" : "bg-stone-100 text-stone-600"}`}>{s.status}</span>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle className="font-display text-2xl">Start a session</DialogTitle></DialogHeader>
          <div className="space-y-4 mt-2">
            <div><div className="text-sm mb-1 text-stone-700">Client</div>
              <Select value={clientId} onValueChange={setClientId}>
                <SelectTrigger data-testid="session-client-select"><SelectValue placeholder="Choose client" /></SelectTrigger>
                <SelectContent>{clients.map((c) => <SelectItem key={c.client_id} value={c.client_id}>{c.full_name}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div><div className="text-sm mb-1 text-stone-700">Modality</div>
              <Select value={modality} onValueChange={setModality}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="In-person">In-person</SelectItem><SelectItem value="Video">Video</SelectItem><SelectItem value="Phone">Phone</SelectItem></SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button><Button data-testid="confirm-start-session-btn" onClick={start} className="bg-emerald-900 hover:bg-emerald-700 text-stone-50">Begin</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
