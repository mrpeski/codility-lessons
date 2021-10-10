// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    function prefixSums(A){
        let p = new Array(n+1).fill(0);
        for(let i=1;i<n+1;i++){
            p[i] = p[i-1] + A[i-1]
        }
        return p;
    }
    let p = prefixSums(A)
    let total = 0;
    for(let i=0;i<n;i++){
        if(A[i]===0){
            total += p[n] - p[i]
        }
    }
    return total <= 1e9 ? total : -1;
}