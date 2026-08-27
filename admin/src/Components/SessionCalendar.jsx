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
  AlertCircle,
  Video,
  MapPin,
  Search,
  CheckCircle2
} from 'lucide-react';

const INITIAL_SLOTS = [
  { id: '1', time: '09:00 AM - 10:00 AM', status: 'Closed' },
  { id: '2', time: '10:00 AM - 11:00 AM', status: 'Booked', clientName: 'Aarav Sharma', type: 'In-Person', modality: 'Adult Therapy' },
  { id: '3', time: '11:00 AM - 12:00 PM', status: 'Open' },
  { id: '4', time: '02:30 PM - 03:30 PM', status: 'Booked', clientName: 'Ananya Verma', type: 'Video Call', modality: 'Narrative Therapy' },
  { id: '5', time: '04:00 PM - 05:00 PM', status: 'Unconfirmed', clientName: 'Rohan Mehta', type: 'In-Person', modality: 'Child & Adolescent Counseling' },
  { id: '6', time: '05:00 PM - 06:00 PM', status: 'Closed' },
];

const MOCK_CLIENTS = [
  { name: 'Rishav Rakshit', email: 'rishav.devcode@gmail.com' },
  { name: 'Rupak Roy', email: 'roy.the.untold.space@gmail.com' },
  { name: 'Deepanshu Rawat', email: 'rawat.deepanshu%@gmail.com' },
  { name: 'Priyanka Gupta', email: 'priyankagupta190106@gmail.com' },
  { name: 'Garima', email: 'parimashakya125@gmail.com' }
];

const PACKAGES = [
  { id: 'adult', title: 'Adult Therapy', price: 'INR 1500', details: '' },
  { id: 'adult_pkg', title: 'Adult Therapy Package', price: 'INR 8000', details: 'Save Rs 1000 • 6 Sessions' },
  { id: 'child', title: 'Child & Adolescent Counseling', price: 'INR 800', details: '' },
  { id: 'wellness', title: 'Corporate Wellness Counseling', price: 'INR 1000', details: 'Save Rs 1000 • 6 Sessions' }
];

export default function SessionCalendar() {
  const [selectedDate, setSelectedDate] = useState('2026-08-28');
  const [slots, setSlots] = useState(INITIAL_SLOTS);
  const [activeTab, setActiveTab] = useState('All'); 
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Multi-step form state (1 to 5)
  const [step, setStep] = useState(1);
  const [selectedSlotTime, setSelectedSlotTime] = useState('10:00 AM - 11:00 AM');
  const [sessionMode, setSessionMode] = useState('In-Person');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[0]);
  const [paymentMethod, setPaymentMethod] = useState('UPI');

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const openSlotsCount = slots.filter(s => s.status === 'Open').length;
  const bookedCount = slots.filter(s => s.status === 'Booked').length;
  const unconfirmedCount = slots.filter(s => s.status === 'Unconfirmed').length;

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

  const handleOpenModal = () => {
    setStep(1);
    setSelectedClient(null);
    setSearchQuery('');
    setIsBookingModalOpen(true);
  };

  const handleFinalSubmit = () => {
    const targetSlot = slots.find(s => s.status === 'Open') || slots[0];
    setSlots(prev => prev.map(s => {
      if (s.id === targetSlot.id) {
        return {
          ...s,
          status: 'Booked',
          clientName: selectedClient?.name || 'New Client',
          type: sessionMode,
          modality: selectedPackage.title
        };
      }
      return s;
    }));
    setIsBookingModalOpen(false);
  };

  const filteredSlots = slots.filter(s => {
    if (activeTab === 'All') return true;
    return s.status === activeTab;
  });

  const filteredClients = MOCK_CLIENTS.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          onClick={handleOpenModal}
          className="flex items-center justify-center gap-2 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all shadow-md shadow-[#237A88]/20"
        >
          <Plus size={16} />
          <span>New Booking</span>
        </button>
      </div>

      {/* Main Calendar View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Monthly View */}
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

          {/* COLOR LEGEND BAR */}
          <div className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider font-bold">Slot Status Legend:</span>
            
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-sky-500 border border-sky-600" />
              <span className="text-stone-700">Open ({openSlotsCount})</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500 border border-emerald-600" />
              <span className="text-stone-700">Booked ({bookedCount})</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-400 border border-amber-500" />
              <span className="text-stone-700">Unconfirmed Booking ({unconfirmedCount})</span>
            </div>
          </div>
        </div>

        {/* Right: Daily Schedule */}
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

      {/* 5-STEP NEW BOOKING MODAL */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 max-w-2xl w-full space-y-6 shadow-xl border border-stone-100">
            
            {/* Modal Title & Close */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#237A88]" />
                <h3 className="font-bold text-stone-900 text-base">New Booking</h3>
              </div>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="p-1 hover:bg-stone-100 rounded-xl text-stone-400"
              >
                <X size={18} />
              </button>
            </div>

            {/* Sub-banner Notice */}
            <div className="bg-[#237A88]/5 p-3 rounded-2xl border border-[#237A88]/10 flex items-center gap-2 text-xs text-stone-600">
              <Sparkles size={14} className="text-[#237A88] flex-shrink-0" />
              <span>Bookings are confirmed instantly. Clients receive an email with the details.</span>
            </div>

            {/* 5-Step Progress Stepper */}
            <div className="flex items-center justify-between px-4 relative">
              {[
                { s: 1, label: 'SLOT' },
                { s: 2, label: 'MODE' },
                { s: 3, label: 'CLIENT' },
                { s: 4, label: 'CHARGE' },
                { s: 5, label: 'SUBMIT' }
              ].map((item) => (
                <div key={item.s} className="flex flex-col items-center gap-1 z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= item.s 
                      ? 'bg-[#237A88] text-white shadow-md shadow-[#237A88]/20' 
                      : 'bg-stone-100 text-stone-400 border border-stone-200'
                  }`}>
                    {item.s}
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider ${
                    step >= item.s ? 'text-[#237A88]' : 'text-stone-400'
                  }`}>
                    {item.label}
                  </span>
                </div>
              ))}
              <div className="absolute top-4 left-8 right-8 h-0.5 bg-stone-200 -z-0" />
            </div>

            {/* STEP 1: PICK AN AVAILABLE TIME SLOT */}
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Pick an Available Time Slot</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Calendar Mini Picker */}
                  <div className="border border-stone-200 rounded-2xl p-3 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-800">Aug 2026</span>
                      <div className="flex gap-1">
                        <button className="p-1 rounded hover:bg-stone-100"><ChevronLeft size={14} /></button>
                        <button className="p-1 rounded hover:bg-stone-100"><ChevronRight size={14} /></button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 text-center font-bold text-stone-400 text-[10px]">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center font-semibold">
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                        <button 
                          key={d} 
                          onClick={() => setSelectedDate(`2026-08-${d < 10 ? `0${d}` : d}`)}
                          className={`py-1 rounded-lg text-xs ${
                            d === 28 
                              ? 'bg-[#237A88] text-white' 
                              : 'hover:bg-stone-100 text-stone-700'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots Grid */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-stone-600">Available time slots</p>
                    <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                      {['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'].map(t => (
                        <button
                          key={t}
                          onClick={() => setSelectedSlotTime(`${t} - ${parseInt(t)+1}:00`)}
                          className={`p-2 rounded-xl text-xs font-semibold border transition-all ${
                            selectedSlotTime.startsWith(t)
                              ? 'border-[#237A88] bg-[#237A88]/10 text-[#237A88]'
                              : 'border-stone-200 hover:border-stone-300 text-stone-700'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedSlotTime && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#237A88] bg-[#237A88]/10 p-2.5 rounded-xl">
                    <Clock size={14} />
                    <span>Selected: {selectedDate} at {selectedSlotTime}</span>
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: HOW WILL THIS SESSION BE HELD? */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">How will this session be held?</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setSessionMode('In-Person')}
                    className={`p-5 rounded-2xl border text-left space-y-2 transition-all ${
                      sessionMode === 'In-Person'
                        ? 'border-[#237A88] bg-[#237A88]/5 ring-2 ring-[#237A88]/20'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="h-9 w-9 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <p className="font-bold text-stone-900 text-sm">In-Person</p>
                    <p className="text-xs text-stone-500">Client visits your physical location</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSessionMode('Online')}
                    className={`p-5 rounded-2xl border text-left space-y-2 transition-all ${
                      sessionMode === 'Online'
                        ? 'border-[#237A88] bg-[#237A88]/5 ring-2 ring-[#237A88]/20'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="h-9 w-9 rounded-xl bg-[#237A88]/10 text-[#237A88] flex items-center justify-center">
                      <Video size={18} />
                    </div>
                    <p className="font-bold text-stone-900 text-sm">Online</p>
                    <p className="text-xs text-stone-500">Google Meet link auto-generated</p>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: WHO IS THIS SESSION WITH? */}
            {step === 3 && (
              <div className="space-y-4">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Who is this session with?</p>
                
                <div className="relative">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Start typing a name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#237A88] text-xs"
                  />
                </div>

                <div className="border border-stone-200 rounded-2xl max-h-48 overflow-y-auto divide-y divide-stone-100">
                  {filteredClients.map((client) => (
                    <button
                      key={client.email}
                      onClick={() => setSelectedClient(client)}
                      className={`w-full p-3 text-left flex items-center justify-between text-xs transition-all ${
                        selectedClient?.email === client.email 
                          ? 'bg-[#237A88]/10 text-[#237A88] font-bold' 
                          : 'hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div>
                        <p className="font-bold">{client.name}</p>
                        <p className="text-stone-400 font-normal">{client.email}</p>
                      </div>
                      {selectedClient?.email === client.email && <CheckCircle2 size={16} className="text-[#237A88]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: SESSION CHARGE & PAYMENT */}
            {step === 4 && (
              <div className="space-y-4">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Session Charge & Payment</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-3.5 rounded-2xl border text-left space-y-1 transition-all ${
                        selectedPackage.id === pkg.id
                          ? 'border-[#237A88] bg-[#237A88]/5 ring-2 ring-[#237A88]/20'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <p className="font-bold text-stone-900 text-xs">{pkg.title}</p>
                      <p className="text-xs font-bold text-[#237A88]">{pkg.price}</p>
                      {pkg.details && (
                        <span className="inline-block text-[9px] font-bold bg-[#237A88]/10 text-[#237A88] px-2 py-0.5 rounded-full">
                          {pkg.details}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="pt-2 space-y-2">
                  <p className="text-xs font-semibold text-stone-600">Payment Method</p>
                  <div className="flex gap-2">
                    {['UPI', 'Prepaid', 'Mark as Due'].map((method) => (
                      <button
                        key={method}
                        onClick={() => setPaymentMethod(method)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          paymentMethod === method
                            ? 'bg-[#237A88] text-white border-[#237A88]'
                            : 'bg-stone-50 text-stone-600 border-stone-200'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW YOUR BOOKING */}
            {step === 5 && (
              <div className="space-y-4">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Review Your Booking</p>
                
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 space-y-3 text-xs">
                  <div>
                    <p className="text-stone-400 font-semibold text-[10px]">TIMESLOT</p>
                    <p className="font-bold text-stone-900">{selectedDate} at {selectedSlotTime}</p>
                  </div>
                  <div>
                    <p className="text-stone-400 font-semibold text-[10px]">SESSION MODE</p>
                    <p className="font-bold text-stone-900">{sessionMode}</p>
                  </div>
                  <div>
                    <p className="text-stone-400 font-semibold text-[10px]">CLIENT</p>
                    <p className="font-bold text-stone-900">{selectedClient?.name || 'Rishav Rakshit'} ({selectedClient?.email || 'rishav.devcode@gmail.com'})</p>
                  </div>
                  <div>
                    <p className="text-stone-400 font-semibold text-[10px]">PACKAGE</p>
                    <p className="font-bold text-stone-900">{selectedPackage.title} — {selectedPackage.price}</p>
                  </div>
                  <div>
                    <p className="text-stone-400 font-semibold text-[10px]">PAYMENT</p>
                    <p className="font-bold text-stone-900">{paymentMethod}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Controls */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(prev => prev - 1)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold"
                >
                  Back
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={() => setStep(prev => prev + 1)}
                  className="px-5 py-2 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-semibold shadow-md shadow-[#237A88]/20"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="px-5 py-2 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-semibold shadow-md shadow-[#237A88]/20"
                >
                  Confirm Booking
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}