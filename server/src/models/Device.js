import { Schema, model } from "mongoose";

const  deviceSchema= new Schema({
    marca: String,
    modelo: String,
    imei: Number,
    numero: Number,
    ci: String,
    detalles:String,
    estado: String  
    },{
    timestamps: true,
    versionKey: false
    });
    
    //timestamps: true add time tags to the document
    //versionKey: false every time we create a document  __v  will be not created
export default model("Device", deviceSchema);
