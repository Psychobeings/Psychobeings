import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Eye,
  Target,
  HeartHandshake,
  Compass,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  MessageCircle,
  Lightbulb,
  Award
} from 'lucide-react';

const coreValues = [
  {
    icon: Compass,
    title: 'Evidence-Based Care',
    description:
      'Bridging rigorous clinical psychology with practical, compassionate therapeutic interventions.'
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Support',
    description:
      'Creating safe, non-judgmental spaces tailored to adults, adolescents, and families navigating life challenges.'
  },
  {
    icon: GraduationCap,
    title: 'Academic Guidance',
    description:
      'Empowering psychology students and educators with structured academic mentoring and curriculum support.'
  },
  {
    icon: ShieldCheck,
    title: 'Ethical & Confidential',
    description:
      'Upholding the highest standards of clinical confidentiality, professional ethics, and client safety.'
  }
];

const journeyMilestones = [
  {
    year: '2023',
    title: 'Founding Psychobeings',
    description:
      'Established Psychobeings as a dedicated mental health initiative aimed at making psychological concepts accessible, practical, and compassionate.'
  },
  {
    year: 'Growth',
    title: 'Expanding Clinical & Academic Practice',
    description:
      'Extended offerings from one-on-one therapy to academic tutoring for psychology students and tailored mental health workshops.'
  },
  {
    year: 'Present',
    title: 'Global Telehealth & Dedicated Care',
    description:
      'Providing encrypted, personalized online therapy sessions to clients across India and internationally.'
  }
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6fbfa] text-[#183436] font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(10,114,114,0.08),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,95,97,0.08),_transparent_40%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe1df] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#0a7272] shadow-sm">
            <Sparkles size={16} />
            About Psychobeings
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#0d4f50] sm:text-5xl lg:text-6xl">
            Personalized, Compassionate & Evidence-Based Psychological Care
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-[#4c6162]">
            Psychobeings is a specialized clinical practice and mental health initiative founded to provide dedicated one-on-one therapeutic support, academic psychology guidance, and evidence-based mental health advocacy.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://booking.myndspace.app/amanp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0a7272] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0d5c5e] transition"
            >
              Book a Therapy Session
              <ArrowRight size={16} />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a7272] bg-white px-7 py-3.5 text-sm font-bold text-[#0a7272] hover:bg-[#0a7272] hover:text-white transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CLINICAL APPROACH / FOUNDER BANNER ================= */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white border border-[#d7ecec] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#eaf6f6] flex items-center justify-center text-[#0a7272]">
              <Award size={32} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7272]">
                Direct, Qualified Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4f50] mt-1">
                Your Care, Guided Personally Every Step of the Way
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4c6162]">
                Every session at Psychobeings is personally conducted by me as a qualified clinical psychologist (MSc Clinical Psychology). Whether you are navigating emotional overwhelm, anxiety, life transitions, or academic growth in psychology, you receive direct, individualized care grounded in empathy and evidence-based practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="rounded-[2.5rem] border border-[#d7ecec] bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#eaf6f6] flex items-center justify-center text-[#0a7272] mb-6">
                  <Eye size={28} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7272]">
                  Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4f50] mt-2">
                  A World Where Mental Wellbeing is Prioritized & Understood
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4c6162]">
                  To create a space where psychological care is recognized as an essential part of health. Through compassionate clinical practice and transparent education, the goal is to build a culture where individuals feel supported in seeking therapy without hesitation.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#f0f8f7] flex items-center gap-2 text-xs font-semibold text-[#0a7272]">
                <Lightbulb size={16} />
                Demystifying therapy and psychological concepts
              </div>
            </div>

            {/* Mission Card */}
            <div className="rounded-[2.5rem] border border-[#d7ecec] bg-gradient-to-br from-[#0a7272] to-[#0d5c5e] p-8 sm:p-10 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-teal-100 mb-6">
                  <Target size={28} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                  Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  Empowering Growth Through Personalized Care
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-teal-50/90">
                  To provide structured, evidence-based therapy sessions for adults, children, and teens, while supporting psychology students with academic mentoring. Every intervention is designed to translate complex psychological principles into practical tools for lasting resilience.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-teal-200">
                <HeartHandshake size={16} />
                Focused support for clients, students, & institutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-[#f0f8f7]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272] bg-white px-3 py-1 rounded-full border border-[#bfe1df]">
              Core Principles
            </span>
            <h2 className="text-3xl font-bold text-[#0d4f50] sm:text-4xl mt-4">
              Pillars of Practice
            </h2>
            <p className="mt-3 text-base text-[#4c6162]">
              Every session, academic consultation, and resource at Psychobeings is guided by these core principles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] bg-white border border-[#d7ecec] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#eaf6f6] flex items-center justify-center text-[#0a7272] mb-5">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-[#0d4f50]">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4c6162] mt-3 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= JOURNEY TIMELINE ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272] bg-[#eaf6f6] px-3 py-1 rounded-full">
              The Journey
            </span>
            <h2 className="text-3xl font-bold text-[#0d4f50] sm:text-4xl mt-4">
              How Psychobeings Evolved
            </h2>
            <p className="mt-3 text-base text-[#4c6162]">
              A journey rooted in psychological research, student mentorship, and dedicated clinical support.
            </p>
          </div>

          <div className="space-y-6">
            {journeyMilestones.map((milestone) => (
              <div
                key={milestone.title}
                className="rounded-[2.25rem] bg-white border border-[#d7ecec] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#eaf6f6] border border-[#bfe1df] flex items-center justify-center text-[#0a7272] font-black text-xl">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d4f50]">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4c6162] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-[#0a7272] via-[#0d5c5e] to-[#0f5f61] text-white px-8 sm:px-12 py-14 text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-teal-100 backdrop-blur-md">
                <MessageCircle size={14} />
                Get In Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">
                Ready to Take the Next Step in Your Wellbeing?
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-teal-50/90">
                Whether you are seeking individual counselling, child & adolescent support, academic psychology guidance, or institutional workshops, I am here to assist you.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-[#0a7272] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-teal-50 transition shadow-md"
                >
                  Contact Directly
                </Link>

                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/40 bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-[#0a7272] transition backdrop-blur-sm"
                >
                  Book Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}