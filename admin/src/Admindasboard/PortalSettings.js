import React from 'react';
import { Settings, Shield, User } from 'lucide-react';

export default function PortalSettings() {
  return (
    <div className="p-6 space-y-5 max-w-4xl mx-auto text-slate-100">
      <div>
        <h2 className="text-2xl font-bold text-white">Portal Settings</h2>
        <p className="text-slate-400 text-xs mt-1">Manage system configurations and practice details.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6 text-xs">
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-200 border-b border-slate-800 pb-2 flex items-center gap-2">
            <User size={16} className="text-teal-400" /> Practice Info
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Organization Name</label>
              <input type="text" defaultValue="Psychobeings" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:outline-none" />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Support Email</label>
              <input type="text" defaultValue="contact@psychobeings.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:outline-none" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-slate-200 border-b border-slate-800 pb-2 flex items-center gap-2">
            <Shield size={16} className="text-teal-400" /> Security & Access
          </h3>
          <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
            <div>
              <p className="font-semibold text-slate-200">Two-Factor Authentication</p>
              <p className="text-[10px] text-slate-500">Require 2FA for all administrative accounts.</p>
            </div>
            <input type="checkbox" defaultChecked className="accent-teal-500" />
          </div>
        </div>
      </div>
    </div>
  );
}