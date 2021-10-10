function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let holes = new Array(A.length).fill(0);
    let res = 1;
    A.forEach((item) => {
        if(item > A.length || holes[item] == 1) {
            res = 0
        }
        holes[item] = 1;
    })
    return res;
}