function solution(dartResult) {
    var answer = 0;
    let stack = [0, 0, 0];
    let index = -1;
    dartArr = dartResult.split('');
    for(let i=0; i<dartArr.length; i++) {
        if(Number.isInteger(dartArr[i]*1)) {
            index++;
            if(dartArr[i] === '1' && dartArr[i+1] === '0') {
                stack[index] = 10;
                i++;
            } else {
                stack[index] = dartArr[i]*1;
            }
        } else {
            if(dartArr[i] === 'D') stack[index] **= 2;
            else if(dartArr[i] === 'T') stack[index] **= 3;
            else if(dartArr[i] === '*') {
                stack[index] *= 2;
                stack[index-1] *= 2;
            } else if(dartArr[i] === '#') {
                stack[index] *= -1;
            }
        }
    }
    return stack.reduce((acc, val) => acc + val, 0);
}