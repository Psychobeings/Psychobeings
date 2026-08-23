import React, { useState } from 'react';
import { CalendarPlus, X } from 'lucide-react';

const NewAppointmentModal = ({ onClose }) => {
  const [appointment, setAppointment] = useState({ client: '', date: '', time: '', type: 'Individual therapy' });
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const existing = JSON.parse(localStorage.getItem('psychobeings-appointments') || '[]');
    localStorage.setItem('psychobeings-appointments', JSON.stringify([...existing, { ...appointment, id: Date.now() }]));
    setSaved(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-3xl border border-teal-100 bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1b7b86]">Practice calendar</p><h2 className="mt-2 text-xl font-bold text-slate-950">Schedule appointment</h2></div>
          <button type="button" onClick={onClose} title="Close" className="text-slate-400 hover:text-slate-900"><X size={19} /></button>
        </div>
        <div className="mt-6 space-y-4">
          <input required value={appointment.client} onChange={(event) => setAppointment({ ...appointment, client: event.target.value })} placeholder="Client name" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#1b7b86]" />
          <input required type="date" value={appointment.date} onChange={(event) => setAppointment({ ...appointment, date: event.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#1b7b86]" />
          <input required type="time" value={appointment.time} onChange={(event) => setAppointment({ ...appointment, time: event.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#1b7b86]" />
          <select value={appointment.type} onChange={(event) => setAppointment({ ...appointment, type: event.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#1b7b86]">
            <option>Individual therapy</option><option>Initial consultation</option><option>Follow-up session</option>
          </select>
        </div>
        <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1b7b86] py-3 text-xs font-bold text-white hover:bg-[#15626b]"><CalendarPlus size={16} />{saved ? 'Appointment saved' : 'Save appointment'}</button>
      </form>
    </div>
  );
};

export default NewAppointmentModal;
