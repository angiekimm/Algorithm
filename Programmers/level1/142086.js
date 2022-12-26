function solution(s) {
    // solution #1
    // var answer = [];
    // let stack = [];
    // let index = [];
    // for (let i=0; i<s.length; i++) {
    //     if (!stack.includes(s[i])) {
    //         answer.push(-1);
    //         stack.push(s[i]);
    //         index.push(i);
    //     } else {
    //         answer.push(i-index[stack.indexOf(s[i])]);
    //         index[stack.indexOf(s[i])] = i;
    //     }
    // }
    // return answer;    
    
    // solution #2
    var answer = [];
    let hash = {};
    for (let i=0; i<s.length; i++) {
        let letter = s[i]
        hash[letter] === undefined ? answer.push(-1) : answer.push(i-hash[letter]);
        hash[letter] = i;   
    }
    return answer;
}