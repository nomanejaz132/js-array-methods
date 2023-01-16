// The at() method takes an integer value and returns the item at that index,
// allowing for positive and negative integers.
// Negative integers count back from the last item in the array.

// Example 1
const array1 = [5, 12, 8, 130, 44];
let index = 2;

console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`
);

index = -2;
console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
