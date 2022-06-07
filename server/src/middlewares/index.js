//importa ambos archivos de middlewares para importarlos en conjunto 
//como un objeto o tambien se puede exportar por separado

import * as authJwt from "./authJwt";
import * as verifySignUp from "./verifySignUp";

export default {authJwt,verifySignUp};