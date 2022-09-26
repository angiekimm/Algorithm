// 손익분기점
const input = require("fs").readFileSync("input.txt").toString().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

// A 고정 비용 B 가변비용 C 노트북 가격
A / (C - B) + 1 < 0 ? console.log("-1") : console.log(A / (C - B) + 1);