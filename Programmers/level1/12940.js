// Euclidean Algorithm
function gcd(a, b) {
    const r = a % b;
    return r === 0 ? b : gcd(b, r);
}

function solution(n, m) {
    var answer = [1, 1];
    const [min, max] = n>=m ? [m, n] : [n, m];
    // 최대공약수
    // for(let i=2; i<=min; i++) {
    //     if(n%i===0 && m%i===0) {
    //         answer[0] = i;
    //     }
    // }
    answer[0] = gcd(max, min);
    // 최소공배수 
    answer[1] = n/answer[0] * m
    return answer;
}