"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

require("@babel/polyfill");

var _class, _temp;

var name = 'wang';

var add = function add(a, b) {
  return a + b;
};

var arr = [1, 2, 3].concat();

function Out(Wrapp) {
  return Wrapp;
}

var Home = Out(_class = (_temp = function Home() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Home);
  this.name = 'wang';
  this.age = 23;

  this.sayname = function () {
    console.log(_this.name);
  };
}, _temp)) || _class;

var arr1 = [1, 2, 3].findIndex(function (item) {
  return item === 3;
});
console.log([1, 2, 3].findIndex);
console.log(arr1);