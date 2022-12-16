function solution(n) {
    var answer = 1;
    for(let i=3; i<=n; i+=2) {
        if(isPrime(i)) answer++;
    }
    return answer;
}
function isPrime(n) {
    for (let i=3; i*i<=n; i++) {
        if(n%i===0) {
            return false;
        }
    }
    return true;
    
}