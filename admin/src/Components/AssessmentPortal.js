import React, { useEffect, useState } from "react";
import api from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus } from "lucide-react";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";

const TOOLS = {
  "PHQ-9": [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed or hopeless",
    "Trouble falling / staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself",
    "Trouble concentrating",
    "Moving or speaking noticeably slowly, or being restless",
    "Thoughts you'd be better off dead or of hurting yourself",
  ],
  "GAD-7": [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid something awful might happen",
  ],
};
const OPTS = ["Not at all", "Several days", "More than half the days", "Nearly every day"];

export default function Assessments() {
  const [items, setItems] = useState([]);
  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);
  const [clientId, setClientId] = useState("");
  const [tool, setTool] = useState("PHQ-9");
  const [responses, setResponses] = useState({});
  const [notes, setNotes] = useState("");

  const load = () => Promise.all([api.get("/assessments"), api.get("/clients")]).then(([a, b]) => { setItems(a.data); setClients(b.data); });
  useEffect(() => { load(); }, []);

  const start = () => { setClientId(""); setTool("PHQ-9"); setResponses({}); setNotes(""); setOpen(true); };

  const save = async () => {
    if (!clientId) return toast.error("Pick a client");
    const items = TOOLS[tool] || [];
    const arr = items.map((_, i) => responses[i] ?? 0);
    await api.post("/assessments", { client_id: clientId, tool, responses: arr, notes });
    setOpen(false); toast.success("Assessment saved"); load();
  };

  return (
    <div className="space-y-6 animate-fade-in-up" data-testid="assessments-page">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div><div className="text-xs tracking-[0.25em] uppercase text-stone-500">Measures</div><h1 className="font-display text-3xl text-stone-900 mt-1">Assessments</h1></div>
        <Button onClick={start} data-testid="new-assessment-btn" className="rounded-full bg-emerald-900 hover:bg-emerald-700 text-stone-50"><Plus className="h-4 w-4 mr-1.5" /> Administer</Button>
      </div>

      {items.length === 0 ? (
        <Card className="rounded-2xl border-dashed border-stone-300 bg-stone-50"><CardContent className="p-12 text-center text-stone-500"><div className="font-display text-xl text-stone-700">No assessments yet</div><p className="text-sm mt-2">Administer PHQ-9 or GAD-7 to establish a baseline.</p></CardContent></Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((a) => (
            <Card key={a.assessment_id} className="rounded-2xl border-stone-200"><CardContent className="p-6">
              <div className="text-[11px] tracking-[0.2em] uppercase text-stone-500">{a.tool}</div>
              <div className="font-display text-2xl text-stone-900 mt-1">{a.score}</div>
              <div className="text-sm text-amber-700 mt-1">{a.severity}</div>
              <div className="text-xs text-stone-500 mt-3">{a.client_name} · {format(parseISO(a.created_at), "MMM d")}</div>
            </CardContent></Card>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader><DialogTitle className="font-display text-2xl">Administer assessment</DialogTitle></DialogHeader>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label>Client</Label>
              <Select value={clientId} onValueChange={setClientId}>
                <SelectTrigger data-testid="assessment-client-select"><SelectValue placeholder="Choose" /></SelectTrigger>
                <SelectContent>{clients.map((c) => <SelectItem key={c.client_id} value={c.client_id}>{c.full_name}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div><Label>Tool</Label>
              <Select value={tool} onValueChange={setTool}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="PHQ-9">PHQ-9 (Depression)</SelectItem><SelectItem value="GAD-7">GAD-7 (Anxiety)</SelectItem></SelectContent>
              </Select>
            </div>
          </div>
          <div className="max-h-[50vh] overflow-y-auto space-y-4 pr-2">
            {(TOOLS[tool] || []).map((q, i) => (
              <div key={i} className="p-4 rounded-lg border border-stone-200 bg-stone-50/60">
                <div className="text-sm font-medium mb-2">{i + 1}. {q}</div>
                <RadioGroup value={String(responses[i] ?? "")} onValueChange={(v) => setResponses({ ...responses, [i]: Number(v) })} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {OPTS.map((o, k) => (
                    <div key={k} className="flex items-center gap-2"><RadioGroupItem value={String(k)} id={`q${i}-${k}`} /><Label htmlFor={`q${i}-${k}`} className="text-xs cursor-pointer">{o}</Label></div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={save} data-testid="save-assessment-btn" className="bg-emerald-900 hover:bg-emerald-700 text-stone-50">Save</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
