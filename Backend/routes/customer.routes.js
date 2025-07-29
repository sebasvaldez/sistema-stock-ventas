import { Router } from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/customer.controllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", protect, getAllCustomers);
router.get("/:id", protect, getCustomerById);
router.post("/", protect, createCustomer);
router.put("/", protect, updateCustomer);


export default router;