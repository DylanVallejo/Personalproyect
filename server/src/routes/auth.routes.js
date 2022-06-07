//creating routes to use authentification and authorization

import {Router} from 'express';
const router = Router()

import * as authCtrl from '../controllers/auth.controller';
import {CheckDuplicatedUsernameOrEmail,checkRolesExisted} from '../middlewares/verifySignup';

router.post('/signup', [CheckDuplicatedUsernameOrEmail,checkRolesExisted],authCtrl.signUp)


router.post('/signin',authCtrl.signin)


export default router;

//posible falla aqui por los middlewwares