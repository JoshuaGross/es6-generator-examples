// Create synchronous iterator functions; iterate over some numbers.
// Use `for..of` to iterate over them.

function *myIterator1 () {
  yield 1;
  yield 2;
}

function *myIterator2 () {
  yield 1;
  return 2;
}

// Will display 1 and 2
for (var v of myIterator1()) {
  console.log('Value from iterator 1:', v);
}

// Will only display 1, since 2 is marked as `done`
for (var v of myIterator2()) {
  console.log('Value from iterator 2:', v);
}
