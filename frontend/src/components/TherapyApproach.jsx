import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TherapyApproach() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const approaches = [
    {
      id: 1,
      step: "01",
      title: "Schedule Your Appointment",
      subtitle: "Seamless & Confidential",
      description:
        "Select a convenient date and time for an online or in-person consultation through our secure booking portal.",
      highlights: ["Flexible scheduling", "Online or in-person"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      id: 2,
      step: "02",
      title: "Connect in a Safe Space",
      subtitle: "First Session Intake",
      description:
        "Meet with your psychologist in a confidential, non-judgmental environment to discuss your concerns, expectations, and goals.",
      highlights: ["Confidential environment", "Goal exploration"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <polyline points="17 11 19 13 23 9" />
        </svg>
      )
    },
    {
      id: 3,
      step: "03",
      title: "Comprehensive Assessment",
      subtitle: "Evidence-Based Insights",
      description:
        "Through clinical insights and evidence-based screening, we collaborate with you to formulate a customized care plan tailored to your needs.",
      highlights: ["Collaborative care plan", "Targeted strategies"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 14 2 2 4-4" />
        </svg>
      )
    },
    {
      id: 4,
      step: "04",
      title: "Engage in Targeted Care",
      subtitle: "Ongoing Growth",
      description:
        "Begin your sessions equipped with actionable tools, evidence-based techniques, and ongoing compassionate clinical guidance.",
      highlights: ["Practical coping tools", "Long-term wellness"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" />
        </svg>
      )
    }
  ];

  const selectedStep = approaches.find((approach) => approach.id === activeStep) || approaches[0];

  return (
    <section className="bg-slate-50/70 py-24 px-6 md:px-12 lg:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            The Therapeutic Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 tracking-tight">
            How Therapy Works
          </h2>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4 mb-6" />
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Whether you are seeking support for yourself, your child, or your family, we provide a structured, evidence-based space to guide you toward long-term emotional well-being.
          </p>
        </div>

        {/* Step-by-Step Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] items-start">
          {/* Interactive Steps List */}
          <div className="space-y-4">
            {approaches.map((approach, index) => {
              const isActive = activeStep === approach.id;
              return (
                <button
                  key={approach.id}
                  type="button"
                  onClick={() => setActiveStep(approach.id)}
                  aria-selected={isActive}
                  className={`group w-full rounded-2xl border p-6 text-left transition-all duration-300 shadow-sm ${
                    isActive
                      ? "border-teal-300 bg-white shadow-md ring-1 ring-teal-200"
                      : "border-gray-200 bg-white/90 hover:border-teal-200 hover:bg-white"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive ? "bg-teal-600 text-white" : "bg-teal-50 text-teal-700 group-hover:bg-teal-100"
                      }`}
                    >
                      {approach.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-teal-700 font-semibold mb-1">
                        <span>STEP {approach.step}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-500">{approach.subtitle}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-teal-700">
                        {approach.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 pl-17">
                    {approach.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sticky Active Step Highlight Card */}
          <div className="sticky top-28 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  Step {selectedStep.step} Detail
                </span>
                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  {selectedStep.title}
                </h3>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                {selectedStep.icon}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              {selectedStep.description}
            </p>

            <div className="space-y-2.5 mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Key Takeaways
              </p>
              {selectedStep.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 p-3.5 text-sm font-medium text-slate-700"
                >
                  <span className="h-2 w-2 rounded-full bg-teal-600" />
                  {highlight}
                </div>
              ))}
            </div>

            <Link
              to="/booking"
              className="inline-flex w-full items-center justify-center rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-teal-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            >
              Book a Session →
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto font-light">
            Every session is tailored to support your personal growth, resilience, and long-term mental wellness.
          </p>
        </div>
      </div>
    </section>
  );
}