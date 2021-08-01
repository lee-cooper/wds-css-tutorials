const array = [1, 2, 3];

// Impure function - relies on something outside
// of the function's inputs to process, and
// causes the side effect of modifying
function addElementToArray(element) {
  array.push(element);
}

// Better, but still impure - has the side effect
// of changing the input that was passed in
// pure functions never change the inputs to
// the element. It's a side effect
function addElementToArrayBetterIsh(a, element) {
  a.push(element);
}

// Inputs need to be treated as immutable variables
// This is a pure function. Doesn't rely on external
// state, doesn't change the inputs, and only uses
// it's inputs
function addElementToArrayPure(a, element) {
  return [...a, element];
}

// Pure functions will always give the same response
// given the same inputs
// Makes them easy to test, and gives peace of mind
// that it will act in the way you expect

// Downside of pure functions
// Can't affect anything outside of them. (by design)
// e.g. databases, files, etc
// Impure functions are needed, but use pure functions
// when possible
