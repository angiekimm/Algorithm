function solution(arr, divisor) {
    var answer = [];
    arr.sort((a,b)=>a-b);
    arr.map((e)=> e % divisor === 0 && answer.push(e))
    return answer.length ? answer : [-1];
}