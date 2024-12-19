import React, { useRef, useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, User, CheckCircle2, XCircle, AlertTriangle, KanbanSquare, Mail } from 'lucide-react';
import ConfirmDelete from './ConfirmDelete'
import { BookSession } from './BookSession';
import { Kanban } from 'lucide-react';



const Detailed = ({ isOpen, onCloseDetailed, details }) => {
  const popupRef = useRef(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [booked, setBooked] = useState(0);

  useEffect(() => {
    setBooked(details?.status)
  }, [details])

  // Time slots
  const timeSlots = {
    morning: [
      '10:00 AM - 11:00 AM',
      '11:15 AM - 12:15 PM',
      '12:30 AM - 1:30 PM'
    ],
    evening: [
      '3:00 PM - 4:00 PM',
      '4:15 PM - 5:15 PM',
      '5:30 PM - 6:30 PM'
    ]
  };

  // Close popup with animation
  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onCloseDetailed();
      setIsAnimating(false);
    }, 500);
  };

  // Handle Decline with Confirmation
  const handleDecline = () => {
    setShowConfirmDelete(true);
  };

  // Confirm Delete Function (would typically call an API)

  const handleAccept = () => {
    if (selectedSlot) {

      BookSession(handleClose, details, setError, selectedSlot)
     
    }
  };

  const renderTimeSlots = (slotType) => {
    return timeSlots[slotType]?.map((slot, index) => (
      <div
        key={index}
        className={`
          flex items-center p-3 rounded-lg cursor-pointer
          ${
            slot === details?.sessionTime ?
            'border-green-600 border-2'
            :
            selectedSlot === slot
            ? 'bg-indigo-100 border-2 border-indigo-500'
            : 'hover:bg-gray-100 border border-gray-200'}
          transition-all duration-200 ease-in-out
        `}
        onClick={() => setSelectedSlot(slot)}
      >
        <Clock className="text-indigo-600 mr-3" size={20} />
        <span className="text-base font-medium">{slot}</span>
      </div>
    ));
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`
          fixed inset-0 flex items-center justify-center 
          bg-black bg-opacity-50 z-50 p-6
          ${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}
        `}
      >
        <div
          ref={popupRef}
          className="
            bg-white rounded-2xl shadow-xl relative 
            w-full max-w-md overflow-y-auto
            transform transition-all duration-300 
            scale-100 opacity-100
          "
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="
              absolute top-4 right-4 
              text-gray-500 hover:text-gray-800 
              hover:rotate-90 transition-transform
            "
          >
            <X size={24} />
          </button>

          {/* Popup Content */}
          <div className="p-6">
            {/* Title */}
            <h2 className="
              text-2xl font-bold mb-6 text-center 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-indigo-600 to-purple-600
            ">
              Session Details
            </h2>

            {/* Client Details */}
            <div className="mb-4 bg-gray-50 p-3 rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="text-indigo-600" size={18} />
                  <span className="text-sm font-semibold">{details.name || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-indigo-600" size={18} />
                  <span className="text-sm">{details.phone || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-indigo-600" size={18} />
                  <span className="text-sm"><a href={"mailto: " + details.email}>{details.email || 'N/A'}</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-indigo-600" size={18} />
                  <span className="text-sm">{details.date || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <KanbanSquare className="text-indigo-600" size={18} />
                  <p className="text-sm">{details.concern || 'N/A'}</p>
                </div>
              </div>
            </div>



            <div className="mb-4 ">

              {booked ?
                <div className='flex'>
                <AlertTriangle/>
                <h3 className="text-lg font-semibold mb-3 text-red-800">
                  The session is already booked at {details.sessionTime} on {details.date}!
                </h3>
                
                </div>
                :
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Select a Time Slot
                </h3>

              }


              {details.timeSlot === 'morning' || details.timeSlot === 'evening' ? (
                <div className="space-y-2">
                  {renderTimeSlots(details.timeSlot)}
                </div>
              ) : (
                <p className="text-gray-500 text-center text-sm">
                  No available slots for the selected time.
                </p>
              )}

              {error && <AlertTriangle> {error}</AlertTriangle>}
            </div>

            {/* Action Buttons */}

            <div className="flex space-x-3 mt-4">
              {
                !booked &&

                <button
                  onClick={handleDecline}
                  className="
                  flex-1 flex items-center justify-center
                  px-4 py-2 bg-red-500 text-white 
                  rounded-lg hover:bg-red-600 
                  space-x-2 transition text-sm
                "
                >
                  <XCircle size={16} />
                  <span>Decline</span>
                </button>
              }

              <button
                onClick={handleAccept}
                disabled={!selectedSlot }
                  
                className={`
                  flex-1 flex items-center justify-center
                  px-4 py-2 text-white 
                  rounded-lg space-x-2 transition text-sm
                  ${selectedSlot
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-400 cursor-not-allowed'}
                `}
              >

                <CheckCircle2 size={16} />
                <span>{booked ? "Reschedule" : "Schedule"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Delete Popup */}
      <ConfirmDelete
        isOpen={showConfirmDelete}
        onClose={() => { setShowConfirmDelete(false); }}
        sessionId={details._id}
        sessionName={details.name}

      />
    </>
  );
};

export default Detailed;