function solution(s) {
    const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for(let i=0; i<number.length; i++) {
        s = s.replaceAll(number[i], i);
    }
    return parseInt(s);
}