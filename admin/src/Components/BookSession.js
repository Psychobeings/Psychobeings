import axios from "axios"

export const BookSession = async (handleClose, session, setError, selectedSlot) =>{

alert("In progress!!")
try{
        console.log(session._id)
           const changeState = await axios.put(`${process.env.REACT_APP_URL}/session-form/book` , 
            { id:session._id, sessionTime: selectedSlot })
            // console.log("Session booked")
       }
       catch(error){
        setError('Error booking session')
        }
       finally
       {
           handleClose()
        
       }


}