import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

export const getUser = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const register = async(req, res) => {
    const { name, email, password, re_password } = req.body;
    if (password !== re_password) return res.status(400).json({msg: "Password and Re-password not same"});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        const newUser = new User({
            name: name,
            email: email,
            password: hashPassword
        });
        return newUser.save();
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const login = async(req, res) => {
    
    const user = await User.findOne({email: req.body.email}).exec()
    if (!user) {
        return res.json({msg: 'email not found'})
    }
    const comparePass = await bcrypt.compare(req.body.password, user.password)
    if (!comparePass) {
        return res.json({msg: 'Wrong Password'})
    }
    const accessToken = jwt.sign({user}, process.env.ACCES_TOKEN_KEY)
    res.json({msg: 'Login succesfull!', name: user.name, email: user.email, accessToken: accessToken})

}
    