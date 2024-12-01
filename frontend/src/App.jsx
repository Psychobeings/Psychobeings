import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SessionBookingForm from './components/SessionBookingForm';
import ComingSoon from './components/ComingSoon';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  return (
    <Router>
      <div className="container mx-auto">
        <Navbar onContactClick={openContactModal} />
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/individual-therapy" element={<SessionBookingForm />} />
          <Route path="/couples-therapy" element={<SessionBookingForm />} />
          <Route path="/family-therapy" element={<ComingSoon />} />
          <Route path="/group-therapy" element={<ComingSoon />} />
        </Routes>
      </div>
      <Footer />

      {/* Contact Modal */}
      {/* {isContactOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" 
              onClick={closeContactModal}
            >
              &times;
            </button> */}
            {isContactOpen && <Contact onClose={closeContactModal} />}
          {/* </div>
        </div>
      )} */}
    </Router>
  );
}

export default App;
