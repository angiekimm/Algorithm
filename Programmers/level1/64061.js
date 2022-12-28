function solution(board, moves) {
    var answer = 0;
    let stack = [];
    let num = 0;
    for(let i=0; i<moves.length; i++) {
        for(let j=0; j<board.length; j++) {
            num = board[j][moves[i]-1];
            if(num) {
                if(stack[stack.length-1] === num) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(num);    
                }
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    return answer;
}