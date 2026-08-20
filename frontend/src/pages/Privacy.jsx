import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Heart, AlertCircle, Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "August 20, 2026";

  const sections = [
    {
      id: "collection",
      icon: Eye,
      title: "1. Information We Collect",
      content: (
        <div className="space-y-3">
          <p>We collect information necessary to deliver ethical, safe, and personalized psychological support:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong className="text-slate-800">Personal Information:</strong> Name, age, email, phone number, location, and emergency contact details.</li>
            <li><strong className="text-slate-800">Clinical & Intake Data:</strong> General mental health background, intake responses, and progress notes strictly stored separately from contact info.</li>
            <li><strong className="text-slate-800">Payment Information:</strong> Handled securely via PCI-DSS compliant third-party gateways. <em className="text-[#1C7C83] font-medium">Psychobeings does not store card details or banking PINs.</em></li>
            <li><strong className="text-slate-800">Session Security:</strong> Telehealth sessions are hosted over encrypted platforms. <strong className="text-slate-800">We never record audio or video</strong> from live sessions.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "usage",
      icon: FileText,
      title: "2. How We Use Your Data",
      content: (
        <p className="text-slate-600 leading-relaxed">
          Your information is used strictly to tailor therapeutic roadmaps, manage session schedules, process transactions, and fulfill critical emergency protocols when required. We do not sell, trade, or rent personal data to marketers or external brokers.
        </p>
      ),
    },
    {
      id: "confidentiality",
      icon: Lock,
      title: "3. Therapeutic Confidentiality & Exceptions",
      content: (
        <div className="space-y-3">
          <p className="text-slate-600 leading-relaxed">
            Confidentiality is a fundamental right in therapy. Information shared during counseling remains private and protected within Psychobeings.
          </p>
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Ethical & Legal Exceptions to Confidentiality:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-amber-900/90">
              <li>Immediate, serious danger of self-harm or harm to others.</li>
              <li>Reportable situations involving child or elder abuse/neglect.</li>
              <li>Direct statutory directives or valid court orders under law.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "youth",
      icon: Heart,
      title: "4. Child & Adolescent Privacy",
      content: (
        <p className="text-slate-600 leading-relaxed">
          Clients under 18 years of age require verifiable consent from a parent or legal guardian prior to initiating services. While guardians receive general status updates, specific session conversations remain confidential between the minor and therapist to foster a safe therapeutic space, except when immediate safety risks arise.
        </p>
      ),
    },
    {
      id: "rights",
      icon: UserCheck,
      title: "5. Your Privacy Rights",
      content: (
        <div className="space-y-3 text-slate-600">
          <p>Subject to clinical record retention standards, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Request access to your personal account data.</li>
            <li>Update or correct outdated personal information.</li>
            <li>Withdraw consent for ongoing administrative communications.</li>
            <li>Request deletion of non-essential profile data.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#F2F7F7] min-h-screen text-[#1F3A3D] font-sans antialiased py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#1C7C83]/15 shadow-sm text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C7C83]/10 text-[#1C7C83] text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Ethical Care & Data Security</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3A3D] tracking-tight">
            Privacy Policy
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Your trust, therapeutic confidentiality, and personal security are central to everything we do at <strong className="text-[#1F3A3D]">Psychobeings</strong>.
          </p>

          <p className="text-xs font-medium text-slate-400 pt-2 border-t border-slate-100">
            Effective Date: {lastUpdated} • Domain: psychobeings.com
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div 
                key={sec.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#1C7C83]/15 shadow-xs transition-all duration-200 hover:border-[#1C7C83]/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#1C7C83]/10 text-[#1C7C83]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1F3A3D]">
                    {sec.title}
                  </h2>
                </div>
                
                <div className="text-sm sm:text-base leading-relaxed text-slate-700">
                  {sec.content}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Footer Card */}
        <div className="bg-[#1F3A3D] text-white rounded-3xl p-8 sm:p-10 shadow-md space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-2">
              Have Questions About Privacy?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              If you have any queries regarding your clinical confidentiality or personal data handling, reach out directly to our support team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10 text-sm text-slate-200">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#1C7C83] shrink-0" />
              <span>contact@psychobeings.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#1C7C83] shrink-0" />
              <span>Faridabad, Haryana, India</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}