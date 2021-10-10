class Solution {

public int solution(int[] A) {
    if (A.length == 2) return 0;

    int minSliceTwo = A[0] + A[1];
    int minTwoIndex = 0;

    int minSliceThree = Integer.MAX_VALUE;
    int minThreeIndex = 0;

    for (int i = 2; i < A.length; i++) {
        int sliceTwo = A[i - 1] + A[i];
        if (sliceTwo < minSliceTwo) {
            minSliceTwo = sliceTwo;
            minTwoIndex = i - 1;
        }

        int sliceThree = sliceTwo + A[i - 2];
        if (sliceThree < minSliceThree) {
            minSliceThree = sliceThree;
            minThreeIndex = i - 2;
        }
    }
    int averageMinTwo = minSliceTwo*3;
    int averageMinThree = minSliceThree*2;

    if (averageMinTwo == averageMinThree) return Math.min(minTwoIndex, minThreeIndex);
    else return averageMinTwo < averageMinThree ? minTwoIndex : minThreeIndex;
}
}