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