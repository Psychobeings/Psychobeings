import React, { useState } from 'react';
import pricing1 from '../assets/pricing1.png';
import pricing2 from '../assets/pricing2.png';
import { cardsData, featuresData } from '../components/ServicesCardData';

const Services = () => {
  const [activeButton, setActiveButton] = useState('Individual');
  const [coupon, setCoupon] = useState('HAPPYPHYCO10');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('HAPPYLIFE10');
    setCoupon('Copied...');
    setIsCopied(true); // Set isCopied to true to trigger animation

    setTimeout(() => {
      setCoupon('HAPPYPHYCO10');
      setIsCopied(false); // Reset isCopied after animation
    }, 2000);
  };

  return (
    <div className="p-6 md:p-8 max-w-screen-xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-screen mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:space-x-6">
          {/* Left Image */}
          <div className="w-full md:w-1/3 p-4">
            <img
              src={pricing2}
              alt="Meditation Illustration"
              className="w-full h-auto rounded-lg transform transition-transform hover:scale-105 duration-500"
            />
          </div>

          {/* Center Content */}
          <div className="w-full md:w-1/3 text-center p-4 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-2">UNLOCK YOUR WELLBEING NOW</h2>
            <p className="text-lg text-blue-600 mb-4">Get 10% Off All Therapy Plans!</p>
            <div
              className={`text-lg cursor-pointer font-semibold bg-gray-100 px-4 py-2 inline-block rounded-md border-dotted border-2 border-green-500 transition-transform ${
                isCopied ? 'animate-pulse bg-green-100 scale-105' : ''
              }`}
              onClick={handleCopy}
            >
              {coupon}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/3 p-4">
            <img
              src={pricing1}
              alt="Therapy Session Illustration"
              className="w-full h-auto rounded-lg transform transition-transform hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>

      {/* Therapy Cards Section */}
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-2">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 text-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full sm:h-40 lg:h-80 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-2">{card.description}</p>
            <div className="flex items-center justify-center mb-2">
              <span className="text-yellow-500">&#9733;</span>
              <span className="text-gray-800 ml-1">{card.rating}</span>
            </div>
            <p className="text-blue-600 font-semibold mb-4">{card.price}</p>
            <div className="flex space-x-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Book Now
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Section */}
      <div className="mt-20 flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center">
          {featuresData.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg max-w-xs text-center">
              <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
