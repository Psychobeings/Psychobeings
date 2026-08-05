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
      svg: (
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
      svg: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
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
      svg: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="m9 14 2 2 4-4" />
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
      svg: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" />
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
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Whether you are seeking support for yourself, your child, or your family, we provide a structured, evidence-based space to guide you toward long-term emotional well-being.
          </p>
        </div>

        {/* Step-by-step cards */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] items-start">
          <div className="space-y-5">
            {approaches.map((approach, index) => {
              const isActive = activeStep === approach.id;
              return (
                <button
                  key={approach.id}
                  type="button"
                  onClick={() => setActiveStep(approach.id)}
                  className={`group w-full rounded-[2rem] border p-6 text-left transition-all duration-300 shadow-sm hover:shadow-lg ${
                    isActive
                      ? "border-teal-200 bg-white shadow-xl"
                      : "border-gray-200 bg-white/90 hover:border-teal-200"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-3xl text-lg font-bold ${
                      isActive ? "bg-teal-600 text-white" : "bg-teal-50 text-teal-700"
                    }`}>
                      {approach.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-teal-600 font-semibold mb-2">
                        <span>{approach.subtitle}</span>
                        {isActive && <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-teal-700">Active</span>}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-teal-700">
                        {approach.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {approach.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="sticky top-28 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 bg-teal-50 px-3 py-2 rounded-full inline-block mb-4">
              Active Step
            </span>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-teal-700 font-semibold">
                  Step {selectedStep.step}
                </p>
                <h3 className="mt-3 text-3xl font-bold text-gray-900">
                  {selectedStep.title}
                </h3>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-teal-50 text-teal-700 font-bold text-lg">
                {selectedStep.step}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{selectedStep.description}</p>

            <div className="space-y-3">
              {selectedStep.highlights.map((highlight, idx) => (
                <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-100 p-4 text-sm text-slate-700">
                  • {highlight}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/booking" className="inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-800">
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-gray-600 text-base max-w-xl mx-auto font-light">
            Every session is tailored to support your personal growth, resilience, and long-term mental wellness.
          </p>
          <a href="/booking" className="inline-block">
            <button className="px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              Book Your Session →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}