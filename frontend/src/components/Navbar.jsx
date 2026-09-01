import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logoname from '../assets/Psychobeings.png';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  const NavItems = ({ mobile = false }) => {
    const navLinks = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Packages', path: '/packages' },
      { name: 'Contact', path: '/contact' },
    ];

    return (
      <>
        {navLinks.map((link) => {
          const active = isActive(link.path);
          return (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`relative transition-colors duration-200 ${
                mobile
                  ? `block py-2.5 text-base font-medium rounded-lg px-3 ${
                      active ? 'bg-[#0a7272]/10 text-[#0a7272] font-semibold' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  : `mx-2 text-sm font-medium py-1 ${
                      active ? 'text-[#0a7272] font-semibold' : 'text-slate-600 hover:text-[#0a7272]'
                    }`
              }`}
            >
              <span>{link.name}</span>
              {!mobile && active && (
                <span className="absolute bottom-[-4px] left-0 h-0.5 w-full rounded-full bg-[#0a7272]" />
              )}
            </Link>
          );
        })}

        <div className={`${mobile ? 'pt-4 border-t border-slate-100 mt-2 flex flex-col gap-3' : 'flex items-center gap-3 ml-2'}`}>
          <a
            href="https://wa.me/919962979176?text=Hello%20Psychobeings%2C%20I%20want%20to%20book%20a%20session."
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#0d6c46] transition-all hover:bg-[#25D366] hover:text-white ${
              mobile ? 'w-full' : ''
            }`}
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className={`inline-flex items-center justify-center rounded-full bg-[#0a7272] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(10,114,114,0.24)] transition-all hover:bg-[#0d5c5e] hover:shadow-[0_12px_28px_rgba(10,114,114,0.32)] active:scale-[0.98] ${
              mobile ? 'w-full' : ''
            }`}
          >
            Book Now
          </Link>
        </div>
      </>
    );
  };

  return (
    <header role="navigation" aria-label="Main Navigation">
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'border-slate-200 bg-white/95 backdrop-blur-md shadow-sm py-2.5'
            : 'border-slate-200/80 bg-white/85 backdrop-blur-md py-3.5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-[#0a7272] rounded-lg">
              <img
                src={Logoname}
                alt="Psychobeings Logo"
                className="h-auto w-24 sm:w-40 md:w-48 lg:w-56"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            <NavItems />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open navigation menu"
            className="rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 md:hidden focus:outline-none focus:ring-2 focus:ring-[#0a7272]"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu with Smooth Transition */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0a7272]"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
            <NavItems mobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;