import { Link } from "react-router-dom";
import React from "react";

function ContactUS() {
  return (
    <div className="flex justify-center">
      <Link to="/contact">
        <button
          type="button"
          className="group relative px-10 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          {/* Text and arrow */}
          <span className="relative z-10 flex items-center space-x-2">
            <span>Contact Us</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200 ease-out">
              →
            </span>
          </span>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        </Link>
      
    </div>
  );
}

export default ContactUS;
