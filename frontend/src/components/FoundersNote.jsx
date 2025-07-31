import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import foundersimage from '../assets/foundersimage.png';

export default function FoundersNote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal-600 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-teal-400 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header with enhanced styling */}
        <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#097f7f]">
              Founder's Note
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto mt-4 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A personal message from the heart of Psychobeings
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 items-center">
          {/* Left: Enhanced Founder Info */}
          <div className={`text-center justify-self-center lg:text-left space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src={foundersimage}
                alt="Founder"
                className="relative w-56 h-56 mx-auto lg:mx-0 rounded-full object-cover shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-gray-800">Amanpreet kaur</h3>
              <div className="space-y-2">
                <p className="text-teal-600 font-semibold text-lg">Founder, Psychobeings</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    Psychologist
                  </span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                  Clinical Psychologist (M.Sc.) 
                  </span>
                </div>
              </div>
            </div>

            {/* Quote decoration */}
            <div className="relative pt-6">
              <div className="absolute top-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600"></div>
            </div>
          </div>

          {/* Right: Enhanced Note with better typography */}
          <div className={`space-y-6 justify-self-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Large opening quote */}
              <div className="absolute -top-4 -left-4 text-6xl text-teal-200 font-serif">"</div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed pl-8">
                <p className="text-xl font-medium text-gray-800">
                  When I started <span className="font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Psychobeings</span>, I envisioned a space where mental health support felt human, accessible, and stigma-free.
                </p>
                
                <p>
                  As someone deeply rooted in psychology and mental wellness, I've witnessed the transformative power of therapy when offered with compassion and authenticity.
                </p>
                
                <div className="relative pl-4 border-l-4 border-teal-300 bg-teal-50 py-4 rounded-r-lg">
                  <p className="italic">
                    <span className="font-semibold text-teal-700">Psychobeings</span> isn't just a service—it's a commitment to helping individuals feel heard, valued, and empowered.
                  </p>
                </div>
                
                <p>
                  Whether you're a student, a young adult, or simply someone looking for clarity, know that <span className="font-semibold text-teal-600">you're not alone</span>.
                </p>
                
                <div className="relative">
                  <p className="text-lg font-medium text-gray-800">
                    Thank you for trusting us with your journey. We're here to walk beside you every step of the way.
                  </p>
                  
                  {/* Signature line */}
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="w-16 h-0.5 bg-teal-400"></div>
                    <span className="text-teal-600 font-semibold">With gratitude</span>
                  </div>
                  
                  {/* About Us Button */}
                  <div className="mt-8">
                    <Link to="/about" className="inline-block">
                    <button className="group relative px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                      <span className="relative z-10">Learn More About Us</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Closing quote */}
              <div className="absolute -bottom-4 right-0 text-6xl text-teal-200 font-serif">"</div>
            </div>
          </div>
        </div>

   
      </div>
    </section>
  );
}