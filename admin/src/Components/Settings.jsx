import React, { useState } from 'react';
import { 
  User, 
  CreditCard, 
  FileText, 
  Calendar, 
  Clock, 
  Save, 
  Edit3, 
  Copy, 
  ExternalLink, 
  Plus, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [copied, setCopied] = useState(false);

  // Profile Form State
  const [profile, setProfile] = useState({
    name: 'Amanpreet Kaur',
    gender: 'Female',
    email: 'info.psychobeings@gmail.com',
    dob: '2000-11-22',
    shortBio: 'A Counselling Psychologist (M.Sc. Clinical Psychology) and PhD scholar with 2+ years of experience in mental health. I provide online therapy for adolescents and adults experiencing anxiety, stress, overthinking, self-esteem, emotional, and relationship concerns. Built on CBT, Person-Centred, Narrative, and Mindfulness-based approaches, I offer a safe, confidential, and supportive space for growth.',
    displayedBio: 'A Counselling Psychologist (M.Sc. Clinical Psychology) and PhD scholar with 2+ years of experience.',
    languages: ['English', 'Hindi'],
    therapyTypes: [
      'Adult Therapy', 'Teen Therapy', 'Anxiety Therapy', 
      'Cognitive Behavioural Therapy (CBT)', 'Relationship Counselling', 
      'Stress Management Therapy', 'Anger Management Therapy', 'Corporate Wellness Counselling'
    ],
    isRciCertified: true,
    highestDegree: 'MSc Clinical Psychology',
    university: 'CMR University',
    yearsOfExperience: '2',
    address1: 'C6/ Ground Floor Rps Plains',
    address2: 'RPS City, Sector 88, Faridabad, Haryana',
    city: 'Faridabad',
    state: 'Haryana',
    country: 'India',
    pincode: '121002'
  });

  // Charges Tab State
  const [charges, setCharges] = useState([
    { id: 1, title: 'Adult Therapy', type: 'Individual', amount: 1500, currency: 'INR', duration: 'Single session' },
    { id: 2, title: 'Adult Therapy (Save Rs 1000)', type: 'Package', amount: 8000, currency: 'INR', duration: '6 sessions' },
    { id: 3, title: 'Teen Therapy', type: 'Individual', amount: 900, currency: 'INR', duration: 'Single session' },
    { id: 4, title: 'Corporate Wellness Counselling', type: 'Package', amount: 8000, currency: 'INR', duration: '6 sessions' }
  ]);
  const [isLocalePricingEnabled, setIsLocalePricingEnabled] = useState(false);

  // Payments Tab State
  const [upiId, setUpiId] = useState('amanarsh22@okicici');
  const [paymentMethods, setPaymentMethods] = useState({
    cash: true,
    upi: true,
    prepaid: true,
    bankTransfer: true
  });

  // Sessions Tab State
  const [targetSessions, setTargetSessions] = useState(12);

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://booking.myndspace.app/amanp');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveAll = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20 font-sans text-stone-800 px-4 sm:px-6">
      
      {/* Top Header & Save Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-[2.5rem] border border-stone-200/80 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-stone-900 tracking-tight">Settings</h1>
          <p className="text-xs text-stone-500 font-medium mt-0.5">Configure your professional profile, clinical charges, intake protocols, and booking preferences.</p>
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Live Preview Card (Matches Myndspace preview container) */}
        <div className="lg:col-span-4 bg-white rounded-[2.5rem] border border-stone-200/80 p-6 shadow-sm space-y-4 sticky top-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-stone-400">Preview</span>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">Live Card</span>
          </div>

          <div className="bg-stone-50 rounded-[2rem] border border-stone-200/60 p-5 text-center space-y-4">
            <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                alt="Profile Preview" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <h3 className="font-black text-stone-900 text-base">{profile.name}</h3>
              <p className="text-xs font-medium text-stone-600 px-2 line-clamp-3">
                "{profile.displayedBio}"
              </p>
            </div>

            <button className="w-full py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer">
              Book Session
            </button>
          </div>
        </div>

        {/* Right Column: Navigation Tabs & Content Panels */}
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] border border-stone-200/80 p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Settings Sub-Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-4 text-xs font-bold">
            {[
              { id: 'Profile', label: 'Profile', icon: User },
              { id: 'Charges', label: 'Charges', icon: CreditCard },
              { id: 'Payments', label: 'Payments', icon: CreditCard },
              { id: 'Intake & Consent', label: 'Intake & Consent', icon: FileText },
              { id: 'Booking', label: 'Booking', icon: Calendar },
              { id: 'Sessions', label: 'Sessions', icon: Clock }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#237A88] text-white shadow-sm' 
                      : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200/60'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ================= TAB 1: PROFILE ================= */}
          {activeTab === 'Profile' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-black text-stone-900">My Profile</h2>
                <span className="text-xs text-stone-400 font-medium">Public clinician details</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-bold text-stone-700">Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-stone-700">Gender</label>
                  <select
                    value={profile.gender}
                    onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Non-binary</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-bold text-stone-700">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-stone-700">Date of Birth</label>
                  <input
                    type="date"
                    value={profile.dob}
                    onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="font-bold text-stone-700">Short Introduction</label>
                <textarea
                  rows="4"
                  value={profile.shortBio}
                  onChange={(e) => setProfile({ ...profile, shortBio: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88] resize-none"
                />
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="font-bold text-stone-700">Displayed Bio (Home page & discovery)</label>
                <input
                  type="text"
                  value={profile.displayedBio}
                  onChange={(e) => setProfile({ ...profile, displayedBio: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                />
              </div>

              {/* Languages & Therapy Types tags display */}
              <div className="space-y-2 text-xs">
                <label className="font-bold text-stone-700">Languages</label>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 rounded-xl font-bold">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <label className="font-bold text-stone-700">Therapy Types</label>
                <div className="flex flex-wrap gap-2">
                  {profile.therapyTypes.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#237A88]/10 text-[#237A88] border border-[#237A88]/20 rounded-xl font-bold text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="space-y-1.5">
                  <label className="font-bold text-stone-700">Highest Degree</label>
                  <input
                    type="text"
                    value={profile.highestDegree}
                    onChange={(e) => setProfile({ ...profile, highestDegree: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-stone-700">University</label>
                  <input
                    type="text"
                    value={profile.university}
                    onChange={(e) => setProfile({ ...profile, university: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-bold text-stone-700">Years of Experience</label>
                  <input
                    type="text"
                    value={profile.yearsOfExperience}
                    onChange={(e) => setProfile({ ...profile, yearsOfExperience: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="font-bold text-stone-700">Address Line 1</label>
                  <input
                    type="text"
                    value={profile.address1}
                    onChange={(e) => setProfile({ ...profile, address1: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#237A88]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">City</label>
                  <input type="text" value={profile.city} onChange={(e) => setProfile({...profile, city: e.target.value})} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl" />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">State</label>
                  <input type="text" value={profile.state} onChange={(e) => setProfile({...profile, state: e.target.value})} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl" />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Country</label>
                  <input type="text" value={profile.country} onChange={(e) => setProfile({...profile, country: e.target.value})} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl" />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Pincode</label>
                  <input type="text" value={profile.pincode} onChange={(e) => setProfile({...profile, pincode: e.target.value})} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl" />
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 2: CHARGES ================= */}
          {activeTab === 'Charges' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-black text-stone-900">Session Charges</h2>
                  <p className="text-xs text-stone-500 font-medium">Manage pricing for individual sessions and bundled packages.</p>
                </div>
                <button 
                  onClick={() => alert('Add charge modal opened')}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#237A88] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#1C646F] transition cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add Charge</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {charges.map((item) => (
                  <div key={item.id} className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-3 relative group">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                        item.type === 'Individual' ? 'bg-purple-100 text-purple-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        ● {item.type}
                      </span>
                      <button 
                        onClick={() => alert(`Editing charge: ${item.title}`)}
                        className="p-1.5 bg-white border border-stone-200 rounded-lg text-stone-600 hover:text-[#237A88] transition cursor-pointer"
                      >
                        <Edit3 size={13} />
                      </button>
                    </div>

                    <div>
                      <h4 className="font-black text-stone-900 text-sm">{item.title}</h4>
                      <p className="text-lg font-black text-[#237A88] mt-1">₹{item.amount}</p>
                      <p className="text-[11px] text-stone-400 font-medium">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-stone-900 text-sm">Locale Based Pricing</h3>
                    <p className="text-xs text-stone-500 font-medium mt-0.5">Locale-based pricing shows INR rates to Indian clients and USD rates to international clients.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={isLocalePricingEnabled}
                    onChange={(e) => setIsLocalePricingEnabled(e.target.checked)}
                    className="w-5 h-5 accent-[#237A88] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 3: PAYMENTS ================= */}
          {activeTab === 'Payments' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-base font-black text-stone-900">UPI Payment Details</h2>
                <p className="text-xs text-stone-500 font-medium">Your UPI ID is shown to clients during booking.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
                <div className="space-y-2">
                  <label className="font-bold text-stone-700 text-xs">UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-xs outline-none focus:border-[#237A88]"
                  />
                  <p className="text-[10px] text-stone-400">Your UPI ID is shown to clients during booking.</p>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <label className="font-bold text-stone-700 text-xs">UPI QR Code</label>
                  <div className="bg-white p-3 rounded-xl border border-stone-200 inline-block">
                    <div className="w-24 h-24 bg-stone-900 flex items-center justify-center text-white text-[10px] font-mono rounded">
                      [QR CODE]
                    </div>
                  </div>
                  <div>
                    <button className="px-3 py-1.5 bg-white border border-stone-200 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer">
                      Replace QR
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="font-black text-stone-900 text-sm">Supported Payment Methods</h3>
                <div className="space-y-2 text-xs">
                  {[
                    { key: 'cash', label: 'Cash' },
                    { key: 'upi', label: 'UPI' },
                    { key: 'prepaid', label: 'Prepaid' },
                    { key: 'bankTransfer', label: 'Bank Transfer' }
                  ].map((m) => (
                    <label key={m.key} className="flex items-center gap-2.5 cursor-pointer font-medium text-stone-700">
                      <input
                        type="checkbox"
                        checked={paymentMethods[m.key]}
                        onChange={(e) => setPaymentMethods({ ...paymentMethods, [m.key]: e.target.checked })}
                        className="w-4 h-4 accent-[#237A88] rounded"
                      />
                      <span>{m.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 4: INTAKE & CONSENT ================= */}
          {activeTab === 'Intake & Consent' && (
            <div className="space-y-6 animate-in fade-in duration-200 text-center py-10 bg-stone-50 rounded-2xl border border-stone-200/80">
              <FileText size={40} className="mx-auto text-[#237A88]" />
              <div className="space-y-2 max-w-md mx-auto px-4">
                <h3 className="font-black text-stone-900 text-base">Client Consent & Intake Forms</h3>
                <p className="text-xs text-stone-500 font-medium">
                  Author the consent contract and the intake questionnaire your clients complete before their first session.
                </p>
                <button 
                  onClick={() => alert('Opening Intake & Consent Form Editor...')}
                  className="mt-4 px-6 py-2.5 bg-[#237A88] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#1C646F] transition cursor-pointer"
                >
                  View / Edit Forms
                </button>
              </div>
            </div>
          )}

          {/* ================= TAB 5: BOOKING ================= */}
          {activeTab === 'Booking' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <h3 className="font-black text-stone-900 text-sm">Portal Link</h3>
                <p className="text-xs text-stone-500 font-medium">Share this link with clients via email signature, WhatsApp, or anywhere you like.</p>
                
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    readOnly
                    value="https://booking.myndspace.app/amanp"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono text-stone-700 outline-none"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-[#237A88] hover:bg-[#1C646F] text-white rounded-xl text-xs font-bold transition shrink-0 cursor-pointer shadow-xs"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a
                    href="https://booking.myndspace.app/amanp"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition cursor-pointer"
                    title="Visit Portal"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="font-black text-stone-900 text-sm">Embed Code</h3>
                <p className="text-xs text-stone-500 font-medium">Paste this in your website's HTML to embed the booking portal.</p>
                <textarea
                  readOnly
                  rows="4"
                  value={`<iframe src="https://booking.myndspace.app/amanp" width="100%" height="600" style="border:none;"></iframe>`}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono text-stone-600 outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* ================= TAB 6: SESSIONS ================= */}
          {activeTab === 'Sessions' && (
            <div className="space-y-6 animate-in fade-in duration-200">
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
          )}

        </div>

      </div>

    </div>
  );
}