import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SessionBookingForm from './components/SessionBookingForm';
import ComingSoon from './components/ComingSoon';
import { Toaster } from 'react-hot-toast';
import TherapyDetails from './pages/TherapyDetails';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8fcfc]">
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:therapyId" element={<TherapyDetails />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/individual-therapy" element={<SessionBookingForm />} />
            <Route path="/couples-therapy" element={<SessionBookingForm />} />
            <Route path="/family-therapy" element={<ComingSoon />} />
            <Route path="/group-therapy" element={<ComingSoon />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
