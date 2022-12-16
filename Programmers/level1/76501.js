function solution(absolutes, signs) {
    var answer = 0;
    answer = absolutes.reduce((acc, val, i) => acc + val * (signs[i]?1:-1) ,0);
    // for(let i=0; i<absolutes.length; i++) {
    //     answer += absolutes[i] * (signs[i]?1:-1);
    // }
    return answer;
}