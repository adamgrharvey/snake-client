let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



const handleUserInput = function (key) {
 // console.log(key);
  if (key === '\u0003') {
    console.log("Exiting ...\n");
    process.exit();
  }
  else if (key === 'w' || key === 'W') {
    connection.write(`Move: up`)
    console.log(`Move: up`)
  }
  else if (key === 'a' || key === 'A') {
    connection.write(`Move: left`)
    console.log(`Move: left`)
  }
  else if (key === 's' || key === 'S') {
    connection.write(`Move: down`)
    console.log(`Move: down`)
  }
  else if (key === 'd' || key === 'D') {
    connection.write(`Move: right`)
    console.log(`Move: right`)
  }

  else if (key === '1') {
    connection.write(`Say: I'M`)
    console.log(`Say: "Im"`)
  }
  else if (key === '2') {
    connection.write(`Say: THE`)
    console.log(`Say: THE`)
  }
  else if (key === '3') {
    connection.write(`Say: BEST`)
    console.log(`Say: BEST`)
  }
};

module.exports = setupInput;