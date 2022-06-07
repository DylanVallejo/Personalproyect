//defining user Schema whit roles and password creating arelation betwwen role
//schema and user schema whit Schema.Types.ObjectId
//importing bcrytp module for password encryption

import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username:{
        type: String,
        unique: true 
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    //reference to schema role saving a role whit an id 
    roles:[{
        ref: "Role",
        type: Schema.Types.ObjectId
    },
    ],
    },
    {
        timestamp: true,
        versionKey: false
    }
);


//encrypting password genSalt is the number of times hashing password
userSchema.statics.encryptPassword = async  (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

//comparing pass whit the encrypted password
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)

}

export default model("User", userSchema);
