import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock, 
  User, 
  Sparkles,
  Lock,
  Unlock,
  X,
  Check,
  AlertCircle
} from 'lucide-react';

const INITIAL_SLOTS = [
  { id: '1', time: '09:00 AM - 10:00 AM', status: 'Closed' },
  { id: '2', time: '10:00 AM - 11:00 AM', status: 'Booked', clientName: 'Aarav Sharma', type: 'In-Person', modality: 'CBT' },
  { id: '3', time: '11:00 AM - 12:00 PM', status: 'Open' },
  { id: '4', time: '02:30 PM - 03:30 PM', status: 'Booked', clientName: 'Ananya Verma', type: 'Video Call', modality: 'Narrative Therapy' },
  { id: '5', time: '04:00 PM - 05:00 PM', status: 'Unconfirmed', clientName: 'Rohan Mehta', type: 'In-Person', modality: 'Intake Assessment' },
  { id: '6', time: '05:00 PM - 06:00 PM', status: 'Closed' },
];

export default function SessionCalendar() {
  const [selectedDate, setSelectedDate] = useState('2026-08-28');
  const [slots, setSlots] = useState(INITIAL_SLOTS);
  const [activeTab, setActiveTab] = useState('All'); 
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  // Form State for New Booking Modal
  const [selectedSlotId, setSelectedSlotId] = useState('');
  const [clientName, setClientName] = useState('');
  const [bookingStatus, setBookingStatus] = useState('Booked');
  const [sessionType, setSessionType] = useState('In-Person');
  const [modality, setModality] = useState('Cognitive Behavioral Therapy (CBT)');

  // Toggle Slot Status (Open <-> Closed)
  const toggleSlotStatus = (slotId) => {
    setSlots(prev => prev.map(slot => {
      if (slot.id === slotId && (slot.status === 'Open' || slot.status === 'Closed')) {
        return {
          ...slot,
          status: slot.status === 'Open' ? 'Closed' : 'Open'
        };
      }
      return slot;
    }));
  };

  // Create Booking
  const handleCreateBooking = (e) => {
    e.preventDefault();
    if (!selectedSlotId || !clientName) return;

    setSlots(prev => prev.map(slot => {
      if (slot.id === selectedSlotId) {
        return {
          ...slot,
          status: bookingStatus,
          clientName,
          type: sessionType,
          modality
        };
      }
      return slot;
    }));

    setClientName('');
    setSelectedSlotId('');
    setIsBookingModalOpen(false);
  };

  const filteredSlots = slots.filter(s => {
    if (activeTab === 'All') return true;
    return s.status === activeTab;
  });

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const openSlotsCount = slots.filter(s => s.status === 'Open').length;
  const bookedCount = slots.filter(s => s.status === 'Booked').length;
  const unconfirmedCount = slots.filter(s => s.status === 'Unconfirmed').length;

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 font-sans text-stone-800">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#237A88]/10 text-[#237A88] text-xs font-semibold">
              <Sparkles size={13} />
              <span>Real-Time Practice Availability</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">Session Calendar</h1>
          <p className="text-xs text-stone-500">Manage open slots, block unavailable hours, and schedule new client bookings</p>
        </div>

        <button 
          onClick={() => setIsBookingModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all shadow-md shadow-[#237A88]/20"
        >
          <Plus size={16} />
          <span>New Booking</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Monthly View & Color Legend */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-base font-bold text-stone-900">August 2026</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-stone-100 rounded-xl text-stone-600 transition-colors">
                  <ChevronLeft size={18} />
                </button>
                <button className="px-3 py-1 bg-stone-50 text-stone-700 text-xs font-bold rounded-xl">
                  Today
                </button>
                <button className="p-2 hover:bg-stone-100 rounded-xl text-stone-600 transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 text-center text-[11px] font-bold text-stone-400 py-1">
              <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
            </div>

            <div className="grid grid-cols-7 gap-1.5 text-xs">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`blank-${i}`} className="h-20 bg-stone-50/50 rounded-2xl" />
              ))}

              {daysInMonth.map((day) => {
                const dateStr = `2026-08-${day < 10 ? `0${day}` : day}`;
                const isSelected = selectedDate === dateStr;

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
                    {day === 28 && (
                      <div className="space-y-1">
                        <span className="text-[9px] font-semibold text-[#237A88] block bg-sky-100/70 text-sky-800 px-1 py-0.5 rounded-md truncate">
                          {openSlotsCount} Open Slots
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* COLOR LEGEND BAR BELOW CALENDAR */}
          <div className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider font-bold">Slot Status Legend:</span>
            
            {/* Open */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-sky-500 border border-sky-600" />
              <span className="text-stone-700">Open ({openSlotsCount})</span>
            </div>

            {/* Booked */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500 border border-emerald-600" />
              <span className="text-stone-700">Booked ({bookedCount})</span>
            </div>

            {/* Unconfirmed Booking */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-400 border border-amber-500" />
              <span className="text-stone-700">Unconfirmed Booking ({unconfirmedCount})</span>
            </div>
          </div>
        </div>

        {/* Right: Real-time Slot Manager */}
        <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Daily Schedule</h3>
                <p className="text-xs text-stone-400 font-medium">{selectedDate}</p>
              </div>
              <div className="flex gap-1">
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                  {bookedCount} Booked
                </span>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold">
                  {unconfirmedCount} Pending
                </span>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1 bg-stone-100 p-1 rounded-2xl text-[10px] font-semibold text-stone-600 overflow-x-auto">
              {['All', 'Open', 'Booked', 'Unconfirmed', 'Closed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-1 px-1.5 rounded-xl transition-all whitespace-nowrap text-center ${
                    activeTab === tab ? 'bg-white text-stone-900 shadow-sm' : 'hover:text-stone-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Real-time Slots List */}
            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {filteredSlots.map((slot) => (
                <div 
                  key={slot.id}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                    slot.status === 'Booked' 
                      ? 'bg-emerald-50/60 border-emerald-200'
                      : slot.status === 'Unconfirmed'
                      ? 'bg-amber-50/70 border-amber-200'
                      : slot.status === 'Open'
                      ? 'bg-sky-50/50 border-sky-200'
                      : 'bg-stone-50 border-stone-100 opacity-60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-stone-400" />
                      <span className="font-bold text-xs text-stone-900">{slot.time}</span>
                    </div>
                    
                    {slot.status === 'Booked' && (
                      <div className="text-[11px] text-emerald-900 font-medium space-y-0.5">
                        <div className="flex items-center gap-1 font-semibold">
                          <User size={12} />
                          <span>{slot.clientName}</span>
                        </div>
                        <p className="text-[10px] text-emerald-700 truncate">{slot.modality} • {slot.type}</p>
                      </div>
                    )}

                    {slot.status === 'Unconfirmed' && (
                      <div className="text-[11px] text-amber-900 font-medium space-y-0.5">
                        <div className="flex items-center gap-1 font-semibold">
                          <User size={12} />
                          <span>{slot.clientName}</span>
                        </div>
                        <p className="text-[10px] text-amber-700 truncate">Unconfirmed • {slot.type}</p>
                      </div>
                    )}

                    {slot.status === 'Open' && (
                      <span className="inline-block text-[10px] font-semibold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full">
                        Available for booking
                      </span>
                    )}

                    {slot.status === 'Closed' && (
                      <span className="inline-block text-[10px] font-semibold text-stone-500 bg-stone-200 px-2 py-0.5 rounded-full">
                        Blocked / Unavailable
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div>
                    {slot.status === 'Open' || slot.status === 'Closed' ? (
                      <button
                        onClick={() => toggleSlotStatus(slot.id)}
                        className={`p-2 rounded-xl transition-all ${
                          slot.status === 'Open' 
                            ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                            : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                        }`}
                        title={slot.status === 'Open' ? 'Close Slot' : 'Open Slot'}
                      >
                        {slot.status === 'Open' ? <Lock size={14} /> : <Unlock size={14} />}
                      </button>
                    ) : slot.status === 'Booked' ? (
                      <Check size={16} className="text-emerald-600 mr-2" />
                    ) : (
                      <AlertCircle size={16} className="text-amber-600 mr-2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* NEW BOOKING MODAL */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl border border-stone-100">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#237A88]" />
                <h3 className="font-bold text-stone-900 text-base">New Client Booking</h3>
              </div>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="p-1 hover:bg-stone-100 rounded-xl text-stone-400"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateBooking} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Select Open Time Slot</label>
                <select
                  required
                  value={selectedSlotId}
                  onChange={(e) => setSelectedSlotId(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                >
                  <option value="">-- Choose an Open Slot --</option>
                  {slots.filter(s => s.status === 'Open').map(s => (
                    <option key={s.id} value={s.id}>{s.time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Client Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meera Kapoor"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Booking Confirmation Status</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBookingStatus('Booked')}
                    className={`p-2.5 rounded-xl border text-center font-semibold transition-all ${
                      bookingStatus === 'Booked'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-stone-50 text-stone-600 border-stone-200'
                    }`}
                  >
                    Confirmed (Booked)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingStatus('Unconfirmed')}
                    className={`p-2.5 rounded-xl border text-center font-semibold transition-all ${
                      bookingStatus === 'Unconfirmed'
                        ? 'bg-amber-500 text-white border-amber-500'
                        : 'bg-stone-50 text-stone-600 border-stone-200'
                    }`}
                  >
                    Unconfirmed Booking
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Session Modality</label>
                <input
                  type="text"
                  value={modality}
                  onChange={(e) => setModality(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Session Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSessionType('In-Person')}
                    className={`p-2.5 rounded-xl border text-center font-semibold transition-all ${
                      sessionType === 'In-Person'
                        ? 'bg-[#237A88] text-white border-[#237A88]'
                        : 'bg-stone-50 text-stone-600 border-stone-200'
                    }`}
                  >
                    In-Person
                  </button>
                  <button
                    type="button"
                    onClick={() => setSessionType('Video Call')}
                    className={`p-2.5 rounded-xl border text-center font-semibold transition-all ${
                      sessionType === 'Video Call'
                        ? 'bg-[#237A88] text-white border-[#237A88]'
                        : 'bg-stone-50 text-stone-600 border-stone-200'
                    }`}
                  >
                    Video Call
                  </button>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!selectedSlotId}
                  className="px-4 py-2 bg-[#237A88] hover:bg-[#1C646F] disabled:opacity-50 text-white rounded-xl font-semibold shadow-md shadow-[#237A88]/20"
                >
                  Save Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}