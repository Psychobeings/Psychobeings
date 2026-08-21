import axios from "axios"

export const BookSession = async (handleClose, session, setError) => {
  try {
    console.log(session._id);
    await axios.put(`${process.env.REACT_APP_URL}/${session._id}`);
  } catch (error) {
    setError('Error booking session');
  } finally {
    handleClose();
  }
};