import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js";

const generateToken = (user) => {

    return jwt.sign(
        {id: user._id,role: user.role},
        TOKEN_SECRET,
        {expiresIn: "1d"}
    )
}

export default generateToken;