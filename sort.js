// The sort() method sorts the elements of an array in place and returns the reference to the same array,
// now sorted. The default sort order is ascending

// Example 1
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

// Example 2
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

array1.sort((a, b) => a - b);
console.log(array1);

// Example 3
const items = ["Shane", "Kittie", "Sally", "Isaac"];
items.sort((a, b) => b.length - a.length);

console.log(items);

// Example 4
const lessons = [
  {
    title: "concat() method",
    views: 1000,
  },
  {
    title: "join() method",
    views: 1050,
  },
  {
    title: "slice() method",
    views: 1189,
  },
];

const list = lessons
  .sort((a, b) => b.views - a.views)
  .map((i) => `    <li>${i.title} ${i.views}</li>`)
  .join("\n");

const lessonsList = `<ul>\n${list}\n</ul>`;

console.log(lessonsList);
