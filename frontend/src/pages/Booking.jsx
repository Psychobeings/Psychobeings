import React from 'react';

const Booking = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7fcfb_0%,#f5fbf8_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
            Book a consultation
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0d4f50] sm:text-4xl">
            Choose a time that feels right for you
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#4c6162] sm:text-lg">
            Use the booking widget below to select your preferred consultation slot and begin your journey with support.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[460px] overflow-hidden rounded-[24px] border border-[#d7ecec] bg-white p-2 shadow-[0_20px_70px_-30px_rgba(9,127,127,0.35)]">
            <iframe
              src="https://booking.myndspace.app/?tid=6c8cda97-dc45-4f77-9f11-36c1caf24d5c"
              title="Book a consultation"
              className="h-[700px] w-full rounded-[20px] border-0"
              loading="lazy"
              allow="clipboard-read; clipboard-write"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
