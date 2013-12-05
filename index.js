/**
 * Module exports
 */

var axon = require('axon');

require('./lib/util').init();

/**
 * Start listening for messages from a server
 */

module.exports = function(server, fn) {
  var sub = axon.socket('sub');
  sub.format('json');

  sub.connect(server);
  sub.on('message', function(m) {
    // an event occured
    if (m.e) return fn({
      command: m.c,
      args: m.a,
      event: 'disconnected',
      cwd: m.d
    });

    fn({
      message: new Buffer(m.m),
      cwd: m.d,
      type: m.t ? 'stdout' : 'stderr',
      command: m.c,
      args: m.a
    })
  });
  return sub;
};
