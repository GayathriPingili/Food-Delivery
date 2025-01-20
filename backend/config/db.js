import mongoose, { mongo } from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://gayathripingili33:fooddel@cluster0.h3ej9.mongodb.net/food-del").then(()=> console.log("db connected"));

}