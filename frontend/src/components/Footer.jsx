import React from 'react';
import logo2 from '../assets/logo2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z' },
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z' },
  ];

  return (
    <footer className="bg-[#f5fffa] border-t border-gray-100">
      <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img className="w-auto h-16 mb-6" src={logo2} alt="Psychobeings Logo" />
            <p className="text-base leading-relaxed text-gray-600 max-w-xs">
              Every step of your mental health journey counts. We provide a safe space where you're free to heal, grow, and find expert guidance.
            </p>
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 transition-colors duration-300 hover:text-emerald-600"
                  aria-label={item.name}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={item.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Services</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">Individual Therapy</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">Couples Counseling</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">Group Sessions</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">Workshops</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start text-gray-600 text-base">
                <span className="mr-3 mt-1">📍</span>
                123 Wellness Way, Healing Suite 101
              </li>
              <li className="flex items-center text-gray-600 text-base">
                <span className="mr-3">📧</span>
                hello@psychobeings.com
              </li>
              <li className="flex items-center text-gray-600 text-base font-medium text-emerald-700">
                <span className="mr-3">📞</span>
                +1 (555) 000-0000
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-500">
              © {currentYear} Psychobeings. All Rights Reserved.
            </p>
            <p className="mt-4 text-sm text-gray-500 md:mt-0 italic">
              Empowering minds, one step at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;