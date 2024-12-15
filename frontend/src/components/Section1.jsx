import React from "react";

const Section1 = ({ heading, content, image }) => {
  return (
    <section className="relative bg-mint-cream-light from-light-blue to-light-green py-10 md:py-10 shadow-xl rounded-2xl max-w-[calc(100%-2cm)] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-3xl md:text-4xl font-bold text-dark-gunmetal">
              {heading}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">{content}</p>
          </div>

          {/* Image with Hover Effect */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300">
            <img
              src={image}
              alt="Mental health illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
