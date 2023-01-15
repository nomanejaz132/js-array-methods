// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
// contact() method is not limited by any data type, it can concat any data type into existing array.
// concat() method does not change the nested array into a one single flat array.
// It can flat an array but only one value deep.
// If any of the arrays element is sparse/empty, the resulting array will include sparse/empty.

// Example 1
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

// Example 2
const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);

// Example 3
const num1 = [[1]];
const num2 = [2, [3]];
const numbers = num1.concat(num2);

console.log(numbers);

const array = [1, , 3];
const resultingArray = array.concat([4, 5]);

console.log(resultingArray);
