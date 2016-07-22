// Synchronous generators.
// Exception thrown in generator, caught outside.

function *myGen () {
  yield 1;
  throw new Error('foobar');
  yield 2;
}

var it1 = myGen();
console.log(it1.next()); // 1
try {
  console.log(it1.next()); // exception thrown, no logging
} catch (e) {
  console.log(e.toString()); // "Error: foobar" logged
}
console.log(it1.next()); // done - no error, but we never get to `yield 2`
