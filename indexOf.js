// The indexOf() method returns the first index at which a given element can be found in the array,
// or -1 if it is not present.
// Second argument that indexOf() method take is satrt index, from which index to onwards to find the element.

// Example 1
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));

console.log(beasts.indexOf("bison", 2));

console.log(beasts.indexOf("giraffe"));

// Example 2
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let index = array.indexOf(element);
while (index !== -1) {
  indices.push(index);
  index = array.indexOf(element, index + 1);
}
console.log(indices);
