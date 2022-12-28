function solution(X, Y) {
    var answer = '';
    let numberX = {};
    let numberY = {};
    for(let x of X) {
        numberX[x] ? numberX[x] += 1 : numberX[x] = 1;
    }
    for(let y of Y) {
        numberY[y] ? numberY[y] += 1 : numberY[y] = 1;
    }
    for(let key in numberX) {
        if(numberY[key] !== undefined) {
            answer += key.repeat(numberX[key] <= numberY[key] ? numberX[key] : numberY[key]);
        }
    }
    if(answer === '') return '-1';
    else if(+answer === 0) {
        return '0'
    }
    return [...answer].reverse().join('');
}