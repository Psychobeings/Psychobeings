import React, { useState, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, Plus, RefreshCw, Calendar as CalendarIcon, AlertCircle, 
  X, Video, MapPin, Check, User, DollarSign, Bot, Sparkles
} from 'lucide-react';

export default function SessionCalendar() {
  const [activeTab, setActiveTab] = useState('schedule'); // schedule | ai-sync | availability
  const [viewMode, setViewMode] = useState('week'); // week | day
  const [currentDateRange, setCurrentDateRange] = useState('Aug 23 – 29, 2026');

  // AI Dashboard Assistant Sync State
  const [isAiSynced, setIsAiSynced] = useState(true);
  const [connectedAssistant] = useState('Psychobeings AI Practice Core v2.4');
  const [syncLoading, setSyncLoading] = useState(false);
  
  // Real-time synced events from AI Core
  const [liveEvents, setLiveEvents] = useState([
    {
      id: 'ai-evt-1',
      title: 'Therapy Session: Diksha Bharti (Standard)',
      time: '11:00 - 11:45',
      status: 'booked',
      type: 'AI ASSISTANT SYNC',
      rawStart: '2026-08-24T11:00:00',
      meetLink: '#'
    }
  ]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);

  // Availability Settings State
  const [availableDays, setAvailableDays] = useState({
    Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: true, Sun: false
  });
  const [workingHoursStart, setWorkingHoursStart] = useState('09:00');
  const [workingHoursEnd, setWorkingHoursEnd] = useState('18:00');
  const [slotDuration, setSlotDuration] = useState('45');
  const [saveAvailabilitySuccess, setSaveAvailabilitySuccess] = useState(false);

  // New Booking Modal States
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState('form'); // form | preview
  const [selectedDate, setSelectedDate] = useState('2026-08-24');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [sessionMode, setSessionMode] = useState('Online'); // Online | In-Person
  const [selectedClient, setSelectedClient] = useState('Diksha Bharti');
  const [selectedCharge, setSelectedCharge] = useState('Standard Therapy (₹1,500 / 45 min)');
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);

  // Mock Client Roster & Charges
  const clientRoster = ['Diksha Bharti', 'Juhi Chaineva', 'Aarav Sharma', 'Meera Nair', 'Kabir Mehta'];
  const therapyCharges = [
    'Standard Therapy (₹1,500 / 45 min)',
    'Initial Consultation (₹2,000 / 60 min)',
    'Couples Counseling (₹2,500 / 60 min)',
    'Student Concession (₹1,000 / 45 min)'
  ];

  // Fetch events synced via AI Core
  const fetchAiDashboardEvents = useCallback(async () => {
    setIsLoadingEvents(true);
    setTimeout(() => {
      setIsLoadingEvents(false);
    }, 600);
  }, []);

  const handleAiSyncToggle = async () => {
    setSyncLoading(true);
    setTimeout(() => {
      setIsAiSynced(!isAiSynced);
      setSyncLoading(false);
    }, 800);
  };

  const handleConfirmBooking = async () => {
    setIsCreatingEvent(true);
    setTimeout(() => {
      const startDateObj = new Date(`${selectedDate}T${selectedTime}:00`);
      const durationMinutes = parseInt(slotDuration, 10) || 45;
      const endDateObj = new Date(startDateObj.getTime() + durationMinutes * 60000);

      const startTimeStr = startDateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const endTimeStr = endDateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const newEvent = {
        id: `ai-evt-${Date.now()}`,
        title: `Therapy Session: ${selectedClient} (${selectedCharge.split(' ')[0]})`,
        time: `${startTimeStr} - ${endTimeStr}`,
        status: 'booked',
        type: sessionMode === 'Online' ? 'AI VIDEO SESSION' : 'IN-PERSON',
        rawStart: `${selectedDate}T${selectedTime}:00`,
        meetLink: sessionMode === 'Online' ? '#' : null
      };

      setLiveEvents(prev => [...prev, newEvent]);
      setIsCreatingEvent(false);
      setIsBookingModalOpen(false);
      setBookingStep('form');
      alert(`Session successfully booked for ${selectedClient} and synced with the Psychobeings AI Dashboard.`);
    }, 800);
  };

  const handleSaveAvailability = (e) => {
    e.preventDefault();
    setSaveAvailabilitySuccess(true);
    setTimeout(() => setSaveAvailabilitySuccess(false), 3000);
  };

  const weekDays = [
    { day: '23 SUN', date: '23', slots: [{ time: '9:00 - 10:00', title: 'Diksha Bharti', status: 'booked', type: 'ONLINE' }] },
    { day: '24 MON', date: '24', slots: [{ time: '10:00 - 11:00', title: 'Open Slot', status: 'open', type: 'OPEN' }, ...liveEvents] },
    { day: '25 TUE', date: '25', slots: [{ time: '9:00 - 10:00', title: 'Diksha Bharti', status: 'booked', type: 'ONLINE' }] },
    { day: '26 WED', date: '26', slots: [{ time: '3:00 - 4:00', title: 'Open Slot', status: 'open', type: 'OPEN' }] },
    { day: '27 THU', date: '27', slots: [{ time: '9:00 - 10:00', title: 'Open Slot', status: 'open', type: 'OPEN' }] },
    { day: '28 FRI', date: '28', slots: [{ time: '9:00 - 10:00', title: 'Juhi Chaineva', status: 'booked', type: 'ONLINE' }] },
    { day: '29 SAT', date: '29', slots: [{ time: '8:30 - 9:30', title: 'ONLINE ONLY', status: 'unconfirmed', type: 'ONLINE ONLY' }] },
  ];

  return (
    <div className="max-w-7xl mx-auto font-sans text-stone-800 pb-16 space-y-6 relative bg-stone-50/30 p-2 sm:p-4">
      
      {/* Top Header Navigation */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/85 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-base font-bold text-stone-900 flex items-center gap-2">
            <span>Practitioner Schedule & AI Core</span>
            <span className="text-[10px] bg-teal-50 text-[#237A88] border border-teal-200 px-2 py-0.5 rounded-full font-semibold">AI Connected</span>
          </h1>
          <p className="text-xs text-stone-500 mt-0.5">
            {isAiSynced ? `Connected and syncing in real-time with ${connectedAssistant}.` : 'AI Assistant disconnected. Reconnect to resume live updates.'}
          </p>
        </div>

        <div className="flex items-center bg-stone-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'schedule' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Manage
          </button>
          <button
            onClick={() => setActiveTab('ai-sync')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'ai-sync' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Bot size={13} />
            <span>AI Core Sync</span>
          </button>
          <button
            onClick={() => setActiveTab('availability')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'availability' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Availability
          </button>
        </div>
      </div>

      {/* ================= TAB 1: MANAGE / SCHEDULE GRID ================= */}
      {activeTab === 'schedule' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setBookingStep('form'); setIsBookingModalOpen(true); }}
                className="flex items-center gap-1.5 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm shadow-[#237A88]/20"
              >
                <Plus size={14} />
                <span>New Booking</span>
              </button>
              {isAiSynced && (
                <button 
                  onClick={fetchAiDashboardEvents}
                  className="flex items-center gap-1 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 px-3.5 py-2 rounded-xl text-xs font-bold transition"
                >
                  <RefreshCw size={13} className={isLoadingEvents ? 'animate-spin' : ''} />
                  <span>Sync AI Dashboard</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-stone-100 p-1 rounded-xl">
                <button onClick={() => setCurrentDateRange('Aug 16 – 22, 2026')} className="p-1.5 hover:bg-white rounded-lg text-stone-600 transition">
                  <ChevronLeft size={15} />
                </button>
                <span className="px-3 text-xs font-bold text-stone-800">{currentDateRange}</span>
                <button onClick={() => setCurrentDateRange('Aug 30 – Sep 5, 2026')} className="p-1.5 hover:bg-white rounded-lg text-stone-600 transition">
                  <ChevronRight size={15} />
                </button>
              </div>

              <div className="flex items-center bg-stone-100 p-1 rounded-xl">
                <button onClick={() => setViewMode('week')} className={`px-3 py-1 rounded-lg text-xs font-bold transition ${viewMode === 'week' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600'}`}>Week</button>
                <button onClick={() => setViewMode('day')} className={`px-3 py-1 rounded-lg text-xs font-bold transition ${viewMode === 'day' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600'}`}>Day</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden">
            <div className="grid grid-cols-7 border-b border-stone-200 bg-stone-50/70 text-center">
              {weekDays.map((col, idx) => (
                <div key={idx} className="py-3 border-r border-stone-200/60 last:border-r-0">
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">{col.day}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 min-h-[500px] divide-x divide-stone-200/60 bg-white">
              {weekDays.map((col, idx) => (
                <div key={idx} className="p-2 space-y-2">
                  {col.slots.map((slot, sIdx) => {
                    let bgStyle = 'bg-[#237A88] text-white border-[#1C646F]';
                    if (slot.status === 'open') bgStyle = 'bg-[#237A88]/10 text-[#237A88] border-[#237A88]/20';
                    if (slot.type === 'AI ASSISTANT SYNC') bgStyle = 'bg-teal-700 text-white border-teal-800';
                    if (slot.type === 'AI VIDEO SESSION') bgStyle = 'bg-[#1C646F] text-white border-[#134952]';

                    return (
                      <div key={sIdx} className={`p-2.5 rounded-xl border text-[11px] font-semibold shadow-sm space-y-1.5 ${bgStyle}`}>
                        <div className="flex items-center justify-between opacity-90 text-[10px]">
                          <span>{slot.time}</span>
                          <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-black/10 font-bold">{slot.type}</span>
                        </div>
                        <p className="font-bold truncate">{slot.title}</p>
                        {slot.meetLink && (
                          <button 
                            onClick={() => alert("Launching Secure AI Video Room...")}
                            className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded text-[10px] font-bold transition mt-1 w-full justify-center"
                          >
                            <Video size={10} />
                            <span>AI Secure Room</span>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center gap-6 text-xs font-semibold text-stone-700">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#237A88]" /><span>Booked</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-teal-700" /><span>AI Dashboard Event</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#1C646F]" /><span>AI Video Session</span></div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: AI CORE SYNC ================= */}
      {activeTab === 'ai-sync' && (
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-8 space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#237A88] flex items-center justify-center font-bold">
                <Bot size={20} />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">Psychobeings AI Assistant Core</h2>
                <p className="text-xs text-stone-500">Manage automated dashboard synchronization and intelligent booking streams.</p>
              </div>
            </div>
            <button 
              onClick={handleAiSyncToggle}
              disabled={syncLoading}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                isAiSynced 
                  ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100' 
                  : 'bg-[#237A88] text-white hover:bg-[#1C646F]'
              }`}
            >
              <RefreshCw size={13} className={syncLoading ? 'animate-spin' : ''} />
              <span>{isAiSynced ? 'Disconnect AI Core' : 'Connect AI Core'}</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div>
                <h4 className="text-xs font-bold text-stone-900">Dashboard Real-Time Bridge</h4>
                <p className="text-[11px] text-stone-500">
                  {isAiSynced ? 'Connected and actively streaming session updates to dashboard UI.' : 'Disconnected. Reconnect to enable automatic AI stream.'}
                </p>
              </div>
              <span className={`w-3 h-3 rounded-full ${isAiSynced ? 'bg-emerald-500 animate-pulse' : 'bg-stone-300'}`} />
            </div>

            <div className="border border-stone-200 rounded-2xl p-5 space-y-3 bg-stone-50/50">
              <h4 className="text-xs font-bold text-stone-700">Active AI Practice Node</h4>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200">
                <span className="text-xs font-bold text-stone-800">{connectedAssistant}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${isAiSynced ? 'text-teal-700 bg-teal-50' : 'text-stone-500 bg-stone-100'}`}>
                  {isAiSynced ? 'Active Stream' : 'Disconnected'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: AVAILABILITY ================= */}
      {activeTab === 'availability' && (
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-8 space-y-6 max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-800 flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0 text-amber-600" />
            <span>Note: Availability changes apply instantly to your practitioner schedule and booking slots.</span>
          </div>

          <form onSubmit={handleSaveAvailability} className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">Available Days</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(availableDays).map((dayKey) => (
                  <button
                    key={dayKey}
                    type="button"
                    onClick={() => setAvailableDays(p => ({ ...p, [dayKey]: !p[dayKey] }))}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                      availableDays[dayKey] ? 'bg-[#237A88] text-white' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {dayKey}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-stone-100 pt-5">
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">Working Hours Start</label>
                <input 
                  type="time" 
                  value={workingHoursStart}
                  onChange={(e) => setWorkingHoursStart(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">Working Hours End</label>
                <input 
                  type="time" 
                  value={workingHoursEnd}
                  onChange={(e) => setWorkingHoursEnd(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">Default Slot Duration</label>
                <select 
                  value={slotDuration}
                  onChange={(e) => setSlotDuration(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                >
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-stone-100 pt-5">
              {saveAvailabilitySuccess ? (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                  <Check size={14} /> Availability preferences saved successfully!
                </span>
              ) : <div />}
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition shadow-sm ml-auto"
              >
                Save Availability
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ================= NEW BOOKING MODAL DIALOGUE ================= */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[#237A88]" />
                <h3 className="text-sm font-bold text-stone-900">
                  {bookingStep === 'form' ? 'New Therapy Session Booking' : 'AI Booking Preview & Summary'}
                </h3>
              </div>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 p-1 rounded-lg transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              {bookingStep === 'form' ? (
                <>
                  {!isAiSynced && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0 text-amber-600" />
                      <span>AI Core is disconnected. Bookings will be saved locally until reconnected.</span>
                    </div>
                  )}

                  {/* 1. Date & Time Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Select Date & Time</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[11px] text-stone-500 font-medium block mb-1">Date</span>
                        <input 
                          type="date" 
                          value={selectedDate} 
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] text-stone-500 font-medium block mb-1">Time Slot</span>
                        <input 
                          type="time" 
                          value={selectedTime} 
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2. Mode of Session */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Mode of Session</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { mode: 'Online', icon: Video },
                        { mode: 'In-Person', icon: MapPin }
                      ].map((item) => {
                        const IconComp = item.icon;
                        return (
                          <button
                            key={item.mode}
                            type="button"
                            onClick={() => setSessionMode(item.mode)}
                            className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-2 ${
                              sessionMode === item.mode 
                                ? 'bg-[#237A88] text-white border-[#237A88] shadow-sm' 
                                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                            }`}
                          >
                            <IconComp size={14} />
                            <span>{item.mode}</span>
                          </button>
                        );
                      })}
                    </div>
                    {sessionMode === 'Online' && (
                      <p className="text-[11px] text-[#237A88] font-medium pt-1">
                        ✨ Selecting Online will automatically configure a secure AI video room link upon confirmation.
                      </p>
                    )}
                  </div>

                  {/* 3. Clients from Roster */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Client (From Roster)</label>
                    <select 
                      value={selectedClient} 
                      onChange={(e) => setSelectedClient(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                    >
                      {clientRoster.map((client, idx) => (
                        <option key={idx} value={client}>{client}</option>
                      ))}
                    </select>
                  </div>

                  {/* 4. Therapy Charges */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Therapy Charge Plan</label>
                    <select 
                      value={selectedCharge} 
                      onChange={(e) => setSelectedCharge(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:border-[#237A88]"
                    >
                      {therapyCharges.map((charge, idx) => (
                        <option key={idx} value={charge}>{charge}</option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                /* Preview Step */
                <div className="space-y-4">
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 space-y-3">
                    <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Session Summary</h4>
                    <div className="flex items-center gap-3 text-xs text-stone-700">
                      <User size={14} className="text-[#237A88]" />
                      <span><strong>Client:</strong> {selectedClient}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-700">
                      <CalendarIcon size={14} className="text-[#237A88]" />
                      <span><strong>Date & Time:</strong> {selectedDate} at {selectedTime} ({slotDuration} mins)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-700">
                      {sessionMode === 'Online' ? <Video size={14} className="text-[#237A88]" /> : <MapPin size={14} className="text-[#237A88]" />}
                      <span><strong>Mode:</strong> {sessionMode} {sessionMode === 'Online' ? '(AI Video Room Enabled)' : ''}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-700">
                      <DollarSign size={14} className="text-[#237A88]" />
                      <span><strong>Plan:</strong> {selectedCharge}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
              {bookingStep === 'preview' ? (
                <button
                  type="button"
                  onClick={() => setBookingStep('form')}
                  className="px-4 py-2 border border-stone-300 text-stone-700 rounded-xl text-xs font-bold hover:bg-stone-100 transition"
                >
                  Back to Edit
                </button>
              ) : <div />}

              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-4 py-2 text-stone-600 hover:text-stone-800 text-xs font-bold transition"
                >
                  Cancel
                </button>
                {bookingStep === 'form' ? (
                  <button
                    type="button"
                    onClick={() => setBookingStep('preview')}
                    className="px-5 py-2 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition shadow-sm"
                  >
                    Review Booking
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleConfirmBooking}
                    disabled={isCreatingEvent}
                    className="px-5 py-2 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-2"
                  >
                    {isCreatingEvent && <RefreshCw size={13} className="animate-spin" />}
                    <span>Confirm & Sync with Dashboard</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}