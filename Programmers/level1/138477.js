function solution(k, score) {
    // solution #1
    var answer = [];
    let result = [];
    for(let i=0; i<score.length; i++) {
        if(i < k) {
            result.push(score[i]);
        }
        if(score[i] > Math.min(...result)) {
            result.pop();
            result.push(score[i]);
            result.sort((a,b)=>b-a);
        }
        answer.push(result.at(-1));
    }
    return answer;
    
    // solution #2
    // for (let x of score){
    //     result.push(x);
    //     result.sort((a,b)=>b-a);
    //     if(result.length > k) {
    //         result.pop();
    //     }
    //     answer.push(result[result.length-1]);
    // }
    // return answer;
}

