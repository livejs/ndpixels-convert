var converters = require('color-convert')
var cwise = require('cwise')

module.exports = function (from, to) {

  var convert = cwise({
    funcName: 'convert',
    args: ['scalar', { blockIndices: -1}, { blockIndices: -1}, 'index', 'shape'],
    body: function (converter, a, b, path, shape) {
      var chunkLength = shape[shape.length - 1]
      var chunk = new Array(chunkLength)

      for (var i = 0; i < chunkLength; i++) {
        chunk[i] = a[i]
      }

      var convertedChunk = converter(chunk)

      for (i = 0; i < chunkLength; i++) {
        b[i] = convertedChunk[i]
      }
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
