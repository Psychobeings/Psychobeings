import mongoose from 'mongoose';
import dotenv from 'dotenv'


dotenv.config()

export const Connection = () => {
    mongoose.connect(`mongodb+srv://support:${process.env.DB_PASSWORD}@${process.env.DB_USER}.h2llo.mongodb.net/?retryWrites=true&w=majority&appName=Psychobeings`);

    mongoose.connection.on('connected', () => {
        console.log("Database connected")
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected")
    })

    mongoose.connection.on('error', (err) => {
        console.log("Error occured! ", err)
    })
}