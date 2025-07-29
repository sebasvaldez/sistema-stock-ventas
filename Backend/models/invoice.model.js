import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    saleId: { type: mongoose.Schema.Types.ObjectId, ref: "Sale", required: true },
    invoiceNumber: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    paymentMethod: {
      type: String,
      enum: ["efectivo", "tarjeta", "transferencia"],
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
