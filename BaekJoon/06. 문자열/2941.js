// 크로아티아 알파벳
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  for (let i of alphabet) {
    input = input.split(i).join("A");
  }
  console.log(input.length);
  process.exit();
});