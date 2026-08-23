import React from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';

const scheduleSlots = [
  { time: '09:00 AM', client: 'Available', status: 'Free' },
  { time: '10:00 AM', client: 'Aarav Sharma', status: 'Booked' },
  { time: '11:00 AM', client: 'Available', status: 'Free' },
  { time: '12:00 PM', client: 'Riya Gupta', status: 'Booked' },
];

export default function CalendarView() {
  return (
    <div className="p-6 space-y-5 max-w-7xl mx-auto text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Appointment Schedule</h2>
          <p className="text-slate-400 text-xs mt-1">Calendar overview and upcoming session bookings.</p>
        </div>
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1">
          <Plus size={14} /> New Appointment
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 font-semibold text-xs text-teal-400">
          <CalendarIcon size={16} /> Daily Schedule
        </div>

        <div className="space-y-2">
          {scheduleSlots.map((slot, index) => (
            <div key={index} className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-400 w-20">{slot.time}</span>
              <span className={`font-semibold ${slot.status === 'Booked' ? 'text-white' : 'text-slate-500'}`}>
                {slot.client}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded ${
                slot.status === 'Booked' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-slate-800 text-slate-400'
              }`}>
                {slot.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}