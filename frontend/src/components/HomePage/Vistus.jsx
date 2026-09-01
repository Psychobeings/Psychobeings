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
    <div className="min-h-screen bg-[#F8F9FA] py-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Top Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="inline-block bg-[#DCECE9] text-[#1C6B6B] text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-xs">
              VISIT PSYCHOBEINGS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-slate-950 font-bold tracking-tight leading-tight">
            A Space for Healing and Growth
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Located in Faridabad Sector 88, PSYCHOBEINGS offers both in-person and online sessions in a warm, welcoming, and confidential environment.
          </p>

          <div className="pt-2">
            <a
              href="#book-session"
              className="inline-flex items-center gap-2 bg-[#0E4D4D] hover:bg-[#0A3939] text-white font-medium text-xs px-7 py-3 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              <Calendar className="w-4 h-4 opacity-80" />
              Book Your First Session
            </a>
          </div>
        </div>

        {/* 3-Column Light Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Physical Address */}
          <div className="bg-white rounded-3xl p-7 shadow-xs border border-slate-200/80 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#DCECE9]/60 text-[#1C6B6B] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Location
                </span>
                <h2 className="text-lg font-serif font-bold text-slate-900 mt-0.5">
                  Visit Us In Person
                </h2>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed space-y-1">
                <p className="font-semibold text-slate-900">
                  PSYCHOBEINGS
                </p>
                <p className="text-[11px] text-[#1C6B6B] font-medium mb-2">
                  Psychological Wellness &amp; Therapy Centre
                </p>
                <p>📍 C-6, Ground Floor, RPS Palms,</p>
                <p>near Yatharth Hospital,</p>
                <p>Faridabad, Haryana, 121002</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/YourMapLinkHere"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C6B6B] hover:underline pt-2"
            >
              Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Contact Methods */}
          <div className="bg-white rounded-3xl p-7 shadow-xs border border-slate-200/80 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#DCECE9]/60 text-[#1C6B6B] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Connect
                </span>
                <h2 className="text-lg font-serif font-bold text-slate-900 mt-0.5">
                  Get In Touch
                </h2>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <a
                    href="tel:+919962452865"
                    className="hover:text-[#1C6B6B] transition-colors font-medium text-slate-800"
                  >
                    +91 99624-52865
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a
                    href="mailto:info.psychobeings@gmail.com"
                    className="hover:text-[#1C6B6B] transition-colors font-medium text-slate-800"
                  >
                    info.psychobeings@gmail.com
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="inline-block bg-[#DCECE9]/50 text-[#1C6B6B] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#DCECE9]">
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
          <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-200/80 flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <div className="w-full h-48 lg:h-full min-h-[180px] rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="PSYCHOBEINGS Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.090963337977!2d77.35230657461014!3d28.416511993859277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd8c1cbcd9ad%3A0xcb81de111c2746f0!2sPsychobeings%20%E2%80%93%20Psychological%20Wellness%20%26%20Therapy!5e0!3m2!1sen!2sin!4v1788235553090!5m2!1sen!2sin"
                className="w-full h-full border-0"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/Psychobeings+%E2%80%93+Psychological+Wellness+%26+Therapy/@28.416512,77.3523066,17z/data=!3m1!4b1!4m6!3m5!1s0x390cdd8c1cbcd9ad:0xcb81de111c2746f0!8m2!3d28.416512!4d77.3523066!16s%2Fg%2F11wsp0v2g8"
              target="_blank"
              rel="noreferrer"
              className="text-center block text-xs font-semibold text-[#1C6B6B] hover:underline py-1"
            >
              Open in Google Maps →
            </a>
          </div>

        </div>

        {/* Crisis Warning Banner */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3 max-w-3xl mx-auto">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-amber-950">Immediate Crisis Support:</strong> If you or someone you know is in severe distress or experiencing a mental health emergency, please contact local helpline services or visit the nearest hospital immediately.
          </p>
        </div>

      </div>
    </div>
  );
}