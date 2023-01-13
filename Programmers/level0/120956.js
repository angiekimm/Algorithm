function solution(babbling) {
    var answer = 0;
    const baby = ['aya', 'ye', 'woo', 'ma'];
    for(let word of babbling) {
        for(let x of baby) {
            if(word.includes(x)) {
                word = word.split(x).join(' ');
            }
        }
        if(word.split(' ').join('').length === 0) answer++;
    }
    return answer;
}