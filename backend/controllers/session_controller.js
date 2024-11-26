import Session from "../models/session_model.js";

// Create a session (registerSession)
export const registerSession = async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, phone, date, timeSlot, concern } = req.body;
    const newSession = new Session({ name, email, phone, date, timeSlot, concern });
    await newSession.save();
    res.status(201).json({ message: "Session registered successfully", session: newSession });
  } catch (error) {
    res.status(500).json({ error: "Failed to register session", details: error.message });
  }
};

// Get all session details (getSessionDetails)
export const getSessionDetails = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json({ sessions });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch session details", details: error.message });
  }
};

// Delete a session (deleteSession)
export const deleteSession = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSession = await Session.findByIdAndDelete(id);
    if (!deletedSession) {
      return res.status(404).json({ error: "Session not found" });
    }
    res.status(200).json({ message: "Session deleted successfully", session: deletedSession });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete session", details: error.message });
  }
};
