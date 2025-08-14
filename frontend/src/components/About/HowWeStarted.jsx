import { useState, useEffect } from 'react';
import { Heart, Users, Lightbulb, Star, Quote } from 'lucide-react';

export default function HowWeStarted() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#097f7f] mb-6">
    How We Started
  </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-1 bg-[#097f7f]"></div>
              <div className="bg-[#097f7f] text-white px-8 py-3 rounded-full font-bold text-2xl">
                2023
              </div>
              <div className="w-16 h-1 bg-[#097f7f]"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The journey of creating meaningful mental health support that feels safe, warm, and human.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Story Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story Text */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#097f7f] mb-6">The Beginning</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Psychobeings was born during a deeply reflective phase of my life, while pursuing my 
                <span className="font-semibold text-[#097f7f]"> postgraduation in Clinical Psychology at CMR University, Bangalore</span>.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                After years of academic learning, hands-on experiences, and personal moments that shaped my connection to this field, I realized that mental health support often feels distant, clinical, or out of reach, especially for young people navigating silent battles.
              </p>

              <div className="bg-[#097f7f] text-white p-6 rounded-xl">
                <p className="text-lg font-medium">
                  I didn't just want to practice psychology. I wanted to build something meaningful — something that felt safe, warm, and human.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-200">
              <div className="mb-8">
                <Heart className="w-24 h-24 text-[#097f7f] mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-black mb-4">Psychobeings</h3>
                <p className="text-gray-600 text-lg">
                  Not just an initiative, but an extension of everything I believe in
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-left">
                  <div className="w-3 h-3 bg-[#097f7f] rounded-full mr-4"></div>
                  <span className="text-gray-700">Born from reflection and purpose</span>
                </div>
                <div className="flex items-center text-left">
                  <div className="w-3 h-3 bg-[#097f7f] rounded-full mr-4"></div>
                  <span className="text-gray-700">Grounded in academic excellence</span>
                </div>
                <div className="flex items-center text-left">
                  <div className="w-3 h-3 bg-[#097f7f] rounded-full mr-4"></div>
                  <span className="text-gray-700">Designed for young minds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Beliefs Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#097f7f] mb-6">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three fundamental beliefs that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#097f7f] h-full">
                <div className="text-center">
                  <div className="bg-gray-50 group-hover:bg-[#097f7f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <Users className="w-10 h-10 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Everyone Deserves to be Heard</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every voice matters, every story is valid, and every person deserves compassionate listening without judgment.
                  </p>
                </div>
              </div>
            </div>

            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#097f7f] h-full">
                <div className="text-center">
                  <div className="bg-gray-50 group-hover:bg-[#097f7f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <Lightbulb className="w-10 h-10 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Growth Takes Time</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Healing is not linear. Progress happens at different paces, and we honor each person's unique journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#097f7f] h-full">
                <div className="text-center">
                  <div className="bg-gray-50 group-hover:bg-[#097f7f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <Star className="w-10 h-10 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Healing Should Never be a Privilege</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mental health support should be accessible, approachable, and available to everyone, regardless of background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Quote */}
        <div className="bg-[#097f7f] rounded-3xl p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <Quote className="w-16 h-16 text-white mx-auto mb-8" />
            <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8">
              "That everyone deserves to feel heard. That growth takes time. And that healing should never feel like a privilege."
            </blockquote>
            <div className="w-24 h-1 bg-[#097f7f] mx-auto rounded-full"></div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#097f7f] opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#097f7f] opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>
        </div>

        {/* Closing Section */}
        <div className="text-center mt-20">
          <p className="text-2xl text-gray-600 font-light italic max-w-3xl mx-auto leading-relaxed">
            This is more than a story — it's a promise to create spaces where healing feels human, 
            accessible, and filled with genuine care.
          </p>
        </div>
      </div>
    </div>
  );
}