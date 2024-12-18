import React, { useRef, useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, User, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import axios from 'axios';

// Confirm Delete Popup Component
const ConfirmDelete = ({ isOpen, onClose, sessionId, sessionName }) => {
  const [inputName, setInputName] = useState('');
  const [error, setError] = useState('');

  // Reset input when popup opens
  useEffect(() => {
    if (isOpen) {
      setInputName('');
      setError('');
    }
  }, [isOpen]);

  const handleConfirmation = async () => {
   
    if (inputName.trim().toLowerCase() === sessionName.trim().toLowerCase()) {
     
      
       try{
        console.log(sessionId)
           const deleted = await axios.delete(`${process.env.REACT_APP_URL}/session-form/${sessionId}`)
          //  navigate('/')

       }
       catch(error){
        setError('Error deleting session')
        }


    
    
      onClose();
      
    } else {
      setError('Name does not match. Please try again.');
    }
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
            You are about to delete the session for <strong>{sessionName}</strong>. 
            To confirm, type the client's name below:
          </p>

          <input 
            type="text"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
              setError('');
            }}
            placeholder="Enter client name"
            className={`
              w-full p-3 border rounded-lg mb-2
              ${error ? 'border-red-500 bg-red-50' : 'border-gray-300'}
            `}
          />

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
              disabled={!inputName.trim()}
              className={`
                flex-1 py-3 rounded-lg transition
                ${inputName.trim() 
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

