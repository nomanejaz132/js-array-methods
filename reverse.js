// The reverse() method reverses an array in place and returns the reference to the same array,
// the first array element now becoming the last, and the last array element becoming the first.

// Example 1
const array1 = ["one", "two", "three"];

console.log("array1:", array1);

const reversed = array1.reverse();

console.log("reversed:", reversed);
console.log("array1:", array1);

// Example 2
const numbers = [3, 2, 4, 1, 5];
const reversedNumbered = numbers.reverse();
reversedNumbered[0] = 5;

console.log(numbers[0]);
console.log(numbers);
