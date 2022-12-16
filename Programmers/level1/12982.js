function solution(d, budget) {
    d.sort((a,b) => a-b);
    while(d.reduce((acc,val)=>acc + val, 0) > budget) {
        d.pop();
    }   
    return d.length;
}