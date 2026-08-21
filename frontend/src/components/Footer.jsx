import React from 'react';
import logo2 from '../assets/PSYCHOBEINGS website logo.jpg'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/profile.php?id=61593124724145', 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/psychobeings.wellness/', 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/psychobeings-wellness/?viewAsMember=true', 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Banner Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl font-bold text-gray-900">Ready to prioritize your mental wellbeing?</h3>
            <p className="text-sm text-gray-500 max-w-xl">
              Connect with our professionals for personalized therapy and wellness guidance tailored to your journey.
            </p>
          </div>
          <a
            href="/contact"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow whitespace-nowrap"
          >
            Book a Session Today
          </a>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <img className="h-9 w-auto object-contain" src={logo2} alt="Psychobeings Logo" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Providing a safe, compassionate, and non-judgmental space where you are free to heal and grow.
            </p>
            <p className="text-xs italic text-teal-700 font-medium">
              "Empowering minds, one step at a time."
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/" className="hover:text-teal-600 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-teal-600 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-teal-600 transition-colors">Services</a></li>
              <li><a href="/screening" className="hover:text-teal-600 transition-colors">Screening</a></li>
              <li><a href="/blog" className="hover:text-teal-600 transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Column 3: Policies & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Support & Policies</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</a></li>
              <li><a href="/cancellation-policy" className="hover:text-teal-600 transition-colors">Cancellation Policy</a></li>
              <li><a href="/terms" className="hover:text-teal-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="/contact" className="hover:text-teal-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Social Connect & Help */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Connect With Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-500 hover:text-teal-600 hover:border-teal-500 transition-all shadow-sm"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="pt-2 text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-700">Need direct assistance?</p>
              <p>Email our care team via the contact form anytime.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Psychobeings. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-gray-600">Privacy</a>
            <a href="/terms" className="hover:text-gray-600">Terms</a>
            <a href="/contact" className="hover:text-gray-600">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;