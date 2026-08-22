import React, { useRef, useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, User, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import axios from 'axios';
import { input } from '@material-tailwind/react';



const deleteReasons = [
  "Reason 1",
  "Reason 2",
  "Reason 3",
  "Reason 4"
]

// Confirm Delete Popup Component
const ConfirmDelete = ({ isOpen, onClose, sessionId, session, closeDetailed }) => {
  const [inputReason, setinputReason] = useState('');
  const [error, setError] = useState('');

  // Reset input when popup opens
  useEffect(() => {
    if (isOpen) {
      setinputReason(null);
      setError('');
    }
  }, [isOpen]);

  const handleConfirmation = async () => {



    try {
      console.log(inputReason, session)
      const deleted = await axios.post(`${process.env.REACT_APP_URL}session-form/delete`, { inputReason, session })
      console.log(deleted)
      closeDetailed() 
     onClose()
    }
    catch (error) {
      setError('Error deleting session')
    }





    onClose();


  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Confirm Delete Content */}
        <div className="text-center">
          <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
          <h2 className="text-2xl font-bold mb-4 text-red-600">Confirm Deletion</h2>

          <p className="mb-4 text-gray-700">
            You are about to delete the session for <strong>{session.name} </strong>.
            Select the reason for declining:

          </p>

{/*  */}
          {/* <input type="text" value={inputReason} placeholder='' /> */}

          {/* {
          deleteReasons.map((reason, index) => (
            <button
            type="text"
            
            onClick={(e) => {
              setinputReason(reason);
              // setError('');
             
            }}
            placeholder="Enter client name"
            className={`
              w-full p-3 border rounded-lg mb-2
              ${error ? 'border-red-500 bg-red-50' : 'border-gray-300'}
            `}
          > {reason} </button>
            ))
        }
          */}



 { deleteReasons?.map((reason, index) => (
          <div
            key={index}
            className={`
          flex items-center p-3 rounded-lg cursor-pointer
          ${
                inputReason === reason
                  ? 'bg-indigo-100 border-2 border-indigo-500'
                  : 'hover:bg-gray-100 border border-gray-200'}
          transition-all duration-200 ease-in-out
        `}
            onClick={() => setinputReason(reason)}
          >
              {reason}
          </div>
          ))
  }



          {error && (
            <p className="text-red-500 text-sm mb-2">{error}</p>
          )}

          <div className="flex space-x-3 mt-4">
            <button
              onClick={onClose}
              className="
                flex-1 bg-gray-200 text-gray-800 
                py-3 rounded-lg hover:bg-gray-300 
                transition
              "
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmation}
              disabled={!inputReason}
              className={`
                flex-1 py-3 rounded-lg transition
                ${inputReason
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'}
              `}
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete

