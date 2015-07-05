var converters = require('color-convert')
var cwise = require('cwise')

module.exports = function (from, to) {

  var convert = cwise({
    funcName: 'convert',
    args: ['scalar', { blockIndices: -1}, { blockIndices: -1}, 'index', 'shape'],
    body: function (converter, a, b, path, shape) {
      var chunkLength = shape[shape.length - 1]
      var chunk = new Array(chunkLength)

      chunk[0] = a[0]
      chunk[1] = a[1]
      chunk[2] = a[2]
      if (chunkLength === 4) {
        chunk[3] = a[3]
      }

      converter(chunk).forEach(function (d, i) {
        b[i] = d
      })
    }
  })

  var converter = converters[from][to]

  return function convertData (input, output) {
    if (!output) {
      output = input
    }

    convert(converter, input, output)

    return output
  }
}
