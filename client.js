const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });

  conn.setEncoding("utf8");

  
  conn.on("connect", () => {
    conn.write('Name: MAV');


    conn.on("connect", () => {
      console.log("Succesfully connected to game server")
    })
    


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

