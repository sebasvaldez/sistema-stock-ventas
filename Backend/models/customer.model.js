import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
  dni: { type: String, unique: true, required: true },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;