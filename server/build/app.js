"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _package = _interopRequireDefault(require("../package.json"));

var _initialSetup = require("./libs/initialSetup");

var _adminUser = require("./libs/adminUser");

var _devices = _interopRequireDefault(require("./routes/devices.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//app express config exported to index.js
// import express from "express"
var express = require("express"); //importing cookie parser to save token on cookies
// import cookieParser from "cookie-parser";


var cookieParser = require("cookie-parser"); // import cors from "cors";


var cors = require("cors"); //middleware morgan 
// import morgan from "morgan"


var morgan = require("morgan");

var app = express(); //when express run it will run createRoles method

(0, _initialSetup.createRoles)();
(0, _adminUser.createAdminUser)(); //inporting routes

//using information about the pkg creating the variable pkg whit set
app.set('pkg', _package["default"]); //using morgan as developer

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // app.use(cors({credentials: true, origin: 'http://localhost:4000/api/auth/signin', optionSuccessStatus:200}))
// app.use(cors({credentials: true, origin: 'http://localhost:4000/api/devices', optionSuccessStatus:200}))
// app.use(cors({credentials: true, origin: 'http://localhost:4000', optionSuccessStatus:200}))
//importing pkg from package.json to se values of the app name and version

app.get("/", function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
}); //using routes for request and response

app.use('/api/devices', _devices["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/users', _user["default"]);
var _default = app; // En una respuesta dada, podemos establecer una cookie a través de lo siguiente:
// res.cookie("mycookie", "mydata", { httpOnly: true }).json({
//   message: "This response has a cookie"
// });

exports["default"] = _default;