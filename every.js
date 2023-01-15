// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

// Example 1
const array1 = [1, 30, 39, 29, 10, 13];
const isBelowThreshold = array1.every((value) => value < 40);

console.log(isBelowThreshold);

// Example 2
const firstArray = [1, 2, 3, 4, 5, 6, 7];
const secondArray = [5, 6, 6];

const isSubset = secondArray.every((e) => firstArray.includes(e));

console.log(isSubset);
