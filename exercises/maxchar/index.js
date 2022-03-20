// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//char from string convert it to an object -- find property with highest num

function maxChar(str) {
    const charMap = {}; //object //iterate through charMap
    let max = 0; 
    let maxChar = ''; //character responsible for most number of uses

    for (let char of str){
        if (charMap[char]){ //if wala pa nakalagay dito
            charMap[char]++; //add 1
        } else {
            charMap[char] = 1;
        }
    }
    //console.log(charMap)
    for (let char in charMap) {     //use for in in iterating through an object 
        if (charMap[char] > max){   //if value > inital value of max then 
            max = charMap[char];    //will set max = to that new value
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
