var converters = require('color-convert')
//var cwise = require('cwise')
var zeros = require('zeros')
var fs = require('fs')


module.exports = function (from, to) {
  /*

  // TODO use cwise
  // but how, if we're using color-convert?
  //
  var pre = fs.readFileSync(
    require.resolve('color-convert/conversions')
  ).toString().replace('module.exports', 'this.convert')

  console.log(pre.toString())

  var fn = cwise({
    args: ['array', 'array'],
    pre: pre,
    body: function (a, b) {
      b = this.convert(a)
    }
  })
  */

  var conversions = require('color-convert')
  var fn = function convertData (input, output) {
    var channelDepth = input.shape[input.shape.length - 1]
    var numChannels = Math.floor(input.data.length / channelDepth)
    for (var i = 0; i < numChannels; i++) {
      var pixel = input.data.slice(i, i + channelDepth)
      conversions[from][to](pixel).forEach(function (d, j) {
        output.data[i + j] = d
      })
    }
  }

  return function (input, output) {
    if (arguments.length < 2) {
      output = zeros(input.shape, input.dtype)
    }
    fn(input, output)
    return output
  }
}
