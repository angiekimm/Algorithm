// 손익분기점
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B, C] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

// A 고정 비용 B 가변비용 C 노트북 가격
C <= B?console.log("-1"):console.log(Math.floor(A / (C - B) + 1))