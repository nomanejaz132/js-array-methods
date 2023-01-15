// The some() method tests whether at least one element in the array passes the test
// implemented by the provided function. It returns true if, in the array,
// it finds an element for which the provided function returns true otherwise it returns false.
// It doesn't modify the array.

// Example 1
const array = [1, 2, 3, 4, 5];
const evenNumber = array.some((element) => element % 2 === 0);

console.log(evenNumber);

// Example 2
const fruits = ["apple", "banana", "mango", "guava"];

const checkAvailability = (arr, val) => {
  return arr.some((arrVal) => val === arrVal);
};

const checkFruit = checkAvailability(fruits, "orange");
console.log(checkFruit);
