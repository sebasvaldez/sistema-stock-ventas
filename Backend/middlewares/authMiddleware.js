import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { TOKEN_SECRET } from "../config.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "No estás autorizado" });

    const decoded = jwt.verify(token, TOKEN_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user || !user.active)
      return res.status(401).json({ message: "Usuario no encontrado" });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Acceso denegado" });
  }
  next();
};

