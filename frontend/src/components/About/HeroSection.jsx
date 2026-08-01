import React from "react";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import founderImage from "../../assets/Foundersimg2.jpg";

const qualifications = [
  {
    degree: "PhD Scholar in Clinical Psychology",
    institution: "NIILM University, Kaithal",
    badge: "Current",
  },
  {
    degree: "MSc Clinical Psychology",
    institution: "CMR University, Bangalore",
    badge: "Postgraduate",
  },
  {
    degree: "BSc Psychology Hons",
    institution: "Coventry University, UK",
    badge: "Undergraduate",
  },
  {
    degree: "Higher Diploma in Psychology",
    institution: "Management Development Institute of Singapore",
    badge: "Diploma",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-[#097f7f]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-3xl border border-[#d7ecec] bg-white/95 p-6 sm:p-10 lg:p-12 shadow-xl backdrop-blur-md">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            
            {/* Left Column: Founder Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                {/* Glow Backdrop */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#097f7f] to-teal-300 opacity-20 blur-xl transition-all duration-300 group-hover:opacity-30" />

                {/* Styled Image Frame */}
                <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white p-2 shadow-2xl">
                  <img
                    src={founderImage}
                    alt="Amanpreet Kaur - Founder & Counselling Psychologist"
                    className="h-80 w-full rounded-2xl object-cover sm:h-96"
                  />
                  
                  {/* Floating Experience Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-slate-900/80 p-3 text-center text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                      Leadership & Care
                    </p>
                    <p className="text-xs text-slate-200">
                      Dedicated to Compassionate Mental Health
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Credentials */}
            <div className="lg:col-span-7 text-left">
              {/* Top Tag Badge */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#097f7f]/20 bg-[#097f7f]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#097f7f]">
                <Sparkles className="h-3.5 w-3.5" />
                About the Founder
              </span>

              {/* Name & Title */}
              <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-[#0d4f50] sm:text-4xl lg:text-5xl">
                Amanpreet Kaur
              </h2>
              <p className="mt-1 text-base font-semibold text-[#097f7f] sm:text-lg">
                Founder & Lead Counselling Psychologist
              </p>

              <div className="my-6 h-px w-full bg-slate-100" />

              {/* Educational Qualifications List */}
              <header className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <GraduationCap className="h-4 w-4 text-[#097f7f]" />
                Academic Qualifications
              </header>

              <ul className="space-y-3">
                {qualifications.map((item, idx) => (
                  <li
                    key={idx}
                    className="group relative flex items-start justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 transition-all duration-200 hover:border-[#097f7f]/30 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#097f7f]/10 text-[#097f7f]">
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 group-hover:text-[#097f7f] transition-colors">
                          {item.degree}
                        </p>
                        <p className="text-xs text-slate-500">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex shrink-0 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-500 border border-slate-200/60 shadow-xs">
                      {item.badge}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </article>
      </div>
    </section>
  );
}