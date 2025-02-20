// Challenge 1: Array Manipulation
// Write a function that takes an array of numbers and 
// returns a new array where each element is doubled, 
// but only if the number is positive.
// Example: [1, -2, 3, -4, 5] → [2, 6, 10]

function doublePositiveNumbers(arr) {
    return arr.filter(num => num > 0).map(num => num * 2);
}

console.log(doublePositiveNumbers([1, -2, 3, -4, 5]));