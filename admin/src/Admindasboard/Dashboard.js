import React, { useState } from 'react';

// ==========================================
// MAIN DASHBOARD LAYOUT & ROUTER
// ==========================================
export default function Dashboard() {
  const [activePage, setActivePage] = useState('overview');
  const [selectedClient, setSelectedClient] = useState('John Doe');

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-slate-800">Psychobeings</div>
        <nav className="flex-1 p-4 space-y-1">
          <NavBtn id="overview" label="1. Overview & Active" active={activePage} set={setActivePage} />
          <NavBtn id="nimhans" label="2. NIMHANS Intake" active={activePage} set={setActivePage} />
          <NavBtn id="soap" label="3. Daily Session Notes" active={activePage} set={setActivePage} />
          <NavBtn id="psychometrics" label="4. Psychometric Tests" active={activePage} set={setActivePage} />
          <NavBtn id="longitudinal" label="5. Progress Trajectory" active={activePage} set={setActivePage} />
          <NavBtn id="export" label="6. Print & Letterhead" active={activePage} set={setActivePage} />
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {activePage === 'overview' && <OverviewPage setPage={setActivePage} />}
        {activePage === 'nimhans' && <NimhansIntakePage />}
        {activePage === 'soap' && <SessionNotesPage />}
        {activePage === 'psychometrics' && <PsychometricsPage />}
        {activePage === 'longitudinal' && <LongitudinalPage client={selectedClient} setClient={setSelectedClient} />}
        {activePage === 'export' && <ExportPrintPage client={selectedClient} />}
      </main>
    </div>
  );
}

function NavBtn({ id, label, active, set }) {
  return (
    <button
      onClick={() => set(id)}
      className={`w-text-left w-full text-left px-3 py-2 rounded-md transition ${
        active === id ? 'bg-blue-600 text-white font-medium' : 'text-slate-300 hover:bg-slate-800'
      }`}
    >
      {label}
    </button>
  );
}

// ==========================================
// PAGE 1: OVERVIEW & ACTIVE PRACTICE DASHBOARD
// ==========================================
export function OverviewPage({ setPage }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Practice Overview</h1>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Total Active Clients" value="42" color="border-blue-500" />
        <MetricCard title="Today's Appointments" value="6" color="border-green-500" />
        <MetricCard title="Pending Documentation Logs" value="3" color="border-amber-500" />
      </div>

      {/* Quick-Action Panel */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="flex gap-4">
          <button onClick={() => setPage('soap')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            + Start Clinical Session
          </button>
          <button onClick={() => setPage('nimhans')} className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800">
            Log Intake Notes
          </button>
          <button className="px-4 py-2 bg-red-100 text-red-700 border border-red-300 rounded hover:bg-red-200 font-medium">
            🚩 Flag Critical Safety Event
          </button>
        </div>
      </div>

      {/* Daily Schedule Stream */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Today's Schedule</h2>
        <div className="divide-y divide-gray-100">
          <ScheduleRow time="09:00 AM" name="John Doe" type="Psychotherapy" status="Completed" />
          <ScheduleRow time="11:00 AM" name="Jane Smith" type="NIMHANS Intake" status="In Progress" />
          <ScheduleRow time="02:00 PM" name="Alex Vance" type="Psychometric Testing" status="Scheduled" />
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, color }) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${color} border-y border-r border-gray-200`}>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
    </div>
  );
}

function ScheduleRow({ time, name, type, status }) {
  return (
    <div className="py-3 flex justify-between items-center">
      <div>
        <span className="font-semibold text-gray-700 w-24 inline-block">{time}</span>
        <span className="font-medium text-gray-900 ml-2">{name}</span>
        <span className="text-sm text-gray-500 ml-3">({type})</span>
      </div>
      <span className={`px-2 py-1 text-xs rounded-full ${
        status === 'Completed' ? 'bg-green-100 text-green-800' :
        status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
      }`}>
        {status}
      </span>
    </div>
  );
}

// ==========================================
// PAGE 2: STANDARDIZED NIMHANS INTAKE PROFORMA
// ==========================================
export function NimhansIntakePage() {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">NIMHANS Clinical Intake Proforma</h1>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 border-b-2 font-medium ${
            activeTab === 'history' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Tab 1 — Case History
        </button>
        <button
          onClick={() => setActiveTab('mse')}
          className={`px-4 py-2 border-b-2 font-medium ${
            activeTab === 'mse' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Tab 2 — Mental Status Examination (MSE)
        </button>
      </div>

      {/* Tab 1 Content */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          <InputField label="Chief Complaints" placeholder="Patient's primary presenting issues..." />
          <InputField label="History of Present Illness (HOPI)" placeholder="Onset, course, precipitating factors..." rows={3} />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Past Psychiatric/Medical History" rows={2} />
            <InputField label="Family Dynamics" rows={2} />
          </div>
          <InputField label="Personal History & Premorbid Personality" rows={2} />
        </div>
      )}

      {/* Tab 2 Content */}
      {activeTab === 'mse' && (
        <div className="grid grid-cols-2 gap-4">
          <InputField label="General Behavior & Psychomotor Activity" />
          <InputField label="Speech & Thought (Form/Stream/Content)" />
          <InputField label="Mood & Affect" />
          <InputField label="Perception" />
          <InputField label="Cognitive Functions (Attention, Memory, etc.)" />
          <InputField label="Judgement & Insight Grade" />
        </div>
      )}
    </div>
  );
}

function InputField({ label, placeholder, rows }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {rows ? (
        <textarea rows={rows} className="w-full border border-gray-300 rounded-md p-2 text-sm" placeholder={placeholder} />
      ) : (
        <input type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm" placeholder={placeholder} />
      )}
    </div>
  );
}

// ==========================================
// PAGE 3: DAILY SESSION NOTES (SOAP & DAP)
// ==========================================
export function SessionNotesPage() {
  const [format, setFormat] = useState('SOAP');
  const [flags, setFlags] = useState({ SI: false, NSSI: false, HI: false });

  const toggleFlag = (key) => setFlags((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Daily Session Notes</h1>
        
        {/* Format Toggle */}
        <div className="bg-gray-100 p-1 rounded-md">
          <button
            onClick={() => setFormat('SOAP')}
            className={`px-3 py-1 text-sm rounded ${format === 'SOAP' ? 'bg-white shadow-sm font-bold' : 'text-gray-600'}`}
          >
            SOAP
          </button>
          <button
            onClick={() => setFormat('DAP')}
            className={`px-3 py-1 text-sm rounded ${format === 'DAP' ? 'bg-white shadow-sm font-bold' : 'text-gray-600'}`}
          >
            DAP
          </button>
        </div>
      </div>

      {/* Safety Flags */}
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-sm font-bold text-red-800 mb-2">Safety & Risk Assessment Flags</p>
        <div className="flex gap-4">
          {['SI', 'NSSI', 'HI'].map((type) => (
            <label key={type} className="flex items-center space-x-2 text-sm font-medium text-red-900 cursor-pointer">
              <input
                type="checkbox"
                checked={flags[type]}
                onChange={() => toggleFlag(type)}
                className="rounded border-red-300 text-red-600 focus:ring-red-500"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        {(flags.SI || flags.NSSI || flags.HI) && (
          <textarea
            rows={2}
            className="w-full mt-3 border border-red-300 rounded p-2 text-sm bg-white"
            placeholder="Mandatory risk mitigation notes required..."
          />
        )}
      </div>

      {/* Dynamic SOAP / DAP Fields */}
      <div className="space-y-4">
        {format === 'SOAP' ? (
          <>
            <InputField label="Subjective (S)" rows={2} />
            <InputField label="Objective (O)" rows={2} />
            <InputField label="Assessment (A)" rows={2} />
            <InputField label="Plan (P)" rows={2} />
          </>
        ) : (
          <>
            <InputField label="Data (D)" rows={3} />
            <InputField label="Assessment (A)" rows={2} />
            <InputField label="Plan (P)" rows={2} />
          </>
        )}
      </div>
    </div>
  );
}

// ==========================================
// PAGE 4: PSYCHOMETRIC ASSESSMENTS & AUTO-SCORER
// ==========================================
export function PsychometricsPage() {
  const [phqScore, setPhqScore] = useState(0);

  const getPhqSeverity = (score) => {
    if (score <= 4) return 'Minimal';
    if (score <= 9) return 'Mild';
    if (score <= 14) return 'Moderate';
    if (score <= 19) return 'Moderately Severe';
    return 'Severe';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Psychometric Assessments</h1>

      {/* PHQ-9 Auto Scorer Sample */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">PHQ-9 (Depression Screener)</h2>
          <div className="text-right">
            <span className="text-sm text-gray-500">Score: </span>
            <span className="text-lg font-bold text-blue-600">{phqScore}</span>
            <span className="ml-2 px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
              {getPhqSeverity(phqScore)}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">Little interest or pleasure in doing things?</p>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((val) => (
            <button
              key={val}
              onClick={() => setPhqScore(val * 3)} // Simplified scoring logic for demo
              className="px-3 py-1 border border-gray-300 text-sm rounded hover:bg-gray-50"
            >
              Option {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// PAGE 5: LONGITUDINAL PROGRESS & BASELINE
// ==========================================
export function LongitudinalPage({ client, setClient }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Longitudinal Progress</h1>
        <select
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="border border-gray-300 rounded p-2 text-sm"
        >
          <option>John Doe</option>
          <option>Jane Smith</option>
        </select>
      </div>

      {/* Mock Interactive Canvas Chart */}
      <div className="h-48 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 bg-gray-50">
        [ Dual-Line Graph: PHQ-9 & GAD-7 Trajectory Over Time ]
      </div>

      {/* Historical Table */}
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-2">Date</th>
            <th className="p-2">PHQ-9</th>
            <th className="p-2">GAD-7</th>
            <th className="p-2">Trend</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">2026-01-10</td>
            <td className="p-2">18 (Severe)</td>
            <td className="p-2">14 (Moderate)</td>
            <td className="p-2 text-gray-500">Baseline</td>
          </tr>
          <tr className="border-b">
            <td className="p-2">2026-02-15</td>
            <td className="p-2">11 (Moderate)</td>
            <td className="p-2">8 (Mild)</td>
            <td className="p-2 text-green-600">▼ Improving</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ==========================================
// PAGE 6: PRINT & LETTERHEAD EXPORT VIEW
// ==========================================
export function ExportPrintPage({ client }) {
  return (
    <div>
      {/* Printable Area with CSS print logic */}
      <div className="bg-white p-8 rounded shadow-md border max-w-2xl mx-auto print:shadow-none print:border-none print:w-full">
        {/* Psychobeings Header */}
        <div className="border-b-2 border-slate-800 pb-4 mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-wide">PSYCHOBEINGS</h1>
            <p className="text-xs text-gray-500">Clinical Psychology & Behavioral Health</p>
          </div>
          <div className="text-right text-xs text-gray-600">
            <p>Lic. # PSY-104928</p>
            <p>contact@psychobeings.com</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm">
          <p><strong>Client:</strong> {client}</p>
          <p><strong>Date:</strong> August 23, 2026</p>
          <hr />
          <p className="font-semibold text-gray-800">Clinical Assessment Summary:</p>
          <p className="text-gray-600 leading-relaxed">
            Client presents with significant reduction in depressive symptoms over the 6-week protocol. Continues to maintain stable affect and safety protocols.
          </p>
        </div>
      </div>

      {/* Control Actions (Hidden on Print) */}
      <div className="text-center mt-6 print:hidden">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded shadow hover:bg-blue-700"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
}