import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Plus, 
  Video, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export default function SessionCalendar() {
  const navigate = useNavigate();
  const [selectedDate] = useState('Aug 27, 2026');

  // Mock sessions for the day
  const sessions = [
    {
      id: 1,
      clientName: "Sarah Jenkins",
      time: "09:00 AM - 09:50 AM",
      type: "Telehealth",
      status: "Completed",
      modality: "CBT Session",
      link: "https://meet.jit.si/psychobeings-sarah"
    },
    {
      id: 2,
      clientName: "Michael Chen",
      time: "11:00 AM - 11:50 AM",
      type: "In-Person",
      location: "Office 2B",
      status: "In Progress",
      modality: "Psychotherapy"
    },
    {
      id: 3,
      clientName: "Emma Watson",
      time: "02:00 PM - 02:50 PM",
      type: "Telehealth",
      status: "Upcoming",
      modality: "EMDR Protocol",
      link: "https://meet.jit.si/psychobeings-emma"
    },
    {
      id: 4,
      clientName: "David Miller",
      time: "04:00 PM - 04:50 PM",
      type: "In-Person",
      location: "Office 2B",
      status: "Upcoming",
      modality: "Intake Evaluation"
    }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-stone-200">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Session Calendar</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            Manage your daily appointment schedule, telehealth links, and session status.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-stone-200 rounded-lg p-1 shadow-sm">
            <button className="px-3 py-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-md">Day</button>
            <button className="px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-800">Week</button>
            <button className="px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-800">Month</button>
          </div>

          <button className="px-4 py-2 bg-emerald-900 text-white rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Book Session
          </button>
        </div>
      </div>

      {/* Date Control Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-1.5 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <h2 className="text-base font-semibold text-stone-900 flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-emerald-900" />
            {selectedDate}
          </h2>
        </div>

        <button className="text-xs font-medium text-emerald-900 hover:underline">
          Jump to Today
        </button>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Timeline (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden divide-y divide-stone-100">
            {sessions.map((session) => (
              <div key={session.id} className="p-6 hover:bg-stone-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {session.type === 'Telehealth' ? (
                      <span className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center border border-emerald-100">
                        <Video className="h-5 w-5" />
                      </span>
                    ) : (
                      <span className="h-10 w-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-100">
                        <MapPin className="h-5 w-5" />
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-stone-900 text-base">{session.clientName}</h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                        {session.modality}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-stone-500">
                      <span className="flex items-center gap-1 font-medium text-stone-700">
                        <Clock className="h-3.5 w-3.5 text-stone-400" />
                        {session.time}
                      </span>
                      <span>•</span>
                      <span>{session.type}</span>
                      {session.location && (
                        <>
                          <span>•</span>
                          <span>{session.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100 justify-between sm:justify-end">
                  {session.status === 'Completed' && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-stone-100 text-stone-600 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-emerald-700" />
                      Completed
                    </span>
                  )}
                  {session.status === 'In Progress' && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 animate-pulse">
                      In Progress
                    </span>
                  )}
                  {session.status === 'Upcoming' && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Upcoming
                    </span>
                  )}

                  <button
                    onClick={() => navigate('/case-history')}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-stone-200 text-stone-700 hover:bg-white hover:border-stone-300 transition-colors"
                  >
                    View Case
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Summary (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-4">
            <h3 className="text-sm font-semibold text-stone-900">Daily Summary</h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500">Total Scheduled</span>
                <span className="font-semibold text-stone-900">4 Sessions</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500">Telehealth Sessions</span>
                <span className="font-semibold text-emerald-900">2 Sessions</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500">In-Person Sessions</span>
                <span className="font-semibold text-amber-800">2 Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}