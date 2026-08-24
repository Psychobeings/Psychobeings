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
  MoreHorizontal,
  FileText,
  CheckCircle2,
  AlertCircle,
  Circle,
  ArrowUpRight,
  Heart,
  ClipboardCheck,
  Upload,
  MessageCircle,
} from "lucide-react";

/* =========================================================
   BRAND
========================================================= */

const BRAND = {
  teal: "#087F7B",
  tealDark: "#075E5B",
  gold: "#C9A55C",
  cream: "#F8F7F2",
};

/* =========================================================
   DUMMY DATA
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
      { text: "Establish regular sleep routine", completed: true },
      { text: "Reduce anxiety symptoms", completed: false },
      { text: "Improve emotional regulation", completed: false },
      { text: "Reduce procrastination", completed: false },
    ],
    sessions: [
      {
        id: "S-012",
        date: "22 Aug 2026",
        time: "6:00 PM",
        type: "Individual Therapy",
        status: "Completed",
        focus: "Sleep routine and emotional regulation",
        interventions: ["CBT", "Grounding", "Psychoeducation"],
        homework: "Sleep diary",
        noteStatus: "Completed",
      },
      {
        id: "S-011",
        date: "15 Aug 2026",
        time: "6:00 PM",
        type: "Individual Therapy",
        status: "Completed",
        focus: "Anxiety triggers",
        interventions: ["CBT", "Mindfulness"],
        homework: "Thought record",
        noteStatus: "Completed",
      },
      {
        id: "S-010",
        date: "08 Aug 2026",
        time: "6:00 PM",
        type: "Individual Therapy",
        status: "Completed",
        focus: "Procrastination patterns",
        interventions: ["Behavioural Activation"],
        homework: "Activity schedule",
        noteStatus: "Completed",
      },
    ],
    assessments: [
      {
        name: "GAD-7",
        score: 14,
        previous: 17,
        interpretation: "Moderate",
      },
      {
        name: "PHQ-9",
        score: 10,
        previous: 13,
        interpretation: "Moderate",
      },
      {
        name: "Rosenberg Self-Esteem",
        score: 21,
        previous: 18,
        interpretation: "Improving",
      },
    ],
    homework: [
      {
        title: "Sleep Diary",
        assigned: "22 Aug 2026",
        due: "29 Aug 2026",
        status: "Pending",
      },
      {
        title: "5-4-3-2-1 Grounding",
        assigned: "22 Aug 2026",
        due: "25 Aug 2026",
        status: "Completed",
      },
    ],
    payments: [
      { date: "22 Aug 2026", description: "Session 12", amount: 1500, status: "Paid" },
      { date: "15 Aug 2026", description: "Session 11", amount: 1500, status: "Paid" },
      { date: "08 Aug 2026", description: "Session 10", amount: 1500, status: "Paid" },
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
    goals: [
      { text: "Improve work-life balance", completed: false },
      { text: "Develop stress management strategies", completed: true },
    ],
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
   HELPERS
========================================================= */

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
   APP
========================================================= */

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [clients, setClients] = useState(initialClients);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showAddClient, setShowAddClient] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const openClient = (client) => {
    setSelectedClient(client);
    setActivePage("client-profile");
  };

  const addClient = (client) => {
    const newClient = {
      ...client,
      id: `PB-2026-${String(clients.length + 43).padStart(4, "0")}`,
      initials: `${client.firstName[0]}${client.lastName[0]}`,
      status: "New",
      concerns: client.concerns || [],
      goals: [],
      sessions: [],
      assessments: [],
      homework: [],
      payments: [],
      lastSession: "—",
      nextSession: "—",
      nextTime: "—",
    };

    setClients((prev) => [newClient, ...prev]);
    setShowAddClient(false);
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
                onBack={() => setActivePage("clients")}
              />
            )}

            {activePage !== "dashboard" &&
              activePage !== "clients" &&
              activePage !== "client-profile" && (
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
   SIDEBAR
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
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-semibold"
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
        <p
          className={cn(
            "text-[10px] uppercase tracking-[0.15em] text-slate-400 font-semibold mb-3",
            collapsed && "text-center"
          )}
        >
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
                  active
                    ? "text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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

/* =========================================================
   HEADER
========================================================= */

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
          <span
            className="absolute top-2 right-2 w-2 h-2 rounded-full"
            style={{ background: BRAND.gold }}
          />
        </button>

        <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-slate-200">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium"
            style={{ background: BRAND.teal }}
          >
            AK
          </div>

          <div>
            <p className="text-sm font-medium">Amanpreet Kaur</p>
            <p className="text-[11px] text-slate-400">Psychologist</p>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="absolute right-8 top-16 z-40 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-4">
          <h3 className="font-semibold">Notifications</h3>
          <div className="mt-3 space-y-3">
            <Notification
              icon={FileText}
              title="3 session notes pending"
              text="Complete notes from recent sessions."
            />
            <Notification
              icon={ClipboardCheck}
              title="2 intake forms"
              text="New clients have incomplete forms."
            />
          </div>
        </div>
      )}
    </header>
  );
}

function Notification({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3 p-3 rounded-xl bg-slate-50">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ background: "#E8F4F2", color: BRAND.teal }}
      >
        <Icon size={15} />
      </div>

      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-slate-500 mt-0.5">{text}</p>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({ clients, onOpenClient, onAddClient }) {
  const activeClients = clients.filter((c) => c.status === "Active").length;

  return (
    <div className="space-y-7">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: BRAND.teal }}
          >
            Practice Overview
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mt-1">
            Your practice at a glance
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Here's what needs your attention today.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onAddClient}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium shadow-sm"
            style={{ background: BRAND.teal }}
          >
            <Plus size={17} />
            Add Client
          </button>

          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium hover:bg-slate-50">
            <CalendarDays size={17} />
            Book Session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Active Clients"
          value={activeClients}
          subtitle="+3 this month"
          icon={Users}
        />
        <StatCard
          title="Today's Sessions"
          value="4"
          subtitle="1 upcoming"
          icon={CalendarDays}
        />
        <StatCard
          title="Pending Notes"
          value="3"
          subtitle="Needs attention"
          icon={FileText}
          warning
        />
        <StatCard
          title="Monthly Revenue"
          value="₹52,500"
          subtitle="+12.5% vs July"
          icon={CreditCard}
        />
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
            background: warning ? "#FFF7E8" : "#EAF5F3",
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
    { time: "04:00 PM", client: clients[3], type: "Child & Adolescent" },
    { time: "06:00 PM", client: clients[0], type: "Individual Therapy" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between">
        <div>
          <h2 className="font-semibold">Today's Sessions</h2>
          <p className="text-xs text-slate-400 mt-1">Monday, 24 August</p>
        </div>

        <button className="text-xs font-medium" style={{ color: BRAND.teal }}>
          View Calendar
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {appointments.map((appointment, index) => (
          <button
            key={index}
            onClick={() => onOpenClient(appointment.client)}
            className="w-full p-4 flex items-center gap-4 text-left hover:bg-slate-50 transition"
          >
            <div className="w-16 text-xs font-medium text-slate-500">
              {appointment.time}
            </div>

            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{
                background: "#E8F4F2",
                color: BRAND.teal,
              }}
            >
              {appointment.client.initials}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">{appointment.client.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-slate-400">
                  {appointment.type}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Video size={12} />
                  Online
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
    {
      icon: FileText,
      title: "3 Session Notes",
      text: "Need to be completed",
      type: "warning",
    },
    {
      icon: ClipboardCheck,
      title: "2 Intake Forms",
      text: "Awaiting client response",
      type: "normal",
    },
    {
      icon: CreditCard,
      title: "1 Payment",
      text: "₹1,500 pending",
      type: "warning",
    },
    {
      icon: MessageCircle,
      title: "2 Follow-ups",
      text: "Due today",
      type: "normal",
    },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h2 className="font-semibold">Needs Your Attention</h2>
      <p className="text-xs text-slate-400 mt-1">
        Things that may need action today.
      </p>

      <div className="mt-5 space-y-3">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    item.type === "warning" ? "#FFF7E8" : "#EAF5F3",
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
      <div className="p-5 flex justify-between items-center">
        <div>
          <h2 className="font-semibold">Recent Clients</h2>
          <p className="text-xs text-slate-400 mt-1">
            Your latest client activity
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-y border-slate-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">
                Client
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">
                Status
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">
                Last Session
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400">
                Next Session
              </th>
            </tr>
          </thead>

          <tbody>
            {clients.slice(0, 4).map((client) => (
              <tr
                key={client.id}
                onClick={() => onOpenClient(client)}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer"
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

                <td className="px-5 py-4">
                  <StatusBadge status={client.status} />
                </td>

                <td className="px-5 py-4 text-slate-500">
                  {client.lastSession}
                </td>

                <td className="px-5 py-4 text-slate-500">
                  {client.nextSession}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =========================================================
   CLIENTS PAGE
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

      const matchesFilter =
        filter === "All" ? true : client.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [clients, search, filter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Clients</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your clients and their clinical journey.
          </p>
        </div>

        <button
          onClick={onAddClient}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium"
          style={{ background: BRAND.teal }}
        >
          <Plus size={17} />
          Add Client
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, client ID or email..."
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#087F7B]/20"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm outline-none"
          >
            <option>All</option>
            <option>Active</option>
            <option>New</option>
            <option>On Hold</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredClients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onClick={() => onOpenClient(client)}
          />
        ))}
      </div>

      {filteredClients.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
          <Users className="mx-auto text-slate-300" size={40} />
          <p className="font-medium mt-4">No clients found</p>
          <p className="text-sm text-slate-400 mt-1">
            Try changing your search or filter.
          </p>
        </div>
      )}
    </div>
  );
}

function ClientCard({ client, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-slate-200 rounded-2xl p-5 text-left hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Avatar initials={client.initials} size="lg" />

          <div>
            <h3 className="font-semibold">{client.name}</h3>
            <p className="text-xs text-slate-400 mt-0.5">{client.id}</p>
          </div>
        </div>

        <StatusBadge status={client.status} />
      </div>

      <div className="flex flex-wrap gap-1.5 mt-5">
        {client.concerns.map((concern) => (
          <span
            key={concern}
            className="text-[11px] px-2 py-1 rounded-full bg-slate-50 text-slate-500"
          >
            {concern}
          </span>
        ))}
      </div>

      <div className="border-t border-slate-100 mt-5 pt-4 grid grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            Last Session
          </p>
          <p className="text-xs font-medium mt-1">{client.lastSession}</p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            Next Session
          </p>
          <p className="text-xs font-medium mt-1">{client.nextSession}</p>
        </div>
      </div>
    </button>
  );
}

/* =========================================================
   CLIENT PROFILE
========================================================= */

function ClientProfile({ client, onBack }) {
  const [tab, setTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Sessions",
    "Clinical Notes",
    "Assessments",
    "Treatment Plan",
    "Homework",
    "Documents",
    "Payments",
    "Activity",
  ];

  return (
    <div className="space-y-5">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
      >
        <ChevronLeft size={16} />
        Back to Clients
      </button>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <Avatar initials={client.initials} size="xl" />

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl md:text-2xl font-semibold">
                  {client.name}
                </h1>
                <StatusBadge status={client.status} />
              </div>

              <p className="text-xs text-slate-400 mt-1">{client.id}</p>

              <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate-500">
                <span>{client.age} years</span>
                <span>•</span>
                <span>{client.gender}</span>
                <span>•</span>
                <span>{client.mode}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className="px-4 py-2.5 rounded-xl text-white text-sm font-medium"
              style={{ background: BRAND.teal }}
            >
              <CalendarDays size={15} className="inline mr-2" />
              Book Session
            </button>

            <button className="px-4 py-2.5 rounded-xl bg-slate-50 text-sm font-medium">
              <FileText size={15} className="inline mr-2" />
              Add Note
            </button>

            <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {tabs.map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-xs font-medium transition",
                  tab === item
                    ? "text-white"
                    : "text-slate-500 hover:bg-slate-50"
                )}
                style={tab === item ? { background: BRAND.teal } : {}}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {tab === "Overview" && <ClientOverview client={client} />}
      {tab === "Sessions" && <SessionsTab client={client} />}
      {tab === "Clinical Notes" && <ClinicalNotesTab client={client} />}
      {tab === "Assessments" && <AssessmentsTab client={client} />}
      {tab === "Treatment Plan" && <TreatmentPlanTab client={client} />}
      {tab === "Homework" && <HomeworkTab client={client} />}
      {tab === "Documents" && <DocumentsTab />}
      {tab === "Payments" && <PaymentsTab client={client} />}
      {tab === "Activity" && <ActivityTab />}
    </div>
  );
}

/* =========================================================
   CLIENT OVERVIEW
========================================================= */

function ClientOverview({ client }) {
  return (
    <div className="grid xl:grid-cols-[1.5fr_1fr] gap-5">
      <div className="space-y-5">
        <SectionCard title="Clinical Snapshot" icon={Heart}>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Presenting Concerns
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {client.concerns.map((concern) => (
                <span
                  key={concern}
                  className="px-3 py-1.5 rounded-full text-xs"
                  style={{
                    background: "#EAF5F3",
                    color: BRAND.tealDark,
                  }}
                >
                  {concern}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 mt-5 pt-5">
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Current Focus
            </p>
            <p className="text-sm font-medium mt-2">
              Emotional regulation and establishing a consistent routine.
            </p>
          </div>
        </SectionCard>

        <SectionCard title="Treatment Goals" icon={Target}>
          <div className="space-y-3">
            {client.goals.map((goal, index) => (
              <div key={index} className="flex gap-3 items-center">
                {goal.completed ? (
                  <CheckCircle2
                    size={18}
                    style={{ color: BRAND.teal }}
                  />
                ) : (
                  <Circle size={18} className="text-slate-300" />
                )}

                <span
                  className={cn(
                    "text-sm",
                    goal.completed && "text-slate-400 line-through"
                  )}
                >
                  {goal.text}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Recent Session" icon={ClipboardList}>
          {client.sessions[0] ? (
            <div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-sm">
                    {client.sessions[0].date}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {client.sessions[0].type}
                  </p>
                </div>

                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    background: "#EAF5F3",
                    color: BRAND.teal,
                  }}
                >
                  Completed
                </span>
              </div>

              <div className="mt-5">
                <p className="text-xs text-slate-400">Session Focus</p>
                <p className="text-sm mt-1">{client.sessions[0].focus}</p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-slate-400">Interventions</p>
                <div className="flex gap-2 mt-2">
                  {client.sessions[0].interventions.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-slate-50 px-2 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-slate-400">Homework</p>
                <p className="text-sm mt-1">{client.sessions[0].homework}</p>
              </div>
            </div>
          ) : (
            <EmptyState text="No sessions recorded yet." />
          )}
        </SectionCard>
      </div>

      <div className="space-y-5">
        <SectionCard title="Next Session" icon={CalendarDays}>
          <div
            className="rounded-xl p-4"
            style={{ background: "#EAF5F3" }}
          >
            <p className="text-xs" style={{ color: BRAND.teal }}>
              {client.nextSession}
            </p>

            <p className="text-xl font-semibold mt-1">{client.nextTime}</p>

            <p className="text-sm mt-2">Individual Therapy</p>

            <div className="flex items-center gap-2 text-xs text-slate-500 mt-3">
              <Video size={13} />
              {client.mode}
            </div>

            <button
              className="w-full mt-4 py-2.5 rounded-xl text-white text-sm font-medium"
              style={{ background: BRAND.teal }}
            >
              Start Session
            </button>
          </div>
        </SectionCard>

        <SectionCard title="Assessments" icon={ClipboardCheck}>
          {client.assessments.length > 0 ? (
            <div className="space-y-4">
              {client.assessments.map((assessment) => (
                <div key={assessment.name}>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">{assessment.name}</p>
                    <p className="font-semibold">{assessment.score}</p>
                  </div>

                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-slate-400">
                      Previous: {assessment.previous}
                    </p>
                    <p className="text-xs" style={{ color: BRAND.teal }}>
                      {assessment.interpretation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState text="No assessments yet." />
          )}
        </SectionCard>

        <SectionCard title="Contact" icon={MessageCircle}>
          <div className="space-y-3">
            <InfoRow label="Phone" value={client.phone} />
            <InfoRow label="Email" value={client.email} />
            <InfoRow label="Mode" value={client.mode} />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

/* =========================================================
   TABS
========================================================= */

function SessionsTab({ client }) {
  return (
    <SectionCard title="Session History" icon={ClipboardList}>
      {client.sessions.length ? (
        <div className="space-y-3">
          {client.sessions.map((session) => (
            <div
              key={session.id}
              className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="w-20">
                  <p className="text-xs text-slate-400">{session.date}</p>
                  <p className="text-xs font-medium mt-1">{session.time}</p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">{session.type}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {session.focus}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      background: "#EAF5F3",
                      color: BRAND.teal,
                    }}
                  >
                    {session.noteStatus}
                  </span>

                  <ChevronRight size={15} className="text-slate-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState text="No sessions recorded." />
      )}
    </SectionCard>
  );
}

function ClinicalNotesTab() {
  return (
    <div className="space-y-5">
      <SectionCard title="Clinical Notes" icon={FileText}>
        <div className="grid md:grid-cols-2 gap-4">
          <NoteField label="Session Focus" />
          <NoteField label="Presenting Concerns" />
          <NoteField label="Mental Status Examination" large />
          <NoteField label="Interventions Used" />
          <NoteField label="Client Response" large />
          <NoteField label="Progress" />
          <NoteField label="Risk Assessment" />
          <NoteField label="Homework" />
          <NoteField label="Next Session Plan" large />
        </div>

        <div className="flex justify-end gap-2 mt-5">
          <button className="px-4 py-2 rounded-xl bg-slate-50 text-sm">
            Save Draft
          </button>

          <button
            className="px-4 py-2 rounded-xl text-white text-sm"
            style={{ background: BRAND.teal }}
          >
            Complete Note
          </button>
        </div>
      </SectionCard>
    </div>
  );
}

function AssessmentsTab({ client }) {
  return (
    <SectionCard
      title="Assessments"
      icon={ClipboardCheck}
      action={
        <button
          className="px-3 py-2 rounded-lg text-xs text-white"
          style={{ background: BRAND.teal }}
        >
          + Assign Assessment
        </button>
      }
    >
      <div className="grid md:grid-cols-3 gap-4">
        {client.assessments.map((assessment) => (
          <div
            key={assessment.name}
            className="border border-slate-100 rounded-xl p-4"
          >
            <p className="text-sm font-medium">{assessment.name}</p>

            <p className="text-3xl font-semibold mt-4">
              {assessment.score}
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Previous: {assessment.previous}
            </p>

            <div
              className="text-xs mt-4"
              style={{ color: BRAND.teal }}
            >
              {assessment.interpretation}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function TreatmentPlanTab({ client }) {
  return (
    <div className="grid xl:grid-cols-2 gap-5">
      <SectionCard title="Presenting Concerns" icon={Heart}>
        <div className="flex flex-wrap gap-2">
          {client.concerns.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-full text-xs"
              style={{
                background: "#EAF5F3",
                color: BRAND.tealDark,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Review Date" icon={CalendarDays}>
        <p className="text-2xl font-semibold">15 September 2026</p>
        <p className="text-xs text-slate-400 mt-2">
          Treatment plan review scheduled.
        </p>
      </SectionCard>

      <SectionCard title="Short-Term Goals" icon={Target}>
        <GoalList goals={client.goals.filter((g) => !g.completed)} />
      </SectionCard>

      <SectionCard title="Long-Term Goals" icon={Target}>
        <GoalList
          goals={[
            { text: "Improve emotional regulation", completed: false },
            { text: "Improve daily functioning", completed: false },
          ]}
        />
      </SectionCard>

      <SectionCard title="Interventions" icon={BookOpen}>
        <div className="flex flex-wrap gap-2">
          {["CBT", "Mindfulness", "Grounding", "Psychoeducation"].map(
            (item) => (
              <span
                key={item}
                className="px-3 py-2 rounded-lg bg-slate-50 text-xs"
              >
                {item}
              </span>
            )
          )}
        </div>
      </SectionCard>
    </div>
  );
}

function HomeworkTab({ client }) {
  return (
    <SectionCard
      title="Homework"
      icon={BookOpen}
      action={
        <button
          className="px-3 py-2 rounded-lg text-xs text-white"
          style={{ background: BRAND.teal }}
        >
          + Assign Homework
        </button>
      }
    >
      <div className="space-y-3">
        {client.homework.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-slate-100 flex items-center gap-4"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "#EAF5F3", color: BRAND.teal }}
            >
              <BookOpen size={17} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-slate-400 mt-1">
                Due {item.due}
              </p>
            </div>

            <StatusBadge status={item.status} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function DocumentsTab() {
  const documents = [
    ["Consent Form", "Signed"],
    ["Intake Form", "Completed"],
    ["Case History", "Completed"],
    ["Treatment Plan", "Active"],
  ];

  return (
    <SectionCard
      title="Documents"
      icon={FileText}
      action={
        <button className="px-3 py-2 rounded-lg bg-slate-50 text-xs">
          <Upload size={13} className="inline mr-1" />
          Upload
        </button>
      }
    >
      <div className="space-y-2">
        {documents.map(([name, status]) => (
          <div
            key={name}
            className="p-4 rounded-xl border border-slate-100 flex items-center gap-3"
          >
            <FileText size={18} className="text-slate-400" />

            <div className="flex-1">
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-slate-400 mt-1">{status}</p>
            </div>

            <button className="text-xs" style={{ color: BRAND.teal }}>
              View
            </button>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function PaymentsTab({ client }) {
  const total = client.payments.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-5">
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard
          title="Total Paid"
          value={formatCurrency(total)}
          subtitle="This client"
          icon={CreditCard}
        />

        <StatCard
          title="Pending"
          value="₹0"
          subtitle="No pending payments"
          icon={CheckCircle2}
        />

        <StatCard
          title="Package"
          value="3 / 4"
          subtitle="Sessions used"
          icon={ClipboardList}
        />
      </div>

      <SectionCard title="Payment History" icon={CreditCard}>
        <div className="space-y-2">
          {client.payments.map((payment, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border-b border-slate-100 last:border-0"
            >
              <div className="flex-1">
                <p className="text-sm font-medium">
                  {payment.description}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {payment.date}
                </p>
              </div>

              <p className="font-medium text-sm">
                {formatCurrency(payment.amount)}
              </p>

              <StatusBadge status={payment.status} />
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function ActivityTab() {
  return (
    <SectionCard title="Activity" icon={Clock}>
      <div className="space-y-5">
        {[
          ["22 Aug 2026", "Session note completed"],
          ["22 Aug 2026", "Homework assigned"],
          ["20 Aug 2026", "Assessment completed"],
          ["15 Aug 2026", "Session completed"],
        ].map(([date, action], index) => (
          <div key={index} className="flex gap-3">
            <div
              className="w-2 h-2 rounded-full mt-2"
              style={{ background: BRAND.teal }}
            />

            <div>
              <p className="text-sm">{action}</p>
              <p className="text-xs text-slate-400 mt-1">{date}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* =========================================================
   ADD CLIENT
========================================================= */

function AddClientModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    mode: "Online",
    concerns: [],
  });

  const concernOptions = [
    "Anxiety",
    "Stress",
    "Sleep",
    "Depression",
    "Academic Stress",
    "Career",
    "Relationships",
    "Anger",
    "Self-esteem",
  ];

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleConcern = (concern) => {
    setForm((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((x) => x !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName) return;

    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-5 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <div>
            <h2 className="font-semibold text-lg">Add New Client</h2>
            <p className="text-xs text-slate-400 mt-1">
              Create a client record.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={submit} className="p-5 space-y-6">
          <FormSection title="Basic Information">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                required
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
              />

              <Input
                label="Last Name"
                required
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
              />

              <Input
                label="Age"
                type="number"
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
              />

              <Select
                label="Gender"
                value={form.gender}
                onChange={(e) => update("gender", e.target.value)}
                options={["Female", "Male", "Non-binary", "Prefer not to say"]}
              />

              <Input
                label="Phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />

              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>
          </FormSection>

          <FormSection title="Session Preferences">
            <Select
              label="Preferred Mode"
              value={form.mode}
              onChange={(e) => update("mode", e.target.value)}
              options={["Online", "In-person"]}
            />
          </FormSection>

          <FormSection title="Presenting Concerns">
            <div className="flex flex-wrap gap-2">
              {concernOptions.map((concern) => {
                const selected = form.concerns.includes(concern);

                return (
                  <button
                    type="button"
                    key={concern}
                    onClick={() => toggleConcern(concern)}
                    className="px-3 py-2 rounded-lg text-xs border transition"
                    style={
                      selected
                        ? {
                            background: "#EAF5F3",
                            borderColor: BRAND.teal,
                            color: BRAND.tealDark,
                          }
                        : {}
                    }
                  >
                    {concern}
                  </button>
                );
              })}
            </div>
          </FormSection>

          <FormSection title="Consent">
            <div className="space-y-3">
              <CheckOption label="Client has provided therapy consent" />
              <CheckOption label="Privacy policy acknowledged" />
              <CheckOption label="Communication consent provided" />
            </div>
          </FormSection>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-50 text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-white text-sm font-medium"
              style={{ background: BRAND.teal }}
            >
              Create Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionCard({ title, icon: Icon, action, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "#EAF5F3",
                color: BRAND.teal,
              }}
            >
              <Icon size={15} />
            </div>
          )}

          <h2 className="font-semibold text-sm">{title}</h2>
        </div>

        {action}
      </div>

      {children}
    </div>
  );
}

function Avatar({ initials, size = "md" }) {
  const sizes = {
    md: "w-10 h-10 text-xs",
    lg: "w-12 h-12 text-sm",
    xl: "w-16 h-16 text-base",
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-semibold shrink-0",
        sizes[size]
      )}
      style={{
        background: "#EAF5F3",
        color: BRAND.teal,
      }}
    >
      {initials}
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Active: {
      background: "#EAF5F3",
      color: BRAND.teal,
    },
    New: {
      background: "#FFF7E8",
      color: "#9A7228",
    },
    "On Hold": {
      background: "#F1F2F4",
      color: "#69707D",
    },
    Completed: {
      background: "#EEF1F0",
      color: "#5B6A65",
    },
    Paid: {
      background: "#EAF5F3",
      color: BRAND.teal,
    },
    Pending: {
      background: "#FFF7E8",
      color: "#9A7228",
    },
  };

  return (
    <span
      className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-medium"
      style={styles[status] || styles.Completed}
    >
      {status}
    </span>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-xs text-slate-400">{label}</span>
      <span className="text-xs font-medium text-right">{value}</span>
    </div>
  );
}

function EmptyState({ text }) {
  return (
    <div className="py-10 text-center">
      <Circle className="mx-auto text-slate-200" size={30} />
      <p className="text-sm text-slate-400 mt-3">{text}</p>
    </div>
  );
}

function GoalList({ goals }) {
  return (
    <div className="space-y-3">
      {goals.map((goal, index) => (
        <div key={index} className="flex items-center gap-3">
          <Circle size={16} className="text-slate-300" />
          <span className="text-sm">{goal.text}</span>
        </div>
      ))}
    </div>
  );
}

function NoteField({ label, large }) {
  return (
    <div className={large ? "md:col-span-2" : ""}>
      <label className="text-xs font-medium text-slate-600">
        {label}
      </label>

      <textarea
        rows={large ? 4 : 3}
        className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[#087F7B]/20"
        placeholder={`Enter ${label.toLowerCase()}...`}
      />
    </div>
  );
}

function FormSection({ title, children }) {
  return (
    <section>
      <h3 className="text-sm font-semibold mb-4">{title}</h3>
      {children}
    </section>
  );
}

function Input({ label, required, ...props }) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        {...props}
        className="mt-2 w-full h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-[#087F7B]/20"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-600">{label}</label>

      <select
        {...props}
        className="mt-2 w-full h-11 rounded-xl border border-slate-200 px-3 text-sm bg-white outline-none focus:ring-2 focus:ring-[#087F7B]/20"
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function CheckOption({ label }) {
  return (
    <label className="flex items-center gap-3 text-sm text-slate-600">
      <input type="checkbox" className="w-4 h-4 accent-[#087F7B]" />
      {label}
    </label>
  );
}

function getPageTitle(page) {
  const titles = {
    calendar: "Calendar",
    sessions: "Sessions",
    assessments: "Assessments",
    "treatment-plans": "Treatment Plans",
    resources: "Resources",
    payments: "Payments",
    reports: "Reports",
    settings: "Settings",
    profile: "My Profile",
  };

  return titles[page] || "Psychobeings";
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div
          className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center"
          style={{
            background: "#EAF5F3",
            color: BRAND.teal,
          }}
        >
          <BarChart3 size={24} />
        </div>

        <h1 className="text-xl font-semibold mt-5">{title}</h1>

        <p className="text-sm text-slate-400 mt-2 max-w-sm">
          This module is ready to be connected to the Psychobeings
          clinical workflow.
        </p>
      </div>
    </div>
  );
}