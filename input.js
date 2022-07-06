const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  console.log(key);
  if (key === '\u0003') {
    console.log("Exiting ...\n");
    process.exit();
  }
};

module.exports = setupInput;