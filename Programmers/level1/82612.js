function factorial(n) {
    return n===1 ? 1 : n + factorial(n-1);
}
function solution(price, money, count) {
    const sum = price * factorial(count);
    return money >= sum ? 0 : sum - money;
    // solution #2
    // const temp = price * count * (count+1) / 2 - money;
    // return temp > 0 ? temp : 0;
}