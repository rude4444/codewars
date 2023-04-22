function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"]
  
    let total = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            total++;
        }
    }

    // return number of vowels
    return total;
}
