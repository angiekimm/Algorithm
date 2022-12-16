function solution(number) {
    var answer = 0;
    const numberOfStudent = 3;
    for(let i=0; i<number.length-numberOfStudent+1; i++) {
        for(let j=i+1; j<number.length-numberOfStudent+2; j++) {
            for(let k=j+1; k<number.length; k++) {
                answer += number[i]+number[j]+number[k] === 0 ? 1 : 0; 
            }
        }
    }    
    return answer;
}