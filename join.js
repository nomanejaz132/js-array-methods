//  The join() method creates and returns a new string by concatenating all of the elements
//  in an array (or an array-like object), separated by commas or a specified separator string.
//  If the array has only one item, then that item will be returned without using the separator.

// Example 1
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());

// Example 2
const names = ["Shane", "Alan"];

console.log(names.join(" "));

// Example 3
const laptopName = "lenovo think book";

const laptopUpperCaseName = laptopName
  .split(" ")
  .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
  .join(" ");

console.log(laptopUpperCaseName);
