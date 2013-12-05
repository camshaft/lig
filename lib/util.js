
exports.parseAddress = function(address) {
  var val = parseInt(address, 10);
  return Number.isNaN(val) ? address : val;
};
