import React, { useState } from 'react';
import Contectimg from '../assets/contectSvg.png'
const Contact = ({ onClose }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onClosecontect = () => {
    onClose();
    setIsContactOpen(!isContactOpen);  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    onClosecontect();
    
  };

  return (
    <div className="fixed inset-0 flex items-center p-5 justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full sm:w-3/4 md:w-1/2 mx-auto bg-green-100 rounded-lg shadow-lg p-6 md:flex">
        {/* Close Button */}
        <button 
          onClick={onClosecontect} 
          className="absolute text-4xl top-0 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Form Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4" onSubmit={handlesubmit}>
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <img
            src={Contectimg}// Replace with your image URL
            alt="Contact Illustration"
            className="w-9/4 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
