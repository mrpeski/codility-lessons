function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let countArr = new Array(X+1).fill(false) ,
        i=0,n=A.length;
    let steps = X;
    // console.log(countArr);
    while(i<n){
        if(!countArr[A[i]]){
            countArr[A[i]] = true;
            steps -= 1;
            if (steps === 0) return i
        }
        i++;
    }
    return -1;
    // console.log(countArr);
}