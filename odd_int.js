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