// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
// succeeding at interview questions requires practice

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');        //reverse the number

    // if(n < 0){
    //     return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed)
    // or 
    return parseInt(reversed) * Math.sign(n); //takes the if statement
}

module.exports = reverseInt;
