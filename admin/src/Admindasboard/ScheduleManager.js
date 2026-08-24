import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft,
  ChevronRight,
  Plus,
  UserCheck,
  Video,
  MapPin,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Search
} from 'lucide-react';

export default function ScheduleManager() {
  const [selectedDate, setSelectedDate] = useState('2026-08-24');
  const [viewMode, setViewMode] = useState('day'); // 'day' | 'week'
  const [isSynced, setIsSynced] = useState(true);

  // Appointments & Slot Data
  const [appointments, setAppointments] = useState([
    { id: 1, time: '09:00 AM - 10:00 AM', client: 'Cameron Reed', type: 'CBT Session', location: 'Online Video Call', status: 'Completed', avatarColor: 'bg-[#0F2D32]' },
    { id: 2, time: '11:00 AM - 12:00 PM', client: 'Alex Morgan', type: 'Narrative Therapy', location: 'In-Person (Room 2)', status: 'Confirmed', avatarColor: 'bg-[#1B7B87]' },
    { id: 3, time: '02:30 PM - 03:30 PM', client: 'Blake Taylor', type: 'Mindfulness Review', location: 'Online Video Call', status: 'Pending Intake', avatarColor: 'bg-[#125861]' },
    { id: 4, time: '04:30 PM - 05:30 PM', client: 'Emerson Brooks', timeSlot: '04:30 PM', type: 'Family Systems Intake', location: 'Online Video Call', status: 'Confirmed', avatarColor: 'bg-[#0F2D32]' },
  ]);

  const updateStatus = (id, newStatus) => {
    setAppointments(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));
  };

  return (
    <div className="p-8 space-y-6">
      
      {/* HEADER & CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Schedule & Availability Manager</h1>
          <p className="text-xs text-slate-500">Manage therapy bookings, open time slots, and calendar integrations.</p>
        </div>

        <div className="flex items-center gap-2">
          {/* Calendar Sync Button */}
          <button 
            onClick={() => setIsSynced(!isSynced)}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all ${
              isSynced 
                ? 'bg-teal-50 text-teal-800 border-teal-200' 
                : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}
          >
            <RefreshCw size={13} className={isSynced ? 'animate-spin-slow' : ''} />
            <span>{isSynced ? 'Synced with Google Calendar' : 'Sync Calendar'}</span>
          </button>

          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#1B7B87]/20 transition-all">
            <Plus size={15} />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>

      {/* CALENDAR BAR CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        
        {/* Date Selector Navigation */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 transition-all">
              <ChevronLeft size={18} />
            </button>
            <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
          <h2 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <CalendarIcon size={16} className="text-[#1B7B87]" />
            <span>Monday, August 24, 2026</span>
          </h2>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewMode('day')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'day' ? 'bg-white text-[#1B7B87] shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Day View
          </button>
          <button
            onClick={() => setViewMode('week')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'week' ? 'bg-white text-[#1B7B87] shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Week View
          </button>
        </div>
      </div>

      {/* MAIN SCHEDULE LISTING */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* APPOINTMENT TIMELINE */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
            {appointments.map((slot) => (
              <div key={slot.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/70 transition-all">
                
                {/* Time & Details */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0 font-bold text-xs flex items-center gap-1.5">
                    <Clock size={14} className="text-[#1B7B87]" />
                    <span>{slot.time}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-sm">{slot.client}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        slot.status === 'Completed'
                          ? 'bg-slate-100 text-slate-700 border-slate-300'
                          : slot.status === 'Confirmed'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}>
                        {slot.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 font-medium">{slot.type}</p>
                    
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        {slot.location.includes('Online') ? <Video size={13} /> : <MapPin size={13} />}
                        {slot.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  {slot.status !== 'Completed' && (
                    <button 
                      onClick={() => updateStatus(slot.id, 'Completed')}
                      className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg border border-emerald-200 transition-all text-xs font-semibold flex items-center gap-1"
                      title="Mark Session Completed"
                    >
                      <CheckCircle2 size={15} />
                      <span className="hidden sm:inline">Complete</span>
                    </button>
                  )}

                  {slot.status !== 'Cancelled' && (
                    <button 
                      onClick={() => updateStatus(slot.id, 'Cancelled')}
                      className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg border border-rose-200 transition-all text-xs font-semibold flex items-center gap-1"
                      title="Cancel Session"
                    >
                      <XCircle size={15} />
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* SIDE PANEL: AVAILABILITY RULES & QUICK ADD */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Working Hours Setup</h3>
            <p className="text-xs text-slate-500">Configure default booking hours for online client self-scheduling.</p>

            <div className="space-y-3 pt-2">
              {[
                { day: 'Mon - Thu', hours: '09:00 AM - 05:00 PM', active: true },
                { day: 'Friday', hours: '09:00 AM - 02:00 PM', active: true },
                { day: 'Sat - Sun', hours: 'Closed', active: false },
              ].map((rule, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-700">{rule.day}</span>
                  <span className={`font-mono ${rule.active ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>
                    {rule.hours}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 transition-all">
              Edit Availability Rules
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}