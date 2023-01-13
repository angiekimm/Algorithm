function solution(babbling) {
    var answer = 0;
    const baby = ['aya', 'ye', 'woo', 'ma'];
    for(let word of babbling) {
        for(let x of baby) {
            // 연속해서 같은 발음일 경우
            if(word.includes(x.repeat(2))) {
                break;
            }
            // 발음할 수 있는 단어를 포함할때
            if(word.includes(x)) {
                // 그 단어 외에 발음할 수 있는 단어 찾기
                word = word.split(x).join(' ');
            }
        }
        // 모든 단어를 다 발음할 수 있을 경우
        if(word.split(' ').join('').length === 0) answer++;
    }
    return answer;
}