// The copyWithin() method shallow copies part of an array to another location in the same array and
// returns it without modifying its length.

// Example 1
const array1 = ["a", "b", "c", "d", "e"];

console.log(array1.copyWithin(0, 3, 4));

console.log(array1.copyWithin(1, 3));
