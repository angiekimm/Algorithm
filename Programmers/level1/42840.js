function solution(answers) {
    var answer = [];
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];

    const firstScore = answers.filter((e,i) => e === first[i%first.length]).length;
    const secondScore = answers.filter((e,i) => e === second[i%second.length]).length;
    const thirdScore = answers.filter((e,i) => e === third[i%third.length]).length;
    const max = Math.max(firstScore, secondScore, thirdScore);
    
    if (firstScore === max) answer.push(1);
    if (secondScore === max) answer.push(2);
    if (thirdScore === max) answer.push(3);
    
    return answer;
    
    // for(let i=0; i<answers.length; i++) {
    //     answer[0] += first[i%first.length] === answers[i] ? 1 : 0;
    //     answer[1] += second[i%second.length] === answers[i] ? 1 : 0;
    //     answer[2] += third[i%third.length] === answers[i] ? 1 : 0;
    // }
    // const max = Math.max(...answer)
    // for(let i=0; i<answer.length; i++){
    //     answer[i] = answer[i] === max ? i+1 : 0;
    // }
    // return answer.filter((e) => e !== 0);
}