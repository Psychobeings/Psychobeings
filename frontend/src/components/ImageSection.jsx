import React from 'react';
import ImageElement from '../assets/ImageElement.png';

const ImageSection = () => {
  return (
    <div className="relative w-full flex justify-center overflow-hidden py-10">
      {/* Hemispherical gradient background */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full bg-deep-mint-gradient opacity-30"
        style={{ height: '50vw', width: '100vw', top: '-25vw', borderRadius: '50%' }}
      ></div>
      
      {/* Image with centered alignment and 80% width */}
      <div className="relative w-4/5 max-w-screen-lg">
        <img
          src={ImageElement}
          alt="Background"
          className="w-full h-auto mx-auto"
        />
        
        {/* Centered text overlay with responsive text size */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-dark-gunmetal text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center px-4">
            We are here to understand 
            <br />
            when the world falls silent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
