function solution(s) {
    var answer = 0;
    let stack = [];
    for (let x of s) {
        stack.push(x);
        
        const same = stack.filter((e) => e === stack[0]);
        const notSame = stack.filter((e) => e !== stack[0]);
        
        if(same.length === notSame.length) {
            answer++;
            stack = [];
        }
    }
    if(stack.length !== 0) answer++;
    return answer;
}