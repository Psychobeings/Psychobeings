import Session from "../models/session_model.js";

// Create a session (registerSession)
export const registerSession = async (req, res) => {
  try {
    const { name, email, phone, date, timeSlot, concern } = req.body;

    const alreadyBooked = await Session.findOne({ name, phone, date, timeSlot });
    console.log(alreadyBooked)

    if (alreadyBooked) {

      return res.status(409).json({ message: "Session is already in queue, Please wait for confirmation !" });
    }
    const newSession = new Session({ name, email, phone, date, timeSlot, concern });
    await newSession.save();
    res.status(201).json({ message: "Session registered successfully", session: newSession });
  } catch (error) {
    res.status(500).json({ error: "Failed to register session", details: error.message });
  }
};