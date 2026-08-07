import React from "react";
import { MapPin, Phone, Mail, ShieldAlert, Sparkles } from "lucide-react";

export default function VisitUs() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-10">
        
        {/* Centered Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold tracking-widest text-teal-600 uppercase">
            VISIT PSYCHOBEINGS
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
            A Space for Healing and Growth
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Located in Faridabad Sector 88, PSYCHOBEINGS offers both in-person and online sessions in a warm, welcoming, and confidential environment.
          </p>
        </div>

        {/* Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Info Card */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white font-serif tracking-wide">
                  PSYCHOBEINGS
                </h2>
                <p className="text-xs text-teal-400 font-medium">
                  Psychological Wellness &amp; Therapy Centre
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-xs text-slate-300 leading-normal">
                      C-6, Ground Floor, RPS Palms,<br />
                      near Yatharth Hospital,<br />
                      Faridabad, Haryana, 121002
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+919962452865" className="text-xs text-slate-300 hover:text-teal-300 transition-colors">
                      +91 9962452865
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:info.psychobeings@gmail.com" className="text-xs text-slate-300 hover:text-teal-300 transition-colors">
                      info.psychobeings@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-teal-400 shrink-0" />
                  <p className="text-xs text-slate-300 font-medium">
                    In-Person &amp; Online Sessions Available
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Helpline Banner */}
            <div className="pt-4 border-t border-slate-800 text-xs text-amber-300 flex items-start gap-2 bg-amber-950/40 p-3.5 rounded-xl border border-amber-800/40">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                If you or someone you know is in severe distress or crisis, please contact local emergency helpline services immediately.
              </span>
            </div>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Location Map
              </p>
              <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="PSYCHOBEINGS Location Map"
                  src="https://www.google.com/maps?q=PSYCHOBEINGS%20C-6%20Ground%20Floor%20RPS%20Palms%20Faridabad&z=17&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=RPS+Palms+Sector+88+Faridabad"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block w-full py-3 text-center text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-xl border border-teal-200 transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}