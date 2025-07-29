import Product from "../models/product.model.js";


// Crear un nuevo producto
export const createrProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el producto", error });
  }
};

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("provider", "name");
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
};

// Obtener un producto por id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate("provider", "name");

    if (!product) res.status(404).json({ message: "Producto no encontrado" });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el producto", error });
  }
};

//actualizar producto por id
export const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params;

        const updatedProduct= await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedProduct) return res.status(404).json({message:"Producto no encontrado"});
        res.status(200).json(updatedProduct);

    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error al actualizar el producto", error});
    }
}


//activar o desactivar producto
export const toggleProductStatus= async  (req,res)=>{
    try {
        const {id}= req.params;
        const {isActive} = req.body;

        const product= await Product.findByIdAndUpdate(id,{isActive},{new:true});
        if(!product) return res.status(404).json({message:"Producto no encontrado"});
        res.status(200).json(product)
      
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error al cambiar el estado del producto", error});
    }
}

