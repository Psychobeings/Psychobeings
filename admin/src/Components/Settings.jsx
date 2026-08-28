import React, { useState } from 'react';
import { 
  Clock, 
  Save 
} from 'lucide-react';

export default function SettingsPage() {
  // Sessions State
  const [targetSessions, setTargetSessions] = useState(12);

  const handleSaveAll = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20 font-sans text-stone-800 px-4 sm:px-6">
      
      {/* Top Header & Save Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-[2.5rem] border border-stone-200/80 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-stone-900 tracking-tight">Settings</h1>
          <p className="text-xs text-stone-500 font-medium mt-0.5">Configure your session preferences.</p>
        </div>

        <button
          onClick={handleSaveAll}
          className="flex items-center gap-2 px-6 py-3 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-2xl text-xs font-bold shadow-md shadow-[#237A88]/25 transition-all cursor-pointer shrink-0"
        >
          <Save size={16} />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Main Settings Layout Container */}
      <div className="max-w-3xl">
        
        {/* ================= SESSIONS SETTINGS ================= */}
        <div className="bg-white rounded-[2.5rem] border border-stone-200/80 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4 flex items-center gap-2">
            <Clock size={18} className="text-[#237A88]" />
            <h2 className="text-base font-black text-stone-900">Session Settings</h2>
          </div>

          <div className="space-y-2">
            <h3 className="font-black text-stone-900 text-sm">Default Target Sessions</h3>
            <p className="text-xs text-stone-500 font-medium">Set the default number of sessions you recommend for new clients.</p>
            
            <div className="max-w-xs pt-1">
              <input
                type="number"
                value={targetSessions}
                onChange={(e) => setTargetSessions(e.target.value)}
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold outline-none focus:border-[#237A88]"
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}