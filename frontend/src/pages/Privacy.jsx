import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center space-y-3 border-b border-slate-200 pb-8">
          <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
            Psychobeings Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At Psychobeings – Psychological Wellness & Therapy, we respect your privacy and are committed to protecting the confidentiality and security of your personal information.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">1. Information We Collect</h2>
            <p className="text-slate-600 mb-3">
              Depending on the services you access, we collect information reasonably necessary for managing and delivering care:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Identity & Contact details (Name, age, gender, email address, phone number, emergency contact).</li>
              <li>Clinical & Intake details (Information provided in consent/assessment forms, session notes, progress records, treatment plans).</li>
              <li>Administrative data (Appointment history, transaction records, communications via WhatsApp/Email/forms).</li>
              <li>Technical usage data (Browser/device info collected through our website).</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Deliver psychological counseling, therapy, and customized wellness support.</li>
              <li>Schedule, confirm, or modify appointments and handle financial transactions.</li>
              <li>Maintain accurate clinical records in compliance with professional standards.</li>
              <li>Meet legal, administrative, and regulatory requirements.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">3. Confidentiality & Safeguarding</h2>
            <p className="text-slate-600 mb-3">
              Information shared during sessions is kept strictly confidential and will not be disclosed to third parties without consent, except where required by law or under the following conditions:
            </p>
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg text-amber-900 text-xs sm:text-sm space-y-1">
              <p><strong>Exceptions to Confidentiality:</strong></p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Immediate and serious risk of harm to yourself or another person.</li>
                <li>Safeguarding requirements involving the protection of a child or vulnerable individual.</li>
                <li>Compliance with valid court orders or legal requirements.</li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">4. Children & Adolescents</h2>
            <p className="text-slate-600">
              For minor clients, specific consent protocols, parental/guardian involvement, and safeguarding rules apply based on age and governing law. Confidentiality boundaries are clearly discussed before therapeutic work begins.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">5. Session Records & Digital Security</h2>
            <p className="text-slate-600">
              Clinical notes and assessments are stored securely with restricted access. While online sessions and communication channels (Email, WhatsApp, Video tools) utilize reputable encryption measures, clients are advised to join online appointments from private, secure environments.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">6. Payments & Data Retention</h2>
            <p className="text-slate-600">
              Payments are processed via trusted gateway partners. Psychobeings does not store full credit/debit card numbers or sensitive credentials. Personal and clinical data is retained only as long as necessary for clinical, legal, or administrative compliance.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-teal-700">7. Social Media & External Platforms</h2>
            <p className="text-slate-600">
              Social media profiles are strictly for educational and awareness purposes. Interacting with Psychobeings on social media or direct messaging does not establish a formal therapist-client relationship. Please avoid posting sensitive medical information publicly.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-slate-900 text-teal-700">8. Contact Us</h2>
            <p className="text-slate-600">
              If you have questions, concerns, or requests regarding this Privacy Policy or your data, please reach out to us:
            </p>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <p><strong>Psychobeings – Psychological Wellness & Therapy</strong></p>
              <p>Email: <a href="mailto:info.psychobeings@gmail.com" className="text-teal-700 font-semibold underline">info.psychobeings@gmail.com</a></p>
              <p>Website: <a href="https://www.psychobeings.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-semibold underline">www.psychobeings.com</a></p>
              <p>Location: <a href="https://maps.app.goo.gl/3q4ZYfFjshyr1SeW6" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-semibold underline">Find us on Google Maps</a></p>
            </div>
          </section>

        </div>

        {/* Footer Link Notice */}
        <div className="pt-6 border-t border-slate-200 text-center text-xs sm:text-sm text-slate-500">
          By using our platform or booking a service, you acknowledge acceptance of our Privacy Policy and{' '}
          <Link to="/terms" className="text-teal-700 font-semibold underline">
            Terms & Conditions
          </Link>.
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;