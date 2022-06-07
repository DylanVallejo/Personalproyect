//importing the role schema this will run at the start of the app
//creating the roles 

import Role from '../models/Role';

//xport a new metod to create roles whit async await so the code will
//wait the instrucion createRoles to process
export const createRoles = async () => {
    try {
        //estimatedDocumentCount() retunrs the numbers of documents in  collections
        const count = await Role.estimatedDocumentCount()
        //if the count is 0 then we create the roles
        if (count > 0) return ;
        //Promise all iterates over an array of promises and 
        //waits for all of them to resolve
        //if there is no roles then we create it 
        const values = await Promise.all([
        new Role({name: "user"}).save(),
        new Role({name: "admin"}).save(),
        ])
        console.log(values)
        
    } catch (error) {
        console.error(error)
    }
}