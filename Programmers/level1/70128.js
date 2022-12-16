function solution(a, b) {
    var answer = 0;
    answer = a.reduce((acc, val, i) => acc + val * b[i], 0);
    return answer;
}