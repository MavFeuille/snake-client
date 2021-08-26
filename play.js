const { lstatSync } = require("fs");
const {connect} = require("./client");
const{setupInput} = require("./input");

console.log("Conenecting...");


setupInput(connect());

