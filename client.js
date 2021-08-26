const net = require("net");


const { IP, PORT } = require('./constants');


const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write('Name: CLS');
    conn.write
    

    conn.on("data", () => {
      conn.write("Say: @!@#$%")
    });
    
    conn.on('data', (data) => {
      console.log(data.toString());
    });


    conn.on("end", () => {
      console.log('Bye!');
    });
  });

  return conn;
};

console.log("Connecting ...");


//For other file use, do not remove:
module.exports = {connect};

