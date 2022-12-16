function solution(n) {
    var answer = 0;
    // square root
    let sqrt = Math.sqrt(n);
    if(sqrt % 1 != 0) {
        answer = -1;
    } else {
        // power
        answer = Math.pow(sqrt+1,2);
    }
    return answer;
}