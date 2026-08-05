import { useState, useEffect } from "react";

export default function TherapyApproach() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

        {/* Process Flow Cards */}
        <div className="space-y-6">
          {approaches.map((approach, index) => (
            <div
              key={approach.id}
              onMouseEnter={() => setHoveredCard(approach.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="flex items-start space-x-5 sm:space-x-6 flex-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 text-teal-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {approach.svg}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-teal-600 tracking-wider">
                      STEP {approach.step}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      • {approach.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                    {approach.description}
                  </p>
                </div>
              </div>

              {/* Badges on right */}
              <div className="flex flex-wrap md:flex-col gap-2 shrink-0 md:items-end w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                {approach.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
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