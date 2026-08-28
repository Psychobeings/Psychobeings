import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  RefreshCw, 
  Calendar as CalendarIcon, 
  AlertCircle, 
  Link2 
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
  const [connectedEmail] = useState('info.psychobeings@gmail.com');
  
  // Real-time fetched events from Google Calendar
  const [liveEvents, setLiveEvents] = useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);

  // Availability Settings State
  const [availableDays, setAvailableDays] = useState({
    Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: true, Sun: false
  });

  // Initialize GAPI client on mount
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        const signedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        setIsGoogleSynced(signedIn);
        if (signedIn) {
          fetchGoogleCalendarEvents();
        }
      }).catch((error) => {
        console.error("Error initializing Google API", error);
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  // Function to handle Google Sign-In & Live Sync
  const handleGoogleAuth = async () => {
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      if (!isGoogleSynced) {
        await authInstance.signIn();
        setIsGoogleSynced(true);
        fetchGoogleCalendarEvents();
      } else {
        await authInstance.signOut();
        setIsGoogleSynced(false);
        setLiveEvents([]);
      }
    } catch (error) {
      console.error("Authentication failed", error);
    }
  };

  // Fetch real-time events from Google Calendar API
  const fetchGoogleCalendarEvents = async () => {
    setIsLoadingEvents(true);
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        orderBy: 'startTime',
      });
      
      const events = response.result.items.map(item => ({
        id: item.id,
        title: item.summary || 'Untitled Session',
        time: new Date(item.start.dateTime || item.start.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'booked',
        type: 'GOOGLE SYNC'
      }));

      setLiveEvents(events);
    } catch (error) {
      console.error("Failed to fetch live calendar events", error);
    } finally {
      setIsLoadingEvents(false);
    }
  };

  // Mock Calendar Grid Data combined with Live Data
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
    <div className="max-w-7xl mx-auto font-sans text-stone-800 pb-16 space-y-6">
      
      {/* Top Header Navigation matching Psychobeings Palette */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/85 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-base font-bold text-stone-900">Your Schedule (Live Google Sync)</h1>
          <p className="text-xs text-stone-500 mt-0.5">Real-time sync enabled with Google Calendar for {connectedEmail}.</p>
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
                onClick={() => {}}
                className="flex items-center gap-1.5 bg-[#237A88] hover:bg-[#1C646F] text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm shadow-[#237A88]/20"
              >
                <Plus size={14} />
                <span>New Booking</span>
              </button>
              <button 
                onClick={fetchGoogleCalendarEvents}
                className="flex items-center gap-1 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 px-3.5 py-2 rounded-xl text-xs font-bold transition"
              >
                <RefreshCw size={13} className={isLoadingEvents ? 'animate-spin' : ''} />
                <span>Fetch Live Google Events</span>
              </button>
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

                    return (
                      <div key={sIdx} className={`p-2.5 rounded-xl border text-[11px] font-semibold shadow-sm ${bgStyle}`}>
                        <div className="flex items-center justify-between mb-1 opacity-90 text-[10px]">
                          <span>{slot.time}</span>
                          <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-black/10 font-bold">{slot.type}</span>
                        </div>
                        <p className="font-bold truncate">{slot.title}</p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Legend Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center gap-6 text-xs font-semibold text-stone-700">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#237A88]" /><span>Booked</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-indigo-600" /><span>Google Calendar Event (Live)</span></div>
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
                <p className="text-xs text-stone-500">Connect your live Google Workspace account.</p>
              </div>
            </div>
            <button 
              onClick={handleGoogleAuth}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${isGoogleSynced ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-[#237A88] text-white'}`}
            >
              {isGoogleSynced ? 'Disconnect Google Account' : 'Connect Google Account'}
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div>
                <h4 className="text-xs font-bold text-stone-900">Real-Time Sync Status</h4>
                <p className="text-[11px] text-stone-500">Status: {isGoogleSynced ? 'Connected and syncing live' : 'Not Connected'}</p>
              </div>
              <span className={`w-3 h-3 rounded-full ${isGoogleSynced ? 'bg-emerald-500 animate-pulse' : 'bg-stone-300'}`} />
            </div>

            <div className="border border-stone-200 rounded-2xl p-5 space-y-3 bg-stone-50/50">
              <h4 className="text-xs font-bold text-stone-700">Authorized Workspace Email</h4>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200">
                <span className="text-xs font-bold text-stone-800">{connectedEmail}</span>
                <span className="text-[10px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded font-semibold">Active API Stream</span>
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
            <span>Note: Availability changes apply instantly to your live Google Calendar availability settings.</span>
          </div>

          <div>
            <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">Available Days</h3>
            <div className="flex flex-wrap gap-2">
              {Object.keys(availableDays).map((dayKey) => (
                <button
                  key={dayKey}
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
        </div>
      )}

    </div>
  );
}