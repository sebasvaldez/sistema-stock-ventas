import {Router} from "express";
import {getPaymentsBySale,registerPayment} from "../controllers/payment.controllers.js";
import {protect} from "../middlewares/authMiddleware.js";


const router = Router();

// Endpoints
router.post("/", protect, registerPayment);
router.get("/:id", protect, getPaymentsBySale);

export default router;