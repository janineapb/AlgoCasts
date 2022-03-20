// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// is there some way to improve the recursive solution? 
// MEMOIZATION-- store the arguments of each function call along with the result. 
// If the function is called again with the same arguments return the precomputed resilt rather than running the function again 
// will improve run speed
function memoize(fn){
    const cache = {};   //record of all the previous call to the function
    return function(...args){   //still don't know how many argument this function will be called with, take all arguments and assign them as array
        if (cache[args]){   //if something exist in it, then immediately return //avoiding calling the same fn multiple times with same args
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function slowFib(n) {   //recursive solution -- exponential time(no--no--longtime)--for every increase of n, there will be a dramatic increase of function calls that we get
    if (n < 2){     //0 or 1    if we call fib(0) we get -> 0   //if we call fib(1) we get -> 1
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

//iterative solution --- linear runtime
// function fib(n) {
//     const result = [0, 1];

//     for(let i = 2; i <= n; i++){
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }
//     return result[n];
// }
