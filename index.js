// Write your solution here!
// Initialize the 'cats' array with some initial values
const cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to the end of the 'cats' array
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats; // Optionally return the modified 'cats' array
}

// Function to destructively prepend a cat to the beginning of the 'cats' array
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats; // Optionally return the modified 'cats' array
}

// Function to destructively remove the last cat from the 'cats' array
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats; // Optionally return the modified 'cats' array
}

// Function to destructively remove the first cat from the 'cats' array
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats; // Optionally return the modified 'cats' array
}

// Function to append a cat to the 'cats' array non-destructively and return a new array
function appendCat(name) {
  return cats.concat(name);
}

// Function to prepend a cat to the 'cats' array non-destructively and return a new array
function prependCat(name) {
  return [name].concat(cats);
}

// Function to remove the last cat from the 'cats' array non-destructively and return a new array
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Function to remove the first cat from the 'cats' array non-destructively and return a new array
function removeFirstCat() {
  return cats.slice(1);
}

// Export the functions if needed for the test suite
module.exports = {
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
