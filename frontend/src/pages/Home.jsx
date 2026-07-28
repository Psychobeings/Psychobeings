import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { 
  Calendar, ArrowRight, CheckCircle2, 
  Star, Activity, Sparkles
} from 'lucide-react';

// Components from your existing project
import Hero1 from '../components/Hero1';
import WhatWeDo from '../components/WhatWeDo';
import LanguageSupport from '../components/LanguageSupport';
import FoundersNote from '../components/FoundersNote';
import TherapyApproach from '../components/TherapyApproach';
import FAQ from '../components/FAQ';
import FeatureSection from '../components/FeatureSection';

// Mock Data included directly to prevent "File Not Found" errors
const SERVICES = [
  { id: 'individual', title: 'Individual Therapy', shortDesc: 'Personalized 1-on-1 sessions to navigate life challenges.', category: 'Clinical' },
  { id: 'couples', title: 'Couples Counseling', shortDesc: 'Improve communication and rebuild trust with your partner.', category: 'Clinical' },
  { id: 'stress', title: 'Stress Resilience', shortDesc: 'Evidence-based tools to manage burnout and anxiety.', category: 'Wellness' },
];

const TESTIMONIALS = [
  { id: 1, clientName: 'Sarah J.', comment: 'Finding this practice was a turning point for my mental health.', serviceUsed: 'Individual Therapy', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 2, clientName: 'Michael K.', comment: 'The hybrid approach worked perfectly for my busy schedule.', serviceUsed: 'Stress Management', avatar: 'https://i.pravatar.cc/150?u=mike' },
  { id: 3, clientName: 'Elena R.', comment: 'A truly safe, non-judgmental environment for growth.', serviceUsed: 'Couples Therapy', avatar: 'https://i.pravatar.cc/150?u=elena' },
];

const AssessmentQuiz = () => {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const questions = [
    { title: "How have you been feeling lately?", options: ["Overwhelmed", "Stuck", "Burned out", "Seeking clarity"] },
    { title: "What is your main wellness goal?", options: ["Anxiety Relief", "Communication", "Coping Skills", "Inner Calm"] },
    { title: "Preferred consultation format?", options: ["Video Call", "In-Person", "Hybrid"] }
  ];

  if (complete) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="w-12 h-12 text-[#0a7272] mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">We Recommend Individual Therapy</h3>
        <p className="text-slate-600 mb-6">Based on your answers, a 1-on-1 session is your best next step.</p>
        <Link to="/booking" className="bg-[#0a7272] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0d5c5e] transition inline-block">
          Book Session
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-[#0a7272] font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Interactive Guide</span>
        <h3 className="text-2xl font-bold mt-4">{questions[step].title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {questions[step].options.map((opt, i) => (
          <button key={i} onClick={() => step < 2 ? setStep(step + 1) : setComplete(true)} className="p-4 bg-white border border-slate-200 rounded-xl text-left hover:bg-teal-50 transition flex justify-between items-center group">
            <span className="text-sm font-medium">{opt}</span>
            <ArrowRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const sections = [
    { component: WhatWeDo, id: 'what' },
    { component: AssessmentQuiz, id: 'quiz' },
    { component: FeatureSection, id: 'feat' },
    { component: LanguageSupport, id: 'lang' },
    { component: TherapyApproach, id: 'approach' },
    { component: FoundersNote, id: 'note' },
    { component: FAQ, id: 'faq' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FBFEFD] via-[#F8FCFB] to-[#F2F8F7] text-[#1f3a3d]">
      <Hero1 />
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {sections.map((sec, index) => (
            <motion.section
              key={sec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[28px] bg-white p-8 lg:p-12 shadow-lg border border-teal-50"
            >
              <sec.component />
            </motion.section>
          ))}
        </div>
      </div>

      {/* Final Banner */}
      <div className="max-w-screen-xl mx-auto px-4 pb-20">
        <div className="bg-[#0a7272] rounded-[32px] p-10 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to find your inner peace?</h2>
          <Link to="/booking" className="bg-white text-[#0a7272] px-10 py-4 rounded-full font-bold inline-block hover:bg-teal-50 transition mt-4">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;