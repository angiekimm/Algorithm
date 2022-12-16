function solution(arr) {
    var answer = [];
    const min = Math.min(...arr); //destructing
    answer = arr.filter((e) => e !== min);
    return answer.length ? answer : [-1];
}