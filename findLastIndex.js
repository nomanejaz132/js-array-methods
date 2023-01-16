// The findLastIndex() method iterates the array in reverse order and returns
// the index of the first element that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.

// Example 1
const array1 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
