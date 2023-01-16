// The find() method returns the first element in the provided array that satisfies
// the provided testing function. If no values satisfy the testing function, undefined is returned.

// Example 1
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);

console.log(found);

// Example 2
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
const result = inventory.find(({ name }) => name === "oranges");

console.log(result);
