//app express config exported to index.js

// import express from "express"
const express = require("express");

//importing cookie parser to save token on cookies
// import cookieParser from "cookie-parser";
const cookieParser = require("cookie-parser");
// import cors from "cors";
const cors = require("cors");


//middleware morgan 
// import morgan from "morgan"
const morgan = require("morgan");
import pkg from "../package.json"

//importing roles Schema
import {createRoles} from './libs/initialSetup'
import {createAdminUser} from './libs/adminUser'

const app = express()
//when express run it will run createRoles method
createRoles();
createAdminUser();
//inporting routes
import deviceRoutes from "./routes/devices.routes"
import  authRoutes from "./routes/auth.routes"
import userRoutes from "./routes/user.routes"

//using information about the pkg creating the variable pkg whit set
app.set('pkg', pkg)


//using morgan as developer
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(cors());
// app.use(cors({credentials: true, origin: 'http://localhost:4000/api/auth/signin', optionSuccessStatus:200}))

// app.use(cors({credentials: true, origin: 'http://localhost:4000/api/devices', optionSuccessStatus:200}))

// app.use(cors({credentials: true, origin: 'http://localhost:4000', optionSuccessStatus:200}))


//importing pkg from package.json to se values of the app name and version

app.get("/", (req, res) => {
    res.json({
        name:app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version:app.get('pkg').version
    })
})


//using routes for request and response
    app.use('/api/devices',deviceRoutes)
    app.use('/api/auth',authRoutes)
    app.use('/api/users',userRoutes)


export default app;


// En una respuesta dada, podemos establecer una cookie a través de lo siguiente:

// res.cookie("mycookie", "mydata", { httpOnly: true }).json({
//   message: "This response has a cookie"
// });
