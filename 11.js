// Async "channel" using csp.
const csp = require('js-csp');

var ch = csp.chan();

csp.takeAsync(ch, function (value) {
  return console.log('get value:', value);
});

csp.putAsync(ch, 42);
