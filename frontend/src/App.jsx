import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SessionBookingForm from './components/SessionBookingForm';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/individual-therapy" element={<SessionBookingForm />} />
          <Route path="/couples-therapy" element={<SessionBookingForm />} />
          <Route path="/family-therapy" element={<SessionBookingForm />} />
          <Route path="/group-therapy" element={<SessionBookingForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
