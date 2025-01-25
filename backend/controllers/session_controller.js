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



// Delete a session (deleteSession)
export const deleteSession = async (req, res) => {
  try {
    // const { id } = req.params;
    const session = req.body.session
    const reason = req.body.inputReason
    const name = session.name
    const email = session.email

    // console.log(session)
    


    const deleted = await Session.findByIdAndDelete(session._id)
  
  
   
    if (deleted) {
      await SendDeleteMessage(name, email, reason);
      console.log("Deleted")
      res.status(200).json({ message: "Successfully deleted session" });
    }





  } catch (error) {
    res.status(500).json({ error: "Failed to delete session", details: error.message });
  }
};


// Get all session details (getSessionDetails)
export const getSessionDetails = async (req, res) => {
  try {


    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    // const order = req.query.order
    // const sortDirection = order === 'asc' ? 1 : -1;

    const name = req.query.name
    const phone = req.query.phone
    const date = req.query.date
    const timeSlot = req.query.timeSlot
    // console.log(req.query.status)

    let result = await Session.find({
      ...(req.query.name && { name: { $regex: new RegExp(req.query.name, 'i') } }),
      ...(req.query.timeSlot && req.query.timeSlot !== "Both Sessions" && { timeSlot: req.query.timeSlot }),
      ...(req.query.date && { date: req.query.date }),
      ...(req.query.phone && { phone: { $regex: new RegExp(req.query.phone, 'i') } }),
      ...(req.query._id && { _id: req.query._id }),
      ...(req.query.status && { status: req.query.status || 1 }),
     ...(req.query.concern && { concern: req.query.concern }),
    })
      .sort({ date: -1 })
      .skip(startIndex)
      .limit(limit)
    // ////
    const totalCount = await result.length;
    // console.log(totalCount) 

    return res.status(200).json({ result, totalCount })
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch session details", details: error.message });
  }
};



//.................................................................................

export const bookSession = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const changeState = await Session.findByIdAndUpdate(id, {$set: {status : 1}});
    if (!changeState) {
      return res.status(404).json({ error: "Session not found" });
    }
    res.status(200).json({ message: "Session updated successfully", session: changeState });
  } catch (error) {
    res.status(500).json({ error: "Failed to update session", details: error.message });
  }
};