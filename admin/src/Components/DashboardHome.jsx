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
  ChevronRight
} from 'lucide-react';

export default function DashboardHome() {
  const navigate = useNavigate();

  // Mock data for today's sessions
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
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-stone-200">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Good morning, Dr. Morgan</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            You have <span className="font-medium text-emerald-900">4 sessions scheduled</span> for today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/clients')} 
            className="px-4 py-2 bg-white border border-stone-300 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors"
          >
            Client Roster
          </button>
          <button 
            onClick={() => navigate('/notes/new')} 
            className="px-4 py-2 bg-emerald-900 text-white rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            New Progress Note
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-emerald-50 text-emerald-900 flex items-center justify-center">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-500 font-medium">Active Clients</p>
            <p className="text-2xl font-bold text-stone-900 mt-0.5">28</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
            <CalendarIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-500 font-medium">Sessions Today</p>
            <p className="text-2xl font-bold text-stone-900 mt-0.5">4</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-500 font-medium">Pending Notes</p>
            <p className="text-2xl font-bold text-stone-900 mt-0.5">2</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-500 font-medium">Completed (Week)</p>
            <p className="text-2xl font-bold text-stone-900 mt-0.5">16</p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-stone-900">Today's Schedule</h2>
            <button 
              onClick={() => navigate('/calendar')}
              className="text-xs font-medium text-emerald-900 hover:text-emerald-700 flex items-center gap-1"
            >
              View Full Calendar <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
            <div className="divide-y divide-stone-100">
              {todaysSessions.map((session) => (
                <div key={session.id} className="p-5 hover:bg-stone-50/60 transition-colors flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {session.type === 'Telehealth' ? (
                        <span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center" title="Telehealth">
                          <Video className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="h-9 w-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center" title="In-Person">
                          <MapPin className="h-4 w-4" />
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-medium text-stone-900">{session.clientName}</h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-stone-500">
                        <span className="flex items-center gap-1 font-medium text-stone-700">
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
                    {/* Status Badges */}
                    {session.status === 'Completed' && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-stone-100 text-stone-600">
                        Completed
                      </span>
                    )}
                    {session.status === 'In Progress' && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 animate-pulse">
                        In Progress
                      </span>
                    )}
                    {session.status === 'Upcoming' && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-800">
                        Upcoming
                      </span>
                    )}

                    <button 
                      onClick={() => navigate(`/notes/new?client=${session.id}`)}
                      className="text-xs font-medium px-3 py-1.5 rounded-md border border-stone-200 text-stone-700 hover:bg-white hover:border-stone-300 transition-colors"
                    >
                      Note
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity Side Column (1/3 width) */}
        <div className="space-y-6">
          {/* Quick Client Search */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-3">
            <h3 className="text-sm font-semibold text-stone-900">Quick Client Search</h3>
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-3 text-stone-400" />
              <input
                type="text"
                placeholder="Search by client name or ID..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Pending Draft Notes */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-stone-900">Draft Progress Notes</h3>
              <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full">2 Pending</span>
            </div>

            <div className="space-y-3">
              <div 
                onClick={() => navigate('/notes/edit/101')}
                className="p-3 bg-stone-50 hover:bg-stone-100/80 rounded-lg cursor-pointer transition-colors border border-stone-100"
              >
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-stone-900">Sarah Jenkins</p>
                  <span className="text-[10px] text-stone-400">Today, 09:50 AM</span>
                </div>
                <p className="text-xs text-stone-500 mt-1 truncate">SOAP draft: CBT techniques for cognitive restructuring...</p>
              </div>

              <div 
                onClick={() => navigate('/notes/edit/102')}
                className="p-3 bg-stone-50 hover:bg-stone-100/80 rounded-lg cursor-pointer transition-colors border border-stone-100"
              >
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-stone-900">Robert Vance</p>
                  <span className="text-[10px] text-stone-400">Yesterday</span>
                </div>
                <p className="text-xs text-stone-500 mt-1 truncate">DAP draft: Patient reported decreased insomnia symptoms...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}