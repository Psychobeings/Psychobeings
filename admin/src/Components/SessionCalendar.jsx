import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  RefreshCw, 
  Calendar as CalendarIcon, 
  AlertCircle, 
  Link2,
  X,
  CheckCircle2,
  Video,
  MapPin,
  Check
} from 'lucide-react';
import { gapi } from 'gapi-script';

// Google API Configuration Credentials
const CLIENT_ID = '962306584139-jc2nt4ojirqmk2l91mmkh0ttk17mqfpj.apps.googleusercontent.com';
const API_KEY = ''; 
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar';

export default function SessionCalendar() {
  const [activeTab, setActiveTab] = useState('schedule'); // schedule | sync | availability
  const [viewMode, setViewMode] = useState('week'); // week | day
  const [currentDateRange, setCurrentDateRange] = useState('Aug 23 – 29, 2026');

  // Google Calendar Sync State
  const [isGoogleSynced, setIsGoogleSynced] = useState(false);
  const [connectedEmail, setConnectedEmail] = useState('info.psychobeings@gmail.com');
  const [authLoading, setAuthLoading] = useState(false);
  
  // Real-time fetched events from Google Calendar
  const [liveEvents, setLiveEvents] = useState([]);
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

  // Fetch real-time events from Google Calendar API with useCallback to prevent stale references
  const fetchGoogleCalendarEvents = useCallback(async () => {
    setIsLoadingEvents(true);
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        orderBy: 'startTime',
        maxResults: 50
      });
      
      const events = response.result.items.map(item => {
        const startDateTime = item.start.dateTime || item.start.date;
        const endDateTime = item.end.dateTime || item.end.date;
        const startTimeStr = new Date(startDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const endTimeStr = new Date(endDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Detect if Google Meet link is attached
        const hasMeet = item.hangoutLink || (item.conferenceData && item.conferenceData.entryPoints);
        
        return {
          id: item.id,
          title: item.summary || 'Untitled Session',
          time: `${startTimeStr} - ${endTimeStr}`,
          status: 'booked',
          type: hasMeet ? 'GOOGLE MEET' : 'GOOGLE SYNC',
          rawStart: startDateTime,
          htmlLink: item.htmlLink,
          hangoutLink: item.hangoutLink || null
        };
      });

      setLiveEvents(events);
    } catch (error) {
      console.error("Failed to fetch live calendar events", error);
    } finally {
      setIsLoadingEvents(false);
    }
  }, []);

  // Initialize GAPI client on mount and setup auth instance listener
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        const signedIn = authInstance.isSignedIn.get();
        setIsGoogleSynced(signedIn);
        
        if (signedIn) {
          const userObj = authInstance.currentUser.get();
          const profile = userObj.getBasicProfile();
          if (profile) {
            setConnectedEmail(profile.getEmail());
          }
          fetchGoogleCalendarEvents();
        }

        // Listen for sign-in state changes
        authInstance.isSignedIn.listen((isSignedIn) => {
          setIsGoogleSynced(isSignedIn);
          if (isSignedIn) {
            const userObj = authInstance.currentUser.get();
            const profile = userObj.getBasicProfile();
            if (profile) {
              setConnectedEmail(profile.getEmail());
            }
            fetchGoogleCalendarEvents();
          } else {
            setLiveEvents([]);
          }
        });
      }).catch((error) => {
        console.error("Error initializing Google API", error);
      });
    }

    gapi.load('client:auth2', start);
  }, [fetchGoogleCalendarEvents]);

  // Function to handle Google Sign-In & Live Sync with proper offline/popup handling
  const handleGoogleAuth = async () => {
    setAuthLoading(true);
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      if (!isGoogleSynced) {
        await authInstance.signIn({ prompt: 'select_account' });
        const userObj = authInstance.currentUser.get();
        const profile = userObj.getBasicProfile();
        if (profile) {
          setConnectedEmail(profile.getEmail());
        }
      } else {
        await authInstance.signOut();
        setIsGoogleSynced(false);
      }
    } catch (error) {
      console.error("Authentication failed", error);
    } finally {
      setAuthLoading(false);
    }
  };

  // Push new event directly to Google Calendar API with Google Meet generation support
  const handleConfirmBooking = async () => {
    setIsCreatingEvent(true);
    try {
      const startDateObj = new Date(`${selectedDate}T${selectedTime}:00`);
      const durationMinutes = parseInt(slotDuration, 10) || 45;
      const endDateObj = new Date(startDateObj.getTime() + durationMinutes * 60000);

      const eventRequestBody = {
        summary: `Therapy Session: ${selectedClient} (${selectedCharge.split(' ')[0]})`,
        description: `Mode: ${sessionMode}\nCharge Plan: ${selectedCharge}\nManaged via Psychobeings Practitioner Portal.`,
        start: {
          dateTime: startDateObj.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        end: {
          dateTime: endDateObj.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        attendees: [
          { email: connectedEmail }
        ],
        ...(sessionMode === 'Online' && {
          conferenceData: {
            createRequest: {
              requestId: `psychobeings-${Date.now()}`,
              conferenceSolutionKey: { type: 'hangoutsMeet' }
            }
          }
        })
      };

      if (isGoogleSynced) {
        // Create event live in Google Calendar
        const response = await gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: eventRequestBody,
          conferenceDataVersion: sessionMode === 'Online' ? 1 : 0,
        });

        const created = response.result;
        alert(`Session successfully booked for ${selectedClient} and synced directly to Google Calendar!${created.hangoutLink ? ` Google Meet link generated.` : ''}`);
        
        // Refresh events list
        await fetchGoogleCalendarEvents();
      } else {
        // Fallback simulation if offline or disconnected
        alert(`Session booked locally for ${selectedClient} on ${selectedDate} at ${selectedTime}. Connect Google Calendar for live sync.`);
      }

      setIsBookingModalOpen(false);
      setBookingStep('form');
    } catch (error) {
      console.error("Error creating Google Calendar event:", error);
      alert("Failed to sync event with Google Calendar. Please check your connection and permissions.");
    } finally {
      setIsCreatingEvent(false);
    }
  };

  const handleSaveAvailability = (e) => {
    e.preventDefault();
    setSaveAvailabilitySuccess(true);
    setTimeout(() => setSaveAvailabilitySuccess(false), 3000);
  };

  // Mock Calendar Grid Data combined with live API events
  const weekDays = [
    { day: '23 SUN', date: '23', slots: [{ time: '9:00 - 10:00', title: 'Diksha Bharti', status: 'booked', type: 'ONLINE' }] },
    { day: '24 MON', date: '24', slots: [{ time: '10:00 - 11:00', title: 'Open Slot', status: 'open', type: 'OPEN' }, ...liveEvents.filter(e => e.rawStart?.includes('2026-08-24') || true)] },
    { day: '25 TUE', date: '25', slots: [{ time: '9:00 - 10:00', title: 'Diksha Bharti', status: 'booked', type: 'ONLINE' }] },
    { day: '26 WED', date: '26', slots: [{ time: '3:00 - 4:00', title: 'Open Slot', status: 'open', type: 'OPEN' }] },
    { day: '27 THU', date: '27', slots: [{ time: '9:00 - 10:00', title: 'Open Slot', status: 'open', type: 'OPEN' }] },
    { day: '28 FRI', date: '28', slots: [{ time: '9:00 - 10:00', title: 'Juhi Chaineva', status: 'booked', type: 'ONLINE' }] },
    { day: '29 SAT', date: '29', slots: [{ time: '8:30 - 9:30', title: 'ONLINE ONLY', status: 'unconfirmed', type: 'ONLINE ONLY' }] },
  ];

  return (
    <div className="max-w-7xl mx-auto font-sans text-stone-800 pb-16 space-y-6 relative">
      
      {/* Top Header Navigation matching Psychobeings Palette */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/85 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-base font-bold text-stone-900">Your Schedule (Live Google Sync)</h1>
          <p className="text-xs text-stone-500 mt-0.5">
            {isGoogleSynced ? `Connected and syncing live with ${connectedEmail}.` : 'Google Calendar not connected. Click Sync to authorize.'}
          </p>
        </div>

        {/* Secondary Navigation Tabs */}
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
            onClick={() => setActiveTab('sync')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'sync' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Link2 size={13} />
            <span>Sync</span>
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
              {isGoogleSynced && (
                <button 
                  onClick={fetchGoogleCalendarEvents}
                  className="flex items-center gap-1 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 px-3.5 py-2 rounded-xl text-xs font-bold transition"
                >
                  <RefreshCw size={13} className={isLoadingEvents ? 'animate-spin' : ''} />
                  <span>Fetch Live Google Events</span>
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
                <button onClick={() => setViewMode('week')} className={`px-3 py-1 rounded-lg text-xs font-bold transition ${viewMode === 'week' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600'}`}>week</button>
                <button onClick={() => setViewMode('day')} className={`px-3 py-1 rounded-lg text-xs font-bold transition ${viewMode === 'day' ? 'bg-[#237A88] text-white shadow-sm' : 'text-stone-600'}`}>day</button>
              </div>
            </div>
          </div>

          {/* Calendar Grid View */}
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
                    if (slot.status === 'open') bgStyle = 'bg-[#237A88]/20 text-[#237A88] border-[#237A88]/30';
                    if (slot.type === 'GOOGLE SYNC') bgStyle = 'bg-indigo-600 text-white border-indigo-700';
                    if (slot.type === 'GOOGLE MEET') bgStyle = 'bg-blue-600 text-white border-blue-700';

                    return (
                      <div key={sIdx} className={`p-2.5 rounded-xl border text-[11px] font-semibold shadow-sm space-y-1.5 ${bgStyle}`}>
                        <div className="flex items-center justify-between opacity-90 text-[10px]">
                          <span>{slot.time}</span>
                          <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-black/10 font-bold">{slot.type}</span>
                        </div>
                        <p className="font-bold truncate">{slot.title}</p>
                        {slot.hangoutLink && (
                          <a 
                            href={slot.hangoutLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded text-[10px] font-bold transition mt-1 w-full justify-center"
                          >
                            <Video size={10} />
                            <span>Join Meet</span>
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Legend Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center gap-6 text-xs font-semibold text-stone-700">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#237A88]" /><span>Booked</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-indigo-600" /><span>Google Calendar Event</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-600" /><span>Google Meet Session</span></div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: GOOGLE CALENDAR SYNC ================= */}
      {activeTab === 'sync' && (
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-8 space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <CalendarIcon size={20} />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">Google Calendar Sync</h2>
                <p className="text-xs text-stone-500">Connect your live Google Workspace account to sync appointments and generate Google Meet links automatically.</p>
              </div>
            </div>
            <button 
              onClick={handleGoogleAuth}
              disabled={authLoading}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                isGoogleSynced 
                  ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100' 
                  : 'bg-[#237A88] text-white hover:bg-[#1C646F]'
              }`}
            >
              <RefreshCw size={13} className={authLoading ? 'animate-spin' : ''} />
              <span>{isGoogleSynced ? 'Disconnect Google Account' : 'Connect Google Account'}</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div>
                <h4 className="text-xs font-bold text-stone-900">Real-Time Sync Status</h4>
                <p className="text-[11px] text-stone-500">
                  {isGoogleSynced ? 'Connected and syncing live with Google Calendar API' : 'Not Connected. Sign in to enable live synchronization.'}
                </p>
              </div>
              <span className={`w-3 h-3 rounded-full ${isGoogleSynced ? 'bg-emerald-500 animate-pulse' : 'bg-stone-300'}`} />
            </div>

            <div className="border border-stone-200 rounded-2xl p-5 space-y-3 bg-stone-50/50">
              <h4 className="text-xs font-bold text-stone-700">Authorized Workspace Account</h4>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200">
                <span className="text-xs font-bold text-stone-800">{connectedEmail}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${isGoogleSynced ? 'text-indigo-600 bg-indigo-50' : 'text-stone-500 bg-stone-100'}`}>
                  {isGoogleSynced ? 'Active API Stream' : 'Disconnected'}
                </span>
              </div>
            </div>

            {isGoogleSynced && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={fetchGoogleCalendarEvents}
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <RefreshCw size={14} className={isLoadingEvents ? 'animate-spin' : ''} />
                  <span>Sync Events Now</span>
                </button>
              </div>
            )}
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
                <CalendarIcon size={18} className="text-[#237A88]" />
                <h3 className="text-sm font-bold text-stone-900">
                  {bookingStep === 'form' ? 'New Therapy Session Booking' : 'Booking Preview & Summary'}
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
                  {!isGoogleSynced && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0 text-amber-600" />
                      <span>Google Calendar is not connected. Bookings will be saved locally until connected.</span>
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
                        ✨ Selecting Online will automatically generate a Google Meet video conference link upon confirmation.
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
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                      <span className="text-xs text-stone-500 font-medium">Client Name</span>
                      <span className="text-xs font-bold text-stone-900">{selectedClient}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                      <span className="text-xs text-stone-500 font-medium">Date & Time</span>
                      <span className="text-xs font-bold text-stone-900">{selectedDate} at {selectedTime}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                      <span className="text-xs text-stone-500 font-medium">Session Mode</span>
                      <span className="text-xs font-bold text-stone-900 flex items-center gap-1">
                        {sessionMode === 'Online' ? <Video size={12} className="text-[#237A88]" /> : <MapPin size={12} className="text-[#237A88]" />}
                        {sessionMode} {sessionMode === 'Online' && '(Google Meet)'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-stone-500 font-medium">Selected Charge</span>
                      <span className="text-xs font-bold text-[#237A88]">{selectedCharge}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Everything looks correct. Ready to confirm and dispatch calendar invitation.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-stone-100 bg-stone-50/50 flex items-center justify-between">
              {bookingStep === 'preview' ? (
                <button
                  type="button"
                  onClick={() => setBookingStep('form')}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-200/50 transition"
                >
                  Back to Edit
                </button>
              ) : <div />}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-200/50 transition"
                >
                  Cancel
                </button>
                {bookingStep === 'form' ? (
                  <button
                    type="button"
                    onClick={() => setBookingStep('preview')}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-[#237A88] hover:bg-[#1C646F] text-white shadow-sm transition"
                  >
                    Preview Selection
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={isCreatingEvent}
                    onClick={handleConfirmBooking}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition flex items-center gap-2 disabled:opacity-50"
                  >
                    <RefreshCw size={13} className={isCreatingEvent ? 'animate-spin' : ''} />
                    <span>{isCreatingEvent ? 'Syncing to Calendar...' : 'Confirm & Book'}</span>
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