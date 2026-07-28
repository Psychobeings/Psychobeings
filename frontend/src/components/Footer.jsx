import React from 'react';
/* 1. Double check: Is it 'logo2.png' or 'Logo2.png'? 
   Make sure the file extension is exactly .png (not .PNG) */
import logo2 from '../assets/logo2.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 007.5 21z' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            {/* Reduced height to prevent layout shifts */}
            <img className="w-auto h-12 mb-6" src={logo2} alt="Psychobeings Logo" />
            <p className="text-base leading-relaxed text-gray-600 max-w-xs">
              Every step of your mental health journey counts. We provide a safe space where you're free to heal and grow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Explore</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="/" className="text-base text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="/about" className="text-base text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="/services" className="text-base text-gray-600 hover:text-blue-600">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="/privacy" className="text-base text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="/terms" className="text-base text-gray-600 hover:text-blue-600">Terms</a></li>
              <li><a href="/contact" className="text-base text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label={item.name}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={item.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 italic mb-2">Empowering minds, one step at a time.</p>
          <p className="text-sm text-gray-500">
            © {currentYear} Psychobeings. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;