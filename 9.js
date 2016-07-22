// Yield the results of another generator!

function *mySubGen () {
  yield 3;
  yield 4;
}

function *myGen1 () {
  yield 1;
  yield 2;
  yield mySubGen(); // does not work
  yield 5;
}

function *myGen2 () {
  yield 1;
  yield 2;
  yield* mySubGen(); // works - will yield all values of this generator first / delegate to this generator
  yield 5;
}

// Logs: 1 2 {} 5
for (var v of myGen1()) {
  console.log('gen 1:', v);
}

// Logs: 1 2 3 4 5
for (var v of myGen2()) {
  console.log('gen 2:', v);
}
