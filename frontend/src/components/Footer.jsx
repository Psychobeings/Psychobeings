import React from 'react';
import { Link } from 'react-router-dom';
import { PsychobeingsLogo } from './Navbar';
import { Heart, Phone, Mail, MapPin, Shield, Clock, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-3 rounded-xl inline-block backdrop-blur-xs">
              <PsychobeingsLogo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Psychobeings is a dedicated mental health practice committed to providing compassionate, evidence-based individual therapy, couples counseling, and psychiatric support tailored to your life journey.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 p-2.5 rounded-lg w-fit">
              <Shield className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>HIPAA Compliant • Licensed Practitioners • Encrypted Sessions</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
              <li><Link to="/packages" className="hover:text-teal-400 transition-colors">Care Packages</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
              <li>
                <Link to="/booking" className="text-teal-300 font-semibold hover:underline flex items-center gap-1">
                  Book Consultation <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinical Services */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Specialized Care</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Individual Psychotherapy</li>
              <li>Couples & Marriage Counseling</li>
              <li>Teen & Adolescent Support</li>
              <li>Psychiatric Assessment</li>
              <li>Stress & Burnout Recovery</li>
              <li>Online Teletherapy</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3 text-sm">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Contact Info</h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>450 Wellness Plaza, Suite 300, San Francisco, CA 94103</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+1 (800) 555-MIND (6463)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>care@psychobeings.org</span>
              </p>
              <p className="flex items-center gap-2 pt-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Mon – Fri: 8am – 8pm | Sat: 9am – 4pm</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Psychobeings Mental Health Practice. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Client Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;