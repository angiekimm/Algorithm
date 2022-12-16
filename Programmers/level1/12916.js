function solution(s){
    var answer = true;
    
    s = s.toLowerCase().split('').sort();
    
    const p = s.filter(element => 'p'===element).length;
    const y = s.filter(element => 'y'===element).length;
    
    answer = p === y;
    return answer;
}