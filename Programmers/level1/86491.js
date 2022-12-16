function solution(sizes) {
    // let first = [], second = [];
    // sizes.map((a) => {
    //     a.sort((a,c)=>a-c)
    //     a.map((b, i) => i%2 === 0 ? first.push(b) : second.push(b))
    // })
    // return Math.max(...first) * Math.max(...second);
    let [w, h] = sizes.reduce(([a, b], [c, d])=> [Math.max(a, Math.max(c, d)), Math.max(b, Math.min(c, d))], [0, 0]);
    return w*h;
}