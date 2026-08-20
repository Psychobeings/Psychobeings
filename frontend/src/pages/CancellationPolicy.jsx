import React from 'react';
import { Link } from 'react-router-dom';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 border-b border-gray-200 pb-8">
          <span className="text-xs font-bold tracking-wider text-teal-700 uppercase">
            Psychobeings | Psychological Wellness and Therapy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xs text-gray-400 font-medium">
            Effective Date: [Insert Date]
          </p>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed pt-2">
            At Psychobeings - Psychological Wellness and Therapy, we value your time and are committed to providing a professional, consistent, and supportive therapeutic experience. To ensure appointment availability for all clients, the following Cancellation & Refund Policy applies to all counselling and therapy sessions.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          
          <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-gray-900 text-teal-700">1. Cancellation & Rescheduling</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Appointments may be cancelled or rescheduled at least 24 hours before the scheduled session without any cancellation charge.</li>
              <li>Cancellations or rescheduling requests made less than 24 hours before the scheduled appointment will be considered a late cancellation.</li>
              <li>Late cancellations may be charged up to 100% of the session fee.</li>
              <li>Rescheduling is subject to the therapist's availability and does not guarantee the same appointment slot.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-gray-900 text-teal-700">2. No-Show Policy</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>If a client does not attend a scheduled session without providing prior notice, the appointment will be considered a no-show.</li>
              <li>A no-show may be charged 100% of the session fee, and the session fee will not be refundable.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-gray-900 text-teal-700">3. Refund Policy</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Session payments are generally non-refundable once an appointment has been confirmed, except where otherwise stated in this policy.</li>
              <li>If the therapist needs to cancel a confirmed appointment and an alternative appointment cannot be mutually arranged, the client will be eligible for a full refund of the amount paid for that session.</li>
              <li>Where a refund is approved, it will generally be processed through the original payment method within 5–10 business days, subject to the processing time of the relevant bank or payment provider.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-gray-900 text-teal-700">4. Therapy & Counselling Packages</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Package sessions are subject to the same cancellation and no-show policy.</li>
              <li>Refund requests for unused package sessions will be reviewed on a case-by-case basis. Sessions that have already been attended, late-cancelled, or missed may not be eligible for a refund.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-gray-900 text-teal-700">5. Therapist-Initiated Cancellation</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>If a session is cancelled or rescheduled by the therapist, the client will be offered an alternative appointment based on mutual availability.</li>
              <li>If an alternative appointment cannot be arranged, the applicable session fee will be refunded in full.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-gray-900 text-teal-700">6. Exceptional Circumstances</h2>
            <p className="text-gray-600">
              We understand that genuine emergencies or unforeseen circumstances may arise. Such situations may be considered on a case-by-case basis at the discretion of Psychobeings | Psychological Wellness and Therapy.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-gray-900 text-teal-700">7. Acceptance of Policy</h2>
            <p className="text-gray-600 mb-2">
              By booking and confirming an appointment, the client acknowledges that they have read, understood, and agreed to the Cancellation & Refund Policy of Psychobeings | Psychological Wellness and Therapy.
            </p>
            <p className="text-gray-600">
              Psychobeings- Psychological Wellness and Therapy reserves the right to review exceptional circumstances and make reasonable adjustments to this policy where appropriate.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-gray-900 text-teal-700">8. Extended Sessions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Standard therapy and counselling sessions are scheduled for up to 60 minutes.</li>
              <li>If a session extends beyond the scheduled 60 minutes, additional time may be accommodated at the therapist’s discretion and subject to availability.</li>
              <li>Sessions extending beyond 60 minutes may be subject to an additional fee based on the duration of the extension.</li>
              <li>Extended sessions are not guaranteed and should not be assumed as part of the standard session fee.</li>
              <li>The therapist may recommend scheduling a follow-up session instead when additional therapeutic time is required.</li>
              <li>Any applicable additional charges will be communicated to the client where reasonably possible.</li>
            </ul>
          </section>

        </div>

        {/* Bottom Note */}
        <div className="pt-6 border-t border-gray-200 text-center text-xs sm:text-sm text-gray-500">
          Have questions regarding our policies? Reach out directly via our{' '}
          <Link to="/contact" className="text-teal-700 font-semibold hover:underline">
            Contact Support Page
          </Link>.
        </div>

      </div>
    </div>
  );
};

export default CancellationPolicy;