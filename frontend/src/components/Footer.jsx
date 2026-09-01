import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/PSYCHOBEINGS website logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61593124724145',
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/psychobeings.wellness/',
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/psychobeings-wellness/?viewAsMember=true',
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <footer role="contentinfo" className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50/70 text-slate-600">
      {/* Decorative gradient blur background detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-full max-w-7xl bg-gradient-to-b from-[#1c7c83]/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl space-y-14 px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Call to Action Banner */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#1c7c83]/15 bg-gradient-to-br from-white via-slate-50 to-[#1c7c83]/5 p-8 shadow-xl shadow-slate-200/50 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="inline-block rounded-full bg-[#1c7c83]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1c7c83]">
              Take the first step
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Ready to prioritize your wellbeing?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Connect with compassionate certified professionals in a safe, judgment-free virtual environment.
            </p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row lg:mt-0 lg:shrink-0">
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center rounded-full bg-[#1c7c83] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#1c7c83]/20 transition-all duration-200 hover:bg-[#15646a] hover:shadow-lg hover:shadow-[#1c7c83]/30 active:scale-[0.98]"
            >
              <span>Book a Session</span>
              <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-[#1c7c83]/40 hover:bg-slate-50 hover:text-[#1c7c83] active:scale-[0.98]"
            >
              Ask a Question
            </Link>
          </div>
        </div>

        {/* Main Grid Links */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Info Column */}
          <div className="space-y-5 lg:col-span-4">
            <Link to="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-[#1c7c83] rounded-lg">
              <img className="h-10 w-auto object-contain" src={logo2} alt="Psychobeings Logo" />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Providing a safe, compassionate, and non-judgmental space where you can heal, reconnect, and grow with confidence.
            </p>
            <div className="rounded-xl border border-[#1c7c83]/15 bg-white/60 p-4 backdrop-blur-sm max-w-sm space-y-1">
              <p className="text-xs font-medium italic text-[#1c7c83]">“Empowering minds, one step at a time.”</p>
              <p className="text-[11px] text-slate-500 font-medium">Support available Mon–Sat across global time zones.</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-600 transition hover:text-[#1c7c83]">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 transition hover:text-[#1c7c83]">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 transition hover:text-[#1c7c83]">Services</Link>
              </li>
              <li>
                <Link to="/packages" className="text-slate-600 transition hover:text-[#1c7c83]">Packages</Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contact" className="text-slate-600 transition hover:text-[#1c7c83]">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-600 transition hover:text-[#1c7c83]">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cancellation-policy" className="text-slate-600 transition hover:text-[#1c7c83]">Cancellation Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 transition hover:text-[#1c7c83]">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Connect & Newsletter Column */}
          <div className="space-y-4 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900">Stay Connected & Updated</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#1c7c83] focus:outline-none focus:ring-1 focus:ring-[#1c7c83]"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-[#1c7c83] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#15646a]"
                >
                  Join
                </button>
              </div>
              <p className="text-[11px] text-slate-500">Get gentle weekly wellness tips and insights directly to your inbox.</p>
            </form>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1c7c83]/40 hover:bg-[#1c7c83]/5 hover:text-[#1c7c83]"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {currentYear} Psychobeings. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="transition hover:text-[#1c7c83]">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-[#1c7c83]">Terms of Service</Link>
            <Link to="/contact" className="transition hover:text-[#1c7c83]">Help Center</Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-medium text-[#1c7c83] transition hover:text-[#15646a] focus:outline-none focus:underline"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;