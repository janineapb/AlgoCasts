// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

    //ES6
    function reverse(str) {
        return str.split('').reduce((rev, char) => char + rev, '');
    }

    //ES5
    // function reverse(str) {
    //     return str.split('').reduce((reversed, character) => {
    //         return character + reversed;
    //     }, ''); //starting initial value -- whenever it runs, take initial value, reversed will receive it, second element(char currently operating on in the array split)
    // }

module.exports = reverse;

////// reverse helper
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join();
// }

////// reverse helper
// function reverse(str) { //reverse helper
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

//using for loop
// function reverse(str) {
//     let reversed = ''; //create empty string

//     for (let character of str){ //for each char of provided string
//         reversed = character + reversed; // take the char and add it to the start of reversed
//     }

//     return reversed; //return variable reversed
// }
