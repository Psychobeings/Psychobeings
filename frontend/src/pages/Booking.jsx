import React, { useState, useEffect } from 'react';

// Questionnaire Data
const PHQ9_QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure",
  "Trouble concentrating on things, such as reading or watching TV",
  "Moving or speaking so slowly that other people could have noticed",
  "Thoughts that you would be better off dead, or of hurting yourself"
];

const GAD7_QUESTIONS = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it is hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid, as if something awful might happen"
];

const ROSENBERG_QUESTIONS = [
  { id: 1, text: "I feel that I am a person of worth, at least on an equal plane with others.", reverse: false },
  { id: 2, text: "I feel that I have a number of good qualities.", reverse: true },
  { id: 3, text: "All in all, I am inclined to feel that I am a failure.", reverse: false },
  { id: 4, text: "I am able to do things as well as most other people.", reverse: false },
  { id: 5, text: "I feel I do not have much to be proud of.", reverse: true },
  { id: 6, text: "I take a positive attitude toward myself.", reverse: true },
  { id: 7, text: "On the whole, I am satisfied with myself.", reverse: false },
  { id: 8, text: "I wish I could have more respect for myself.", reverse: true },
  { id: 9, text: "I certainly feel useless at times.", reverse: true },
  { id: 10, text: "At times I think I am no good at all.", reverse: false }
];

const FREQUENCY_OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 }
];

const AGREEMENT_OPTIONS = [
  { label: "Strongly Disagree", value: 0 },
  { label: "Disagree", value: 1 },
  { label: "Agree", value: 2 },
  { label: "Strongly Agree", value: 3 }
];

const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  const [phqAnswers, setPhqAnswers] = useState({});
  const [gadAnswers, setGadAnswers] = useState({});
  const [rosenbergAnswers, setRosenbergAnswers] = useState({});

  // Auto-trigger modal if booking widget emits a completion message
  useEffect(() => {
    const handleMessage = (event) => {
      if (!event.origin.includes('myndspace.app')) return;
      if (event.data?.type === 'BOOKING_SUCCESS' || event.data?.event === 'booking_complete') {
        setIsModalOpen(true);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Score Calculations
  const calculatePHQ9 = () => Object.values(phqAnswers).reduce((a, b) => a + b, 0);
  const calculateGAD7 = () => Object.values(gadAnswers).reduce((a, b) => a + b, 0);
  const calculateRosenberg = () => {
    return ROSENBERG_QUESTIONS.reduce((total, q) => {
      const val = rosenbergAnswers[q.id];
      if (val === undefined) return total;
      return total + (q.reverse ? 3 - val : val);
    }, 0);
  };

  const getSeverityLabel = (type, score) => {
    if (type === 'PHQ9') {
      if (score <= 4) return "Minimal Depression";
      if (score <= 9) return "Mild Depression";
      if (score <= 14) return "Moderate Depression";
      if (score <= 19) return "Moderately Severe Depression";
      return "Severe Depression";
    }
    if (type === 'GAD7') {
      if (score <= 4) return "Minimal Anxiety";
      if (score <= 9) return "Mild Anxiety";
      if (score <= 14) return "Moderate Anxiety";
      return "Severe Anxiety";
    }
    if (type === 'RSE') {
      return score < 15 ? "Low Self-Esteem Range" : "Normal/High Self-Esteem Range";
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    const payload = {
      recipientEmail: "info.psychobeings@gmail.com",
      clientEmail,
      submittedAt: new Date().toISOString(),
      phq9: { score: calculatePHQ9(), severity: getSeverityLabel('PHQ9', calculatePHQ9()) },
      gad7: { score: calculateGAD7(), severity: getSeverityLabel('GAD7', calculateGAD7()) },
      rosenberg: { score: calculateRosenberg(), range: getSeverityLabel('RSE', calculateRosenberg()) }
    };

    try {
      await fetch('/api/submit-screening', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7fcfb_0%,#f5fbf8_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
            Book a consultation
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0d4f50] sm:text-4xl">
            Choose a time that feels right for you
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#4c6162] sm:text-lg">
            Use the booking widget below to select your preferred consultation slot and begin your journey with support.
          </p>
        </div>

        {/* Booking Widget Iframe Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-[460px] overflow-hidden rounded-[24px] border border-[#d7ecec] bg-white p-2 shadow-[0_20px_70px_-30px_rgba(9,127,127,0.35)]">
            <iframe
              src="https://booking.myndspace.app/?tid=6c8cda97-dc45-4f77-9f11-36c1caf24d5c"
              title="Book a consultation"
              className="h-[700px] w-full rounded-[20px] border-0"
              loading="lazy"
              allow="clipboard-read; clipboard-write"
            />
          </div>
        </div>

        {/* Manual Access Button for Intake Form */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#4c6162]">
            Already scheduled your session?{' '}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="font-semibold text-[#0a7272] underline hover:text-[#0d4f50]"
            >
              Fill out your Pre-Session Intake Assessment here
            </button>
          </p>
        </div>
      </div>

      {/* SCREENING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            
            {/* Header */}
            <div className="mb-6 border-b border-[#e1f0f0] pb-4 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#0d4f50]">Pre-Session Intake Assessment</h2>
                <p className="mt-1 text-xs text-[#587374]">
                  {!submitted ? `Step ${step} of 3 — ${step === 1 ? "PHQ-9 (Mood)" : step === 2 ? "GAD-7 (Anxiety)" : "Rosenberg Self-Esteem"}` : "Submission Complete"}
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-gray-400 hover:text-gray-600 font-bold text-xl"
              >
                ✕
              </button>
            </div>

            {!submitted ? (
              <div>
                {/* Email Field (Step 1) */}
                {step === 1 && (
                  <div className="mb-6 rounded-xl border border-[#d7ecec] bg-[#f7fcfb] p-4">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0a7272]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Enter the email used for booking"
                      className="mt-2 w-full rounded-lg border border-[#b2e2e2] p-2.5 text-sm outline-none focus:border-[#0a7272]"
                    />
                  </div>
                )}

                {/* STEP 1: PHQ-9 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <p className="text-sm font-medium text-[#2d4748]">
                      Over the <strong>last 2 weeks</strong>, how often have you been bothered by any of the following problems?
                    </p>
                    {PHQ9_QUESTIONS.map((q, idx) => (
                      <div key={idx} className="rounded-xl border border-[#e5f3f3] bg-[#fbfefd] p-4">
                        <p className="mb-3 text-sm font-semibold text-[#0d4f50]">{idx + 1}. {q}</p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {FREQUENCY_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setPhqAnswers({ ...phqAnswers, [idx]: opt.value })}
                              className={`rounded-lg border px-3 py-2 text-xs transition-all ${
                                phqAnswers[idx] === opt.value
                                  ? "border-[#0a7272] bg-[#0a7272] font-medium text-white shadow-sm"
                                  : "border-gray-200 bg-white text-[#3f5758] hover:bg-gray-50"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* STEP 2: GAD-7 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <p className="text-sm font-medium text-[#2d4748]">
                      Over the <strong>last 2 weeks</strong>, how often have you been bothered by the following problems?
                    </p>
                    {GAD7_QUESTIONS.map((q, idx) => (
                      <div key={idx} className="rounded-xl border border-[#e5f3f3] bg-[#fbfefd] p-4">
                        <p className="mb-3 text-sm font-semibold text-[#0d4f50]">{idx + 1}. {q}</p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {FREQUENCY_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setGadAnswers({ ...gadAnswers, [idx]: opt.value })}
                              className={`rounded-lg border px-3 py-2 text-xs transition-all ${
                                gadAnswers[idx] === opt.value
                                  ? "border-[#0a7272] bg-[#0a7272] font-medium text-white shadow-sm"
                                  : "border-gray-200 bg-white text-[#3f5758] hover:bg-gray-50"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* STEP 3: ROSENBERG SELF-ESTEEM */}
                {step === 3 && (
                  <div className="space-y-6">
                    <p className="text-sm font-medium text-[#2d4748]">
                      Below is a list of statements dealing with your general feelings about yourself.
                    </p>
                    {ROSENBERG_QUESTIONS.map((q) => (
                      <div key={q.id} className="rounded-xl border border-[#e5f3f3] bg-[#fbfefd] p-4">
                        <p className="mb-3 text-sm font-semibold text-[#0d4f50]">{q.id}. {q.text}</p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {AGREEMENT_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setRosenbergAnswers({ ...rosenbergAnswers, [q.id]: opt.value })}
                              className={`rounded-lg border px-3 py-2 text-xs transition-all ${
                                rosenbergAnswers[q.id] === opt.value
                                  ? "border-[#0a7272] bg-[#0a7272] font-medium text-white shadow-sm"
                                  : "border-gray-200 bg-white text-[#3f5758] hover:bg-gray-50"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-[#3f5758] hover:bg-gray-50"
                    >
                      Back
                    </button>
                  ) : <div />}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="rounded-xl bg-[#0a7272] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#085a5a]"
                    >
                      Next Section
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="rounded-xl bg-[#0a7272] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#085a5a] disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Complete & Submit"}
                    </button>
                  )}
                </div>

                <p className="mt-4 text-center text-[11px] text-[#718b8c]">
                  *Note: These tools are strictly for exploratory intake and screening purposes, not clinical diagnosis.
                </p>
              </div>
            ) : (
              /* Confirmation Screen */
              <div className="py-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f6f6] text-[#0a7272] text-xl font-bold">
                  ✓
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#0d4f50]">Screening Submitted</h3>
                <p className="mt-2 text-sm text-[#4c6162]">
                  Thank you! Your responses have been sent directly to the therapist to assist in preparing for your session.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-6 rounded-xl bg-[#0a7272] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#085a5a]"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;