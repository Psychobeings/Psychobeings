import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  GraduationCap, 
  FileText, 
  Sparkles,
  Quote,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function StoryOfPsychobeings() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(2023);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    { year: 2017, title: "The Journey Begins", desc: "Psychology transformed from an academic curiosity into a lifelong calling." },
    { year: 2019, title: "Building Foundation", desc: "Higher Diploma in Psychology completed at MDIS Singapore." },
    { year: 2020, title: "Global Perspective", desc: "B.Sc. (Hons) in Psychology earned from Coventry University, UK." },
    { year: 2022, title: "Clinical Expertise", desc: "M.Sc. Clinical Psychology completed at CMR University, Bangalore." },
    { year: 2023, title: "Psychobeings Born", desc: "Transforming expertise into a purpose-driven, empathetic practice." }
  ];

  const academicData = [
    {
      degree: "M.Sc. Clinical Psychology",
      institution: "CMR University, Bangalore",
      location: "India",
      detail: "Specialized training in clinical assessment, therapeutic interventions, and behavioral research methodologies."
    },
    {
      degree: "B.Sc. (Hons) Psychology",
      institution: "Coventry University, UK",
      location: "United Kingdom",
      detail: "In-depth research on cognitive pathways, psychological frameworks, and cross-cultural mental health care."
    },
    {
      degree: "Higher Diploma in Psychology",
      institution: "MDIS, Singapore",
      location: "Singapore",
      detail: "Comprehensive foundational studies in core psychological principles and early practical application."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800 selection:bg-[#097f7f] selection:text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#064e4e] via-[#097f7f] to-[#0a8f8f] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white">
        {/* Ambient Radial Mesh Backdrop */}
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-100 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-teal-300" />
              Our Origins & Growth
            </span>
            
            <h1 className="mt-6 font-serif text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              The Story of <span className="text-teal-200">Psychobeings</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-2xl text-teal-50/90 max-w-3xl mx-auto leading-relaxed font-light">
              A continuous path shaped by purpose, academic excellence, and the individuals we’ve had the honor to support.
            </p>
          </div>
        </div>
      </section>

      {/* The Beginning Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#097f7f]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#097f7f]">
                <BookOpen className="h-4 w-4" />
                Where It All Started
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Rooted in Empathy & Lifelong Commitment
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Every meaningful effort has a starting point — mine began with a profound spark of empathy during my school years.
              </p>
              
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm border-l-4 border-l-[#097f7f]">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "Working on a school project involving neurodivergent children with autism—and observing a close relative navigate life with a disability—fundamentally changed my perspective. It ignited a deep drive to understand the human mind and stand alongside those who feel unheard."
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                My formal journey in psychology commenced in <span className="font-bold text-[#097f7f]">2017</span>. Over the past <span className="font-bold text-[#097f7f]">8+ years</span>, it has evolved from an academic interest into a dedicated clinical mission.
              </p>
            </div>

            {/* Spark Card */}
            <div className={`lg:col-span-5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#097f7f] to-[#064e4e] p-8 sm:p-10 text-white shadow-2xl">
                <Quote className="h-12 w-12 text-teal-300/40 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">The Core Realization</h3>
                <blockquote className="text-base leading-relaxed text-teal-50/90 font-light">
                  "Compassionate care isn't just about offering solutions — it's about honoring vulnerability and helping individuals discover their inherent resilience."
                </blockquote>

                <div className="mt-8 flex items-center gap-3 border-t border-teal-500/30 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400/20 text-teal-200">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-200">Foundation of Care</p>
                    <p className="text-xs text-teal-100/70">Psychobeings Clinical Approach</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-slate-100/70 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#097f7f]">Evolution</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-slate-900">Journey Timeline</h2>
            <p className="mt-2 text-slate-600 text-base sm:text-lg">8 years of continuous learning, growth, and clinical practice</p>
          </div>

          <div className="relative">
            {/* Center Timeline Spine */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-slate-300" />

            <div className="space-y-12">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                const isActive = activeYear === m.year;

                return (
                  <div
                    key={m.year}
                    onMouseEnter={() => setActiveYear(m.year)}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node Point */}
                    <div 
                      className={`absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white shadow-md transition-all duration-300 z-10 ${
                        isActive ? 'bg-[#097f7f] scale-125' : 'bg-slate-400'
                      }`}
                    >
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>

                    {/* Timeline Card Container */}
                    <div className="pl-12 md:pl-0 md:w-1/2 w-full">
                      <div 
                        className={`mx-0 md:mx-8 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 ${
                          isActive 
                            ? 'border-[#097f7f] shadow-lg ring-1 ring-[#097f7f]/30 -translate-y-1' 
                            : 'border-slate-200/80 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#097f7f] px-3 py-1 text-xs font-bold text-white">
                            <Calendar className="h-3 w-3" />
                            {m.year}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">Milestone 0{idx + 1}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{m.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Foundation Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#097f7f]/10 text-[#097f7f]">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Academic Foundation</h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Building clinical expertise through rigorous global education across leading institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {academicData.map((item, index) => (
              <div 
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#097f7f]/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#097f7f]">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 uppercase">
                      Degree
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#097f7f] transition-colors mb-1">
                    {item.degree}
                  </h3>
                  
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    {item.institution}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#097f7f]">
                  <span>Accredited Program</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Impact Section */}
      <section className="bg-gradient-to-br from-[#064e4e] via-[#097f7f] to-[#0a8f8f] py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/30 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-100 backdrop-blur-md">
                <FileText className="h-4 w-4 text-teal-300" />
                Publications & Evidence
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-white">
                Research & Clinical Contributions
              </h2>

              <p className="text-base sm:text-lg text-teal-50/90 leading-relaxed font-light">
                Continuous engagement in research ensures that our therapeutic practices remain firmly grounded in contemporary, evidence-based methodologies.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <Award className="h-6 w-6 text-teal-300 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">Published Research</p>
                    <p className="text-sm font-bold text-white">SSRN Network</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <Award className="h-6 w-6 text-teal-300 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">Published Research</p>
                    <p className="text-sm font-bold text-white">IJFMR Journal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/20 bg-white p-8 text-slate-800 shadow-2xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#097f7f]/10 text-[#097f7f]">
                  <BookOpen className="h-7 w-7" />
                </div>

                <h3 className="text-center text-xl font-bold text-slate-900 mb-3">
                  Evidence-Based Care
                </h3>

                <p className="text-center text-sm text-slate-600 leading-relaxed mb-6">
                  Every step of academic and clinical research reinforces our commitment to delivering care that is informed, deeply compassionate, and accessible to all.
                </p>

                <div className="space-y-2.5 border-t border-slate-100 pt-6">
                  {['Clinically Validated Techniques', 'Ethical & Confidential Standards', 'Client-Centered Focus'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-[#097f7f] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}