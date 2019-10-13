import ReactDom from "react-dom";
import React from "react";
import Home from "./Home";
let a = require("./a.js");
require("./a.css");
require("./b.scss");

// import myFn from "./myImport";

console.log("bbb");
console.log(a);
console.log("hello");


ReactDom.render(<Home/>, document.getElementById("app"));

