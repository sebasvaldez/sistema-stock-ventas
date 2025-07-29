import { Router } from "express";
import {createInvoice,getAllInvoices} from "../controllers/invoice.controllers.js";
import {protect} from "../middlewares/authMiddleware.js";
const router = Router();


// Endpoints
router.post("/",protect, createInvoice);
router.get("/",protect, getAllInvoices);


export default router