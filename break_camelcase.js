// Kuy 6 Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let result = [];
    let i = 0;
    let word = "";
    while (i < string.length) {
        if (string[i] == string[i].toUpperCase()) {
            result.push(word);
            word = "";
        }
        word += string[i];
        i++
    }
    result.push(word);
    return result.join(" ")
}

solution('camelCasing') // camel Casing
solution('camelCasingTest') // camel Casing Test
solution('personGovernmentYoungLong') // person Government Young Long
solution('publicVerbsImportantRigh') // public Verbs Important Right