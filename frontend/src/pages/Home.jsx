import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Changed from 'motion/react' to standard framer-motion import
import { 
  Shield, Calendar, ArrowRight, CheckCircle2, 
  Star, Check, Activity, Sparkles
} from 'lucide-react';

// Assets/Data
import { SERVICES, THERAPISTS, TESTIMONIALS } from '../data/mockData';

// Components from your existing project
import Hero1 from '../components/Hero1';
import WhatWeDo from '../components/WhatWeDo';
import LanguageSupport from '../components/LanguageSupport';
import FoundersNote from '../components/FoundersNote';
import TherapyApproach from '../components/TherapyApproach';
import FAQ from '../components/FAQ';
import FeatureSection from '../components/FeatureSection';

/**
 * 1. INTERACTIVE ASSESSMENT COMPONENT
 */
const AssessmentQuiz = () => {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const questions = [
    {
      title: "How have you been feeling lately?",
      options: ["Overwhelmed or anxious", "Stuck in relationships", "Burned out", "Seeking clarity"]
    },
    {
      title: "What is your main wellness goal?",
      options: ["Reduce anxiety", "Improve communication", "Healthy coping", "Inner calm"]
    },
    {
      title: "Preferred consultation format?",
      options: ["Secure Video", "In-Person Clinic", "Flexible Hybrid"]
    }
  ];

  if (complete) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 bg-teal-100 text-[#0a7272] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-slate-900">We Recommend Individual Therapy</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Based on your answers, starting with a 1-on-1 consultation with a licensed specialist is your best next step.
        </p>
        <Link to="/booking" className="inline-flex items-center gap-2 bg-[#0a7272] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#0d5c5e] transition-all shadow-md">
          <Calendar className="w-5 h-5" />
          Book Recommended Session
        </Link>
        <button 
          onClick={() => { setStep(0); setComplete(false); }}
          className="block w-full text-xs text-slate-400 mt-4 underline"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1 text-[#0a7272] font-bold text-xs uppercase tracking-widest px-3 py-1 bg-teal-50 rounded-full border border-teal-100">
          <Sparkles className="w-3 h-3" /> Interactive Guide
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-slate-900">Not sure where to begin?</h2>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-teal-100 shadow-inner">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm font-semibold text-teal-700">Question {step + 1} of 3</p>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`h-1.5 w-8 rounded-full ${i <= step ? 'bg-teal-500' : 'bg-slate-200'}`} />
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-8 text-slate-800">{questions[step].title}</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {questions[step].options.map((opt, i) => (
            <button 
              key={i}
              onClick={() => step < 2 ? setStep(step + 1) : setComplete(true)}
              className="p-4 bg-white border border-slate-200 rounded-xl text-left hover:border-[#0a7272] hover:bg-teal-50 transition-all group flex justify-between items-center shadow-sm"
            >
              <span className="text-sm font-medium text-slate-700">{opt}</span>
              <ArrowRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 2. FEATURED SERVICES COMPONENT
 */
const FeaturedServices = () => (
  <div>
    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
      <div>
        <h2 className="text-[#0a7272] font-bold text-xs uppercase tracking-widest mb-2">Clinical Services</h2>
        <p className="text-2xl sm:text-3xl font-bold text-slate-900">Tailored support for every chapter</p>
      </div>
      <Link to="/services" className="mt-4 md:mt-0 text-[#0a7272] font-semibold text-sm flex items-center gap-1 hover:underline">
        View All Services <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SERVICES.slice(0, 3).map((svc) => (
        <div key={svc.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-teal-50">
               <Activity className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">{svc.title}</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">{svc.shortDesc}</p>
          </div>
          <Link to={`/booking?service=${svc.id}`} className="text-[#0a7272] text-sm font-bold flex items-center gap-1 group">
            Book Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

/**
 * 3. TESTIMONIALS COMPONENT
 */
const TestimonialsSection = () => (
  <div>
    <div className="text-center mb-12">
      <h2 className="text-[#0a7272] font-bold text-xs uppercase tracking-widest mb-2">Real Stories</h2>
      <p className="text-2xl sm:text-3xl font-bold text-slate-900">Compassionate care that makes a difference</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TESTIMONIALS.map((item) => (
        <div key={item.id} className="flex flex-col h-full bg-slate-50/50 p-6 rounded-2xl">
          <div className="flex text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <p className="italic text-slate-700 text-sm leading-relaxed mb-6 flex-grow">"{item.comment}"</p>
          <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
            <img src={item.avatar} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
            <div>
              <p className="text-xs font-bold text-slate-900">{item.clientName}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{item.serviceUsed}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * MAIN HOME COMPONENT
 */
const Home = () => {
  // Define sections with simple IDs for the loop
  const sections = [
    { component: WhatWeDo, id: 'what-we-do' },
    { component: AssessmentQuiz, id: 'quiz' },
    { component: FeaturedServices, id: 'services' },
    { component: LanguageSupport, id: 'languages' },
    { component: FeatureSection, id: 'features' },
    { component: TherapyApproach, id: 'approach' },
    { component: TestimonialsSection, id: 'testimonials' },
    { component: FoundersNote, id: 'founders' },
    { component: FAQ, id: 'faq' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FBFEFD] via-[#F8FCFB] to-[#F2F8F7] text-[#1f3a3d] font-sans">
      
      {/* Hero Header */}
      <Hero1 />

      {/* Main Content Stack */}
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10 lg:space-y-16">
          {sections.map((sec, index) => (
            <motion.section
              key={sec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-[28px] bg-white p-8 sm:p-10 lg:p-14 shadow-xl shadow-teal-900/5 border border-teal-50/50"
            >
              <sec.component />
            </motion.section>
          ))}
        </div>
      </div>

      {/* Final Action Banner */}
      <div className="max-w-screen-xl mx-auto px-4 pb-24 mt-8">
        <div className="bg-[#0a7272] rounded-[40px] p-10 sm:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">Begin your journey to wellness.</h2>
            <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for individual therapy, couples counseling, or stress resilience, 
              we're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking" 
                className="bg-white text-[#0a7272] px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-lg"
              >
                Book Your First Session
              </Link>
              <Link 
                to="/contact" 
                className="bg-teal-800/40 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-800/60 transition-all"
              >
                Ask a Question
              </Link>
            </div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full -ml-20 -mb-20 blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;