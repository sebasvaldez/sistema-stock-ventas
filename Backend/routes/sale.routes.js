import { Router } from "express";
import{createSale,getAllSales,getSaleById,updateSaleStatus} from "../controllers/sale.controllers.js";
import {protect,isAdmin} from "../middlewares/authMiddleware.js";

const router= Router();

// Endpoints
router.get("/", protect,isAdmin, getAllSales);
router.get("/:id", protect, getSaleById);
router.post("/",protect, createSale);
router.patch("/:id/status", protect, isAdmin, updateSaleStatus);

export default router;