import React, { useState } from 'react';
import axios from 'axios';

const SessionBookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    concern: '',
  });

  const inputStyles = "w-full px-4 py-2.5 rounded-md border border-gray-200 focus:border-deep-mint focus:ring-1 focus:ring-deep-mint focus:outline-none text-dark-gunmetal placeholder-gray-400 transition-colors duration-200";
  const labelStyles = "block text-sm font-medium text-dark-gunmetal mb-1.5";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "date") console.log(typeof(value));
    
    console.log(name, value)
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:8080/session-form/register', formData);
      alert(response.data.message);
      if (onSubmit) onSubmit(response.data.session);
    } catch (error) {
      alert("Failed to book appointment. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <h2 className="text-lg sm:text-xl font-semibold text-dark-gunmetal mb-6 text-center">Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Example Field */}
        <div className="w-full">
          <label htmlFor="name" className={labelStyles}>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
        {/* Other Fields */}
        
        {/* Email */}
        <div className="w-full">
          <label htmlFor="email" className={labelStyles}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        {/* Phone Number */}
        <div className="w-full">
          <label htmlFor="phone" className={labelStyles}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        {/* Date */}
        <div className="w-full">
          <label htmlFor="date" className={labelStyles}>Date of Appointment</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        {/* Time Slot */}
        <div className="w-full">
          <label htmlFor="timeSlot" className={labelStyles}>Time Slot</label>
          <select
            id="timeSlot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className={inputStyles}
          >
            <option value="">Select Time Slot</option>
            <option value="morning">Morning (10 AM - 1 PM)</option>
            <option value="evening">Evening (2 PM - 5 PM)</option>
          </select>
        </div>

        {/* Concerns */}
        <div className="w-full">
          <label htmlFor="concern" className={labelStyles}>Concerns</label>
          <select
            id="concern"
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className={inputStyles}
          >
            <option value="">Select Concern</option>
            <option value="concern1">Concern 1</option>
            <option value="concern2">Concern 2</option>
            <option value="concern3">Concern 3</option>
            <option value="concern4">Concern 4</option>
            <option value="concern5">Concern 5</option>
          </select>
        </div>

        <button type="submit" className="w-full sm:w-auto px-6 py-2.5 bg-deep-mint text-pure-white font-medium rounded-md hover:bg-light-deep-mint transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-mint focus:ring-opacity-50">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default SessionBookingForm;
