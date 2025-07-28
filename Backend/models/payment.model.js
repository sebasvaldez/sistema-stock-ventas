import mongoose from "mongoose";


const paymentSchema= new mongoose.Schema({
    sale:{
        type: mongoose.Schema.Types.ObjectId, ref:"Sale",
    },
    method:{type:String, enum:["Cash", "Card", "Transfer"], required:true},
    amount:{type:Number, required:true, min:0},
    date:{type:Date, default: Date.now},
    status:{type:String, enum:["Pending", "Completed", "Failed"], default:"Pending"},

},{
    timestamps: true,
})