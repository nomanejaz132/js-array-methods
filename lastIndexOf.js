// The lastIndexOf() method returns the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// Example 1
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));

console.log(animals.lastIndexOf("Tiger"));

// Example 2
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let index = array.lastIndexOf(element);
while (index !== -1) {
  indices.push(index);
  index = index > 0 ? array.lastIndexOf(element, index - 1) : -1;
}

console.log(indices);
