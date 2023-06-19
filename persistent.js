// Kuy 6 Persistent Bugger.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  
    if (num < 10) return 0;
  
    let chiffres = num.toString().split('').map(Number);
    let count = 0;
    
    while (chiffres.length > 1){
        let i = 0;
        let result = 1;

        while (i < chiffres.length) {
            result *= chiffres[i];
            i++;
        }
        chiffres = result.toString().split('').map(Number);
        count += 1
    }
    
    console.log(count);
    return count;
}

persistence(999);