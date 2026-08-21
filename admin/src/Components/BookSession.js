import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_URL || 'https://psychobeings.onrender.com';

export const BookSession = async (handleClose, session, setError) => {
  try {
    console.log(session._id);
    await axios.put(`${API_BASE_URL}/${session._id}`);
  } catch (error) {
    setError('Error booking session');
  } finally {
    handleClose();
  }
};