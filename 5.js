// Synchronous generators. Exceptions.

function *myGen () {
  yield 1;
  throw new Error('something bad happened inside the generator');
}

var it1 = myGen();
console.log(it1.next()); // 1
console.log(it1.next()); // exception thrown
