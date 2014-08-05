var fs = require('fs');

var Sails = require('sails/lib/app');

///* Make stack traces shorter and more relevant
// * by cutting full path to app and reducing height */
//var path = require('path');
//var appRoot = path.resolve(__dirname, '..')+'/';
//console.oldError = global.oldError || console.error;
//console.error = function (args) {
//  if (typeof arguments.stack !== 'undefined') {
//    console.oldError.call(console, arguments.stack);
//  } else {
//    if (typeof arguments[4] !== 'undefined') {
//      var traceToShow = arguments[4].split('\n').slice(0, 4);
//      arguments[4] = traceToShow.join('\n').replace(RegExp(appRoot, 'g'), '');
//    }
//    console.oldError.apply(console, arguments);
//  }
//}
//global.oldError = console.oldError;

var sailsprocess;

before(function (done) {

  fs.unlinkSync('.tmp/localDiskDb.db');

  Sails().lift({
    log: {
      level: 'warn'
    },
    hooks: {
      grunt: false,
      http: false,
      views: false,
      sockets: false,
      pubsub: false
    },
//    models: {
//      // Use in-memory database for tests
//      connection: 'inMemoryDb'
//    }
  }, function (err, sails) {
    if (err) {
      return done(err);
    }
    sailsprocess = sails;
    done(null, sails);
  });
});

after(function (done) {
  sailsprocess.lower(done);
});
