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
    Object.keys(input).forEach(function (i) {
      output[i] = conversions[from][to](input[i])
    })
  }

  return function (input, output) {
    if (arguments.length < 2) {
      output = zeros(input.shape, input.dtype)
    }
    fn(input, output)
    return output
  }
}
