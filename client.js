const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data)
  });
  conn.on("connect", () => {
    console.log('Successfully connected ...')
    conn.write(`Name: ADM`)
    //conn.write(`Move: up`)
  });
  conn.on("close", () => {
    console.log('Connection closed, press Ctrl-C to exit')
  });
  
  console.log("Connecting ...");
  return conn;
};

module.exports = connect;