import express, {json, urlencoded} from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { PORT,MONGO_URI } from '../config.js';
import userRoutes from '../routes/user.routes.js';
import dotenv from 'dotenv';


dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);





// MongoDB connection

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch(error => console.error('Error connecting to MongoDB:', error));



app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

