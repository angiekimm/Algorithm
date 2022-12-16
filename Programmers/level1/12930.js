function solution(s) {
    var answer = [];
    s.split(' ').map((a) => answer.push(a.split('').map((b, i) => i%2 === 0 ? b.toUpperCase() : b.toLowerCase()).join('')));
    return answer.join(' ');
}