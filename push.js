// The push() method adds one or more elements to the end of an array and returns the new length of the array.

// Example 1
const animals = ["goats", "sheep"];
const count = animals.push("cows");

console.log(count);
console.log(animals);

animals.push("chickens", "cats", "dogs");
console.log(animals);

// Example 2
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports);
console.log(total);

// Example 3
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];
vegetables.push(...moreVegs);

console.log(vegetables);
