import React, { useEffect } from 'react';
import ComingSoonGif from '../assets/coming-soon.gif'

const ComingSoon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative w-full h-screen">
      {/* GIF Section */}
      <img 
        src={ComingSoonGif} 
        alt="Coming Soon" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Text Section */}
      <div className="absolute top-4 w-full text-center">
        <h1 className="text-dark-gray text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
