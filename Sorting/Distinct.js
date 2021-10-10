function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort();
    let count = 0;
    for(let i=0; i< A.length; i++){
        if(A[i] !== A[i+1]) {
            count += 1
        }
    }
    return count;
}