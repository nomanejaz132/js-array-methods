// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// Example 1
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);

console.log(firstElement);

// Example 2
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", JSON.stringify(myFish));

const shifted = myFish.shift();

console.log("myFish after:", myFish);

console.log("Removed this element:", shifted);
