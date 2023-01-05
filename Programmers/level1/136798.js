function solution(number, limit, power) {
    var answer = 0;   
    for(let i=1; i<=number; i++) {
        let div = divisor(i);
        div > limit ? answer += power : answer += div;
    }
    return answer;
}

function divisor(num) {
    let sum = 0;
    for(let i=1; i*i<num; i++) {
        if (num % i === 0) sum++;
    }
    return Number.isInteger(Math.sqrt(num)) ? sum*2 + 1 : sum*2;
}

// number까지 숫자의 약수의 갯수를 구한다.
// 약수의 갯수가 limit보다 크면 약수의 갯수를 power로 정한다.
// 약수의 갯수를 모두 더한다.