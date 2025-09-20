import React, { useEffect, useState } from 'react';
import pricing1 from '../assets/pricing1.png';
import pricing2 from '../assets/pricing2.png';
import { cardsData, featuresData } from '../components/ServicesCardData';
import { Link } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import BookingGuide from '../components/BookingGuide';

const Services = () => {
  const [activeButton, setActiveButton] = useState('Individual');
  const [coupon, setCoupon] = useState('HAPPYPHYCO10');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="">

      {/* Therapy Cards Section */}
      <LandingPage />
      <BookingGuide />
      {/* <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-2">
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
            {/* <div className="flex items-center justify-center mb-2">
              <span className="text-yellow-500">&#9733;</span>
              <span className="text-gray-800 ml-1">{card.rating}</span>
            </div> */}
            {/* <p className="text-green-600 font-semibold mb-4 text-xl">Price: {card.price}</p>
            <div className="flex space-x-2">
              <Link to={`/${card.url}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Book Now
                </button>
              </Link>
              <Link to={`/services/${card.id}`}>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        ))}
      {/* </div> */}

      {/* Feature Section */}
      <div className="mt-20 text-center">
    <h2 className="text-3xl font-bold mb-8">We value your privacy</h2>
    
    {/* Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuresData.map((feature) => (
            <div 
                key={feature.id} 
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md min-h-[250px] justify-between"
            >
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.subtitle}</p>
            </div>
        ))}
    </div>
</div>
    </div>
  );
};

export default Services;