import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../Assets/logo.png";
import {VerifiedIcon, TimerResetIcon} from 'lucide-react'

const Header = () => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: '',
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState(false); // true for Approved, false for Pending
  const location = useLocation();
  const navigate = useNavigate();

  

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("clicked");
  
    const queryParams = new URLSearchParams(location.search);
    if (searchParams.name) queryParams.set("name", searchParams.name);
    else queryParams.delete('name');
    if (searchParams.phone) queryParams.set("phone", searchParams.phone);
    else queryParams.delete('phone');
    if (searchParams.date) queryParams.set("date", searchParams.date);
    else queryParams.delete('date');
    if (searchParams.timeSlot) queryParams.set("timeSlot", searchParams.timeSlot);
    else queryParams.delete('timeSlot');
    
   
  
    // Push updated query parameters into the URL
    navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (pre) => {
   
      setStatus(pre); // Update state immediately
      const queryParams = new URLSearchParams(location.search);
      queryParams.set('status', pre);
      navigate(`${location.pathname}?${queryParams.toString()}`);
    
  };

  const ClearAll = () => {
    // Remove all search params
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('phone');
    navigate(`${location.pathname}?${queryParams.toString()}`,  { replace: true });
    setSearchParams({ name: '', phone: '', date: '', timeSlot: '' }); // Clear state
  };
  

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-4 border-b border-2">
        {/* Logo */}
        <div className="flex items-center">
          <img width="70%" src={logo} alt="Psychobeings" />
        </div>

        {/* Hamburger Button for small screens */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          ☰
        </button>

        {/* Search Form (Visible on large screens) */}
        <form className="hidden lg:flex gap-4" onSubmit={handleSearch}>
          <input
            type="text"
            name="name"
            value={searchParams.name}
            onChange={handleChange}
            placeholder="Name"
            className="px-2 py-1 border rounded"
          />
          <input
            type="text"
            name="phone"
            value={searchParams.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="px-2 py-1 border rounded"
          />
          <input
            type="date"
            name="date"
            value={searchParams.date}
            onChange={handleChange}
            className="px-2 py-1 border rounded"
          />
          <select
            name="timeSlot"
            value={searchParams.timeSlot}
            onChange={handleChange}
            className="px-2 py-1 border rounded"
          >
            <option value="">Both Sessions</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={ClearAll}
          >
            Clear
          </button>
        </form>
      </div>

      {/* Tabs for Pending/Approved */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mx-auto border-t p-2 space-x-4">
        <button
          onClick={() => handleStatusChange(0)}
          className={`px-4 py-2 flex-1 border-b-2 ${
            !status ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
          }`}
        >
              { <TimerResetIcon size={20} color='orange'/>} <h6>Pending </h6>
        </button>
        <button
          onClick={() => handleStatusChange(1)}
          className={`px-4 py-2 flex-1 border-b-2 ${
            status ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
          }`}
        >
          <h6>Approved </h6>  { <VerifiedIcon size={20} color='green'/>}
        </button>
      </div>

      {/* Side Menu for small screens */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 bg-white p-4 w-80 h-full">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl font-bold text-gray-700 mb-4"
            >
              Close
            </button>
            <form className="flex flex-col gap-4" onSubmit={handleSearch}>
              <input
                type="text"
                name="name"
                value={searchParams.name}
                onChange={handleChange}
                placeholder="Name"
                className="px-2 py-1 border rounded"
              />
              <input
                type="text"
                name="phone"
                value={searchParams.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="px-2 py-1 border rounded"
              />
              <input
                type="date"
                name="date"
                value={searchParams.date}
                onChange={handleChange}
                className="px-2 py-1 border rounded"
              />
              <select
                name="timeSlot"
                value={searchParams.timeSlot}
                onChange={handleChange}
                disabled={!searchParams.date}
                className="px-2 py-1 border rounded"
              >
                <option value="">Select Time Slot</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
              </select>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={handleSearch}
              >
                Search
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={ClearAll}
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
