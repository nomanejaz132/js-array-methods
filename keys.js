// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

// Example 1
const array1 = ["a", "b", "c", "d"];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
