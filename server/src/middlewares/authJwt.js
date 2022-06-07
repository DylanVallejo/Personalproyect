//intermediate layer to check if the user is authenticated
//importando jsonwebtoken, secrete word from config,esquema de roles y usuarios
import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
import Role from '../models/Role'


//validando el token para que unicamente admins puedan hacer cambios
export const verifyToken = async (req, res, next) => {
    try {
        //receiving a token from the request x-access-token
        const token = req.headers["x-access-token"];
        console.log(token)
        //if there is no token return an error 403 it means that 
        //the user is not allowed to do that action or need the token 
        if (!token) return res.status(403).json({ message: "No token provided" });

        //verifying the token and returning the decoded token whit the secret word
        const decoded = jwt.verify(token,config.SECRET)
        req.userId= decoded.id;

        //verifying if the user exist in the database
        const user = await User.findById(req.userId, {password: 0 })
        console.log(user)
        //if there is not user return an error 400 it means a bad request
        if (!user) return res.status(404).json({ message: "user not foun " });
        console.log(decoded)
        // if user is found continue whit the process
        next()
        
    } catch (error) {
        //if there is an error return an error 401 it means is unauthorized user
        return res.status(401).json({ message: "Unauthorized" });
        
    }
}


//creating a method to see if the actiosn are executed by an admin 
export const isAdmin = async (req, res, next) => {
    //verifying if the user exist in the database and if the user is admin
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    //validating that the user is an admin then we can proceeed whit the process
    //whit next()
    for (let i= 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
            next()
            return;
        }
    }
    //if is not admin return an error 403 it means that the user is not an admin
    //or athenticated
    next()
    return res.status(403).json({ message: "Only administrators can delete" })
}
