import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  Video, 
  MapPin, 
  Plus, 
  Search,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function DashboardHome() {
  const navigate = useNavigate();

  const todaysSessions = [
    {
      id: 1,
      clientName: "Sarah Jenkins",
      time: "09:00 AM - 09:50 AM",
      type: "Telehealth",
      status: "Completed",
      modality: "CBT - Anxiety",
    },
    {
      id: 2,
      clientName: "Michael Chen",
      time: "11:00 AM - 11:50 AM",
      type: "In-Person",
      location: "Office 2B",
      status: "In Progress",
      modality: "General Check-in",
    },
    {
      id: 3,
      clientName: "Emma Watson",
      time: "02:00 PM - 02:50 PM",
      type: "Telehealth",
      status: "Upcoming",
      modality: "EMDR Session",
    },
    {
      id: 4,
      clientName: "David Miller",
      time: "04:00 PM - 04:50 PM",
      type: "In-Person",
      location: "Office 2B",
      status: "Upcoming",
      modality: "Initial Assessment",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] p-6 md:p-12 text-stone-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#237A88]/10 text-[#237A88] text-xs font-semibold">
                <Sparkles size={13} />
                <span>Practitioner Workspace</span>
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-stone-900">Welcome back</h1>
            <p className="text-xs text-stone-500 mt-1">
              You have <span className="font-bold text-[#237A88]">4 sessions scheduled</span> for today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/clients')} 
              className="px-5 py-2.5 bg-white border border-stone-200 rounded-full text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors shadow-sm"
            >
              Client Roster
            </button>
            <button 
              onClick={() => navigate('/notes/new')} 
              className="px-5 py-2.5 bg-[#237A88] text-white rounded-full text-xs font-semibold hover:bg-[#1C646F] transition-all shadow-md shadow-[#237A88]/20 flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              New Progress Note
            </button>
          </div>
        </div>

        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-3xl border border-stone-100/80 shadow-sm flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center shrink-0">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Active Clients</p>
              <p className="text-2xl font-bold text-stone-900 mt-0.5">28</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-stone-100/80 shadow-sm flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Sessions Today</p>
              <p className="text-2xl font-bold text-stone-900 mt-0.5">4</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-stone-100/80 shadow-sm flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Pending Notes</p>
              <p className="text-2xl font-bold text-stone-900 mt-0.5">2</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-stone-100/80 shadow-sm flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Completed (Week)</p>
              <p className="text-2xl font-bold text-stone-900 mt-0.5">16</p>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Schedule (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-stone-900">Today's Schedule</h2>
              <button 
                onClick={() => navigate('/calendar')}
                className="text-xs font-semibold text-[#237A88] hover:text-[#1C646F] flex items-center gap-1 transition-colors"
              >
                View Full Calendar <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="bg-white border border-stone-100/80 rounded-3xl shadow-sm overflow-hidden divide-y divide-stone-100">
              {todaysSessions.map((session) => (
                <div key={session.id} className="p-5 hover:bg-stone-50/50 transition-colors flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {session.type === 'Telehealth' ? (
                      <span className="h-10 w-10 rounded-2xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center shrink-0">
                        <Video className="h-4 w-4" />
                      </span>
                    ) : (
                      <span className="h-10 w-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                        <MapPin className="h-4 w-4" />
                      </span>
                    )}

                    <div>
                      <h3 className="text-xs font-bold text-stone-900">{session.clientName}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-stone-400">
                        <span className="flex items-center gap-1 font-semibold text-stone-600">
                          <Clock className="h-3.5 w-3.5 text-stone-400" />
                          {session.time}
                        </span>
                        <span>•</span>
                        <span>{session.modality}</span>
                        {session.location && (
                          <>
                            <span>•</span>
                            <span>{session.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {session.status === 'Completed' && (
                      <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-stone-100 text-stone-600">
                        Completed
                      </span>
                    )}
                    {session.status === 'In Progress' && (
                      <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-amber-100 text-amber-800 animate-pulse">
                        In Progress
                      </span>
                    )}
                    {session.status === 'Upcoming' && (
                      <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-[#237A88]/10 text-[#237A88]">
                        Upcoming
                      </span>
                    )}

                    <button 
                      onClick={() => navigate(`/notes/new?client=${session.id}`)}
                      className="text-xs font-semibold px-4 py-1.5 rounded-full border border-stone-200 text-stone-700 hover:bg-[#237A88] hover:text-white hover:border-[#237A88] transition-all"
                    >
                      Note
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Search & Draft Notes (1 Column) */}
          <div className="space-y-6">
            {/* Quick Client Search */}
            <div className="bg-white p-6 rounded-3xl border border-stone-100/80 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-stone-900">Quick Client Search</h3>
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3.5 top-3.5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search by client name or ID..."
                  className="w-full pl-10 pr-4 py-3 text-xs bg-stone-50/70 border border-stone-200/80 rounded-2xl outline-none transition-all focus:border-[#237A88] focus:bg-white focus:ring-4 focus:ring-[#237A88]/10"
                />
              </div>
            </div>

            {/* Draft Progress Notes */}
            <div className="bg-white p-6 rounded-3xl border border-stone-100/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-stone-900">Draft Progress Notes</h3>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full">2 Pending</span>
              </div>

              <div className="space-y-3">
                <div 
                  onClick={() => navigate('/notes/edit/101')}
                  className="p-3.5 bg-stone-50/70 hover:bg-[#237A88]/5 rounded-2xl cursor-pointer transition-colors border border-stone-100"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-stone-900">Sarah Jenkins</p>
                    <span className="text-[10px] text-stone-400 font-medium">Today, 09:50 AM</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1 truncate">SOAP draft: CBT techniques for cognitive restructuring...</p>
                </div>

                <div 
                  onClick={() => navigate('/notes/edit/102')}
                  className="p-3.5 bg-stone-50/70 hover:bg-[#237A88]/5 rounded-2xl cursor-pointer transition-colors border border-stone-100"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-stone-900">Robert Vance</p>
                    <span className="text-[10px] text-stone-400 font-medium">Yesterday</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1 truncate">DAP draft: Patient reported decreased insomnia symptoms...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}