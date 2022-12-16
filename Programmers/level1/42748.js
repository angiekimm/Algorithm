function solution(array, commands) {
    return [...commands].map((e)=> order(array, e));
}

function order(arr, [i, j, k]) {
    arr = arr.slice(i-1, j);
    return arr.sort((a,b)=>a-b)[k-1];
}