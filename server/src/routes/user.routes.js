//endpoints to create user 

import {Router} from 'express';
const router = Router()

import * as userCtrl from '../controllers/user.controller'

import {isAdmin, verifyToken} from '../middlewares/authJwt';
import {checkRolesExisted} from '../middlewares/verifySignup';




// isAdmin,
router.post('/', [ 
    isAdmin,
    verifyToken,
    checkRolesExisted
], userCtrl.createUser )


export default router;

