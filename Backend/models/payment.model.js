import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    saleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sale",
    },
    method: {
      type: String,
      enum: ["Efectivo", "Tarjeta", "Transferencia"],
      required: true,
    },
    amount: { type: Number, required: true, min: 0 },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
const Payment= mongoose.model("Payment", paymentSchema);
export default Payment;