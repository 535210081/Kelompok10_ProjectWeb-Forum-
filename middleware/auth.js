import User from "../models/user.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export function authUser(req, res, next){
    console.log(req.body.email)
    console.log("Authorize User")

    const token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(401).json({msg: 'Access Denied: Please Login!'})
    } else {
        const tokenBody = token.split(" ")[1]
        jwt.verify(tokenBody, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({msg: 'Token not Verified!'})
            }
            req.userID = User.id
            res.json({msg: 'Token Verified!'})
            next()
        })
    }
}