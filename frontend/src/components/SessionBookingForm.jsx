import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const SessionBookingForm = ({ onSubmit }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    concern: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const inputStyles =
    "w-full px-4 py-2.5 rounded-md border border-gray-200 focus:border-deep-mint focus:ring-1 focus:ring-deep-mint focus:outline-none text-dark-gunmetal placeholder-gray-400 transition-colors duration-200";
  const labelStyles = "block text-sm font-medium text-dark-gunmetal mb-1.5";
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/session-form/register`,
        formData
      );
      toast.success(
        "Appointment booked successfully! We will notify you about the timings..!"
      );

      if (onSubmit) onSubmit(response.data.session);

      setFormData(initialFormData);
      navigate("/services");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to book the appointment."
      );
      console.log(error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 shadow-custom rounded-xl">
      <div className="w-full max-w-2xl mx-auto mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-dark-gunmetal mb-6 text-center">
          Book Your Appointment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
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
              min={today} // Prevent selection of past dates
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
            <label htmlFor="concern" className={labelStyles}>Your Concerns</label>
            <textarea
              id="concern"
              name="concern"
              placeholder="Briefly describe your concerns..."
              value={formData.concern}
              onChange={handleChange}
              rows="4"
              className={`${inputStyles} resize-none`}
            />
          </div>

          <button
            type="submit"
            className={`w-full sm:w-auto px-6 py-2.5 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-deep-mint text-pure-white hover:bg-light-deep-mint"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center space-x-2">
                <span className="loader border-white border-2 w-4 h-4 rounded-full animate-spin"></span>
                <span>Booking...</span>
              </span>
            ) : (
              "Book Appointment"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SessionBookingForm;
