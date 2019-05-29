function countLetters (phrase) {
    var charsObj = {};
    var letters = phrase.split('');

    for (var char = 0; char < letters.length; char++){
        var count = 1;
        if (letters[char] !== ' '){
            charsObj[letters[char]] = count++;
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