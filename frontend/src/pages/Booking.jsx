
import React from 'react';

const Booking = () => {
  return (
    <section
      id="book-a-session"
      className="min-h-[70vh] bg-[#f8fcfc] px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1312px]">
        <header className="mb-8 text-center sm:mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-[#0d4f50] sm:text-4xl md:text-5xl">
            Book a session
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4c6162] sm:text-lg">
            Choose a time that works for you and take the next step in your therapy journey.
          </p>
        </header>
        <div className="booking-embed">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              src="https://booking.myndspace.app/amanp"
              width="400"
              height="600"
              style={{ border: 'none', borderRadius: '5px', overflow: 'hidden' }}
              loading="lazy"
              allow="clipboard-read; clipboard-write"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
