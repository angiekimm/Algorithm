console.log('Angie Hello 🙋‍♀️')

let input = require('fs').readFileSync('input.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);

// 실행: ctrl + opt + N

// 백준 제출할때 코드
// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');