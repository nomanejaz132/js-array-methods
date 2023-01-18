// The splice() method changes the contents of an array by removing
// or replacing existing elements and/or adding new elements in place

// Example 1
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);

months.splice(4, 1, "May");
console.log(months);

// Example 2
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

console.log(myFish);
