// First async generator.
const co = require('co');

function doSomethingAsync (cb) {
  return setTimeout(function () {
    return cb(null, 'Result: 42');
  }, 10);
}

function doSomethingAsyncPromise () {
  return new Promise(function (resolve, reject) {
    return setTimeout(function () {
      return resolve('Result: 42');
    }, 10);
  });
}

// callback hell
doSomethingAsync(function (err, result) {
  console.log("Err and result (1):", err, '/', result);
});

// direct promise resolution
doSomethingAsyncPromise().then(function (result) {
  console.log('Result of promise:', result);
});

// using `co` to interop Promises and generators / yields
co(function* () {
  var yieldedValue = yield doSomethingAsyncPromise();
  console.log('yielded value:', yieldedValue);
});

// unfortunately it seems like there's no way of
// getting away from using `co` until ES7 `async`/`await`
// are supported in your JS engine
