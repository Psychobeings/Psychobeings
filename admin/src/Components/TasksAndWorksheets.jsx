import React, { useState } from 'react';
import { initialTasks, readyAssessments, worksheetLibrary } from '../Data/worksheetsData';

export default function TasksAndWorksheets() {
  const [activeTab, setActiveTab] = useState('tasks');
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [clientEmail, setClientEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAssign = (e) => {
    e.preventDefault();
    alert(`Successfully assigned ${selectedAssessment.acronym} to ${clientEmail}`);
    setIsModalOpen(false);
    setClientEmail('');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          📋 Tasks & Worksheets
        </h1>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700">
          + Create New
        </button>
      </div>

      <div className="flex justify-center border-b mb-6 bg-white rounded-t-lg shadow-sm">
        <nav className="flex gap-4">
          {['tasks', 'assessments', 'library'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-emerald-800 border-b-2 border-emerald-600 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'library' ? 'Worksheet Library' : tab}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'tasks' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {initialTasks.map((task) => (
            <div key={task.id} className="border rounded-xl p-4 shadow-sm bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-800 text-base mb-2">{task.title}</h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  <strong>Description:</strong><br />{task.description}
                </p>
              </div>
              <span className="text-xs text-gray-400 mt-2">Type: {task.type}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'assessments' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {readyAssessments.map((assessment) => (
            <div key={assessment.id} className="border rounded-xl p-5 shadow-sm bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">{assessment.acronym}</h3>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                    {assessment.questionsCount} Questions
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">{assessment.title}</h4>
                <p className="text-xs text-gray-600 mb-4">{assessment.description}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedAssessment(assessment);
                  setIsModalOpen(true);
                }}
                className="w-full bg-emerald-600 text-white text-xs py-2 rounded-lg font-medium hover:bg-emerald-700 transition"
              >
                Assign to Mail
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'library' && (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 bg-purple-700 text-white rounded-full font-medium cursor-pointer">All</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium cursor-pointer">CBT Worksheets</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium cursor-pointer">DBT Worksheets</span>
          </div>
          <div className="bg-purple-900 text-white p-3 rounded-t-lg font-medium text-sm">Basics</div>
          <div className="border border-t-0 rounded-b-lg p-4 bg-white grid grid-cols-2 md:grid-cols-4 gap-4">
            {worksheetLibrary.CBT.Basics.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 border rounded-lg">
                <span className="text-red-500 font-bold text-xs bg-red-100 px-2 py-1 rounded">PDF</span>
                <span className="text-xs text-gray-700 font-medium truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && selectedAssessment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-1">Assign {selectedAssessment.acronym}</h3>
            <p className="text-xs text-gray-500 mb-4">Send this assessment directly to your client via email.</p>
            <form onSubmit={handleAssign} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Client Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="client@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 text-xs font-medium bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg">Send Assignment</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}