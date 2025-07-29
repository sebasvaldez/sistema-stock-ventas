import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import userRoutes from "../routes/user.routes.js";
import productRoutes from "../routes/product.routes.js";
import providerRoutes from "../routes/provider.routes.js";
import customerProvider from "../routes/customer.routes.js";
import saleRoutes from "../routes/sale.routes.js";
import invoiceRoutes from "../routes/invoice.routes.js";
import paymentRoutes from "../routes/payment.routes.js";

import dotenv from "dotenv";


dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/customers", customerProvider);
app.use("/api/sales", saleRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/payments", paymentRoutes);

export default app;
