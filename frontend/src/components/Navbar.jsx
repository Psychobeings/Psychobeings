import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logoname from '../assets/Psychobeings.png';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = ({ mobile = false }) => (
    <>
      <Link
        to="/"
        className={`relative ${mobile ? 'block py-2 text-slate-700' : 'mx-2 text-sm font-medium'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="transition-colors duration-200 hover:text-[#0a7272]">Home</span>
      </Link>

      <Link
        to="/about"
        className={`relative ${mobile ? 'block py-2 text-slate-700' : 'mx-2 text-sm font-medium'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="transition-colors duration-200 hover:text-[#0a7272]">About</span>
      </Link>

      <Link
        to="/services"
        className={`relative ${mobile ? 'block py-2 text-slate-700' : 'mx-2 text-sm font-medium'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="transition-colors duration-200 hover:text-[#0a7272]">Services</span>
      </Link>

      <Link
        to="/packages"
        className={`relative ${mobile ? 'block py-2 text-slate-700' : 'mx-2 text-sm font-medium'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="transition-colors duration-200 hover:text-[#0a7272]">Packages</span>
      </Link>

      <Link
        to="/contact"
        className={`relative ${mobile ? 'block py-2 text-slate-700' : 'mx-2 text-sm font-medium'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="transition-colors duration-200 hover:text-[#0a7272]">Contact</span>
      </Link>

      <a
        href="https://wa.me/919962979176?text=Hello%20Psychobeings%2C%20I%20want%20to%20book%20a%20session."
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-semibold text-[#0d6c46] transition hover:bg-[#25D366] hover:text-white"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>

      <Link
        to="/booking"
        onClick={() => setIsOpen(false)}
        className="rounded-full bg-[#0a7272] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(10,114,114,0.24)] transition hover:bg-[#0d5c5e]"
      >
        Book Now
      </Link>
    </>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={Logoname}
                alt="Psychobeings Logo"
                className="h-auto w-24 sm:w-40 md:w-48 lg:w-56"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <NavItems />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-slate-950/45" onClick={() => setIsOpen(false)}></div>

          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-lg border border-slate-200 p-2 text-slate-700"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            <div className="mt-16 flex flex-col gap-2 px-6 text-lg font-medium">
              <NavItems mobile />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;