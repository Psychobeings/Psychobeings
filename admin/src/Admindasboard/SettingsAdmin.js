import React, { useState } from 'react';
import {
  Shield,
  Lock,
  UserCheck,
  Bell,
  Sliders,
  Save,
  Building2,
  Mail,
  Phone,
  Globe,
  Key,
  CheckCircle2
} from 'lucide-react';

export default function SettingsAdmin() {
  const [activeTab, setActiveTab] = useState('practice');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form State
  const [practiceInfo, setPracticeInfo] = useState({
    practiceName: 'Psychobeings Clinical Practice',
    npiNumber: '1982736405',
    contactEmail: 'contact@psychobeings.com',
    phone: '+1 (555) 349-2810',
    website: 'https://psychobeings.com',
    address: 'Suite 402, Behavioral Health Center, Delhi NCR'
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    hipaaComplianceMode: true,
    autoLogoutMinutes: '15',
    encryptedStorage: true,
    auditLogging: true
  });

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="p-8 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Practice Settings & Controls</h1>
          <p className="text-xs text-slate-500">Configure practice identity, data encryption, HIPAA compliance controls, and security policies.</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#1B7B87]/20 transition-all"
        >
          <Save size={15} />
          <span>Save Changes</span>
        </button>
      </div>

      {/* SUCCESS TOAST */}
      {saveSuccess && (
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-4 py-3 rounded-xl shadow-sm transition-all animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>Settings successfully updated and applied.</span>
        </div>
      )}

      {/* SETTINGS TABS */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        {[
          { id: 'practice', label: 'Practice Profile', icon: Building2 },
          { id: 'security', label: 'Security & Compliance', icon: Shield },
          { id: 'notifications', label: 'Notification Protocols', icon: Bell }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0F2D32] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT: PRACTICE PROFILE */}
      {activeTab === 'practice' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">Organization Identity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Practice / Clinic Name</label>
              <input
                type="text"
                value={practiceInfo.practiceName}
                onChange={e => setPracticeInfo({ ...practiceInfo, practiceName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-none focus:border-[#1B7B87]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">National Identification / NPI</label>
              <input
                type="text"
                value={practiceInfo.npiNumber}
                onChange={e => setPracticeInfo({ ...practiceInfo, npiNumber: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-none focus:border-[#1B7B87]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Administrative Email</label>
              <input
                type="email"
                value={practiceInfo.contactEmail}
                onChange={e => setPracticeInfo({ ...practiceInfo, contactEmail: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-none focus:border-[#1B7B87]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Contact Phone</label>
              <input
                type="text"
                value={practiceInfo.phone}
                onChange={e => setPracticeInfo({ ...practiceInfo, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-none focus:border-[#1B7B87]"
              />
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="font-semibold text-slate-700">Clinic Primary Address</label>
              <input
                type="text"
                value={practiceInfo.address}
                onChange={e => setPracticeInfo({ ...practiceInfo, address: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-none focus:border-[#1B7B87]"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: SECURITY & COMPLIANCE */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">Data Privacy & HIPAA Compliance</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-900 block">HIPAA Shield Mode</span>
                <span className="text-[11px] text-slate-500">Enforce end-to-end encryption on PHI and session clinical notes.</span>
              </div>
              <input
                type="checkbox"
                checked={securitySettings.hipaaComplianceMode}
                onChange={e => setSecuritySettings({ ...securitySettings, hipaaComplianceMode: e.target.checked })}
                className="h-4 w-4 accent-[#1B7B87] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-900 block">Enforce Two-Factor Authentication (2FA)</span>
                <span className="text-[11px] text-slate-500">Require all practitioner accounts to pass TOTP verification at login.</span>
              </div>
              <input
                type="checkbox"
                checked={securitySettings.twoFactorAuth}
                onChange={e => setSecuritySettings({ ...securitySettings, twoFactorAuth: e.target.checked })}
                className="h-4 w-4 accent-[#1B7B87] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-900 block">Automatic Session Timeout</span>
                <span className="text-[11px] text-slate-500">Automatically log out inactive sessions to prevent unauthorized access.</span>
              </div>
              <select
                value={securitySettings.autoLogoutMinutes}
                onChange={e => setSecuritySettings({ ...securitySettings, autoLogoutMinutes: e.target.value })}
                className="bg-white border border-slate-300 rounded-lg text-xs font-semibold px-2 py-1 text-slate-700"
              >
                <option value="5">5 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: NOTIFICATION PROTOCOLS */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">Automated Communications</h2>
          <p className="text-xs text-slate-500">Configure client SMS and email triggers for upcoming appointments, overdue intake forms, and homework reminders.</p>

          <div className="space-y-3 text-xs">
            {['Appointment Reminders (24h before)', 'Intake Form Overdue Alerts', 'Therapeutic Homework Prompts', 'Invoice Due Notifications'].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-800">{item}</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#1B7B87] cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}