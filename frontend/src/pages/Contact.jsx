import React, { useState } from 'react';
import axios from 'axios';
import { Mail, MapPin, Clock, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    setErrorMessage('');

    // Ensure baseUrl formats cleanly regardless of environment setup
    const rawUrl = process.env.REACT_APP_URL || '';
    const baseUrl = rawUrl.endsWith('/') ? rawUrl : `${rawUrl}/`;

    try {
      const res = await axios.post(`${baseUrl}email/sendmessage`, formData);

      if (res.status >= 200 && res.status < 300) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('FAILED...', error);
      setErrorMessage('Something went wrong. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Header / Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-slate-50 py-16 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="px-3 py-1 rounded-full bg-teal-100 text-[#0a7272] text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-3 mb-4">
            We are here whenever you are ready to begin.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you are looking for guidance, booking support, or a first conversation, we would love to hear from you. Our team offers compassionate therapy support in Faridabad and online across India and internationally.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a confidential message</h2>
              <p className="text-xs text-slate-500 mb-6">Our intake team will review your message promptly.</p>

              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#0a7272] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Thank you, {formData.name}!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. One of our care team members will get back to you at <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="text-xs font-bold text-[#0a7272] hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 text-xs rounded-xl bg-red-50 border border-red-200 text-red-600">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a7272]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a7272]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a7272]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1" htmlFor="subject">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a7272] bg-white"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Workshops & Seminars">Workshops & Seminars</option>
                        <option value="Corporate Wellness Programs">Corporate Wellness Programs</option>
                        <option value= "Packages & Booking">Packages & Booking</option>
                        <option value="Online Counselling">Online Counselling</option>
                        <option value="In-Person Counselling">In-Person Counselling</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1" htmlFor="message">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can our clinical team support you today?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a7272]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-full bg-[#0a7272] text-white font-bold text-sm hover:bg-[#0d5c5e] transition flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-bold font-serif">Connect With Us/Visit</h3>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Visit Us In Person</p>
                      <p className="text-xs text-slate-400"> 10:00 Am - 8:00 PM </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Email ID </p>
                      <p className="text-xs text-slate-400">info.psychobeings@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Response Time & Care</p>
                      <p className="text-xs text-slate-400">1–2 business days. Connect online from anywhere across India & internationally.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-amber-300 flex items-start gap-2 bg-amber-950/40 p-3 rounded-xl border border-amber-800/40">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    If you or someone you know is in severe distress or crisis, please contact local emergency helpline services immediately.
                  </span>
                </div>
              </div>

              {/* Map Graphic Block */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 overflow-hidden shadow-xs">
                <p className="text-xs font-bold uppercase text-slate-500 mb-2">Location Map</p>
                <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    title="Psychobeings location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28076.2060174367!2d77.33622655499245!3d28.403388650564068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd8c1cbcd9ad%3A0xcb81de111c2746f0!2sPsychobeings%20%E2%80%93%20Psychological%20Wellness%20%26%20Therapy!5e0!3m2!1sen!2sin!4v1787038689039!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28076.2060174367!2d77.33622655499245!3d28.403388650564068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd8c1cbcd9ad%3A0xcb81de111c2746f0!2sPsychobeings%20%E2%80%93%20Psychological%20Wellness%20%26%20Therapy!5e0!3m2!1sen!2sin!4v1787038689039!5m2!1sen!2sin"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-center text-xs font-bold text-[#0a7272] hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;