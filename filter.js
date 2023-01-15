// The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented
// by the provided function.

// Example 1
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);

console.log(result);

// Example 2
const numbers = [12, 5, 8, 130, 44, 7, 16, 23];
const filteredNumber = numbers.filter((value) => value >= 10);

console.log(filteredNumber);

// Example 3
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const primeNumber = array.filter((num) => {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});

console.log(primeNumber);
