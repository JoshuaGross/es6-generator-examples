// Synchronous generators. Exception passed into generator.

function *myGen () {
  yield 1;
  yield 2;
}

var it1 = myGen();
console.log(it1.next()); // 1
console.log(it1.throw("something bad happened!")); // exception thrown from within generator
