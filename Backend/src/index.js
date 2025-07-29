import app from "./server.js";
import { connectDB } from "./db.js";
import { PORT } from "../config.js";


connectDB()

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
