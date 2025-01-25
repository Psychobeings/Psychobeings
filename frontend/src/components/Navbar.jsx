import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = ({ mobile = false }) => (
    <>
      <Link
        to="/"
        className={`relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
        onClick={() => setIsOpen(false)} // Close menu on click
      >
        <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">Home</span>
      </Link>
      <Link
        to="/about"
        className={`relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
        onClick={() => setIsOpen(false)} // Close menu on click
      >
        <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">About</span>
      </Link>
      <Link
        to="/services"
        className={`relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
        onClick={() => setIsOpen(false)} // Close menu on click
      >
        <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">Our Services</span>
      </Link>
      <span
        onClick={() => {
          setIsOpen(false); // Close mobile menu if open
          onContactClick(); // Open the modal
        }}
        className={`cursor-pointer relative ${mobile ? 'block py-2 text-black' : 'mx-4'}`}
      >
        <span className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300">Contact Us</span>
      </span>
    </>
  );

  return (
    <>
      <nav className="relative flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8 z-50">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" className="mx-2 w-24 h-auto sm:w-40 md:w-48 lg:w-56" />
        </div>
        <div className="flex justify-normal">
          <div className="hidden md:flex items-center justify-center gap-8 text-md font-normal">
            <NavItems />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-500 hover:text-gray-700 focus:outline-none md:hidden ${isOpen ? 'hidden' : ''}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden overflow-hidden z-50`}>
          <div className="relative h-full w-full">
            <div className="relative z-10 p-4 h-full">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-black hover:text-gray-300 focus:outline-none z-50"
              >
                <X size={24} />
              </button>
              <div className="mt-8">
                <NavItems mobile />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
