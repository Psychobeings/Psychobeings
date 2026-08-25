import React from "react";
import { Button } from "@/components/ui/button";
import { Feather, ShieldCheck, HeartPulse } from "lucide-react";

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
export default function Login() {
  const signIn = () => {
    const redirectUrl = window.location.origin + "/";
    window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
  };

  return (
    <div className="relative min-h-screen grid lg:grid-cols-2 bg-stone-50 grain-bg">
      {/* Left visual */}
      <div className="relative hidden lg:block overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #D97706 0%, transparent 45%), radial-gradient(circle at 80% 70%, #047857 0%, transparent 40%)",
          }}
        />
        <div className="relative h-full flex flex-col justify-between p-12 text-stone-50">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-stone-50 text-emerald-900 grid place-items-center font-display text-xl">P</div>
            <div className="leading-tight">
              <div className="font-display text-lg">Psychobeings</div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-stone-300">Psychological Wellness</div>
            </div>
          </div>

          <div className="max-w-md">
            <div className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Practice, refined</div>
            <h1 className="font-display text-4xl lg:text-5xl leading-tight">
              A calm home <span className="font-serif-mark italic text-amber-400">for the work</span> of therapy.
            </h1>
            <p className="mt-6 text-stone-300 leading-relaxed">
              Client care, session flow, clinical notes and outcomes — held together with the same warmth you bring to the room.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md">
            {[
              { i: Feather, t: "Session-first" },
              { i: HeartPulse, t: "Outcome-aware" },
              { i: ShieldCheck, t: "Private by design" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="flex items-center gap-2 text-sm text-stone-200">
                <Icon className="h-4 w-4 text-amber-400" strokeWidth={1.8} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="relative flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-900 text-stone-50 grid place-items-center font-display">P</div>
            <div className="font-display text-lg">Psychobeings</div>
          </div>
          <div className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-3">Welcome back</div>
          <h2 className="font-display text-3xl lg:text-4xl text-stone-900 leading-tight">
            Sign in to your <span className="font-serif-mark italic text-emerald-900">practice</span>.
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            One click with Google — no passwords, no fuss. We only store what your practice needs.
          </p>

          <Button
            data-testid="google-login-btn"
            onClick={signIn}
            className="mt-10 w-full h-12 rounded-full bg-emerald-900 hover:bg-emerald-700 text-stone-50 text-base font-medium"
          >
            <img
              alt=""
              className="h-5 w-5 mr-3 bg-white rounded-full p-0.5"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            />
            Continue with Google
          </Button>

          <div className="mt-8 text-xs text-stone-500 leading-relaxed">
            By continuing you agree to hold client information with care and follow professional confidentiality standards.
          </div>
        </div>
      </div>
    </div>
  );
}
