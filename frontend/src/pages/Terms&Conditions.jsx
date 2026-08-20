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
            Welcome to Psychobeings. Please review our terms governing your access to our wellness platform, professional consultation services, and digital resources.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">1. Acceptance of Terms</h2>
            <p className="text-slate-600">
              By accessing our website (<span className="font-semibold text-slate-800">www.psychobeings.com</span>) or booking services through Psychobeings, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please refrain from using our services.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">2. Emergency Disclaimer & Scope of Support</h2>
            <div className="space-y-3 text-slate-600">
              <p>
                Psychobeings provides planned mental health, counseling, and emotional wellness services. <strong className="text-slate-900">Our platform is not designed to handle immediate psychiatric or medical emergencies.</strong>
              </p>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg text-amber-900 text-xs sm:text-sm">
                <strong>Emergency Notice:</strong> If you are experiencing severe psychological distress, thoughts of self-harm, or a medical crisis, please contact local emergency medical services or reach out immediately to a national suicide prevention helpline.
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">3. Booking, Rescheduling & Session Conduct</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Appointments must be confirmed through our valid booking channels with requisite details provided.</li>
              <li>Sessions will run for the designated time frame. Late arrivals will not result in extended session times out of courtesy to subsequent appointments.</li>
              <li>Modifications to appointments are governed by our separate <Link to="/cancellation-policy" className="text-teal-700 font-semibold underline hover:text-teal-800">Cancellation & Refund Policy</Link>.</li>
              <li>Psychobeings maintains a zero-tolerance policy for abusive behavior, harassment, or non-consensual session recordings. Therapists reserve the right to conclude a session if professional boundaries are violated.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">4. Confidentiality & Privacy</h2>
            <p className="text-slate-600">
              We respect your privacy and adhere to clinical confidentiality protocols. Personal information disclosed during therapy or consultation sessions will remain strictly confidential, except where disclosure is mandated by law (e.g., imminent threat of harm to self or others, or valid judicial court orders). Refer to our <Link to="/privacy" className="text-teal-700 font-semibold underline hover:text-teal-800">Privacy Policy</Link> for detailed data practices.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">5. Intellectual Property Rights</h2>
            <p className="text-slate-600">
              All website content—including logos, graphic design assets, copy, published articles, and brand material—is the exclusive intellectual property of Psychobeings. Re-publication, copying, or commercial exploitation without prior written approval is prohibited.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">6. Limitation of Liability</h2>
            <p className="text-slate-600">
              Psychobeings strives to deliver the highest quality wellness support. However, therapy outcomes vary individually. Psychobeings and its practitioners shall not be liable for indirect, incidental, or consequential damages resulting from platform usage or reliance on educational blog content.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">7. Modifications to Terms</h2>
            <p className="text-slate-600">
              Psychobeings reserves the right to revise these Terms & Conditions periodically to reflect regulatory updates or business alterations. Continued platform usage after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

        </div>

        {/* Contact Footer Note */}
        <div className="pt-6 border-t border-slate-200 text-center text-xs sm:text-sm text-slate-500">
          Have questions about our Terms & Conditions? Contact our legal & care team at{' '}
          <Link to="/contact" className="text-teal-700 font-semibold underline">
            Psychobeings Support
          </Link>.
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;