import axios from "axios"

export const BookSession = async (handleClose, session, setError) =>{

alert("In progress!!")
try{
        console.log(session._id)
           const changeState = await axios.put(`${process.env.REACT_APP_URL}session-form/${session._id}`)
        //    navigate('/')
       }
       catch(error){
        setError('Error booking session')
        }
       finally
       {
           handleClose()
        
       }


}