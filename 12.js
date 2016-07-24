// Trying to do some sort of async stream with generators.
var co = require('co');
var wait = require('co-wait');

co(function* () {
  function dates () {
    var i = 0;
    return function* () {
      if (++i === 20) return;
      yield wait(250);
      return Date.now()+'';
    };
  }

  var data;
  var read = dates();

  while (data = yield read()) {
    console.log('data yielded: %s', data);
  }

  console.log('done reading.');
});
