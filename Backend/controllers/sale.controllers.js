import Sale from "../models/sale.model.js";
import Product from "../models/product.model.js";

export const createSale = async (req, res) => {
  try {
    const { customer, items } = req.body;
    let total = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product)
        return res.status(404).json({ message: "Producto no encontrado" });
      total += product.price * item.quantity;
    }

    const sale = new Sale({
      customer,
      seller: req.user.id,
      items,
      total,
    });
    const savedSale = await sale.save();
    res.status(201).json(savedSale);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la venta" }, error);
  }
};

export const getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find()
      .populate("customer", "name")
      .populate("seller", "name")
      .populate("items.product", "name");

    res.status(200).json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las ventas" }, error);
  }
};

export const getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id)
      .populate("customer", "name")
      .populate("seller", "name")
      .populate("items.product", "name");
    if (!sale) return res.status(404).json({ message: "Venta no encontrada" });
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la venta", error });
  }
};

export const updateSaleStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const sale = await Sale.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.status(200).json({ message: "Estado actualizado", sale });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar estado de la venta", error });
  }
};
