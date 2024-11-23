import Session from "../models/session_model.js";

export const registerSession = (req, res) =>{
    res.send("Hello from register form route!!");
}

export const getSessionDetails = (req, res) =>{
    res.send("Hello from get details form route!!");
}

export const deleteSession = (req, res) =>{
    res.send("Hello from delete form route!!");
}