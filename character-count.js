function countLetters (phrase) {
    var charsObj = {};
    var letters = phrase.split('');

    for (var char = 0; char < letters.length; char++){
        var character = letters[char];
        if (character !== ' '){
            if (charsObj[character]) {
                charsObj[character]++;
            } else {
                charsObj[character] = 1;
            }
        }
    }
    return charsObj;
}

console.log(countLetters("lighthouse in the house"));

/*{
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
}
*/