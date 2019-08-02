"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _http = _interopRequireDefault(require("http"));

var Person = function Person() {
  (0, _classCallCheck2["default"])(this, Person);
  this.age = 12;
};

_http["default"].createServer(function (res) {
  res.end('ok');
});