import { ROLES } from "../models/Role"
import User from "../models/User"


//verifica el correo o si el usuario ya fue creado mediante el metodo findOne
//retornando un codigo 400 de error el usuario ingreso mal los datos
//si las condiciones no se cumplen seguir con el middleware next()
export const CheckDuplicatedUsernameOrEmail = async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username })
    if (user) return res.status(400).json({ message: "Username already exists" })
    const email = await User.findOne({ email: req.body.email })
    if (email) return res.status(400).json({ message: "Email already exists" })
    next()
}

//verificando los roles si el usuario ingreso uno que no existe
//si las condiciones se cumple seguir con el middleware next()
export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for (let i = 0; i<req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({ message: `Role ${req.body.roles[i]} does not exist` })
            }
        }

    }
    next();
}
