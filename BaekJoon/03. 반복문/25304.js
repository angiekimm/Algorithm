// 영수증
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const totalPrice = parseInt(input[0]);
const totalItem = parseInt(input[1]);

let calcPrice = 0;
for (let i = 2; i < totalItem + 2; i++) {
  calcPrice += parseInt(input[i].split(' ')[0]) * parseInt(input[i].split(' ')[1]);
}
if (totalPrice === calcPrice) console.log('Yes')
else console.log('No')
