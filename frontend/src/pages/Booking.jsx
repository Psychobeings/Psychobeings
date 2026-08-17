import React from 'react';

const Booking = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f7fcfb_0%,#f5fbf8_100%)] px-4 py-12 sm:px-6 lg:px-8">
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0a7272]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 -z-10 h-80 w-80 rounded-full bg-[#0d4f50]/5 blur-2xl" />

      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[#0a7272]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272]">
            Book a Consultation
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#0d4f50] sm:text-4xl md:text-5xl">
            Choose a time that works for you
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4c6162] sm:text-lg">
            Select your preferred consultation slot below to connect with our team and begin your journey.
          </p>

          {/* Trust/Security Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-[#4c6162]/80">
            <svg
              className="h-4 w-4 text-[#0a7272]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>Secure & Confidential Booking</span>
          </div>
        </header>

        {/* Embed Card Container */}
        <main className="flex justify-center">
          <div className="w-full max-w-[520px] rounded-[28px] border border-[#d7ecec] bg-white/80 p-2.5 shadow-[0_25px_80px_-20px_rgba(9,127,127,0.25)] backdrop-blur-sm sm:p-3">
            <iframe
              src="https://booking.myndspace.app/?tid=6c8cda97-dc45-4f77-9f11-36c1caf24d5c"
              title="Book a consultation"
              className="min-h-[650px] w-full rounded-[20px] border-0 sm:min-h-[720px]"
              loading="lazy"
              allow="clipboard-read; clipboard-write"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Booking;