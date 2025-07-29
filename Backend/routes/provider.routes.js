import { Router } from "express";
import {createProvider,getAllProviders,getPoviderById,updateProvider} from "../controllers/provider.controllers.js"
import {protect,isAdmin} from "../middlewares/authMiddleware.js"



const router = Router();

router.get("/",protect,  getAllProviders)
router.get("/:id", protect, getPoviderById)
router.post("/", protect, createProvider)
router.put(":id", protect, isAdmin,updateProvider )


export default router;

