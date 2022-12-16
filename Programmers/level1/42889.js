function solution(N, stages) {
    let answer = [];
    let people = stages.length
    for (let i = 1; i <= N; i++) {
        let tmp = stages.filter(n => n === i).length
        answer.push([i, tmp / people])
        people -= tmp
    }
    answer = answer.sort((a,b) => b[1] - a[1])
    return answer.map( a => a[0]);
    
    // var answer = [];
    // stages.sort((a,b)=>a-b);
    // for(let i=1; i<=N; i++) {
    //     let child = stages.filter((e)=>e===i).length;
    //     let parent = stages.filter((e)=>e>=i).length;
    //     answer.push([i, child/parent]);
    // }
    // answer.sort(([a,b], [c,d])=>d-b)
    // return answer.map(([a,b])=>a);
}