function solution(ingredient) {
    var answer = 0;
    let stack = []; // 재료를 차례로 저장할 배열
    ingredient.forEach((e, i) => {
        stack.push(e);
        // 뒤에서 4번째 재료가 1231일 경우 재료들을 삭제하고 정답+1
        if(stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            answer++;
        }
    })
    return answer;
}