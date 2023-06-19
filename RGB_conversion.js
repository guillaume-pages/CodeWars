// 5 Kuy RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// je reçois 3 arguments en base 10 (0123456789) et je veux convertir ça en base 16 (0123456789ABCDEF)
// 1ère partie :
// je veux que mes nombres soit dans l'intervalle 0 - 255, donc si j'ai un négatif je dois le passer en positif (fonction absolue ?)
// je veux que mes nombres ne dépasse pas 255, il faut donc que j'ai un arrondi si besoin
// une fois mes nombres convertis, je dois garder uniquement les deux premiers caractères

function rgb(r, g, b){
    const r_hexa = convertBase(r);
    const g_hexa = convertBase(g);
    const b_hexa = convertBase(b);
    const result = r_hexa + g_hexa + b_hexa;
    return result
}

function convertBase (x) {
    if (x > 255) {
        x = 255;
    }
    console.log(x)
    if (x < 0) {
        x = 0
    }
    if (x == 0) {
        x = "00";
    }
    if (x <= 9) {
      x = "0" + x
    }
    let convert = x.toString(16).toUpperCase().substr(0, 2)
    if (convert.length == 1) {
        convert = "0" + convert;
    }
    return convert
}

rgb(0, 0, 0) // 000000
rgb(0, 0, -20) // 000000
rgb(300,255,255) // FFFFFF
rgb(173,255,47) // ADFF2F
rgb(12,289,34) // 0CFF22