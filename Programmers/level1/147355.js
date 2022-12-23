function solution(t, p) {
    var answer = 0;
//     1. t중에 p의 첫 숫자보다 작거나 같은 것을 찾는다. (7-3 = 4)
//     2. p와 비교한다.
//     3. 작거나 같다면 answer++
    for(let i=0; i<=t.length-p.length; i++) {
        if(t.slice(i,i+p.length)<=p) {
            answer++;
        }
    }
    return answer;
}