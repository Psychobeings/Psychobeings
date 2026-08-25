import React, { useState } from "react";

const SessionNotes = () => {
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState({
    client: "",
    sessionDate: "",
    sessionNumber: "",
    duration: "60",
    presentingConcerns: "",
    sessionFocus: "",
    observations: "",
    interventions: "",
    clientResponse: "",
    homework: "",
    riskAssessment: "",
    plan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Session Notes
        </h1>

        <p className="text-gray-500 mt-1">
          Record and manage clinical session documentation.
        </p>

      </div>

      {/* Success Message */}
      {saved && (
        <div className="mb-6 bg-teal-50 border border-teal-200 text-teal-700 px-5 py-4 rounded-xl">
          Session note saved successfully.
        </div>
      )}

      <form onSubmit={handleSave}>

        {/* Session Information */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">

          <h2 className="text-lg font-semibold text-gray-800 mb-5">
            Session Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Client
              </label>

              <select
                name="client"
                value={formData.client}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white"
              >
                <option value="">Select Client</option>
                <option value="Client A">Client A</option>
                <option value="Client B">Client B</option>
                <option value="Client C">Client C</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Session Date
              </label>

              <input
                type="date"
                name="sessionDate"
                value={formData.sessionDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Session Number
              </label>

              <input
                type="number"
                name="sessionNumber"
                value={formData.sessionNumber}
                onChange={handleChange}
                placeholder="e.g. 3"
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Duration
              </label>

              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white"
              >
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes</option>
              </select>
            </div>

          </div>

        </div>

        {/* Clinical Note */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Clinical Session Note
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Presenting Concerns
              </label>

              <textarea
                name="presentingConcerns"
                value={formData.presentingConcerns}
                onChange={handleChange}
                rows="4"
                placeholder="Document the client's presenting concerns..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Session Focus
              </label>

              <textarea
                name="sessionFocus"
                value={formData.sessionFocus}
                onChange={handleChange}
                rows="4"
                placeholder="What was the primary focus of this session?"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Clinical Observations / MSE
              </label>

              <textarea
                name="observations"
                value={formData.observations}
                onChange={handleChange}
                rows="4"
                placeholder="Document relevant observations..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Interventions Used
              </label>

              <textarea
                name="interventions"
                value={formData.interventions}
                onChange={handleChange}
                rows="4"
                placeholder="CBT, DBT, mindfulness, breathing exercises, psychoeducation, etc."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Client Response / Progress
              </label>

              <textarea
                name="clientResponse"
                value={formData.clientResponse}
                onChange={handleChange}
                rows="4"
                placeholder="Document client's response and progress..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Homework / Between-Session Tasks
              </label>

              <textarea
                name="homework"
                value={formData.homework}
                onChange={handleChange}
                rows="3"
                placeholder="Homework or tasks assigned..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Risk Assessment
              </label>

              <textarea
                name="riskAssessment"
                value={formData.riskAssessment}
                onChange={handleChange}
                rows="3"
                placeholder="Document relevant risk assessment..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Plan / Next Session
              </label>

              <textarea
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                rows="4"
                placeholder="Treatment plan and focus for next session..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100">

            <button
              type="button"
              className="px-5 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Save Draft
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700"
            >
              Save Session Note
            </button>

          </div>

        </div>

      </form>

    </div>
  );
};

export default SessionNotes;