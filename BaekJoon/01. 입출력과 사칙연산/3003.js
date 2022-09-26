// 킹, 퀸, 룩, 비숍, 나이트, 폰
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const chess = [1, 1, 2, 2, 2, 8];
let result = "";
for (let i = 0; i < 5; i++) {
  result += (chess[i] - input[i]).toString() + " ";
}
result += (chess[5] - input[5]).toString();
console.log(result);