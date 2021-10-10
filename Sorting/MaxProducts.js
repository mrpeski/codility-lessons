function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=>a-b); // Be weary of .sort() without a predicate
    // console.log(A)
    let N = A.length, leftBound = A[N-1]*A[N-2]*A[N-3],
        rightBond = A[0]*A[1]*A[N-1];

    return Math.max(leftBound, rightBond)
}