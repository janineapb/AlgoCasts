// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//recursive solution
function steps(n, row = 0, stair = '') { //add in row argument //default row into 0 
   if (n === row){      //define base case
       return;
   }

   if (n === stair.length){
       console.log(stair);
       return steps(n, row + 1);
   }

//    if (stair.length <= row){
//        stair += '#';
//    } else {
//        stair += ' ';
//    }
//    steps(n, row, stair);

   const add = stair.length <= row ? '#' : ' ';
   steps(n, row, stair + add);
}

module.exports = steps;

// function steps(n) {
//     for (let row = 0; row < n; row++){ //iterate through rows
//         let stair = '';     //create empty string 

//         for (let col = 0; col < n; col++){     //iterate through columns
//             if (col <= row){        // if current column is equal to or less than current row
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }
