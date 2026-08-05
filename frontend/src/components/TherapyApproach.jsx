import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, UserCheck, ClipboardCheck, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

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
      icon: Calendar,
      highlights: ["Flexible scheduling", "Online or in-person options"]
    },
    {
      id: 2,
      step: "02",
      title: "Connect in a Safe Space",
      subtitle: "First Session Intake",
      description:
        "Meet with your psychologist in a confidential, non-judgmental environment to discuss your concerns, expectations, and goals.",
      icon: UserCheck,
      highlights: ["Confidential environment", "Goal exploration"]
    },
    {
      id: 3,
      step: "03",
      title: "Comprehensive Assessment",
      subtitle: "Evidence-Based Insights",
      description:
        "Through clinical insights and evidence-based screening, we collaborate with you to formulate a customized care plan tailored to your needs.",
      icon: ClipboardCheck,
      highlights: ["Collaborative care plan", "Targeted strategies"]
    },
    {
      id: 4,
      step: "04",
      title: "Engage in Targeted Care",
      subtitle: "Ongoing Growth & Resilience",
      description:
        "Begin your sessions equipped with actionable tools, evidence-based techniques, and ongoing compassionate clinical guidance.",
      icon: Sparkles,
      highlights: ["Practical coping tools", "Long-term wellness focus"]
    }
  ];

  return (
    <section className="relative bg-slate-50/60 py-24 px-6 md:px-12 lg:px-20 text-gray-800 overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Header & CTA Overview */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
                The Therapeutic Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 tracking-tight leading-tight">
                How Therapy Works
              </h2>
              <div className="w-16 h-1 bg-teal-600 rounded-full mt-4"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Whether you are seeking support for yourself, your child, or your family, we provide a structured, evidence-based space to guide you toward clarity and long-term emotional well-being.
            </p>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                What to Expect
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Personalized clinical care tailored to your goals</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Strict confidentiality and non-judgmental space</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Actionable, evidence-based coping tools</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <Link to="/booking">
                <button className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <span>Book Your Session</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Connected Process Timeline */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative pl-4 sm:pl-8 space-y-8 before:absolute before:left-[27px] sm:before:left-[43px] before:top-6 before:bottom-6 before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:via-teal-200 before:to-gray-200">
              {approaches.map((approach) => {
                const IconComponent = approach.icon;
                const isActive = activeStep === approach.id;

                return (
                  <div
                    key={approach.id}
                    onMouseEnter={() => setActiveStep(approach.id)}
                    className={`relative flex items-start space-x-5 sm:space-x-8 p-6 sm:p-8 rounded-2xl transition-all duration-300 border ${
                      isActive
                        ? "bg-white shadow-xl border-teal-200 -translate-y-0.5"
                        : "bg-white/60 hover:bg-white shadow-sm border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    {/* Step Number Circle Indicator on Timeline */}
                    <div
                      className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-teal-600 text-white shadow-md shadow-teal-600/30 scale-105"
                          : "bg-teal-50 text-teal-700 border border-teal-100"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                          Step {approach.step}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          {approach.subtitle}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {approach.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-normal mb-4">
                        {approach.description}
                      </p>

                      {/* Micro Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {approach.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}