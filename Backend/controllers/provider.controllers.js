import Provider from "../models/provider.model.js";

export const createProvider = async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;
    const newProvider = new Provider({ name, phone, email, address });
    await newProvider.save();
    res.status(201).json(newProvider);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear un proveedor" });
  }
};

export const getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener la lista de proveedores" });
  }
};

export const getPoviderById = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await Provider.findById(id);
    if (!provider)
      return res.status(404).json({ message: "Proveedor no encontrado" });
    res.status(200).json(provider);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener un proveedor" });
  }
};

export const updateProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, address } = req.body;

    const updatedProvider = await Provider.findByIdAndUpdate(
      id,
      { name, phone, email, address },
      { new: true }
    );
    res.status(200).json(updatedProvider);
  } catch (error) {
    console.error(error)
    res.status(500).json({message:"Error al actualizar un proveedor"})
  }
};
