import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';

const Hero = () => {
  return (
    <section className="relative bg-off-white overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4">
              <span className="text-dark-gunmetal">Psycho</span>
              <span className="text-deep-mint">beings</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-4">
            Redefining mental health. One mind at a time.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
            Your mental well-being matters. Here, we create a safe space to explore, heal, and grow. Whether you're seeking guidance, support, or tools to navigate life's challenges, we’re here to walk with you every step of the way. Prioritize yourself today—because peace of mind is where true strength begins.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services">
                <button className="w-full sm:w-auto bg-dark-gunmetal text-off-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                  Explore Services
                </button>
              </Link>
              <Link to="/about">
                <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-mint-cream transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative w-full h-0 pb-[75%] lg:pb-[66.66%]">
              <div className="absolute inset-0 overflow-hidden rounded-md hidden md:block">
                <img
                  src={logo2}
                  alt="Psychobeings Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
