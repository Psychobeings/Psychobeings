import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ShieldAlert,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

export default function PsychobeingsVisitUs() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Top Hero Banner Card */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 text-center shadow-xl border border-slate-800 max-w-3xl mx-auto space-y-6">
          <p className="text-xs font-bold tracking-[0.2em] text-teal-400 uppercase">
            Visit Psychobeings
          </p>

          <h1 className="text-2xl sm:text-4xl font-serif text-white leading-snug tracking-tight">
            Begin your emotional wellness journey with <br className="hidden sm:inline" />
            <span className="font-semibold text-teal-300">PSYCHOBEINGS</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            A Space for Healing and Growth. Located in Faridabad Sector 88,
            PSYCHOBEINGS offers both in-person and online sessions in a warm,
            welcoming, and confidential environment.
          </p>

          <div className="pt-2">
            <a
              href="#book-session"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs px-7 py-3.5 rounded-full transition-all shadow-lg shadow-teal-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 opacity-80" />
              Book Your First Session
            </a>
          </div>
        </div>

        {/* 3-Column Modular Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Physical Address */}
          <div className="bg-slate-900/90 rounded-3xl p-7 shadow-sm border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center border border-teal-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Location
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                  Visit Us In Person
                </h3>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed space-y-1">
                <p className="font-semibold text-teal-300">
                  PSYCHOBEINGS - Psychological Wellness &amp; Therapy Centre
                </p>
                <p>C-6, Ground Floor, RPS Palms,</p>
                <p>Near Yatharth Hospital,</p>
                <p>Sector 88, Faridabad, Haryana, 121002</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=RPS+Palms+Sector+88+Faridabad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 hover:underline pt-2"
            >
              Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Contact & Session Modes */}
          <div className="bg-slate-900/90 rounded-3xl p-7 shadow-sm border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center border border-teal-500/20">
                <Sparkles className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Connect
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                  Get In Touch
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <a
                    href="tel:+918305777371"
                    className="hover:text-teal-300 transition-colors"
                  >
                    +91 83057 77371
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <a
                    href="mailto:info.psychobeings@gmail.com"
                    className="hover:text-teal-300 transition-colors"
                  >
                    info.psychobeings@gmail.com
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="inline-block bg-teal-950/60 text-teal-300 text-[11px] font-medium px-3 py-1 rounded-full border border-teal-800/50">
                    ✦ In-Person &amp; Online Available
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              Response time: 1–2 business days
            </p>
          </div>

          {/* Card 3: Embedded Google Map */}
          <div className="bg-slate-900/90 rounded-3xl p-4 sm:p-5 shadow-sm border border-slate-800 flex flex-col justify-between space-y-3 hover:border-slate-700 transition-colors md:col-span-2 lg:col-span-1">
            <div className="w-full h-48 lg:h-full min-h-[180px] rounded-2xl overflow-hidden border border-slate-800">
              <iframe
                title="PSYCHOBEINGS Location Map"
                src="https://www.google.com/maps?q=RPS%20Palms%20Sector%2088%20Faridabad&z=16&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://maps.google.com/?q=RPS+Palms+Sector+88+Faridabad"
              target="_blank"
              rel="noreferrer"
              className="text-center block text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors py-1"
            >
              Open in Google Maps →
            </a>
          </div>

        </div>

        {/* Crisis Warning Banner */}
        <div className="bg-amber-950/40 border border-amber-800/40 rounded-2xl p-4 text-xs text-amber-300 flex items-start gap-3 max-w-3xl mx-auto">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-amber-200">Immediate Crisis Support:</strong> If you or someone you know is in severe distress or experiencing a mental health emergency, please contact local helpline services or visit the nearest hospital immediately.
          </p>
        </div>

      </div>
    </div>
  );
}