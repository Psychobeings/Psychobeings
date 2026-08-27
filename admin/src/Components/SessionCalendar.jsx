import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock, 
  User, 
  Video, 
  MapPin, 
  Sparkles
} from 'lucide-react';

const INITIAL_SESSIONS = [
  {
    id: 1,
    clientName: 'Aarav Sharma',
    date: '2026-08-28',
    time: '10:00 AM - 11:00 AM',
    type: 'In-Person',
    modality: 'CBT',
    status: 'Confirmed'
  },
  {
    id: 2,
    clientName: 'Ananya Verma',
    date: '2026-08-28',
    time: '02:30 PM - 03:30 PM',
    type: 'Video Call',
    modality: 'Narrative Therapy',
    status: 'Confirmed'
  },
  {
    id: 3,
    clientName: 'Rohan Mehta',
    date: '2026-08-28',
    time: '04:00 PM - 05:00 PM',
    type: 'In-Person',
    modality: 'Intake Assessment',
    status: 'Pending'
  },
  {
    id: 4,
    clientName: 'Priya Nair',
    date: '2026-08-31',
    time: '11:00 AM - 12:00 PM',
    type: 'Video Call',
    modality: 'Mindfulness / Stress',
    status: 'Confirmed'
  }
];

export default function SessionCalendar() {
  const [sessions] = useState(INITIAL_SESSIONS);
  const [selectedDate, setSelectedDate] = useState('2026-08-28');
  const [viewMode, setViewMode] = useState('Month');

  // Days mock grid for late August 2026
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const todaysSessions = sessions.filter(s => s.date === selectedDate);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 font-sans text-stone-800">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#237A88]/10 text-[#237A88] text-xs font-semibold">
              <Sparkles size={13} />
              <span>Practice Schedule</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">Session Calendar</h1>
          <p className="text-xs text-stone-500">Manage client appointments, intakes, and clinical availability</p>
        </div>

        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="bg-stone-100 p-1 rounded-2xl flex items-center gap-1 text-xs font-semibold text-stone-600">
            {['Month', 'Week'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  viewMode === mode ? 'bg-white text-stone-900 shadow-sm' : 'hover:text-stone-900'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <button 
            className="flex items-center justify-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all shadow-md shadow-[#237A88]/20"
          >
            <Plus size={16} />
            <span>Schedule Session</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Calendar Left, Today's Schedule Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Calendar Grid (2 Cols) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-stone-100 shadow-sm space-y-4">
          
          {/* Calendar Header Controls */}
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-base font-bold text-stone-900">August 2026</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-stone-100 rounded-xl text-stone-600 transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="px-3 py-1 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-bold rounded-xl">
                Today
              </button>
              <button className="p-2 hover:bg-stone-100 rounded-xl text-stone-600 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 text-center text-[11px] font-bold text-stone-400 py-1">
            <span>SUN</span>
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1.5 text-xs">
            {/* Offset blank days for Aug 1, 2026 (Starts Saturday) */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`blank-${i}`} className="h-20 bg-stone-50/50 rounded-2xl" />
            ))}

            {daysInMonth.map((day) => {
              const dateStr = `2026-08-${day < 10 ? `0${day}` : day}`;
              const isSelected = selectedDate === dateStr;
              const daySessions = sessions.filter(s => s.date === dateStr);

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`h-20 p-2 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                    isSelected 
                      ? 'border-[#237A88] bg-[#237A88]/5 ring-2 ring-[#237A88]/20' 
                      : 'border-stone-100 hover:border-stone-200 bg-white'
                  }`}
                >
                  <span className={`font-semibold text-xs ${isSelected ? 'text-[#237A88]' : 'text-stone-700'}`}>
                    {day}
                  </span>

                  {daySessions.length > 0 && (
                    <div className="space-y-1">
                      {daySessions.slice(0, 1).map((s) => (
                        <div 
                          key={s.id} 
                          className="bg-[#237A88] text-white text-[9px] font-medium px-1.5 py-0.5 rounded-lg truncate"
                        >
                          {s.clientName.split(' ')[0]}
                        </div>
                      ))}
                      {daySessions.length > 1 && (
                        <span className="text-[9px] font-semibold text-stone-400 block px-1">
                          +{daySessions.length - 1} more
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Agenda Right Panel */}
        <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Appointments</h3>
                <p className="text-xs text-stone-400 font-medium">{selectedDate}</p>
              </div>
              <span className="px-2.5 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold">
                {todaysSessions.length} Scheduled
              </span>
            </div>

            {/* List of Sessions */}
            <div className="space-y-3">
              {todaysSessions.length > 0 ? (
                todaysSessions.map((session) => (
                  <div 
                    key={session.id}
                    className="p-3.5 bg-stone-50 rounded-2xl border border-stone-100 space-y-2 hover:border-stone-200 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-[#237A88]" />
                        <span className="font-bold text-xs text-stone-900">{session.clientName}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        session.status === 'Confirmed' 
                          ? 'bg-emerald-50 text-emerald-700' 
                          : 'bg-amber-50 text-amber-700'
                      }`}>
                        {session.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                      <Clock size={12} className="text-stone-400" />
                      <span>{session.time}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-stone-200/50 text-[10px] text-stone-600 font-medium">
                      <span className="truncate max-w-[130px]">{session.modality}</span>
                      <span className="flex items-center gap-1 text-[#237A88]">
                        {session.type === 'Video Call' ? <Video size={11} /> : <MapPin size={11} />}
                        {session.type}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 space-y-2">
                  <Clock size={28} className="mx-auto text-stone-300" />
                  <p className="text-xs font-bold text-stone-600">No sessions scheduled</p>
                  <p className="text-[11px] text-stone-400">Select another date or click Schedule Session above.</p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Quick Help Card */}
          <div className="bg-[#237A88]/5 p-3.5 rounded-2xl border border-[#237A88]/10 flex items-start gap-2.5">
            <Sparkles size={16} className="text-[#237A88] flex-shrink-0 mt-0.5" />
            <div className="text-[11px] text-stone-600 space-y-0.5">
              <p className="font-bold text-[#237A88]">Clinical Reminder</p>
              <p>Progress notes should be submitted within 24 hours of session completion.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}