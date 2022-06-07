//creating a initial user on the database users
import User from '../models/User';
export const createAdminUser = async () => {
    try {
        const count = await User.estimatedDocumentCount()
        if (count > 0) return ;
        const user = await Promise.all([
            new User({
                username: "admin",
                email: "admin@gmail.com ",
                password: "admin"
            }).save(),
        ])
        console.log(user)
    } catch (error) {
        console.error(error)
    }
}