import React from 'react';
import { Calendar, Users, ShieldCheck, FileText, CreditCard, Video, Sliders, ArrowRight } from 'lucide-react';

export default function PracticeManagementHome() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold tracking-tight text-stone-900">Psychobeings</span>
            <span className="text-xs uppercase tracking-widest bg-stone-100 text-stone-600 px-2 py-1 rounded font-medium">Practice OS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <a href="#features" className="hover:text-stone-900 transition">Features</a>
            <a href="#workflow" className="hover:text-stone-900 transition">Workflows</a>
            <a href="#security" className="hover:text-stone-900 transition">Security</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-sm font-medium text-stone-700 hover:text-stone-900 px-4 py-2">Sign In</a>
            <a href="#demo" className="bg-stone-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-stone-800 transition">Book a Walkthrough</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-stone-200/60 text-stone-700 px-3 py-1 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
            Built for Modern Mental Health Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 leading-tight">
            Streamline Your Practice, Elevate Client Care
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Managing a thriving psychological practice requires balancing clinical excellence with administrative efficiency. Psychobeings offers an integrated digital ecosystem to handle scheduling, client records, billing, and session notes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#demo" className="w-full sm:w-auto bg-stone-900 text-white font-medium px-8 py-3.5 rounded-full hover:bg-stone-800 transition flex items-center justify-center space-x-2">
              <span>Schedule Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features" className="w-full sm:w-auto bg-white border border-stone-300 text-stone-700 font-medium px-8 py-3.5 rounded-full hover:bg-stone-50 transition">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Core Practice Management Features */}
      <section id="features" className="py-20 bg-white border-t border-stone-200 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Core Practice Management Features</h2>
            <p className="text-stone-600">Everything you need to run a secure, smooth, and professional practice.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200/80 hover:shadow-sm transition">
              <div className="w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Secure Portals & Scheduling</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Enable clients to book initial consultations and ongoing sessions online through a HIPAA-compliant interface with automated reminders.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200/80 hover:shadow-sm transition">
              <div className="w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Electronic Health Records (EHR)</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Maintain confidential, structured clinical notes, treatment plans, and psychometric assessments securely in one centralized location.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200/80 hover:shadow-sm transition">
              <div className="w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Billing & Invoicing</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Automate fee collection, generate itemized invoices, and track payment statuses effortlessly to reduce administrative overhead.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200/80 hover:shadow-sm transition">
              <div className="w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center mb-6">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Telehealth Integration</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Conduct secure, high-definition virtual sessions directly through the platform without needing external software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Modern Clinicians */}
      <section id="workflow" className="py-20 bg-stone-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Designed for Modern Clinicians</h2>
            <p className="text-stone-600">Built from the ground up to match clinical workflows and scale with your growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="w-10 h-10 bg-stone-100 text-stone-800 rounded-lg flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Clinical Workflow Customization</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Tailor intake forms, assessment templates, and progress note formats to match your specific therapeutic modalities (e.g., CBT, narrative therapy, family systems).
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="w-10 h-10 bg-stone-100 text-stone-800 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Multi-Clinician Coordination</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Seamlessly scale your practice by managing schedules, assigning cases, and overseeing collaborative notes across a growing team of associate psychologists.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm" id="security">
              <div className="w-10 h-10 bg-stone-100 text-stone-800 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Data Security & Confidentiality</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Built with enterprise-grade encryption to ensure absolute compliance with data privacy regulations and client confidentiality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white border-t border-stone-200 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Elevate Your Practice Operations</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Take the friction out of daily administration and create a seamless, professional experience for your clients from their very first click. Schedule a personalized platform walkthrough today to see how our practice management solution can transform your clinical workflow.
          </p>
          <a href="#demo" className="inline-flex items-center space-x-2 bg-stone-900 text-white font-medium px-8 py-3.5 rounded-full hover:bg-stone-800 transition">
            <span>Schedule a Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Psychobeings Practice Management. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-stone-800 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-stone-800 transition">Terms of Service</a>
            <a href="#contact" className="hover:text-stone-800 transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}