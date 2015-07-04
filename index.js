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

  var converter = converters[from][to]

  return function convertData (input, output) {
    if (!output) {
      output = input
    }
    var channelDepth = input.shape[input.shape.length - 1]
    for (var i = 0; i < input.data.length; i += channelDepth) {
      var pixel = input.data.slice(i, i + channelDepth)
      converter(pixel).forEach(function (d, j) {
        output.data[i + j] = d
      })
    }
    return output
  }
}
