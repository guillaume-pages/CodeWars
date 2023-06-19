function findMissingLetter(chars) {
    for (let i = 0; i <= chars.length; i++) {
      if (chars[i + 1].charCodeAt() - chars[i].charCodeAt() > 1) {
        const missingCharCode = chars[i].charCodeAt() + 1;
        return String.fromCharCode(missingCharCode);
      }
    }
}