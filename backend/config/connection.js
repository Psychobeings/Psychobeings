import mongoose from 'mongoose';

export const Connection = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@psycho.h66cp.mongodb.net/?retryWrites=true&w=majority&appName=Psycho`);

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