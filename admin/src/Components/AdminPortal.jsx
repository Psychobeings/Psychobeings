import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  AlertTriangle, ArrowUpRight, Bot, BookOpen, CalendarDays, Check, ChevronRight,
  CircleHelp, Clock3, FileText, LifeBuoy, LoaderCircle,
  Mail, RefreshCw, ShieldCheck, Sparkles, Users
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api'
  : (process.env.REACT_APP_URL || 'http://localhost:8080').replace(/\/+$/u, '');
const adminApi = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

const LABELS = {
  dashboard: { title: 'Overview', eyebrow: 'Administration', subtitle: 'A current view of portal activity and safety alerts.' },
  'crisis-safety': { title: 'Crisis Safety Center', eyebrow: 'Safety operations', subtitle: 'Review AI-detected crisis alerts. Alerts are not a substitute for emergency response.' },
  users: { title: 'Users', eyebrow: 'Client management', subtitle: 'Client accounts registered in the secure portal.' },
  counselors: { title: 'Counselors', eyebrow: 'Care team', subtitle: 'Counselor records and access are managed here when the counselor management service is configured.' },
  bookings: { title: 'Bookings', eyebrow: 'Session management', subtitle: 'Review booking requests and confirm a session time.' },
  content: { title: 'Content manager', eyebrow: 'Resource library', subtitle: 'Manage wellbeing resources shown in the client portal.' },
  'ai-settings': { title: 'AI settings', eyebrow: 'Psycho Buddy', subtitle: 'AI provider credentials are configured only on the backend, never in the browser.' },
  support: { title: 'Support', eyebrow: 'Client care', subtitle: 'Review contact messages and respond through your email client.' },
  'audit-log': { title: 'Audit log', eyebrow: 'Security', subtitle: 'Recent administrative actions recorded by the backend.' }
};

function getErrorMessage(error) {
  return error.response?.data?.message || 'Could not load this section. Please try again.';
}

function Panel({ children, className = '' }) {
  return <section className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}>{children}</section>;
}

function SectionHeading({ section, action }) {
  const content = LABELS[section];
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b9996]">{content.eyebrow}</p>
        <h1 className="text-2xl font-semibold tracking-tight text-[#102b40] sm:text-3xl">{content.title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{content.subtitle}</p>
      </div>
      {action}
    </div>
  );
}

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center px-5 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500"><Icon size={21} aria-hidden="true" /></span>
      <h2 className="mt-4 text-sm font-semibold text-slate-800">{title}</h2>
      <p className="mt-2 max-w-lg text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function formatDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '—' : new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

function Overview({ data, onNavigate }) {
  const stats = [
    { label: 'Client accounts', value: data?.clientCount, icon: Users, tone: 'teal' },
    { label: 'Pending bookings', value: data?.pendingBookings, icon: CalendarDays, tone: 'blue' },
    { label: 'Open crisis alerts', value: data?.openCrisisAlerts, icon: AlertTriangle, tone: 'amber' },
    { label: 'Admin accounts', value: data?.adminCount, icon: ShieldCheck, tone: 'slate' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <Panel key={label} className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">{label}</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-[#102b40]">{value ?? '—'}</p>
            </div>
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              tone === 'amber' ? 'bg-amber-50 text-amber-700' : tone === 'teal' ? 'bg-teal-50 text-teal-700' : tone === 'blue' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'
            }`}><Icon size={19} aria-hidden="true" /></span>
          </Panel>
        ))}
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
        <Panel>
          <div className="mb-4 flex items-center justify-between">
            <div><h2 className="text-sm font-semibold text-[#102b40]">Safety queue</h2><p className="mt-1 text-xs text-slate-500">Open alerts require appropriate human review.</p></div>
            <AlertTriangle size={18} className="text-amber-600" aria-hidden="true" />
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-4">
            <p className="text-sm font-semibold text-amber-950">{data?.openCrisisAlerts ?? '—'} open alerts</p>
            <p className="mt-1 text-xs leading-5 text-amber-900/75">A crisis alert is a signal for review, not a diagnosis or a complete safety assessment.</p>
          </div>
          <button type="button" onClick={() => onNavigate('/crisis-safety')} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#007f80] hover:underline">Open Crisis Safety Center <ArrowUpRight size={14} aria-hidden="true" /></button>
        </Panel>
        <Panel>
          <h2 className="text-sm font-semibold text-[#102b40]">Quick actions</h2>
          <div className="mt-4 space-y-2">
            {[
              { label: 'Review client accounts', path: '/users', icon: Users },
              { label: 'Check pending bookings', path: '/bookings', icon: CalendarDays },
              { label: 'Open support inbox', path: '/support', icon: LifeBuoy }
            ].map(({ label, path, icon: Icon }) => (
              <button key={path} type="button" onClick={() => onNavigate(path)} className="flex w-full items-center gap-3 rounded-xl border border-slate-100 px-3 py-3 text-left text-xs font-semibold text-slate-700 transition hover:border-teal-100 hover:bg-teal-50/50">
                <Icon size={16} className="text-[#007f80]" aria-hidden="true" />{label}<ChevronRight size={14} className="ml-auto text-slate-400" aria-hidden="true" />
              </button>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function CrisisQueue({ alerts, onUpdate, updatingId }) {
  return (
    <Panel>
      {alerts.length === 0 ? (
        <EmptyState icon={ShieldCheck} title="No open alerts" description="There are currently no open crisis alerts in the queue. Continue to follow your established safety and escalation procedures." />
      ) : (
        <div className="divide-y divide-slate-100">
          {alerts.map((alert) => (
            <article key={alert._id} className="py-5 first:pt-0 last:pb-0">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase text-amber-800">{alert.status}</span>
                    <span className="text-[10px] text-slate-400">{formatDate(alert.createdAt)}</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-500">Client: {alert.userId?.email || 'Account unavailable'}</p>
                  <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-slate-800">{alert.message}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(alert.detectedSignals || []).map((signal) => <span key={signal} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600">{signal.replace(/-/gu, ' ')}</span>)}
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  {alert.status === 'open' && <button type="button" disabled={updatingId === alert._id} onClick={() => onUpdate(alert._id, 'reviewed')} className="rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50">{updatingId === alert._id ? 'Saving...' : 'Mark reviewed'}</button>}
                  {alert.status !== 'resolved' && <button type="button" disabled={updatingId === alert._id} onClick={() => onUpdate(alert._id, 'resolved')} className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F2D3A] px-3 py-2 text-[10px] font-semibold text-white hover:bg-[#16445a] disabled:opacity-50"><Check size={13} aria-hidden="true" /> Resolve</button>}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </Panel>
  );
}

function UsersTable({ users }) {
  if (!users.length) return <Panel><EmptyState icon={Users} title="No client accounts yet" description="Client accounts created through the client portal will appear here." /></Panel>;
  return (
    <Panel className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-xs">
          <thead className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4 font-semibold">Client</th><th className="px-5 py-4 font-semibold">Account created</th><th className="px-5 py-4 font-semibold">Consent recorded</th><th className="px-5 py-4 font-semibold">Role</th></tr></thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user) => <tr key={user._id} className="hover:bg-slate-50/70"><td className="px-5 py-4 font-medium text-slate-800">{user.email}</td><td className="px-5 py-4 text-slate-500">{formatDate(user.createdAt)}</td><td className="px-5 py-4 text-slate-500">{formatDate(user.consentAt)}</td><td className="px-5 py-4"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold text-teal-800">Customer</span></td></tr>)}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

function BookingsTable({ bookings, onConfirm, updatingId, timeValues, onTimeChange }) {
  if (!bookings.length) return <Panel><EmptyState icon={CalendarDays} title="No booking requests" description="New public session booking requests will appear here." /></Panel>;
  return (
    <Panel className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-xs">
          <thead className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4 font-semibold">Client</th><th className="px-5 py-4 font-semibold">Requested date</th><th className="px-5 py-4 font-semibold">Preference</th><th className="px-5 py-4 font-semibold">Concern</th><th className="px-5 py-4 font-semibold">Status / action</th></tr></thead>
          <tbody className="divide-y divide-slate-100">
            {bookings.map((booking) => (
              <tr key={booking._id} className="align-top hover:bg-slate-50/70">
                <td className="px-5 py-4"><p className="font-semibold text-slate-800">{booking.name}</p><p className="mt-1 text-[10px] text-slate-500">{booking.email}</p></td>
                <td className="px-5 py-4 text-slate-600">{formatDate(booking.date)}</td>
                <td className="px-5 py-4 text-slate-600">{booking.timeSlot || '—'}{booking.sessionTime && <p className="mt-1 text-[10px] text-teal-700">{booking.sessionTime}</p>}</td>
                <td className="max-w-[220px] whitespace-pre-wrap px-5 py-4 text-slate-600">{booking.concern}</td>
                <td className="px-5 py-4">
                  {booking.status ? <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">Confirmed</span> : (
                    <div className="flex items-center gap-2">
                      <input type="time" aria-label={`Session time for ${booking.name}`} value={timeValues[booking._id] || ''} onChange={(event) => onTimeChange(booking._id, event.target.value)} className="rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] outline-none focus:border-teal-600" />
                      <button type="button" disabled={!timeValues[booking._id] || updatingId === booking._id} onClick={() => onConfirm(booking._id)} className="rounded-lg bg-[#0F2D3A] px-2.5 py-2 text-[10px] font-semibold text-white hover:bg-[#16445a] disabled:opacity-40">{updatingId === booking._id ? 'Saving' : 'Confirm'}</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

function SupportInbox({ messages, onUpdate, updatingId }) {
  if (!messages.length) return <Panel><EmptyState icon={LifeBuoy} title="No support messages" description="Messages sent through the public contact form will appear here." /></Panel>;
  return (
    <div className="space-y-3">
      {messages.map((message) => (
        <Panel key={message._id}>
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2"><h2 className="text-sm font-semibold text-slate-800">{message.name}</h2><span className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${message.status === 'new' ? 'bg-amber-50 text-amber-700' : message.status === 'replied' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'}`}>{message.status}</span></div>
              <p className="mt-1 break-all text-xs text-teal-700">{message.email}</p>
              <p className="mt-1 text-[10px] text-slate-400">{formatDate(message.createdAt)} · {message.subject || 'General inquiry'}</p>
              <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-slate-700">{message.message}</p>
            </div>
            <div className="flex shrink-0 flex-row gap-2 sm:flex-col">
              <a href={`mailto:${encodeURIComponent(message.email)}?subject=${encodeURIComponent(`Re: ${message.subject || 'Your inquiry'}`)}`} className="rounded-lg bg-[#0F2D3A] px-3 py-2 text-center text-[10px] font-semibold text-white hover:bg-[#16445a]">Reply by email</a>
              {message.status !== 'read' && <button type="button" disabled={updatingId === message._id} onClick={() => onUpdate(message._id, 'read')} className="rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50">Mark read</button>}
              {message.status !== 'replied' && <button type="button" disabled={updatingId === message._id} onClick={() => onUpdate(message._id, 'replied')} className="rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50">Mark replied</button>}
            </div>
          </div>
        </Panel>
      ))}
    </div>
  );
}

function AuditTable({ logs }) {
  if (!logs.length) return <Panel><EmptyState icon={FileText} title="No audit events yet" description="Administrative sign-ins and crisis alert status changes are recorded here." /></Panel>;
  return (
    <Panel className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-xs">
          <thead className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4 font-semibold">Time</th><th className="px-5 py-4 font-semibold">Administrator</th><th className="px-5 py-4 font-semibold">Action</th><th className="px-5 py-4 font-semibold">Resource</th></tr></thead>
          <tbody className="divide-y divide-slate-100">{logs.map((log) => <tr key={log._id}><td className="px-5 py-4 text-slate-500">{formatDate(log.createdAt)}</td><td className="px-5 py-4 text-slate-700">{log.actorId?.email || 'Administrator'}</td><td className="px-5 py-4 font-medium text-slate-800">{log.action}</td><td className="px-5 py-4 font-mono text-[10px] text-slate-500">{log.resourceId || '—'}</td></tr>)}</tbody>
        </table>
      </div>
    </Panel>
  );
}

export default function AdminPortal() {
  const location = useLocation();
  const navigate = useNavigate();
  const section = useMemo(() => {
    const path = location.pathname;
    if (path === '/crisis-safety') return 'crisis-safety';
    if (path === '/users' || path === '/clients') return 'users';
    if (path === '/counselors') return 'counselors';
    if (path === '/bookings' || path === '/calendar') return 'bookings';
    if (path === '/content') return 'content';
    if (path === '/ai-settings' || path === '/settings') return 'ai-settings';
    if (path === '/support' || path === '/messages') return 'support';
    if (path === '/audit-log') return 'audit-log';
    return 'dashboard';
  }, [location.pathname]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState('');
  const [timeValues, setTimeValues] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);

  const loadSection = useCallback(async () => {
    const endpoint = {
      dashboard: '/admin/overview',
      'crisis-safety': '/admin/crisis-alerts?status=open',
      users: '/admin/users',
      bookings: '/session-form/details?limit=100',
      support: '/email/messages',
      'audit-log': '/admin/audit-log'
    }[section];

    if (!endpoint) {
      setData(null);
      setError('');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const { data: response } = await adminApi.get(endpoint);
      setData(response);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [section]);

  useEffect(() => {
    loadSection();
  }, [loadSection, refreshKey]);

  const updateCrisisAlert = async (id, status) => {
    setUpdatingId(id);
    setError('');
    try {
      await adminApi.patch(`/admin/crisis-alerts/${id}`, { status });
      setRefreshKey((key) => key + 1);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setUpdatingId('');
    }
  };

  const confirmBooking = async (id) => {
    setUpdatingId(id);
    setError('');
    try {
      await adminApi.put('/session-form/book', { id, sessionTime: timeValues[id] });
      setRefreshKey((key) => key + 1);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setUpdatingId('');
    }
  };

  const updateMessage = async (id, status) => {
    setUpdatingId(id);
    setError('');
    try {
      await adminApi.patch(`/email/messages/${id}/status`, { status });
      setRefreshKey((key) => key + 1);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setUpdatingId('');
    }
  };

  const records = section === 'crisis-safety' ? data?.alerts
    : section === 'users' ? data?.clients
      : section === 'bookings' ? data?.result
        : section === 'support' ? data
          : section === 'audit-log' ? data?.logs
            : [];
  const list = Array.isArray(records) ? records : [];

  return (
    <div>
      <SectionHeading
        section={section}
        action={<button type="button" onClick={() => setRefreshKey((key) => key + 1)} disabled={loading} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-teal-200 hover:text-teal-700 disabled:opacity-50"><RefreshCw size={14} className={loading ? 'animate-spin' : ''} aria-hidden="true" />Refresh</button>}
      />

      {error && <div role="alert" className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>}
      {loading ? (
        <Panel className="flex items-center justify-center gap-3 py-14 text-sm text-slate-500"><LoaderCircle size={18} className="animate-spin text-teal-700" aria-hidden="true" />Loading secure data...</Panel>
      ) : section === 'dashboard' ? (
        <Overview data={data} onNavigate={(path) => navigate(path)} />
      ) : section === 'crisis-safety' ? (
        <CrisisQueue alerts={list} onUpdate={updateCrisisAlert} updatingId={updatingId} />
      ) : section === 'users' ? (
        <UsersTable users={list} />
      ) : section === 'bookings' ? (
        <BookingsTable
          bookings={list}
          onConfirm={confirmBooking}
          updatingId={updatingId}
          timeValues={timeValues}
          onTimeChange={(id, value) => setTimeValues((current) => ({ ...current, [id]: value }))}
        />
      ) : section === 'support' ? (
        <SupportInbox messages={list} onUpdate={updateMessage} updatingId={updatingId} />
      ) : section === 'audit-log' ? (
        <AuditTable logs={list} />
      ) : section === 'counselors' ? (
        <Panel><EmptyState icon={Users} title="Counselor management is not connected yet" description="The current backend does not expose counselor listing or management endpoints. No counselor data is fabricated in this view." /></Panel>
      ) : section === 'content' ? (
        <Panel><EmptyState icon={BookOpen} title="Content management is not connected yet" description="The current backend does not provide persisted content-library management. Client-facing resources remain read-only until those APIs are available." /></Panel>
      ) : (
        <div className="space-y-5">
          <Panel>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Bot size={20} aria-hidden="true" /></span>
              <div>
                <h2 className="text-sm font-semibold text-[#102b40]">AI provider connection</h2>
                <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500">Claude credentials and model selection are server-side environment settings. The browser never receives provider secrets, and this screen does not expose or modify them.</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-600"><ShieldCheck size={14} aria-hidden="true" /> Server-managed configuration</div>
              </div>
            </div>
          </Panel>
          <Panel>
            <div className="flex items-start gap-3">
              <Sparkles size={17} className="mt-0.5 text-teal-700" aria-hidden="true" />
              <div><h2 className="text-xs font-semibold text-slate-800">Safety behavior</h2><p className="mt-1 text-xs leading-5 text-slate-500">Crisis screening runs before requests reach the AI provider. The companion is instructed not to diagnose or prescribe.</p></div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <CircleHelp size={17} className="mt-0.5 text-teal-700" aria-hidden="true" />
              <div><h2 className="text-xs font-semibold text-slate-800">Changes to provider settings</h2><p className="mt-1 text-xs leading-5 text-slate-500">Update ANTHROPIC_API_KEY and ANTHROPIC_MODEL in the server’s deployment environment, then restart the backend. Never paste credentials into this page.</p></div>
            </div>
          </Panel>
        </div>
      )}

      {section === 'crisis-safety' && (
        <p className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[11px] leading-5 text-amber-950"><AlertTriangle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />If a person may be in immediate danger, follow your organization’s established emergency response protocol. In India, emergency services are available at 112 and Tele-MANAS at 14416.</p>
      )}
      {section === 'support' && (
        <p className="mt-4 flex items-start gap-2 text-[10px] leading-5 text-slate-400"><Mail size={13} className="mt-0.5 shrink-0" aria-hidden="true" />Replies open your configured email application; this workspace does not send support replies on your behalf.</p>
      )}
      {section === 'ai-settings' && (
        <p className="mt-4 flex items-start gap-2 text-[10px] leading-5 text-slate-400"><Clock3 size={13} className="mt-0.5 shrink-0" aria-hidden="true" />Client messages and crisis alerts may contain sensitive information. Follow your organization’s retention and review policies.</p>
      )}
    </div>
  );
}
