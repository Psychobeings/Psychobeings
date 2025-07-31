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
              <span className="text-[#097f7f]">beings</span>
            </h1>
           <p className="text-lg sm:text-xl md:text-2xl text-[#097f7f] italic font-serif tracking-wide mb-4">
  "Open Doors, Open Hearts"
</p>

            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-8">
              Feeling Overwhelmed and or need guidance or Just Looking for Someone to Talk To?
            </p>
            <p className="text-base sm:text-lg md:text-xl  text-gray-600 mb-8">
            No matter who you are or where you're coming from, this is a safe, inclusive, and non-judgmental space for you. We honor your story, your struggles, and your strength. You deserve support, healing, and growth and we’re here to help you find it.
            </p>
   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mt-8">
  <Link to="/services">
    <button className="px-6 py-2 rounded-full bg-[#092c2c] text-white font-medium hover:bg-[#064646] transition">
      Explore Services
    </button>
  </Link>
  <Link to="/services">
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
              <img
                src={logo2}
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
