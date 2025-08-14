import React from 'react';
import vision from '../../assets/vission.png'; // Adjust the path as necessary

// Using a placeholder image since we can't import external assets

export default function OurVision() {
  return (
    <section className="bg-[#097f7f] py-12 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Our Vision
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white/90">
            We envision a community where mental health is prioritised, with society acknowledging 
            the significance of psychological and mental well-being. Aspiring for acceptance of 
            people suffering from mental health conditions, rather than stigmatising and excluding 
            them. We aim to inspire growth, self-awareness and overall well-being by equipping 
            individuals with the necessary tools in order to maximise their potentials.
          </p>
        </div>

        {/* RIGHT: Illustration */}
        <div className="flex justify-center">
          <img
            src={vision}
            alt="Vision and Mission Illustration"
            className="w-full max-w-md h-auto object-cover rounded-lg "
          />
        </div>
      </div>
    </section>
  );
}