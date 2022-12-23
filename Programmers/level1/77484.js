function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    let count = 0;
    let zero = 0;
    for(let x of lottos) {
        if(!x) {
            zero++;
        } else if(win_nums.includes(x)) {
            count++;
        }
    }
    return [rank[count+zero], rank[count]];
}