// The forEach() method executes a provided function once for each array element.

// Example 1
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Example 2
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);

// Example 3
const items = ["item1", "item2", "item3"];
const copyItems = [];
items.forEach((item) => {
  copyItems.push(item);
});

console.log(copyItems);
