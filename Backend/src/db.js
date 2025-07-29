import mongoose from "mongoose";
import { MONGO_URI } from '../config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
   
  }
};
