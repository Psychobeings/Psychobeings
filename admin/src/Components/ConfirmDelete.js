import React, { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_URL || 'https://psychobeings.onrender.com';

const deleteReasons = ['Reason 1', 'Reason 2', 'Reason 3', 'Reason 4'];

const ConfirmDelete = ({ isOpen, onClose, sessionId, sessionName, session }) => {
  const [inputReason, setInputReason] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setInputReason('');
      setError('');
    }
  }, [isOpen]);

  const handleConfirmation = async () => {
    if (!inputReason) {
      setError('Please select a reason before deleting.');
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/${sessionId}`);
      onClose();
    } catch (err) {
      setError('Error deleting session');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close delete dialog"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
          <h2 className="text-2xl font-bold mb-4 text-red-600">Confirm Deletion</h2>

          <p className="mb-4 text-gray-700">
            You are about to delete the session for <strong>{sessionName || session?.name || 'this client'}</strong>.
            Select the reason for declining:
          </p>

          {deleteReasons.map((reason, index) => (
            <div
              key={index}
              className={`
                flex items-center p-3 rounded-lg cursor-pointer mb-2
                ${
                  inputReason === reason
                    ? 'bg-indigo-100 border-2 border-indigo-500'
                    : 'hover:bg-gray-100 border border-gray-200'
                }
                transition-all duration-200 ease-in-out
              `}
              onClick={() => setInputReason(reason)}
            >
              {reason}
            </div>
          ))}

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="flex space-x-3 mt-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
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

export default ConfirmDelete;

