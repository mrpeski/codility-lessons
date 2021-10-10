/*

Hi, again! After having counted the passing cars, it’s time we moved on from that. During this, our next challenge, we’re supposed to count some numbers, as the title clearly states. Should be easy, so let’s get to diving into it, shall we?
The task: We’re given 3 integers: A, B and K. We want to count all the integers falling within the range [A…B] that are divisible by K. For instance, take A=6, B=11 and K=2. The desired result would be 3, the numbers we’re after being 6, 8 and 10 who share the property of being divisible by 2.
Conditions and limitations: A and B fall within the range [0…2,000,000,000], K is an integer within the range [1…2,000,000,000], so unlike A and B, it can’t be 0 (for obvious reasons — we can’t divide by 0) and, what’s equally (if not more) important, A ≤ B, so we can be sure that our [A…B] range has at least 1 element.
The approach I used can be described using the below algorithm:
Calculate the next K-divisible integer that follows right after A and the previous K-divisible integer that is followed by B; these two will obviously belong to our [A…B] range, so that we can immediately potentially reduce the range we’re supposed to work with, from [A…B] to, say, [new_lower…new_upper]; I’m saying potentially, because these new boundaries can very well be equal to A and B respectively;
If these two numbers share the same value, this means that we can immediately deduce that there’s a single number that satisfies both the conditions of being divisible by K and belonging to [A…B], so return 1;
If our new upper boundary is less than our new lower boundary — it can happen, take A=B=3 and K=2, for instance, then calculate the new boundaries, you’ll get that the new upper boundary is 2 and the new lower boundary becomes 4 — then we can safely consider that no K-divisible integer can be found in [A…B], so return 0;
If we’ve reached this point, it means that we already have 2 elements on our hands that belong to [A…B] and are K-divisible: our new boundaries. There’s a thing in math that states that if A and B are both K-divisible, then their difference is also K-divisible. So, we can split the new [new_upper_boundary…new_lower_boundary] range into X intervals of length K. Finding out how many times K fits into this new range is to calculate this X. Since we now know the number of intervals to be X, the number of elements we seek would be X+1. This whole step can be achieved by simply performing an integer division between the difference of new_upper_boundary and new_lower_boundary and K, then adding 1 to that.
Full code below:

def solution(lower, upper, div):
    """Solution method implementation."""
    # step 1: calculate new boundaries
    new_lower = lower + (div - (lower % div)) % div
    new_upper = upper - (upper % div)
    # step 2: new range has 1 element (divisible by div)
    if new_lower == new_upper:
        return 1
    # step 3: new range has no elements
    if new_lower > new_upper:
        return 0
    # step 4: count the elements divisible by div
    return ((new_upper - new_lower) // div) + 1
 */

function solution(A,B,K){
    let newLower = A%K !== 0 ? A + (K - (A % K)%K) : A,
        newUpper = B%K !== 0 ? B - (B % K) : B;

        if(newLower === newUpper) return 1;

        if(newLower > newUpper) return 0;

        return Math.floor((newUpper - newLower) / K) + 1;
}