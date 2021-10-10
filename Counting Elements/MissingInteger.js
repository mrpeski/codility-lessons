function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let boolArr = new Array(A.length+2).fill(false);
    let t = 0;
    while(t <= A.length){
        let item = A[t]
        if(item > 0 && item <= A.length) {
            boolArr[item] = true
        }
        t++;
    };

    let i = 1;
    while(i < boolArr.length){
        let item = boolArr[i]
        if(item === false) return i;
        i++;
    }

    return 1;
}