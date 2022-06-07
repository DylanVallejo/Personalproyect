"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//if we see useFindandModify: true, are deprecated we need to use it 
_mongoose["default"].connect("mongodb://localhost:/techdevicesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Connected to MongoDB");
})["catch"](function (error) {
  return console.log(error);
});