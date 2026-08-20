import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4 border-b border-slate-200 pb-8">
          <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase">
            Psychobeings Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Cancellation & Refund Policy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At Psychobeings, we value mutual respect for time and commitment to your mental health journey. Please review our guidelines regarding session management below.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700 mb-3">1. Cancellation Window</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Clients must provide at least <strong className="text-slate-900">12 hours’ advance notice</strong> to cancel or adjust a scheduled therapy or wellness session.</li>
              <li>Cancellations made within less than 12 hours of the scheduled time will be billed at the full session rate and are not eligible for a refund.</li>
              <li>For multi-session package holders, late cancellations will result in the session being marked as used.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700 mb-3">2. Rescheduling Policy</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>You may request to reschedule a session up to <strong className="text-slate-900">12 hours prior</strong> to your appointment without any penalty, subject to slot availability.</li>
              <li>Rescheduling requests made under 12 hours before the start time will be treated as late cancellations.</li>
              <li>Repeated rescheduling may require advance approval or fixed scheduling terms to maintain care continuity.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700 mb-3">3. Late Arrival & No-Show Terms</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Sessions begin and end at the scheduled times to maintain fairness for all clients. Arriving late will reduce your total session duration.</li>
              <li>If you are more than <strong className="text-slate-900">15 minutes late</strong> without notice, the session will be treated as a "No-Show".</li>
              <li>No-show appointments are entirely non-refundable and cannot be rescheduled.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700 mb-3">4. Refunds & Provider Cancellations</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Completed therapy and consultation services are non-refundable.</li>
              <li>If Psychobeings must cancel or reschedule a session due to unforeseen provider emergencies, you will be offered a full refund or an immediate complimentary reschedule.</li>
              <li>When refunds are applicable, processing fees or payment gateway charges incurred during booking may be deducted from the net refund amount.</li>
              <li>Approved refunds will be processed within <strong className="text-slate-900">7–10 business days</strong> to the original payment channel.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700 mb-3">5. Therapy Packages</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Psychobeings session packages are non-transferable to other individuals.</li>
              <li>Package fees are non-refundable once the first session in the package has been completed.</li>
              <li>All bundled sessions must be utilized within the validity timeframe specified at the time of purchase.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;