/*
{ l: [0], i: [1,11] , g: [2], h: [3,5,15,18], t: 1, o: 1, u: 1, s: 1, e: 1, n: 1 }
*/

function countPosition (phrase) {
    var charsObj = {};
    var letters = phrase.split('');
    for (var char = 0; char < letters.length; char++) {
        var charKey = letters[char];
        if (!charsObj[charKey]){
            charsObj[charKey] = [char];
        }
        else {
            charsObj[charKey].push(char)
        }
    }
    return charsObj;
}
console.log(countPosition('lighthouse in the house'));

