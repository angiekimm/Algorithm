function solution(n) {
    // solution #1
    // var answer = 0;
    // const third = [];
    // while(n!==0) {
    //     third.push(String(n%3));
    //     n = Math.floor(n/3);
    // }
    // return third.reverse().reduce((acc, val, i) => acc + val * Math.pow(3, i), 0);
    
    // solution #2
    return parseInt(n.toString(3).split('').reverse().join(''), 3);

}