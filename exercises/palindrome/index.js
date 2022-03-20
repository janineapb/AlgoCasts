// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples: 
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// asked to return true or false

//every array helper = do a boolean check on every element in an array
//not ideal but talks about array
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]      //return between current element and mirror element on the side of the array
    });
}

module.exports = palindrome;

//most direct solution 
// function palindrome(str) {
//     const reversed = str.split('').reverse().join(''); //reverse string
//     return str === reversed;
// }
