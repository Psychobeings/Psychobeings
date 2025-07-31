import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TherapyApproach() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true),100);
    return () => clearTimeout(timer);
  }, []);

  const approaches = [
    {
      id: 1,
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based approach focusing on identifying and changing negative thought patterns",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Mindfulness-Based Practices",
      description: "Cultivating present-moment awareness and emotional regulation through mindful techniques",
      icon: "🧘"
    },
    {
      id: 3,
      title: "Eclectic Approach",
      description: "Integrating multiple therapeutic methods tailored to your specific needs and preferences",
      icon: "⚖️"
    },
    {
      id: 4,
      title: "Narrative Therapy",
      description: "Helping you rewrite your personal story and discover your strengths and values",
      icon: "📖"
    }
  ];

  return (
 <section className="relative bg-gradient-to-br from-gray-50 via-white to-slate-100 pt-32 pb-20 px-6 md:px-12 lg:px-20 text-gray-800 ">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-[#097f7f]">
              Our Approach to Therapy
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-gray-600 font-light">
            We use a flexible, client-centered approach tailored to your unique needs
          </p>
        </div>

        {/* Therapy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div
              key={approach.id}
              className={`group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-teal-200 transition-all duration-500 cursor-pointer transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            //   style={{ transitionDelay: `${100 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(approach.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-100 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-4xl bg-gradient-to-br from-teal-100 to-teal-200 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {approach.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                      {approach.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {approach.description}
                </p>

                {/* Hover indicator */}
                <div className={`mt-4 h-0.5 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-300 ${hoveredCard === approach.id ? 'w-16' : 'w-8'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center space-y-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-600">
              Each session is designed to support your growth, healing, and emotional well-being through personalized care and evidence-based techniques.
            </p>
          </div>

          {/* Enhanced CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services" className="inline-block">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Book a Session</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            </Link>
          </div>

        
        </div>
      </div>
    </section>
  );
}

