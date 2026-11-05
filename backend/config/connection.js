import mongoose from 'mongoose';
import dotenv from 'dotenv'


dotenv.config()

export const Connection = () => {
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;

    if (!dbUser || !dbPassword) {
        console.warn('MongoDB credentials are missing. Database connection skipped.');
        return;
    }

    mongoose.connect(`mongodb+srv://support:${dbPassword}@${dbUser}.h2llo.mongodb.net/?retryWrites=true&w=majority&appName=Psychobeings`);

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