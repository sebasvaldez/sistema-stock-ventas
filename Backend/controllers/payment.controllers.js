import Payment from "../models/payment.model.js";
import Sale from "../models/sale.model.js";

export const registerPayment=async (req,res)=>{
    try {
        const {saleId, amount, method} = req.body;
        const sale = await Sale.findById(saleId);
        if (!sale) return res.status(404).json({ message: "Venta no encontrada" });

        const payment = new Payment({
            saleId: sale._id,
            amount,
            method,

        })
        const savedPayment = await payment.save();
        res.status(201).json(savedPayment);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al registrar el pago" });
        
    }

}

export const getPaymentsBySale = async (req, res) => {
  try {
    const { saleId } = req.params;
    const payments = await Payment.find({ sale: saleId });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener pagos", error });
  }
};