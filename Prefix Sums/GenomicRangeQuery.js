function solution(seq, seqB, seqE) {
    // write your code in JavaScript (Node.js 8.9.4)

    let impactFactors = {
        A: 1,
        C: 2,
        G: 3,
        T: 4
    };
    let impactRep = {
        A: [1,0,0,0],
        C: [1,1,0,0],
        G: [1,1,1,0],
        T: [1,1,1,1]
    };
    let result = [];

    function prefixSum(seq){
        let P = [[0,0,0,0]];
        for(let i=1; i<= seq.length;i++){
            P[i] = impactRep[seq[i]];
        }
        return P;
    }
    let prefixSums = prefixSum(seq);

    for(let k=0; k < P.length;k++){
        let diff;
        let lower = prefixSums[P[k]],
            higher = prefixSums[Q[k]+1];

        if (Q[k] != P[k]){
            let D = higher - lower, d = Q[k] - P[k];
            diff =  (D % d) != 0 ? D%d : D/d ;
        }else if (Q[k] == P[k]) {
            diff = prefixSums[Q[k+1]] - prefixSums[Q[k+1]-1]
        }

        result.push(diff);
    }
    return result;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(seq, seqB, seqE) {
    // write your code in JavaScript (Node.js 8.9.4)

    let impactFactors = {
        A: 1,
        C: 2,
        G: 3,
        T: 4
    };
    let impactRep = {
        A: [1,0,0,0],
        C: [1,1,0,0],
        G: [1,1,1,0],
        T: [1,1,1,1]
    };
    let result = [];

    function prefixSum(seq){
        let P = [0];
        for(let i=1; i< seq.length;i++){
            P[i] = impactFactors[seq[i]];
        }
        return P;
    }
    let prefixSums = prefixSum(seq);

    console.log(prefixSums)

    for(let k=0; k < seqE.length;k++){
        if(seqB[k] == seqE[k]){
            impactFactors[seq[seqB[k]]]
        }else{
            // # get counter states before and after
            let state_after_end = prefixSums[seqE[k] + 1],
                state_before_beg = prefixSums[seqB[k]];
            // # find minimum impact nucleotide in query substring
            console.log(state_after_end, state_before_beg);

            // for(let j=0;j<4;j++){
            //     if (state_after_end > state_before_beg){
            //         result.push(state_after_end - state_before_beg);
            //         break;
            //     }
            // }
        }
    }

    return result;


    //     let diff;
    //     let lower = prefixSums[P[k]],
    //         higher = prefixSums[Q[k]+1];

    //     if (Q[k] != P[k]){
    //         let D = higher - lower, d = Q[k] - P[k];
    //         diff =  (D % d) != 0 ? D%d : D/d ;
    //     }else if (Q[k] == P[k]) {
    //         diff = prefixSums[Q[k+1]] - prefixSums[Q[k+1]-1]
    //     }

    //     result.push(diff);
    // }
    // return result;
}

// Works and Scores 100%
function solution(S, P, Q) {
    results = []
    impact = {'A':1, 'C':2, 'G':3, 'T':4}
    for (let i=0; i<P.length;i++){
        let analyze = S.substring(P[i],Q[i]+1)
        if (analyze.indexOf('A')!== -1) {
            results[i] = 1
            continue
        }
        if (analyze.indexOf('C')!== -1) {
            results[i] = 2
            continue
        }
        if (analyze.indexOf('G')!== -1) {
            results[i] = 3
            continue
        }
        results[i] = 4

    }
    return results
}