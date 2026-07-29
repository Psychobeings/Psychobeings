import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CareAssessment() {}
// Example assessment questions structure
const assessmentQuestions = [
  {
    key: 'primary_concern',
    title: 'What is your primary area of concern right now?',
    options: [
      { label: 'Managing Stress & Anxiety' },
      { label: 'Navigating Relationship Issues' },
      { label: 'Career & Life Transitions' },
      { label: 'Personal Growth & Mindset' },
    ],
  },
  {
    key: 'preferred_format',
    title: 'How do you prefer to receive support?',
    options: [
      { label: '1-on-1 Dedicated Coaching' },
      { label: 'Structured Self-Paced Modules' },
      { label: 'Group Support & Community' },
      { label: 'Flexible Hybrid Approach' },
    ],
  },
  {
    key: 'urgency',
    title: 'How soon are you looking to get started?',
    options: [
      { label: 'Immediately (This week)' },
      { label: 'In the next 2-3 weeks' },
      { label: 'Just exploring options' },
    ],
  },
];

export default function CareAssessment() {
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  return (
    <section className="py-16 bg-gradient-to-r from-[#084e4e] to-[#0a7272] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="px-3 py-1 rounded-full bg-white/10 text-[#a7f3d0] text-xs font-semibold uppercase tracking-wider">
            Interactive Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-2">
            Not sure where to begin?
          </h2>
          <p className="text-[#d1fae5]/90 text-sm mt-1">
            Answer 3 quick questions to discover your recommended care route.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 shadow-xl">
          {assessmentStep < assessmentQuestions.length ? (
            <div>
              {/* Question Header & Percentage */}
              <div className="flex items-center justify-between mb-4 text-xs text-[#a7f3d0] font-semibold">
                <span>
                  Question {assessmentStep + 1} of {assessmentQuestions.length}
                </span>
                <span>
                  {Math.round(((assessmentStep + 1) / assessmentQuestions.length) * 100)}% Complete
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-black/20 h-1.5 rounded-full mb-6 overflow-hidden">
                <div
                  className="bg-[#6ee7b7] h-full transition-all duration-300"
                  style={{
                    width: `${((assessmentStep + 1) / assessmentQuestions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
                {assessmentQuestions[assessmentStep].title}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {assessmentQuestions[assessmentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAnswers({
                        ...answers,
                        [assessmentQuestions[assessmentStep].key]: opt.label,
                      });
                      setAssessmentStep(assessmentStep + 1);
                    }}
                    className="p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-left text-sm font-medium transition-all flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#6ee7b7] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-[#34d399]/20 text-[#6ee7b7] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                We Recommend Individual Therapy or Clarity Bundle
              </h3>
              <p className="text-[#d1fae5] text-sm max-w-lg mx-auto">
                Based on your responses, starting with a 1-on-1 consultation with one of our senior therapists will give you tailored strategies right away.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/booking?service=individual-therapy"
                  className="bg-[#F2F8F7] text-[#0a7272] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#ecfdf5] transition"
                >
                  Book Recommended Session
                </a>
                <button
                  onClick={() => {
                    setAssessmentStep(0);
                    setAnswers({});
                  }}
                  className="text-xs text-[#a7f3d0] underline hover:text-white"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default CareAssessment;