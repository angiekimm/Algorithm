function solution(strings, n) {
    strings = strings.map((e)=> e[n] + e).sort();
    return strings.map((e)=>e.slice(1,));
    // return strings.sort().sort((a,b) => a.charCodeAt(n)-b.charCodeAt(n));
}