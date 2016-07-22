// Synchronous generators. Exception passed into generator.

function *myGen () {
  try {
    yield 1;
    /* exception is throw here - after the first yield, but before the next one */
    yield 2;
  } catch (e) {
    yield "Caught error: " + e.toString();
  }
}

var it1 = myGen();
console.log(it1.next()); // 1
console.log(it1.throw("something bad happened!")); // "Caught error" value received
console.log(it1.next()); // done
