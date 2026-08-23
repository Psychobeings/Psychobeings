import React, { useState } from 'react';
import axios from 'axios';
import { Mail, MapPin, Clock, Send, CheckCircle2, ShieldAlert, Phone, ExternalLink } from 'lucide-react';

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
    <div className="min-h-screen bg-[#fbfdfd] text-[#111827] font-sans antialiased">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#edf7f7] via-[#f7fbfb] to-[#fbfdfd] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#d8ecec]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#b8e1e1] text-[#036b75] text-xs font-bold uppercase tracking-wider shadow-2xs">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
            We are here whenever you are <span className="text-[#036b75]">ready to begin.</span>
          </h1>
          <p className="text-[#4b5563] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are seeking individual support, booking details, or corporate workshops, our team is here to help. Reach out to us online or visit our clinic in Faridabad.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-[#d8ecec] shadow-2xs flex items-start gap-4">
              <div className="p-3 bg-[#edf7f7] text-[#036b75] rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827] text-sm">In-Person Clinic</h3>
                <p className="text-xs text-[#4b5563] mt-1 leading-relaxed">
                  Sector 88, Faridabad, Haryana
                </p>
                <span className="inline-block mt-2 text-[11px] font-bold text-[#036b75] bg-[#edf7f7] px-2.5 py-0.5 rounded-md">
                  10:00 AM – 8:00 PM
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#d8ecec] shadow-2xs flex items-start gap-4">
              <div className="p-3 bg-[#edf7f7] text-[#036b75] rounded-xl shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827] text-sm">Direct Email</h3>
                <p className="text-xs text-[#4b5563] mt-1 break-all">
                  info.psychobeings@gmail.com
                </p>
                <p className="text-[11px] text-[#6b7280] mt-2">
                  Response within 24 hours
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#d8ecec] shadow-2xs flex items-start gap-4">
              <div className="p-3 bg-[#edf7f7] text-[#036b75] rounded-xl shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827] text-sm">Global Telehealth</h3>
                <p className="text-xs text-[#4b5563] mt-1 leading-relaxed">
                  Available India-wide & Internationally
                </p>
                <p className="text-[11px] text-[#6b7280] mt-2">
                  Secure video appointments
                </p>
              </div>
            </div>
          </div>

          {/* Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#d8ecec] shadow-xs">
              <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-[#111827]">Send a Confidential Message</h2>
                <p className="text-xs text-[#6b7280] mt-1">Our care coordinator will handle your query with complete privacy.</p>
              </div>

              {submitted ? (
                <div className="bg-[#edf7f7] border border-[#b8e1e1] rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#036b75] text-white flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827]">Message Sent, {formData.name}!</h3>
                  <p className="text-xs text-[#4b5563] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Psychobeings. A member of our clinical team will review your message and reply to <span className="font-bold text-[#111827]">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="text-xs font-bold text-[#036b75] hover:underline pt-2 inline-block"
                  >
                    Send Another Message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 text-xs rounded-xl bg-red-50 border border-red-200 text-red-600 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ecec] bg-[#fbfdfd] text-sm focus:outline-none focus:ring-2 focus:ring-[#036b75] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ecec] bg-[#fbfdfd] text-sm focus:outline-none focus:ring-2 focus:ring-[#036b75] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ecec] bg-[#fbfdfd] text-sm focus:outline-none focus:ring-2 focus:ring-[#036b75] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5" htmlFor="subject">
                        Topic of Inquiry
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ecec] bg-[#fbfdfd] text-sm focus:outline-none focus:ring-2 focus:ring-[#036b75] focus:bg-white transition"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="In-Person Counselling">In-Person Counselling (Faridabad)</option>
                        <option value="Online Counselling">Online Counselling (Global)</option>
                        <option value="Packages & Booking">Packages & Booking</option>
                        <option value="Workshops & Seminars">Workshops & Seminars</option>
                        <option value="Corporate Wellness Programs">Corporate Wellness Programs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5" htmlFor="message">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a few details on how we can support you..."
                      className="w-full px-4 py-3 rounded-xl border border-[#d8ecec] bg-[#fbfdfd] text-sm focus:outline-none focus:ring-2 focus:ring-[#036b75] focus:bg-white transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-xl bg-[#036b75] text-white font-bold text-sm hover:bg-[#02565e] transition flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
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

            {/* Map & Emergency Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Banner */}
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200/80 text-amber-900 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-bold text-amber-950 mb-0.5">Emergency Assistance Notice</p>
                  If you or someone you care for is experiencing acute psychological distress or a emergency, please contact local emergency services immediately.
                </div>
              </div>

              {/* Map Block */}
              <div className="bg-white rounded-3xl p-5 border border-[#d8ecec] shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#036b75]">
                    Clinic Location
                  </span>
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28076.2060174367!2d77.33622655499245!3d28.403388650564068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd8c1cbcd9ad%3A0xcb81de111c2746f0!2sPsychobeings%20%E2%80%93%20Psychological%20Wellness%20%26%20Therapy!5e0!3m2!1sen!2sin!4v1787038689039!5m2!1sen!2sin"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#036b75] hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#d8ecec]">
                  <iframe
                    title="Psychobeings location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28076.2060174367!2d77.33622655499245!3d28.403388650564068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd8c1cbcd9ad%3A0xcb81de111c2746f0!2sPsychobeings%20%E2%80%93%20Psychological%20Wellness%20%26%20Therapy!5e0!3m2!1sen!2sin!4v1787038689039!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;