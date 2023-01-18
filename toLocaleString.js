// The toLocaleString() method returns a string representing the elements of the array.
// The elements are converted to Strings using their toLocaleString methods and these Strings are
// separated by a locale-specific String (such as a comma ",").

// Example 1
const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
