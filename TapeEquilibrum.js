function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length, i = 0, y=0, total = 0;
    while(y<n) {
        total += A[y];
        y++;
    }

    let leftA = 0;
    let rightA = 0;
    let least = Number.MAX_SAFE_INTEGER, diff = Number.MAX_SAFE_INTEGER;
    while(i < n-1){
        leftA += A[i];
        rightA = total - leftA;
        diff = Math.abs(leftA - rightA);
        least = Math.min(diff, least);
        i++;
    }

    return least;
    // console.log(A);
}

// FrogRiverOne
