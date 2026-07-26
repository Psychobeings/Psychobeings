import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Ensure all these icons are installed in your project
import { 
  ArrowRight, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  MapPin, 
  MessageCircle, 
  Globe, 
  CheckCircle2, 
  Layers,
  Calendar 
} from 'lucide-react';

const Services = () => {
  const [activeRegion, setActiveRegion] = useState('india');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const therapyOptions = [
    {
      title: 'Individual Therapy',
      description: 'A confidential, one-on-one space for anxiety, stress, overthinking, grief, burnout, and emotional healing.',
      concerns: ['Anxiety and overwhelm', 'Stress regulation', 'Burnout and fatigue', 'Decision paralysis'],
      india: [
        { title: 'Single Session', price: '₹1,500', desc: 'First consultation.', btn: 'Book session', link: '/contact' },
        { title: 'Therapy Package', price: '₹8,000', desc: '6 sessions of support.', btn: 'View package', link: '/packages' },
        { title: 'Session Format', price: 'Hybrid', desc: 'Online or In-person.', btn: 'Choose format', link: '/contact' }
      ],
      international: [
        { title: 'Single Session', price: '$60', desc: 'Standard 50-min session.', btn: 'Book session', link: '/contact' },
        { title: 'Therapy Package', price: '$320', desc: 'Global support bundle.', btn: 'View package', link: '/packages' },
        { title: 'Session Format', price: 'Online', desc: 'Secure video sessions.', btn: 'Choose format', link: '/contact' }
      ]
    },
    {
      title: 'Child & Adolescent Therapy',
      description: 'Support for children and adolescents navigating emotional, academic, and identity-related challenges.',
      concerns: ['Emotional regulation', 'School stress', 'Identity transitions', 'Peer difficulties'],
      india: [
        { title: 'Initial Intake', price: '₹1,800', desc: 'Assessment session.', btn: 'Book session', link: '/contact' },
        { title: 'Support Package', price: '₹9,000', desc: 'Continued growth plan.', btn: 'View package', link: '/packages' },
        { title: 'Session Format', price: 'Hybrid', desc: 'Online or In-person.', btn: 'Choose format', link: '/contact' }
      ],
      international: [
        { title: 'Initial Intake', price: '$75', desc: 'Global intake session.', btn: 'Book session', link: '/contact' },
        { title: 'Support Package', price: '$400', desc: 'Adolescent care bundle.', btn: 'View package', link: '/packages' },
        { title: 'Session Format', price: 'Online', desc: 'Global video call.', btn: 'Choose format', link: '/contact' }
      ]
    }
  ];

  const programOptions = [
    {
      title: 'Workshops',
      description: 'Interactive sessions that help individuals and groups build resilience and coping tools.',
      offerings: ['Anxiety management', 'Mindfulness tools', 'Self-care strategies'],
      india: [
        { title: 'Single Workshop', price: '₹2,000', desc: 'Per participant rate.', btn: 'Book workshop', link: '/contact' },
        { title: 'Workshop Series', price: '₹10,000', desc: 'Full learning module.', btn: 'View packages', link: '/packages' }
      ],
      international: [
        { title: 'Single Workshop', price: '$40', desc: 'Per participant rate.', btn: 'Book workshop', link: '/contact' },
        { title: 'Workshop Series', price: '$200', desc: 'Full learning module.', btn: 'View packages', link: '/packages' }
      ]
    },
    {
      title: 'Corporate Wellness',
      description: 'Thoughtful wellbeing programs for teams focused on resilience and healthier culture.',
      offerings: ['Employee wellbeing', 'Burnout support', 'Team wellness'],
      india: [
        { title: 'Single Session', price: '₹2,500', desc: 'For small teams.', btn: 'Book session', link: '/contact' },
        { title: 'Corporate Pack', price: '₹15,000', desc: 'Long-term initiatives.', btn: 'View packages', link: '/packages' }
      ],
      international: [
        { title: 'Single Session', price: '$150', desc: 'For global teams.', btn: 'Book session', link: '/contact' },
        { title: 'Corporate Pack', price: '$800', desc: 'Global wellness plan.', btn: 'View packages', link: '/packages' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafb] text-[#1f3a3d]">
      {/* Hero Section */}
      <section className="bg-[#0a7272] pt-16 pb-28 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Support that meets you <br />
            <span className="text-teal-200">wherever you are.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-50/80">
            Select your region to see specific session details and tailored packages.
          </p>
          
          {/* Region Switcher */}
          <div className="mt-10 inline-flex items-center rounded-2xl bg-white/10 p-1.5 border border-white/20">
            <button
              onClick={() => setActiveRegion('india')}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all ${
                activeRegion === 'india' ? 'bg-white text-[#0a7272]' : 'text-white hover:bg-white/5'
              }`}
            >
              <MapPin size={16} /> India
            </button>
            <button
              onClick={() => setActiveRegion('international')}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all ${
                activeRegion === 'international' ? 'bg-white text-[#0a7272]' : 'text-white hover:bg-white/5'
              }`}
            >
              <Globe size={16} /> International
            </button>
          </div>
        </div>
      </section>

      {/* Therapy Section */}
      <section className="mx-auto -mt-12 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {therapyOptions.map((item) => (
            <div key={item.title} className="flex flex-col overflow-hidden rounded-[2.5rem] border border-teal-100 bg-white shadow-lg">
              <div className="p-8">
                <div className="flex items-center gap-3 text-[#0a7272]">
                  <HeartHandshake size={24} />
                  <h3 className="text-2xl font-bold text-[#0d4f50]">{item.title}</h3>
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {item.concerns.map((c) => (
                    <div key={c} className="flex items-center gap-1.5 text-sm text-gray-500">
                      <CheckCircle2 size={14} className="text-teal-500" /> {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Session Cards Area */}
              <div className="bg-teal-50/50 p-6 border-t border-teal-100 mt-auto">
                <h4 className="text-xs font-bold text-[#0a7272] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers size={14} /> Session Details
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  {(activeRegion === 'india' ? item.india : item.international).map((card, idx) => (
                    <div key={idx} className="flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm border border-teal-50">
                      <div>
                        <p className="text-[10px] font-bold uppercase text-gray-400">{card.title}</p>
                        <p className="mt-1 text-lg font-bold text-[#0a7272]">{card.price}</p>
                        <p className="mt-1 text-xs text-gray-500">{card.desc}</p>
                      </div>
                      <Link 
                        to={card.link} 
                        className="mt-4 flex items-center justify-center gap-1 rounded-xl bg-teal-50 py-2 text-xs font-bold text-[#0a7272] hover:bg-[#0a7272] hover:text-white transition-colors"
                      >
                        {card.btn} <ArrowRight size={12} />
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
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0d4f50]">Workshops & Wellness</h2>
          <p className="text-gray-600">Bringing balance to groups and organizations.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {programOptions.map((item) => (
            <div key={item.title} className="rounded-[2.5rem] bg-white border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex rounded-2xl bg-teal-50 p-3 text-[#0a7272] mb-6">
                  {item.title === 'Workshops' ? <Sparkles size={24} /> : <Building2 size={24} />}
                </div>
                <h3 className="text-2xl font-bold text-[#0d4f50] mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-gray-50">
                {(activeRegion === 'india' ? item.india : item.international).map((card, idx) => (
                  <div key={idx} className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">{card.title}</p>
                    <p className="text-xl font-bold text-[#0d4f50] mt-1">{card.price}</p>
                    <p className="text-xs text-gray-500 mb-4">{card.desc}</p>
                    <Link to={card.link} className="block w-full rounded-xl bg-white border border-teal-600 py-2 text-center text-xs font-bold text-[#0a7272] hover:bg-teal-600 hover:text-white transition-all">
                      {card.btn}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Points */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="rounded-[3rem] bg-[#0d4f50] p-10 text-white lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why trust our care?</h2>
              <div className="space-y-4">
                {[
                  'Evidence-informed care rooted in empathy.',
                  'Flexible support (Online & In-person Faridabad).',
                  'Completely confidential and safe environment.',
                  'Tailored to your specific life stage and goals.'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ShieldCheck className="text-teal-300" size={20} />
                    <span className="text-teal-50">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
               <p className="italic text-lg text-teal-50">"The space felt safe and grounding. I felt understood from the very first session."</p>
               <p className="mt-4 font-bold text-teal-200">— A. Sharma</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAB */}
      <Link to="/contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#0a7272] px-6 py-4 font-bold text-white shadow-2xl hover:scale-105 transition-transform">
        <Calendar size={18} />
        Book Session
      </Link>
    </div>
  );
};

export default Services;