// The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.

// Example 1
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce((prev, next) => prev + next, 0);

console.log(sumWithInitial);

// Example 2
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(flattened);

// Example 3
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((prev, next) => {
  if (!prev.includes(next)) {
    return [...prev, next];
  }
  return prev;
}, []);

console.log(myArrayWithNoDuplicates);

// Example 4
const albums = [
  {
    title: "Spain",
    images: ["01.jpg", "02.jpg"],
  },
  {
    title: "Berlin",
    images: ["03.jpg", "04.jpg", "05.jpg"],
  },
];

const numImages = albums.reduce((prev, album) => {
  //   return prev + album.images.length;
  return prev.concat(album.images);
}, []);

console.log(numImages);
