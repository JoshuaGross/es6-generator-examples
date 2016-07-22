// Create a synchronous iterator function; iterate over some numbers.

/**
 * function* is a generator function.
 */
function *myIterator () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

var it = myIterator(); // we now have an iterator
console.log(it); // logs `{}`
console.log(it.next()); // logs `{ value: 1, done: false }`
console.log(it.next()); // logs `{ value: 2, done: false }`
console.log(it.next()); // logs `{ value: 3, done: false }`
console.log(it.next()); // logs `{ value: 4, done: false }`
console.log(it.next()); // logs `{ value: 5, done: false }`
console.log(it.next()); // logs `{ value: undefined, done: true }`

// once the iterator is done, we can keep calling it and
// we'll keep getting `undefined's` out.
console.log(it.next()); // logs `{ value: undefined, done: true }`
