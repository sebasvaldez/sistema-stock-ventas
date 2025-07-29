import Invoice from "../models/invoice.model.js";
import Sale from "../models/sale.model.js";
import {v4 as uuidv4} from "uuid"

export const createInvoice =async (req,res)=>{
    try {
        const {saleId,paymentMethod} = req.body;
        const sale = await Sale.findById(saleId).populate("customer", "name");
        const customerName = sale.customer ? sale.customer.name : "Cliente Desconocido";
        if (!sale) return res.status(404).json({ message: "Venta no encontrada" });

        const invoice = new Invoice({
            saleId: sale._id,
            invoiceNumber: uuidv4(),
            paymentMethod,
            totalAmount: sale.total,
            clientName: customerName

        })

        const savedInvoice= await invoice.save();
        res.status(201).json(savedInvoice)
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la factura" });
        
    }

}

export const getAllInvoices = async(req,res)=>{
    try {
        const invoices = Invoice.find()
        .populate("sale")
        .sort({createdAt: -1});
        res.status(200).json(invoices);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las facturas" });
        
    }
}