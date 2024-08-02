import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Solomon:841512@cluster0.kybe64k.mongodb.net/udemy-5").then(()=>console.log("DB connected"));
}