import { Router } from "express";
import {createrProduct,getAllProducts,getProductById,toggleProductStatus,updateProduct} from "../controllers/product.controllers.js"
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();


///Endpoints
router.post("/", protect, isAdmin, createrProduct);
router.get("/", protect, getAllProducts);
router.get("/:id", protect,  getProductById);
router.put("/:id", protect, isAdmin, updateProduct);
router.put("/toggle/:id", protect, isAdmin, toggleProductStatus);

export default router;

