// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//alternate solution
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//     const chunked = []; //array that will hold all different chunks

//     //iterate through the array
//     for (let element of array){
//         const last = chunked[chunked.length - 1]; //retrieve last element in chunked

//         if (!last || last.length === size){ //if last element does not exist, or its length is equal to chunk size
//             chunked.push([element]);    //push new chunk into chunked with current element
//         } else {
//             last.push(element);     //add current element into chunk
//         }
//     }
//     return chunked;
// }
