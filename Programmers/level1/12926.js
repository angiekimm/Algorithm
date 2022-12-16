function solution(s, n) {
    // solution #1
//     let word = [];
// //     1. string 배열로 쪼개기
//     word = s.split('');
// //     2. 아스키코드로 변환 charCodeAt()
//     word = word.map((e) => e.charCodeAt());
//     console.log(word);
// //     3. n만큼 더하기
//     for(let i=0; i<word.length; i++) {
//         if(word[i] === 32) {
//             continue;
//         } else if(word[i]>=65 && word[i]<=90){
//             word[i] += n;
//             if(word[i] > 90) {
//                 word[i] -= 26;
//             }
//         } else {
//             word[i] += n;
//             if(word[i] > 122) {
//                 word[i] -= 26;
//             }
//         }
//     }
// //     4. 예외: 공백은 공백으로 32 / 122, 90이 넘어가면 -26 하기
// //     5. 배열 요소를 string으로 변환
//     word = word.map((e) => String.fromCharCode(e));
// //     6. join()해서 string으로 만들기
//     return word.join('');
    
    // solution #2
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    
    for(let i=0; i<s.length; i++) {
        let text = s[i];
        if(text === ' ') {
            answer += ' ';
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) + n;
        if (index >= textArr.length) {
            index -= textArr.length;
        }
        answer += textArr[index];
    }
    console.log(answer)
    
    return answer;
}