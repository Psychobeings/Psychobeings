import React, { useMemo, useState } from "react";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  ClipboardList,
  Target,
  BookOpen,
  CreditCard,
  BarChart3,
  Settings,
  UserCircle,
  Plus,
  Search,
  Bell,
  ChevronRight,
  ChevronLeft,
  X,
  Clock,
  Video,
  FileText,
  CheckCircle2,
  Circle,
  ArrowUpRight,
  ClipboardCheck,
  MessageCircle,
  Save,
  Play,
  Filter,
} from "lucide-react";

/* =========================================================
   BRAND CONSTANTS & UTILS
========================================================= */

const BRAND = {
  teal: "#087F7B",
  tealDark: "#075E5B",
  tealLight: "#E8F4F2",
  gold: "#C9A55C",
  goldLight: "#FFF7E8",
  cream: "#F8F7F2",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/* =========================================================
   INITIAL DATA
========================================================= */

const initialClients = [
  {
    id: "PB-2026-0042",
    name: "Amandeep Sharma",
    initials: "AS",
    age: 24,
    gender: "Female",
    phone: "+91 98765 43210",
    email: "amandeep@example.com",
    mode: "Online",
    status: "Active",
    concerns: ["Anxiety", "Sleep", "Emotional Regulation"],
    lastSession: "22 Aug 2026",
    nextSession: "24 Aug 2026",
    nextTime: "6:00 PM",
    therapist: "Amanpreet Kaur",
    goals: [
      { id: 1, text: "Establish regular sleep routine", completed: true },
      { id: 2, text: "Reduce anxiety symptoms", completed: false },
      { id: 3, text: "Improve emotional regulation", completed: false },
    ],
    sessions: [
      {
        id: "S-012",
        date: "22 Aug 2026",
        time: "6:00 PM",
        type: "Individual Therapy",
        status: "Completed",
        focus: "Sleep routine and emotional regulation",
        interventions: ["CBT", "Grounding"],
        homework: "Sleep diary",
        noteStatus: "Completed",
      },
    ],
    assessments: [
      { name: "GAD-7", score: 14, previous: 17, interpretation: "Moderate" },
      { name: "PHQ-9", score: 10, previous: 13, interpretation: "Moderate" },
    ],
    homework: [
      { title: "Sleep Diary", assigned: "22 Aug 2026", due: "29 Aug 2026", status: "Pending" },
      { title: "5-4-3-2-1 Grounding", assigned: "22 Aug 2026", due: "25 Aug 2026", status: "Completed" },
    ],
    payments: [
      { date: "22 Aug 2026", description: "Session 12", amount: 1500, status: "Paid" },
    ],
  },
  {
    id: "PB-2026-0041",
    name: "Riya Kapoor",
    initials: "RK",
    age: 29,
    gender: "Female",
    phone: "+91 98111 22334",
    email: "riya@example.com",
    mode: "Online",
    status: "Active",
    concerns: ["Stress", "Work-Life Balance"],
    lastSession: "20 Aug 2026",
    nextSession: "27 Aug 2026",
    nextTime: "5:30 PM",
    therapist: "Amanpreet Kaur",
    goals: [],
    sessions: [],
    assessments: [],
    homework: [],
    payments: [],
  },
  {
    id: "PB-2026-0040",
    name: "Arjun Mehta",
    initials: "AM",
    age: 32,
    gender: "Male",
    phone: "+91 98999 11223",
    email: "arjun@example.com",
    mode: "Online",
    status: "On Hold",
    concerns: ["Career", "Stress"],
    lastSession: "12 Aug 2026",
    nextSession: "—",
    nextTime: "—",
    therapist: "Amanpreet Kaur",
    goals: [],
    sessions: [],
    assessments: [],
    homework: [],
    payments: [],
  },
  {
    id: "PB-2026-0039",
    name: "Mehak Verma",
    initials: "MV",
    age: 17,
    gender: "Female",
    phone: "+91 98700 44321",
    email: "mehak@example.com",
    mode: "Online",
    status: "New",
    concerns: ["Academic Stress", "Anxiety"],
    lastSession: "—",
    nextSession: "26 Aug 2026",
    nextTime: "4:00 PM",
    therapist: "Amanpreet Kaur",
    goals: [],
    sessions: [],
    assessments: [],
    homework: [],
    payments: [],
  },
];

/* =========================================================
   MAIN APP COMPONENT
========================================================= */

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [clients, setClients] = useState(initialClients);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showAddClient, setShowAddClient] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [activeSession, setActiveSession] = useState(null);
  const [sessionNotes, setSessionNotes] = useState("");

  const completeSession = (completedSession) => {
    setClients((prevClients) =>
      prevClients.map((client) => {
        if (client.id !== completedSession.clientId) return client;
        return {
          ...client,
          lastSession: completedSession.date,
          sessions: [completedSession, ...client.sessions],
        };
      })
    );
    setActiveSession(null);
    setSessionNotes("");
    alert("Session completed and clinical note saved.");
  };

  const openClient = (client) => {
    setSelectedClient(client);
    setActiveSession(null);
    setActivePage("client-profile");
  };

  const startSession = (client) => {
    setSelectedClient(client);
    setActiveSession({
      id: `SESSION-${Date.now()}`,
      clientId: client.id,
      clientName: client.name,
      date: "24 Aug 2026",
      time: client.nextTime !== "—" ? client.nextTime : "6:00 PM",
      type: "Individual Therapy",
      mode: client.mode || "Online",
    });
  };

  const addClient = (formData) => {
    const newClient = {
      ...formData,
      id: `PB-2026-${String(clients.length + 43).padStart(4, "0")}`,
      name: `${formData.firstName} ${formData.lastName}`,
      initials: `${formData.firstName?.[0] || ""}${formData.lastName?.[0] || ""}`.toUpperCase(),
      status: "New",
      goals: [],
      sessions: [],
      assessments: [],
      homework: [],
      payments: [],
      lastSession: "—",
      nextSession: "—",
      nextTime: "—",
      therapist: "Amanpreet Kaur",
    };

    setClients((prev) => [newClient, ...prev]);
    setShowAddClient(false);
  };

  const getPageTitle = (page) => {
    return page.charAt(0).toUpperCase() + page.slice(1).replace("-", " ");
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-slate-800">
      <div className="flex min-h-screen">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          onProfile={() => setActivePage("profile")}
        />

        <main className="flex-1 min-w-0">
          <Header
            onNotification={() => setShowNotification(!showNotification)}
            showNotification={showNotification}
          />

          <div className="p-5 md:p-8 max-w-[1600px] mx-auto">
            {activePage === "dashboard" && (
              <Dashboard
                clients={clients}
                onOpenClient={openClient}
                onAddClient={() => setShowAddClient(true)}
              />
            )}

            {activePage === "clients" && (
              <ClientsPage
                clients={clients}
                onOpenClient={openClient}
                onAddClient={() => setShowAddClient(true)}
              />
            )}

            {activePage === "client-profile" && selectedClient && (
              <ClientProfile
                client={selectedClient}
                onBack={() => {
                  setActiveSession(null);
                  setActivePage("clients");
                }}
                onStartSession={() => startSession(selectedClient)}
              />
            )}

            {activeSession && (
              <SessionWorkspace
                session={activeSession}
                onClose={() => setActiveSession(null)}
                notes={sessionNotes}
                setNotes={setSessionNotes}
                onCompleteSession={completeSession}
              />
            )}

            {activePage !== "dashboard" &&
              activePage !== "clients" &&
              activePage !== "client-profile" &&
              !activeSession && (
                <PlaceholderPage title={getPageTitle(activePage)} />
              )}
          </div>
        </main>
      </div>

      {showAddClient && (
        <AddClientModal
          onClose={() => setShowAddClient(false)}
          onSave={addClient}
        />
      )}
    </div>
  );
}

/* =========================================================
   UI REUSABLE COMPONENTS
========================================================= */

function Avatar({ initials, className = "" }) {
  return (
    <div
      className={cn(
        "w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0",
        className
      )}
      style={{ background: BRAND.teal }}
    >
      {initials}
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "On Hold": "bg-amber-50 text-amber-700 border-amber-200",
    New: "bg-blue-50 text-blue-700 border-blue-200",
    Completed: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={cn(
        "px-2.5 py-1 rounded-full text-xs font-medium border inline-block",
        styles[status] || styles.Completed
      )}
    >
      {status}
    </span>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      <p className="text-sm text-slate-500 mt-2">
        This feature module is managed within the workspace settings.
      </p>
    </div>
  );
}

/* =========================================================
   SIDEBAR & HEADER
========================================================= */

function Sidebar({ activePage, setActivePage, onProfile }) {
  const [collapsed, setCollapsed] = useState(false);

  const mainItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "clients", label: "Clients", icon: Users },
    { id: "calendar", label: "Calendar", icon: CalendarDays },
    { id: "sessions", label: "Sessions", icon: ClipboardList },
    { id: "assessments", label: "Assessments", icon: ClipboardCheck },
    { id: "treatment-plans", label: "Treatment Plans", icon: Target },
    { id: "resources", label: "Resources", icon: BookOpen },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ];

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col border-r border-slate-200 bg-white transition-all duration-300",
        collapsed ? "w-[82px]" : "w-[250px]"
      )}
    >
      <div className="h-20 flex items-center px-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-semibold shrink-0"
            style={{ background: BRAND.teal }}
          >
            P
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-semibold text-lg tracking-tight">Psychobeings</h1>
              <p className="text-[11px] text-slate-400">Practice Management</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 p-3 overflow-y-auto">
        <p className={cn("text-[10px] uppercase tracking-[0.15em] text-slate-400 font-semibold mb-3", collapsed && "text-center")}>
          {collapsed ? "•••" : "Workspace"}
        </p>
        <nav className="space-y-1">
          {mainItems.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition",
                  active ? "text-white shadow-sm" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
                style={active ? { background: BRAND.teal } : {}}
              >
                <Icon size={18} strokeWidth={1.8} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-slate-100 p-3 space-y-1">
        <button
          onClick={onProfile}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-slate-50"
        >
          <UserCircle size={18} />
          {!collapsed && <span>My Profile</span>}
        </button>
        <button
          onClick={() => setActivePage("settings")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-slate-50"
        >
          <Settings size={18} />
          {!collapsed && <span>Settings</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex justify-center py-2 text-slate-400 hover:text-slate-700"
        >
          {collapsed ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
        </button>
      </div>
    </aside>
  );
}

function Header({ onNotification, showNotification }) {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-5 md:px-8 relative">
      <div>
        <p className="text-xs text-slate-400">Monday, 24 August 2026</p>
        <h2 className="font-semibold text-slate-900">Good morning, Amanpreet 👋</h2>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onNotification}
          className="relative w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50"
        >
          <Bell size={18} className="text-slate-600" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: BRAND.gold }} />
        </button>

        <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-slate-200">
          <Avatar initials="AK" />
          <div>
            <p className="text-sm font-medium">Amanpreet Kaur</p>
            <p className="text-[11px] text-slate-400">Psychologist</p>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="absolute right-8 top-16 z-40 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-4">
          <h3 className="font-semibold text-slate-900">Notifications</h3>
          <div className="mt-3 space-y-3">
            <NotificationItem icon={FileText} title="3 session notes pending" text="Complete notes from recent sessions." />
            <NotificationItem icon={ClipboardCheck} title="2 intake forms" text="New clients have incomplete forms." />
          </div>
        </div>
      )}
    </header>
  );
}

function NotificationItem({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3 p-3 rounded-xl bg-slate-50">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: BRAND.tealLight, color: BRAND.teal }}>
        <Icon size={15} />
      </div>
      <div>
        <p className="text-sm font-medium text-slate-800">{title}</p>
        <p className="text-xs text-slate-500 mt-0.5">{text}</p>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD COMPONENTS
========================================================= */

function Dashboard({ clients, onOpenClient, onAddClient }) {
  const activeClients = clients.filter((c) => c.status === "Active").length;

  return (
    <div className="space-y-7">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: BRAND.teal }}>
            Practice Overview
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mt-1">
            Your practice at a glance
          </h1>
          <p className="text-sm text-slate-500 mt-2">Here's what needs your attention today.</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onAddClient}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium shadow-sm hover:opacity-95 transition"
            style={{ background: BRAND.teal }}
          >
            <Plus size={17} /> Add Client
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium hover:bg-slate-50">
            <CalendarDays size={17} /> Book Session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Active Clients" value={activeClients} subtitle="+3 this month" icon={Users} />
        <StatCard title="Today's Sessions" value="4" subtitle="1 upcoming" icon={CalendarDays} />
        <StatCard title="Pending Notes" value="3" subtitle="Needs attention" icon={FileText} warning />
        <StatCard title="Monthly Revenue" value="₹52,500" subtitle="+12.5% vs July" icon={CreditCard} />
      </div>

      <div className="grid xl:grid-cols-[1.5fr_1fr] gap-5">
        <TodaySchedule clients={clients} onOpenClient={onOpenClient} />
        <AttentionPanel />
      </div>

      <RecentClients clients={clients} onOpenClient={onOpenClient} />
    </div>
  );
}

function StatCard({ title, value, subtitle, icon: Icon, warning }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <div className="flex justify-between items-start">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: warning ? BRAND.goldLight : BRAND.tealLight,
            color: warning ? BRAND.gold : BRAND.teal,
          }}
        >
          <Icon size={19} />
        </div>
        <ArrowUpRight size={16} className="text-slate-300" />
      </div>
      <p className="text-xs text-slate-500 mt-5">{title}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
      <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
    </div>
  );
}

function TodaySchedule({ clients, onOpenClient }) {
  const appointments = [
    { time: "10:00 AM", client: clients[0], type: "Individual Therapy" },
    { time: "12:30 PM", client: clients[1], type: "Follow-up" },
    { time: "04:00 PM", client: clients[3] || clients[0], type: "Child & Adolescent" },
    { time: "06:00 PM", client: clients[0], type: "Individual Therapy" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h2 className="font-semibold">Today's Sessions</h2>
          <p className="text-xs text-slate-400 mt-1">Monday, 24 August</p>
        </div>
        <button className="text-xs font-medium hover:underline" style={{ color: BRAND.teal }}>
          View Calendar
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {appointments.map((appt, idx) => (
          <button
            key={idx}
            onClick={() => onOpenClient(appt.client)}
            className="w-full p-4 flex items-center gap-4 text-left hover:bg-slate-50 transition"
          >
            <div className="w-16 text-xs font-medium text-slate-500">{appt.time}</div>
            <Avatar initials={appt.client.initials} />
            <div className="flex-1">
              <p className="text-sm font-medium">{appt.client.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-slate-400">{appt.type}</span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Video size={12} /> Online
                </span>
              </div>
            </div>
            <ChevronRight size={17} className="text-slate-300" />
          </button>
        ))}
      </div>
    </div>
  );
}

function AttentionPanel() {
  const items = [
    { icon: FileText, title: "3 Session Notes", text: "Need to be completed", type: "warning" },
    { icon: ClipboardCheck, title: "2 Intake Forms", text: "Awaiting client response", type: "normal" },
    { icon: CreditCard, title: "1 Payment", text: "₹1,500 pending", type: "warning" },
    { icon: MessageCircle, title: "2 Follow-ups", text: "Due today", type: "normal" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h2 className="font-semibold">Needs Your Attention</h2>
      <p className="text-xs text-slate-400 mt-1">Things that may need action today.</p>
      <div className="mt-5 space-y-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: item.type === "warning" ? BRAND.goldLight : BRAND.tealLight,
                  color: item.type === "warning" ? BRAND.gold : BRAND.teal,
                }}
              >
                <Icon size={16} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-slate-400">{item.text}</p>
              </div>
              <ChevronRight size={15} className="text-slate-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecentClients({ clients, onOpenClient }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-5 flex justify-between items-center border-b border-slate-100">
        <div>
          <h2 className="font-semibold">Recent Clients</h2>
          <p className="text-xs text-slate-400 mt-1">Your latest client activity</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Client</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Status</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Last Session</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Next Session</th>
            </tr>
          </thead>
          <tbody>
            {clients.slice(0, 4).map((client) => (
              <tr
                key={client.id}
                onClick={() => onOpenClient(client)}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer transition"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar initials={client.initials} />
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-xs text-slate-400">{client.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4"><StatusBadge status={client.status} /></td>
                <td className="px-5 py-4 text-slate-500">{client.lastSession}</td>
                <td className="px-5 py-4 text-slate-500">{client.nextSession}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =========================================================
   CLIENTS LIST PAGE
========================================================= */

function ClientsPage({ clients, onOpenClient, onAddClient }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesSearch =
        client.name.toLowerCase().includes(search.toLowerCase()) ||
        client.id.toLowerCase().includes(search.toLowerCase()) ||
        client.email.toLowerCase().includes(search.toLowerCase());

      const matchesFilter = filter === "All" ? true : client.status === filter;
      return matchesSearch && matchesFilter;
    });
  }, [clients, search, filter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Clients</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your clients and their clinical journey.</p>
        </div>

        <button
          onClick={onAddClient}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium shadow-sm hover:opacity-95"
          style={{ background: BRAND.teal }}
        >
          <Plus size={17} /> Add Client
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, ID or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="flex gap-2">
          {["All", "Active", "On Hold", "New"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={cn(
                "px-3.5 py-2.5 rounded-xl text-xs font-medium border transition",
                filter === status
                  ? "bg-white border-slate-400 text-slate-900 shadow-sm"
                  : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
              )}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Client</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Status</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Concerns</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Last Session</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">Next Session</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr
                  key={client.id}
                  onClick={() => onOpenClient(client)}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer transition"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar initials={client.initials} />
                      <div>
                        <p className="font-medium">{client.name}</p>
                        <p className="text-xs text-slate-400">{client.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4"><StatusBadge status={client.status} /></td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {client.concerns.map((c, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-500">{client.lastSession}</td>
                  <td className="px-5 py-4 text-slate-500">{client.nextSession}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CLIENT PROFILE & SESSION WORKSPACE
========================================================= */

function ClientProfile({ client, onBack, onStartSession }) {
  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1">
        <ChevronLeft size={16} /> Back to clients
      </button>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Avatar initials={client.initials} className="w-14 h-14 text-lg" />
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold">{client.name}</h1>
              <StatusBadge status={client.status} />
            </div>
            <p className="text-xs text-slate-400 mt-1">ID: {client.id} • {client.gender}, {client.age} y/o</p>
          </div>
        </div>
        <button
          onClick={onStartSession}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium shadow-sm hover:opacity-95"
          style={{ background: BRAND.teal }}
        >
          <Play size={16} /> Start Session
        </button>
      </div>
    </div>
  );
}

function SessionWorkspace({ session, onClose, notes, setNotes, onCompleteSession }) {
  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
      <div className="w-full max-w-2xl bg-white h-full p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-semibold">{session.clientName}</h2>
              <p className="text-xs text-slate-400">{session.type} • {session.date}</p>
            </div>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Clinical Session Notes
            </label>
            <textarea
              rows={12}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Record clinical observations, interventions, and client progress..."
              className="w-full p-4 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <button onClick={onClose} className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50">
            Cancel
          </button>
          <button
            onClick={() => onCompleteSession({ ...session, notes })}
            className="px-4 py-2.5 rounded-xl text-white text-sm font-medium hover:opacity-95"
            style={{ background: BRAND.teal }}
          >
            Complete Session
          </button>
        </div>
      </div>
    </div>
  );
}

function AddClientModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", age: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName) return;
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <h2 className="font-semibold text-lg">Add New Client</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">First Name</label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded-xl text-white text-sm font-medium" style={{ background: BRAND.teal }}>
              Save Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}