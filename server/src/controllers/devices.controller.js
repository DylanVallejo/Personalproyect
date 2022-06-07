//importando el modelo para hacer solicitudes 
import Device from "../models/Device"
//exporting the controller using desestructure and using him to create
//a new document 201 code says that a new product has been created 
export const createDevice = async (req, res) => {
    const {marca, modelo , imei , numero, ci, detalles,estado } = req.body;
    const newDevice = new Device({marca, modelo , imei , numero, ci , detalles, estado});
    //saving the new device
    const deviceSave = await newDevice.save()
    res.status(201).json(deviceSave)
}

//exporting the controller and using him to get
//all the documents on the Db 
export const getDevices = async (req, res) => {
    const devices = await Device.find()
    res.json(devices)

}

//exporting the controller  using him to get one specific productby Id 
export const getDeviceById = async (req, res) => {
    const device = await Device.findById(req.params.deviceId);
    res.status(200).json(device)

};

//exporting the controller find one and update by id and returning  
//a status code 200 to show the response 
export const updateDeviceById = async (req, res) => {
    //new true will show us the new data and not the older one
    const updatedDevice = await Device.findByIdAndUpdate(req.params.deviceId, req.body, 
        {new: true})
    res.status(200).json(updatedDevice)
};

//exporting the controller usign an id to identify the document 
//and then delete it whit a status code 204 it means that there is not content
export const deleteDeviceById = async (req, res) => {
    const { deviceId } = req.params;
    await Device.findByIdAndDelete(deviceId);
    res.status(204).json()
};



