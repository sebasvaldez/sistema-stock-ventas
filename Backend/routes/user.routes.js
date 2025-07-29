import { Router } from "express";

import { registerUser, loginUser,getAllUsers, toggleUserStatus } from "../controllers/user.controllers.js";
import { protect,isAdmin } from "../middlewares/authMiddleware.js";


const router= Router();

//Endpoints

router.get("/",protect, isAdmin, getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/toggle/:id", protect, isAdmin, toggleUserStatus);


export default router;