// 그룹 단어 체커
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const caseCount = parseInt(input[0]);
let result = 0;

for (let i = 1; i < caseCount + 1; i++) {
  const word = input[i];
  let letter = [];
  let flag = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    result += 1;
  }
}
console.log(result);