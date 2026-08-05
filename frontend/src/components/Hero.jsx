import React from 'react';
import { Link } from 'react-router-dom';
import Psychobeingslogo from '../assets/Psychobeingslogo.png';

const Hero = () => {
  return (
    <section className="relative bg-off-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#097f7f] font-semibold tracking-wider uppercase text-sm mb-2 block">
           Why Psychobeings?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-gunmetal leading-tight mb-6">
            More Than Therapy. <br />
            <span className="text-[#097f7f]">A Space to Heal, Grow, and Thrive.</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At Psychobeings, we believe therapy is more than addressing challenges—it's about creating lasting emotional well-being and helping you build a life that feels meaningful and fulfilling.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Narrative Content & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We offer a safe, confidential, and non-judgmental space where you can explore your thoughts, emotions, and experiences at your own pace. Every individual's journey is unique, which is why our approach is personalised, evidence-based, and centred around your goals.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Whether you're navigating anxiety, stress, self-doubt, relationship concerns, life transitions, or simply seeking greater self-awareness, we're here to support you with compassion, understanding, and practical tools for lasting growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/booking">
                <button className="px-6 py-3 rounded-full bg-[#092c2c] text-white font-semibold hover:bg-[#064646] transition-all shadow-md">
                  Book a Session
                </button>
              </Link>
              <Link to="/services">
                <button className="px-6 py-3 rounded-full bg-[#097f7f] text-white font-semibold hover:bg-[#076666] transition-all shadow-md">
                  Explore Services
                </button>
              </Link>
              <Link to="/about">
                <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition-all">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#097f7f] to-[#092c2c] rounded-2xl opacity-20 blur-md"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
                <img
                  src={Psychobeingslogo}
                  alt="Psychobeings Logo"
                  className="w-full h-auto object-contain rounded-lg max-h-64"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Feature Cards Grid: Why Choose Psychobeings? */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-dark-gunmetal text-center mb-10">
            Why Choose Psychobeings?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">🌿</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">A Safe & Confidential Space</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Feel heard without fear of judgment in an environment built on trust, empathy, and respect.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">🧠</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Evidence-Based Therapy</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our sessions integrate scientifically supported therapeutic approaches tailored to your unique needs and goals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">💙</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Personalised Care</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                No two individuals are alike. Every therapy plan is thoughtfully designed to support your personal journey.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">🤝</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Collaborative Approach</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Therapy is a partnership. We work alongside you to help you understand your emotions, develop healthier coping strategies, and create meaningful change.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
              <div className="text-2xl mb-3">🌱</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Growth Beyond the Session</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our focus extends beyond symptom relief—we aim to empower you with skills, resilience, and confidence that support your long-term well-being.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Banner */}
        <div className="mt-16 bg-[#092c2c] text-white p-8 md:p-10 rounded-2xl shadow-lg text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg font-medium leading-relaxed">
            At Psychobeings, we don't believe in simply helping you cope—we believe in helping you understand yourself, strengthen your resilience, and create meaningful, lasting change. Every step of your journey is met with compassion, professionalism, and a commitment to helping you become the healthiest version of yourself.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;