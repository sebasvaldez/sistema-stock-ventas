import Customer from "../models/customer.model.js";

export const createCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);

    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.json({ message: "Error al crear un cliente" });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener clientes" }, error);
  }
};

export const getCustomerById = async(req,res)=>{
    try {
        const {id} = req.params
        const customer = await Customer.findById(id)

        if(!customer) return res.status(404).json({message:"Cliente no encontrado"})
        res.status(200).json(customer)

    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error al obtenr el cliente"}, error)
    }
}

export const updateCustomer = async (req,res)=>{
    try {
        const {id} = req.params
        const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json(updatedCustomer)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error al actualizar el cliente"})
    }
}