function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0; i<n; i++){
        let bin = (arr1[i] | arr2[i]).toString(2);
        bin = bin.padStart(n, '0').replaceAll('0', ' ').replaceAll('1', '#');
        answer.push(bin)
    }
    return answer;
}