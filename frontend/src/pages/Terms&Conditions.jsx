import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center space-y-3 border-b border-slate-200 pb-8">
          <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
            Psychobeings Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Please read these Terms & Conditions carefully before booking a session, purchasing a package, or accessing any services provided by Psychobeings – Psychological Wellness & Therapy.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">1. Services Scope</h2>
            <p className="text-slate-600">
              Psychobeings provides psychological counseling, therapy, and wellness services designed to support emotional well-being, personal growth, coping mechanisms, and overall psychological health. While we provide evidence-based care, specific therapeutic outcomes cannot be guaranteed.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">2. Appointments & Session Duration</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Appointments are subject to slot availability and confirmed once the booking process and required payment are completed.</li>
              <li>Standard individual therapy sessions run for up to <strong>60 minutes</strong>.</li>
              <li>Sessions extending beyond 60 minutes may be accommodated solely at the practitioner's discretion and may incur additional pro-rated fees.</li>
              <li>Clients are expected to join appointments on time and provide accurate information during registration.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">3. Cancellations, Rescheduling & Payments</h2>
            <p className="text-slate-600 mb-3">
              Applicable session and multi-session package fees must be remitted through our designated payment gateways prior to session commencement. Fees may be revised periodically, with applicable changes communicated in advance.
            </p>
            <p className="text-slate-600">
              All cancellations, rescheduling requests, late arrivals, no-shows, and refund conditions are strictly governed by the <Link to="/cancellation-policy" className="text-teal-700 font-semibold underline hover:text-teal-800">Psychobeings Cancellation & Refund Policy</Link>.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">4. Confidentiality & Privacy</h2>
            <p className="text-slate-600">
              Information shared during therapy is treated with strict clinical confidentiality, subject to legal, ethical, and safeguarding requirements. For detailed information on data collection, protection, and exceptions to confidentiality, please review our <Link to="/privacy" className="text-teal-700 font-semibold underline hover:text-teal-800">Privacy Policy</Link>.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">5. Online Sessions</h2>
            <p className="text-slate-600">
              Clients attending tele-therapy or virtual sessions are responsible for ensuring a private, secure, and quiet environment. Psychobeings cannot guarantee uninterrupted internet connectivity or technical security on third-party communication platforms.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">6. Emergency Support Disclaimer</h2>
            <div className="space-y-3 text-slate-600">
              <p>
                <strong className="text-slate-900">Psychobeings is not an emergency or crisis intervention service.</strong>
              </p>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg text-amber-900 text-xs sm:text-sm">
                In the event of an immediate medical crisis, severe distress, or risk of self-harm, clients must contact local emergency services or call a recognized national crisis helpline immediately.
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">7. Professional Boundaries</h2>
            <p className="text-slate-600">
              Communication outside scheduled appointments should be strictly restricted to booking, administrative, and logistical matters. Engaging with Psychobeings on social media platforms or direct messaging does not constitute or establish a therapeutic relationship.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-slate-900 text-teal-700">8. Contact Information & Updates</h2>
            <p className="text-slate-600">
              By booking or utilizing our services, you confirm that you have read, understood, and agreed to these Terms & Conditions, the Privacy Policy, and the Cancellation & Refund Policy. Psychobeings reserves the right to modify these terms as needed.
            </p>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <p><strong>Psychobeings – Psychological Wellness & Therapy</strong></p>
              <p>Email: <a href="mailto:info.psychobeings@gmail.com" className="text-teal-700 font-semibold underline">info.psychobeings@gmail.com</a></p>
              <p>Website: <a href="https://www.psychobeings.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-semibold underline">www.psychobeings.com</a></p>
            </div>
          </section>

        </div>

        {/* Footer Note */}
        <div className="pt-6 border-t border-slate-200 text-center text-xs sm:text-sm text-slate-500">
          Have questions regarding our terms? Reach out directly through our{' '}
          <Link to="/contact" className="text-teal-700 font-semibold underline">
            Contact Page
          </Link>.
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;