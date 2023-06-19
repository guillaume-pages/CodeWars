// Kuy 6 Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    let i = 0;
    let j = 0;
    let k = 0
    let count = 0;

    while (i < A.length) {
        j = A[i]
        k = 0
        while (k < A.length) {
            if (A[k] == j) {
                count += 1
            }
            k++;
        }
        if (count % 2 !== 0) {
            console.log("voila le numéro qui apparait en impair dans le tableau : ",j)
            return j
        }
        i++
    }
}

findOdd([7])
findOdd([1,0,1,0,1])
findOdd([0,1,0,1,0])
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])