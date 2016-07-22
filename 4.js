// Synchronous generator functions. Parameters.
// Function parameter values are passed in by the generator
// constructor: the `var it1 = ...` calls below.
// Thus, the value of `x` is assigned once and never changes
// in all the examples below.
//
// You can provide a single parameter to `next` that will be
// treated as the "return value" for `yield` inside of the generator.

function *myGen1 (x) {
  yield x;
  yield x*2;
}

var it1 = myGen1(5);
console.log(it1.next()); // displays 5
console.log(it1.next()); // displays 10
console.log(it1.next()); // done

function *myGen2 (x) {
  yield (yield x);
}

var it2_1 = myGen2(6);
console.log(it2_1.next()); // displays 6
console.log(it2_1.next()); // displays undefined
console.log(it2_1.next()); // done

var it2_2 = myGen2(7);
console.log(it2_2.next()); // displays 7
console.log(it2_2.next(8)); // displays 8
console.log(it2_2.next()); // done
