import React from 'react';
import {
  Bell,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

const DashboardView = ({ onNavigate }) => {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Greeting Banner */}
      <div>
        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
          SUNDAY, 23 AUGUST 2026
        </p>
        <h1 className="mt-1 text-3xl font-black text-[#3b1254]">
          Good evening, Amanpreet.
        </h1>
        <p className="mt-2 text-xs font-medium text-slate-600 flex items-center gap-2">
          <Sparkles size={15} className="text-[#7c24a6]" />
          I messaged Garima about taking a follow-up session.
        </p>
      </div>

      {/* Retain Clients Alert Cards */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              RETAIN CLIENTS
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-500"></span> 3 medium</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500"></span> 3 high</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Client Card 1 */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">DEEPANSHU RAWAT</span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-bold text-[#7c24a6]">High drop-off risk</span>
            </div>
            <p className="text-xs text-slate-500">No session in 57 days</p>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#7c24a6] py-2 text-xs font-bold text-white shadow-sm">
                <MessageSquare size={13} /> Message
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-slate-700">
                <Phone size={13} /> Call
              </button>
            </div>
          </div>

          {/* Client Card 2 */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">Diya Ghosh</span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-bold text-[#7c24a6]">High drop-off risk</span>
            </div>
            <p className="text-xs text-slate-500">No session in 44 days</p>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#7c24a6] py-2 text-xs font-bold text-white shadow-sm">
                <MessageSquare size={13} /> Message
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-slate-700">
                <Phone size={13} /> Call
              </button>
            </div>
          </div>

          {/* Client Card 3 */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">Sahahrejeet singh...</span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-bold text-[#7c24a6]">High drop-off risk</span>
            </div>
            <p className="text-xs text-slate-500">No session in 22 days</p>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#7c24a6] py-2 text-xs font-bold text-white shadow-sm">
                <MessageSquare size={13} /> Message
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-slate-700">
                <Phone size={13} /> Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Booking Widget */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Want to take a direct booking?</h3>
          <p className="text-xs text-slate-500 mt-0.5">Stay the flow — schedule a session for any client right now.</p>
        </div>
        <button onClick={() => onNavigate('schedule')} className="rounded-2xl bg-[#7c24a6] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#681d8c]">
          + New Booking
        </button>
      </div>

      {/* Revenue Insight Card */}
      <div className="rounded-3xl border border-purple-100 bg-purple-50/50 p-6 shadow-sm flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c24a6]">Kiara Insights</span>
          <p className="text-xs font-bold text-slate-800">
            "Don't leave money on the table. You have an earning potential of ₹1,694 this month."
          </p>
        </div>
        <button onClick={() => onNavigate('billing')} className="rounded-xl border border-purple-200 bg-white px-4 py-2 text-xs font-bold text-[#7c24a6]">
          Know more
        </button>
      </div>

      {/* Notification Centre */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Bell size={16} className="text-[#7c24a6]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">Notification Centre</h3>
        </div>
        <div className="space-y-3">
          {[
            'I messaged Garima, you\'ve confirmed the booking.',
            'I messaged Garima taking a follow-up session.',
            'I\'ve emailed Juhi Dharewa that the booking has been rescheduled.',
          ].map((notice, idx) => (
            <div key={idx} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3.5 text-xs font-medium text-slate-700">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">✓</span>
              {notice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;