function narcissistic(value) {
    let chiffres = value.toString().split('').map(Number);
  //   console.log(chiffres)
    let power = chiffres.length;
    console.log(power)
    let result = 0;
    let i = 0;
    while (i < chiffres.length) {
      result += Math.pow(chiffres[i], power)
      i++
      console.log("c'est i : ", i, "c'est result : ", result)
    }
    if (result == value) {
        return true
    } else {
        return false
    }
}

narcissistic(153)