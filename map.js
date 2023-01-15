// The map() method creates a new array populated with the results of calling a provided function on
// every element in the calling array.

// Example 1
const array = [1, 4, 9, 16];
const newArray = array.map((x) => x * 2);

console.log(newArray);

// Example 2
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

console.log(roots);

// Example 3
const objectArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const reformattedArray = objectArray.map(({ key, value }) => ({
  [key]: value,
}));

console.log(reformattedArray);
