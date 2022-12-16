function solution(x) {
    var answer = true;
    const sum = String(x).split('').map(e=>Number(e)).reduce((x,y)=>x+y,0);
    answer = x%sum === 0;
    return answer;
}