// const {connect} = require("./play");
let connection;  // Stores the active TCP connection object


const handleUserInput = function(key) {

  if (key === 'w') {
    console.log(`w: `, key);
    connection.write("Move: up");
  };

  if (key === 'a') {
    console.log(`a: `, key);
    connection.write("Move: left");
  };

  if (key === 's') {
    console.log(`a: `, key);
    connection.write("Move: down");
  };

  if (key === 'd') {
    console.log(`a: `, key);
    connection.write("Move: right");
  };
  
 };


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);

   return stdin;
};


//For other file use, do not remove
module.exports = { setupInput };