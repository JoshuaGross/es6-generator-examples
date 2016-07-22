// Create a synchronous iterator function; iterate over some numbers.
// Does `return` work?

function *myIterator () {
  yield 1;
  return 2;
}

var it = myIterator(); // we now have an iterator
console.log(it); // logs `{}`
console.log(it.next()); // logs `{ value: 1, done: false }`
console.log(it.next()); // logs `{ value: 2, done: true }`

// Interesting! Note that (see `1.js`) the last `yield`ed value
//  will be marked as `done: false`. We get the right value (2)
//  from the return statement but be careful about that `done: true`.
// In particular, see `3.js` for..of loop examples.
