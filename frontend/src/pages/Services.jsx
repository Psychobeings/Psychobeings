import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, HeartHandshake, ShieldCheck, Sparkles, 
  Building2, MapPin, MessageCircle, Globe, CheckCircle2,
  Calendar, Layers
} from 'lucide-react';

const Services = () => {
  const [activeRegion, setActiveRegion] = useState('india'); // 'india' or 'international'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const therapyOptions = [
    {
      title: 'Individual Therapy',
      description: 'A confidential, one-on-one space for anxiety, stress, overthinking, grief, burnout, and emotional healing.',
      concerns: ['Anxiety and overwhelm', 'Stress regulation', 'Burnout and emotional fatigue', 'Overthinking and decision paralysis'],
      india: [
        { title: 'Single Session', price: '₹1,500', desc: 'First consultation.', btn: 'Book session', link: '/contact' },
        { title: 'Therapy Package', price: '₹8,000', desc: '6 sessions of support.', btn: 'View package', link: '/packages' },
        { title: 'In-Person / Online', price: 'Faridabad', desc: 'Hybrid support available.', btn: 'Check slots', link: '/contact' }
      ],
      international: [
        { title: 'Single Session', price: '$60', desc: 'Standard 50-min session.', btn: 'Book session', link: '/contact' },
        { title: 'Therapy Package', price: '$320', desc: 'Global support bundle.', btn: 'View package', link: '/packages' },
        { title: 'Format', price: 'Online', desc: 'Secure video sessions.', btn: 'Check slots', link: '/contact' }
      ]
    },
    {
      title: 'Child & Adolescent Therapy',
      description: 'Support for children and adolescents navigating emotional, academic, and identity-related challenges with care.',
      concerns: ['Emotional regulation', 'School stress & confidence', 'Identity transitions', 'Peer-related difficulties'],
      india: [
        { title: 'Initial Assessment', price: '₹1,800', desc: 'First clinical intake.', btn: 'Book session', link: '/contact' },
        { title: 'Support Package', price: '₹9,000', desc: 'Consistent growth plan.', btn: 'View package', link: '/packages' },
        { title: 'Format', price: 'Flexible', desc: 'In-person or Online.', btn: 'Inquire', link: '/contact' }
      ],
      international: [
        { title: 'Initial Assessment', price: '$75', desc: 'Comprehensive intake.', btn: 'Book session', link: '/contact' },
        { title: 'Support Package', price: '$400', desc: 'Global adolescent care.', btn: 'View package', link: '/packages' },
        { title: 'Format', price: 'Online', desc: 'Global video consultations.', btn: 'Inquire', link: '/contact' }
      ]
    }
  ];

  const programOptions = [
    {
      title: 'Workshops',
      description: 'Interactive sessions that help individuals and groups build emotional awareness and resilience.',
      offerings: ['Anxiety management', 'Mindfulness tools', 'Self-care & resilience'],
      india: [
        { title: 'Single Workshop', price: '₹2,000', desc: 'Per participant rate.', btn: 'Register', link: '/contact' },
        { title: 'Bulk Booking', price: 'Custom', desc: 'For groups/institutions.', btn: 'Inquire', link: '/contact' }
      ],
      international: [
        { title: 'Single Workshop', price: '$40', desc: 'Per participant rate.', btn: 'Register', link: '/contact' },
        { title: 'Bulk Booking', price: 'Custom', desc: 'Global group pricing.', btn: 'Inquire', link: '/contact' }
      ]
    },
    {
      title: 'Corporate Wellness',
      description: 'Thoughtful wellbeing programs for teams focused on resilience and healthier work culture.',
      offerings: ['Employee wellbeing sessions', 'Burnout support', 'Team wellness workshops'],
      india: [
        { title: 'Team Session', price: '₹2,500', desc: 'Up to 10 employees.', btn: 'Book now', link: '/contact' },
        { title: 'Annual Plan', price: 'Custom', desc: 'Ongoing corporate care.', btn: 'Get Quote', link: '/contact' }
      ],
      international: [
        { title: 'Team Session', price: '$150', desc: 'Up to 10 employees.', btn: 'Book now', link: '/contact' },
        { title: 'Annual Plan', price: 'Custom', desc: 'International team care.', btn: 'Get Quote', link: '/contact' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafb] text-[#1f3a3d]">
      {/* Hero Section */}
      <section className="bg-[#0a7272] pt-20 pb-32 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold border border-white/20 backdrop-blur-sm">
            Professional Mental Health Services
          </span>
          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl">
            Support that meets you <br />
            <span className="text-teal-200 font-serif italic">wherever you are.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-50/80">
            Choose your region to see tailored therapy options, transparent pricing, and structured wellness programs.
          </p>
          
          {/* Region Switcher */}
          <div className="mt-12 inline-flex items-center rounded-2xl bg-white/10 p-1.5 border border-white/20 backdrop-blur-md">
            <button
              onClick={() => setActiveRegion('india')}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all ${
                activeRegion === 'india' ? 'bg-white text-[#0a7272] shadow-lg' : 'text-white hover:bg-white/5'
              }`}
            >
              <MapPin size={16} /> India
            </button>
            <button
              onClick={() => setActiveRegion('international')}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all ${
                activeRegion === 'international' ? 'bg-white text-[#0a7272] shadow-lg' : 'text-white hover:bg-white/5'
              }`}
            >
              <Globe size={16} /> International
            </button>
          </div>
        </div>
      </section>

      {/* Therapy Section */}
      <section className="mx-auto -mt-16 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {therapyOptions.map((item) => (
            <div key={item.title} className="flex flex-col overflow-hidden rounded-[2.5rem] border border-teal-100 bg-white shadow-xl shadow-teal-900/5">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 text-[#0a7272]">
                  <div className="rounded-2xl bg-teal-50 p-3">
                    <HeartHandshake size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0d4f50]">{item.title}</h3>
                </div>
                <p className="mt-5 text-gray-600 leading-relaxed">{item.description}</p>
                
                <div className="mt-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0a7272]">Focus Areas</h4>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {item.concerns.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={16} className="text-teal-500" /> {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Session Grid */}
              <div className="bg-teal-50/50 p-8 border-t border-teal-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-bold text-[#0d4f50] uppercase tracking-tighter flex items-center gap-2">
                    <Layers size={16} /> Session Details ({activeRegion === 'india' ? 'INR' : 'USD'})
                  </h4>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-3">
                  {(activeRegion === 'india' ? item.india : item.international).map((card) => (
                    <div key={card.title} className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm border border-white transition-all hover:shadow-md">
                      <div>
                        <p className="text-[10px] font-bold uppercase text-gray-400">{card.title}</p>
                        <p className="mt-1 text-xl font-bold text-[#0a7272]">{card.price}</p>
                        <p className="mt-2 text-xs leading-relaxed text-gray-500">{card.desc}</p>
                      </div>
                      <Link 
                        to={card.link} 
                        className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-teal-50 py-2.5 text-xs font-bold text-[#0a7272] transition hover:bg-[#0a7272] hover:text-white"
                      >
                        {card.btn}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#0d4f50] sm:text-4xl">Workshops & Corporate Wellness</h2>
            <p className="mt-4 text-gray-600">Scaling mental health support for communities and professional teams.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {programOptions.map((item) => (
              <div key={item.title} className="group rounded-[2.5rem] border border-gray-100 bg-[#fcfdfd] p-8 transition-all hover:border-teal-200 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="flex-1">
                    <div className="inline-flex rounded-2xl bg-white p-4 shadow-sm text-[#0a7272]">
                      {item.title === 'Workshops' ? <Sparkles size={24} /> : <Building2 size={24} />}
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-[#0d4f50]">{item.title}</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">{item.description}</p>
                    
                    <ul className="mt-8 space-y-3">
                      {item.offerings.map((o) => (
                        <li key={o} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full lg:w-64 space-y-4">
                    {(activeRegion === 'india' ? item.india : item.international).map((card) => (
                      <div key={card.title} className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm transition hover:shadow-md">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{card.title}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-[#0d4f50]">{card.price}</span>
                        </div>
                        <p className="mt-1 text-xs text-gray-500 mb-4">{card.desc}</p>
                        <Link to={card.link} className="block w-full rounded-xl border border-teal-600 py-2.5 text-center text-xs font-bold text-[#0a7272] transition hover:bg-teal-600 hover:text-white">
                          {card.btn}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Location Summary */}
      <section className="bg-teal-50/50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-[#0d4f50]">Why trust us</h2>
              <p className="mt-4 text-gray-600">Built on a foundation of empathy, science, and absolute confidentiality.</p>
              <div className="mt-8 flex gap-3">
                <ShieldCheck size={40} className="text-[#0a7272]" />
                <p className="text-sm italic text-gray-500">"Providing a safe, grounded space for every individual we support."</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-white">
                <h4 className="font-bold text-[#0d4f50]">Global Reach</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Through secure digital platforms, we provide therapy to clients across Europe, America, and Southeast Asia.</p>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-white">
                <h4 className="font-bold text-[#0d4f50]">In-Person Support</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Our physical space in Faridabad, Haryana offers a calm environment for those who prefer face-to-face sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Consultation Button */}
      <Link 
        to="/contact" 
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#0a7272] px-6 py-4 font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-[#0d5c5e]"
      >
        <MessageCircle size={20} />
        Book Consultation
      </Link>
    </div>
  );
};

export default Services;