import { Router } from "express";

import { registerUser, loginUser,getAllUsers } from "../controllers/user.controllers.js";
import { protect,isAdmin } from "../middlewares/authMiddleware.js";


const router= Router();

//Endpoints

router.get("/", protect, isAdmin, getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);


export default router;