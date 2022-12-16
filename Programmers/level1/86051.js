function solution(numbers) {
    // solution #1
    var answer = 0;
    zeroToNine = [...Array(10).keys()];
    numbers.map(e => zeroToNine[e] = 0);
    answer = zeroToNine.reduce((a,b)=>a+b,0);
    return answer;
    
    // solution #2
    // return 45 - numbers.reduce((acc, val) => acc + val, 0);
}