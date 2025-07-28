import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
  dni: { type: String, unique: true },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;