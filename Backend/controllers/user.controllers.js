import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400), json({ message: "El usuario ya existe" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      role: user.role,
      token: generateToken(user),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); // <-- contraseña incluida
    if (!user) return res.status(400).json({ message: "Credenciales inválidas." });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Credenciales inválidas." });

    res
      .cookie("token", generateToken(user), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
      })
      .json({
        _id: user._id,
        name: user.name,
        role: user.role
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json(users);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const toggleUserStatus = async (req,res)=>{

  try {
    const{id}= req.params
  const {active}= req.body

  const user =await User.findByIdAndUpdate(id, {active}, {new: true}).select("-password");
  if(!user) return res.status(404).json({message: "Usuario no encontrado"});

  res.status(200).json({message:`Usuario ${active ? "activado" : "desactivado"} correctamente`, user});
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el estado del usuario" });
  }


}

