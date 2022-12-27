function solution(numbers, hand) {
    var answer = '';
    let ln = '*';
    let rn = '#';
    const keys = {
        1: [0,0], 2: [0,1], 3: [0,2],
        4: [1,0], 5: [1,1], 6: [1,2],
        7: [2,0], 8: [2,1], 9: [2,2],
        '*': [3,0], 0: [3,1], '#': [3,2],
    }
    
    function calcDis(number) {
//         왼손, 오른손과 number의 거리를 각각 계산해서, 더 가까운 손을 이동시킨다.
        let leftDis = Math.abs(keys[ln][0] - keys[number][0]) + Math.abs(keys[ln][1] - keys[number][1]);
        let rightDis = Math.abs(keys[rn][0] - keys[number][0]) + Math.abs(keys[rn][1] - keys[number][1]);
        if (leftDis === rightDis) return hand === 'right' ? 'R' : 'L';
        return leftDis < rightDis ? 'L' : 'R';
    }
    
    for(let x of numbers) {
        if(x%3 === 1) {
            answer += 'L'
            ln = x;
        } else if(x%3 === 0 && x !== 0) {
            answer += 'R'
            rn = x;
        } else {
            answer += calcDis(x);
            answer[answer.length-1] === 'L' ? ln = x : rn = x;
        }
    }
    return answer;
}