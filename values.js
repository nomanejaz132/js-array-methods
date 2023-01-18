// The values() method returns a new array iterator object that iterates the value of each index in the array.

// Example 1
const array1 = ["a", "b", "c"];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}
