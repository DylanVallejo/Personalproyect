//using the user/role model, and using authentification  
//using the module jsonwebtoken for token generation
//importing a secret word for the token

import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from '../config';


//creating a sign up method  and exporting it
export const signUp = async (req, res) => {

    const {username, email, password, roles }= req.body;

    const newUser = new User ({
        username,
        email,
        password: await User.encryptPassword(password),
    })

    //verifying name of the role on the database 
    if(req.body.roles){
        //if there is a role add the role id to user 
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else{
        //if there is no role add the user role 
        const role = await Role.findOne({name: "user"})
        newUser.roles= [role._id]
    }
    //saving the user on the database whit .save()
    const savedUser = await newUser.save();
    console.log(savedUser)

    //using the jsonwebtokem accesing to savedUser id property 
    //using the secret word for the token and addingg expiration time
    const token = jwt.sign({id:savedUser._id},config.SECRET,{
        expiresIn: 86400 //1 day in sec 
    })
    //showing token as json and a status code 200 request fullfield
    res.status(200).json({token});
}


//creating a sign in method  and exporting it
export const signin = async (req, res) => {

    //creating a variable for found user whit finOne using populate to iterate and 
    //return a full object of roles
    const userFound = await User.findOne({email: req.body.email}).populate("roles")

    //if there is no user return an error 400 it means a bad request
    //user not found
    if(!userFound) return res.status(400).json({message: "User not found"})
    
    //comparing the user pass whit the useFound pass
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    //if there is no match return an error 401 and  a message incorrect password
    if(!matchPassword) return res.status(401).json({token: null ,message: "Password is incorrect"})

    //creating a token and adding expiration time
    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        expiresIn: 86400, // 1 day in sec 
    });


    // if(!matchPassword) return res.status(401).json({token: null, message: "Password incorrect"})
    console.log(userFound)
    //showing token as json 
    res.json({token})

}


// 1:15    https://errorsfixing.com/typeerror-user-comparepassword-is-not-a-function/
