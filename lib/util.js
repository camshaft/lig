/**
 * Module dependencies
 */

var axon = require('axon');

exports.parseAddress = function(address) {
  var val = parseInt(address, 10);
  return Number.isNaN(val) ? address : val;
};

exports.init = function() {
  axon.codec.define('json', {
    encode: JSON.stringify,
    decode: JSON.parse
  });
};
