import mongoose from "mongoose";

const providerSchema = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    address: { type: String },
  },
  {
    timestamps: true,
  }
);

const Provider = mongoose.model("Provider", providerSchema);

export default Provider;
