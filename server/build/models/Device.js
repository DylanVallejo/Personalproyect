"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var deviceSchema = new _mongoose.Schema({
  marca: String,
  modelo: String,
  imei: Number,
  numero: Number,
  ci: String,
  detalles: String,
  estado: String
}, {
  timestamps: true,
  versionKey: false
}); //timestamps: true add time tags to the document
//versionKey: false every time we create a document  __v  will be not created

var _default = (0, _mongoose.model)("Device", deviceSchema);

exports["default"] = _default;