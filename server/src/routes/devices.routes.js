//endpoints to create documents
//importing module router 
import {Router} from 'express';
//initializing router
const router = Router()

import * as devicesCtrl from '../controllers/devices.controller';
import {isAdmin, isModerator, verifyToken} from '../middlewares/authJwt';


// router.post('/', [verifyToken,isAdmin], devicesCtrl.createDevice);
router.post('/', devicesCtrl.createDevice);

//requessting the devices
router.get('/', devicesCtrl.getDevices);

router.get('/:deviceId', devicesCtrl.getDeviceById);

// router.put('/:deviceId', [verifyToken,isAdmin], devicesCtrl.updateDeviceById);

router.put('/:deviceId', devicesCtrl.updateDeviceById);

// router.delete('/:deviceId', [verifyToken,isAdmin], devicesCtrl.deleteDeviceById);

router.delete('/:deviceId',devicesCtrl.deleteDeviceById);


//exporting express router
export default router;