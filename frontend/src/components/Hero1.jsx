import React from 'react';
import { Link } from 'react-router-dom';

function Hero1() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6" 
      style={{ backgroundColor: "#097f7f" }}
    >
      <div className="max-w-3xl text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-50 relative inline-block animate-slide-up">
          We're truly glad you're here.
          <span className="block h-1 w-16  bg-dark-gunmetal mt-2 mx-auto rounded shadow-sm"></span>
        </h1>

        <p 
          className="text-lg md:text-xl text-teal-50 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Seeking support is a courageous step, and we're honoured to walk alongside you.
          Whether you're looking for therapy, guidance, or simply a safe space to reflect
          you're in the right place.
        </p>

        <p 
          className="text-lg md:text-xl text-teal-100 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          Our compassionate team is here to support you with care, respect, and confidentiality.
        </p>

        <p 
          className="text-lg md:text-xl text-cyan-100 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.7s' }}
        >
          Let's begin your journey of healing and growth, together.
        </p>
        <Link to="/services">
     <button
  className="mt-6 px-8 py-4 rounded-full bg-white text-teal-800 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-dark-gunmetal hover:text-white hover:border-teal-700 active:scale-95 animate-slide-up border-2 border-transparent"
  style={{ animationDelay: '0.9s' }}
>
  Book a Session
</button>

        </Link>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}

export default Hero1;