import React from 'react';
import { Link } from 'react-router-dom';
import Psychobeingslogo from '../assets/Psychobeingslogo.png';

const Hero = () => {
  return (
    <section className="relative bg-off-white overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-dark-gunmetal">More Than Therapy. </span>
              <span className="text-[#097f7f]">A Journey Towards Wellbeing.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-6">
              At Psychobeings, we believe that mental wellbeing is not simply about overcoming challenges—it's about discovering your strengths, building resilience, and creating a life that feels meaningful and balanced.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
              Our goal is to create a therapeutic space where every individual feels respected, understood, and empowered to grow. Through evidence-based psychological care, we help you navigate life's complexities with greater clarity, confidence, and emotional wellbeing.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
              Whether you're seeking support during a difficult time or investing in your personal growth, we're committed to walking alongside you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mt-8">
              <Link to="/services">
                <button className="px-6 py-2 rounded-full bg-[#092c2c] text-white font-medium hover:bg-[#064646] transition">
                  Explore Services
                </button>
              </Link>
              <Link to="/booking">
                <button className="px-6 py-2 rounded-full bg-[#092c2c] text-white font-medium hover:bg-[#064646] transition">
                  Book a Session
                </button>
              </Link>
              <Link to="/about">
                <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative w-full h-auto">
              {/* Changed src from logo2 to Psychobeingslogo */}
              <img
                src={Psychobeingslogo}
                alt="Psychobeings Logo"
                className="w-full h-auto object-cover object-center rounded-md sm:block hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;