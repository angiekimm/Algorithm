function solution(n) {
    var answer = [];
    answer = String(n).split('').reverse().map(v=>Number(v));
    return answer;
}