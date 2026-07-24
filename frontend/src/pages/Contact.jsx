import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock3, Globe2, Headphones, Mail, MapPin } from 'lucide-react';
import axios from 'axios';
import Contectimg from '../assets/contectSvg.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');

    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}email/sendmessage`, formData);

      if (res.status >= 200 && res.status < 300) {
        setFormData({ name: '', email: '', message: '' });
        setSuccessMessage('Thank you for reaching out. We will get back to you soon.');
      }
    } catch (error) {
      console.log('FAILED...', error);
      setSuccessMessage('Something went wrong. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactDetails = [
    {
      title: 'Visit us in person',
      value: 'Faridabad, Haryana',
      description: 'In-person counselling is available for clients seeking support close to home.',
      icon: MapPin,
    },
    {
      title: 'Email us',
      value: 'info.psychobeings@gmail.com',
      description: 'Share your concerns, request availability, or ask about the best fit for you.',
      icon: Mail,
    },
    {
      title: 'Online counselling',
      value: 'Across India & internationally',
      description: 'Connect from anywhere with secure virtual sessions tailored to your comfort.',
      icon: Globe2,
    },
    {
      title: 'Response time',
      value: '1–2 business days',
      description: 'We usually get back to you quickly so you can plan your next step with confidence.',
      icon: Clock3,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a7272] via-[#0c6d70] to-[#0e5b5e] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="grid items-center gap-8 rounded-[2rem] border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#eaf6f6] px-4 py-2 text-sm font-medium text-[#0a5f62]">
              Contact us
            </span>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight text-[#0d4f50] sm:text-5xl">
                We are here whenever you are ready to begin.
              </h1>
              <p className="max-w-2xl text-lg text-[#4c6162]">
                Whether you are looking for guidance, booking support, or a first conversation, we would love to hear from you. Our team offers compassionate therapy support in Faridabad and online across India and internationally.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="rounded-full bg-[#0a7272] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b5a5d]"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-[#0a7272] px-6 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-[#eaf6f6]"
              >
                Explore Services
              </Link>
              <Link
                to="/packages"
                className="rounded-full border border-[#a7cfcf] px-6 py-3 text-sm font-semibold text-[#2c5d5d] transition hover:bg-[#f5fbfb]"
              >
                View Packages
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#eaf6f6] p-4 sm:p-6">
            <img
              src={Contectimg}
              alt="Contact illustration"
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-[#0f5f61] p-8 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/15 p-3">
                <Headphones size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">How to reach us</h2>
                <p className="mt-1 text-sm text-[#dce9e8]">Support that feels calm, clear, and personal.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-white/15 p-2">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                        <p className="mt-1 text-sm text-[#dce9e8]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm font-semibold">Prefer a visit?</p>
              <p className="mt-2 text-sm text-[#dce9e8]">
                We welcome clients to connect in person for a first conversation in Faridabad, Haryana, and we are happy to guide you toward the right support.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7ecec] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-[#0d4f50]">Visit our location</h2>
                <p className="mt-2 text-sm text-[#4c6162]">
                  Our counselling support is rooted in Faridabad, with online sessions available across India and internationally.
                </p>
              </div>
              <span className="rounded-full bg-[#eaf6f6] px-3 py-1 text-sm font-medium text-[#0a5f62]">
                Faridabad, Haryana
              </span>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#d7ecec]">
              <div className="aspect-video w-full bg-[#f7fcfc] p-3">
                <iframe
                  title="Psychobeings location"
                  src="https://www.google.com/maps?q=Faridabad%20Haryana%20India&z=12&output=embed"
                  className="h-full w-full rounded-[1.2rem] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Faridabad,Haryana,India"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#0a7272] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b5a5d]"
              >
                Open in Google Maps
              </a>
              <a
                href="mailto:info.psychobeings@gmail.com"
                className="rounded-full border border-[#0a7272] px-4 py-2 text-sm font-semibold text-[#0a7272] transition hover:bg-[#eaf6f6]"
              >
                Email us directly
              </a>
            </div>
          </div>
        </section>

        <section id="contact-form" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#0f5f61] p-8 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/15 p-3">
                <Headphones size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Contact options</h2>
                <p className="mt-1 text-sm text-[#dce9e8]">Support that feels calm, clear and personal.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <h3 className="font-semibold">Need help choosing the right support?</h3>
                <p className="mt-1 text-sm text-[#dce9e8]">We can help you understand which service best fits your situation, whether it is counselling, therapy, or a package.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <h3 className="font-semibold">Planning a first session?</h3>
                <p className="mt-1 text-sm text-[#dce9e8]">Share a few details and we will guide you through the next step with care and clarity.</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm font-semibold">Need a quick response?</p>
              <p className="mt-2 text-sm text-[#dce9e8]">We usually reply within 1–2 business days to help you take the next step with confidence.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Therapy
              </Link>
              <Link to="/packages" className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
                View Packages
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-[#0d4f50]">Send us a message</h2>
                <p className="mt-2 text-sm text-[#4c6162]">
                  Share a few details and we will reach out with care.
                </p>
              </div>
              <span className="rounded-full bg-[#eaf6f6] px-3 py-1 text-sm font-medium text-[#0a5f62]">
                Get Support
              </span>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handlesubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#0d4f50]" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#d7ecec] px-4 py-3 outline-none transition focus:border-[#0a7272]"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#0d4f50]" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#d7ecec] px-4 py-3 outline-none transition focus:border-[#0a7272]"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#0d4f50]" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we support you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#d7ecec] px-4 py-3 outline-none transition focus:border-[#0a7272]"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a7272] px-4 py-3 font-medium text-white transition hover:bg-[#0d5c5e] disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
              {successMessage && (
                <p className="rounded-xl border border-[#d7ecec] bg-[#f5fbfb] px-4 py-3 text-sm text-[#0d4f50]">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
