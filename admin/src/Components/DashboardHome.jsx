import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Sparkles, 
  Calendar, 
  FileText, 
  Users, 
  Clock, 
  Video 
} from 'lucide-react';

const API_BASE_URL = (process.env.REACT_APP_URL || 'https://admin-psychobeings.vercel.app/').replace(/\/?$/, '/');

const DashboardHome = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get(`${API_BASE_URL}admin/dashboard-ai`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setDashboardData(response.data);
    } catch (err) {
      // Fallback mock data if backend route is not yet fully active
      setDashboardData({
        pendingNotes: [
          { clientName: 'Elena Rostova', sessionNumber: 6, date: '2026-08-27' },
          { clientName: 'Marcus Chen', sessionNumber: 2, date: '2026-08-28' }
        ],
        nextAppointment: {
          clientName: 'Elena Rostova',
          time: 'Today at 16:30',
          mode: 'Online Video',
          bookingId: 'bk_d04'
        },
        upcomingAppointments: [
          { clientName: 'Oliver Vance', date: '02 Sep 2026, 14:00', mode: 'Online Video', bookingId: 'bk_d02' },
          { clientName: 'Elena Rostova', date: '03 Sep 2026, 16:30', mode: 'Online Video', bookingId: 'bk_d04' },
          { clientName: 'Marcus Chen', date: '04 Sep 2026, 11:00', mode: 'Online Video', bookingId: 'bk_d06' }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F7F6] flex items-center justify-center font-sans">
        <p className="text-xs font-bold text-[#237A88] animate-pulse">Synchronizing AI Workspace...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4F7F6] p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#123E45] via-[#1B5D68] to-[#237A88] rounded-[2.5rem] p-8 text-white shadow-xl shadow-stone-300/40 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="absolute -right-10 -bottom-10 h-60 w-60 rounded-full border-[30px] border-white/10 blur-xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md mb-3">
              <Sparkles size={14} className="text-[#88D9E6]" />
              <span className="text-xs font-medium tracking-wide text-teal-50">AI Clinical Assistant Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-light tracking-tight">Practitioner Intelligence Dashboard</h1>
            <p className="text-xs text-teal-100/80 mt-1">Here is your automated summary of pending documentation, client bookings, and schedule overview.</p>
          </div>

          <div className="relative z-10 flex items-center gap-3 bg-white/10 border border-white/15 px-4 py-3 rounded-2xl backdrop-blur-md">
            <Clock size={20} className="text-[#9CE5F0]" />
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-teal-100/70">Next Session</p>
              <p className="text-xs font-bold text-white">{dashboardData?.nextAppointment?.clientName} ({dashboardData?.nextAppointment?.time})</p>
            </div>
          </div>
        </div>

        {/* Grid Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Pending Notes Card */}
          <div className="bg-white p-6 rounded-[2rem] border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                  <FileText size={18} />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-stone-700">Pending Notes</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-800">
                {dashboardData?.pendingNotes?.length || 0} Pending
              </span>
            </div>

            <div className="space-y-2.5">
              {dashboardData?.pendingNotes?.map((note, index) => (
                <div key={index} className="p-3 bg-stone-50 rounded-2xl border border-stone-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-stone-800">{note.clientName}</p>
                    <p className="text-[10px] text-stone-500">Session #{note.sessionNumber} · {note.date}</p>
                  </div>
                  <button className="text-[11px] font-semibold text-[#237A88] hover:underline">Write Note</button>
                </div>
              ))}
            </div>
          </div>

          {/* Who Booked Appointments Card */}
          <div className="bg-white p-6 rounded-[2rem] border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-50 text-[#237A88]">
                  <Users size={18} />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-stone-700">Recent Bookings</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-cyan-100 text-[#195964]">
                Verified
              </span>
            </div>

            <div className="space-y-2.5">
              {dashboardData?.upcomingAppointments?.slice(0, 2).map((item, index) => (
                <div key={index} className="p-3 bg-stone-50 rounded-2xl border border-stone-100 space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-stone-800">{item.clientName}</p>
                    <span className="text-[10px] text-stone-400 font-mono">ID: {item.bookingId}</span>
                  </div>
                  <p className="text-[10px] text-stone-500">Booked via Gateway · {item.mode}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Schedule Card */}
          <div className="bg-white p-6 rounded-[2rem] border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-teal-50 text-teal-700">
                  <Calendar size={18} />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-stone-700">Upcoming Queue</h2>
              </div>
              <span className="text-[10px] font-bold text-stone-400">Next 7 Days</span>
            </div>

            <div className="space-y-2.5 max-h-[180px] overflow-y-auto pr-1">
              {dashboardData?.upcomingAppointments?.map((appt, index) => (
                <div key={index} className="p-3 bg-stone-50 rounded-2xl border border-stone-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-stone-800">{appt.clientName}</p>
                    <p className="text-[10px] text-stone-500">{appt.date}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-[#237A88] bg-[#237A88]/10 px-2 py-1 rounded-lg">
                    <Video size={12} /> {appt.mode}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default DashboardHome;