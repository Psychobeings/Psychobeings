import React from "react";

const Section2 = ({heading, content, image}) => {
  return (
    <section className="w-full bg-gradient-to-r from-light-blue to-light-green py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image with Hover Effect */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300">
            <img
              src={image}
              alt="Mental health illustration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-3xl md:text-4xl font-bold text-dark-gunmetal">
              {heading}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
