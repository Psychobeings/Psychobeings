import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = ({ mobile = false }) => (
    <>
      <Link
        to="/"
        className={`relative ${mobile ? 'block py-2 text-black' : 'mx-2'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="hover:text-[#0a7272] transition-colors duration-300">
          Home
        </span>
      </Link>

      <Link
        to="/about"
        className={`relative ${mobile ? 'block py-2 text-black' : 'mx-2'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="hover:text-[#0a7272] transition-colors duration-300">
          About
        </span>
      </Link>

      <Link
        to="/services"
        className={`relative ${mobile ? 'block py-2 text-black' : 'mx-2'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="hover:text-[#0a7272] transition-colors duration-300">
          Our Services
        </span>
      </Link>

      <Link
        to="/packages"
        className={`relative ${mobile ? 'block py-2 text-black' : 'mx-2'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="hover:text-[#0a7272] transition-colors duration-300">
          Packages
        </span>
      </Link>

      <Link
        to="/contact"
        className={`relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className="hover:text-[#0a7272] transition-colors duration-300">
          Contact
        </span>
      </Link>

      <Link
        to="/booking"
        onClick={() => setIsOpen(false)}
        className="rounded-full bg-[#0a7272] px-5 py-2 text-white font-medium hover:bg-[#0d5c5e] transition"
      >
        Book Now
      </Link>
    </>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 shadow-sm sm:px-6 lg:px-8">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Psychobeings Logo"
            className="mx-2 h-auto w-24 sm:w-40 md:w-48 lg:w-56"
          />
        </div>

        <div className="hidden items-center gap-6 text-[16px] font-medium md:flex">
          <NavItems />
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-600 md:hidden"
        >
          <Menu size={28} />
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4"
            >
              <X size={28} />
            </button>

            <div className="mt-16 flex flex-col gap-4 px-6 text-lg font-medium">
              <NavItems mobile />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;