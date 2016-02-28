var colorSpaces = require('color-space')
var cwise = require('cwise')

module.exports = function (from, to) {

  var convert = cwise({
    funcName: 'convert',
    args: ['scalar', 'scalar', 'scalar', { blockIndices: -1}, { blockIndices: -1}, 'index'],
    body: function (converter, inputLength, outputLength, input, output, path) {
      var inputChunk = new Array(inputLength)

      for (var i = 0; i < inputLength; i++) {
        inputChunk[i] = input[i]
      }

      var outputChunk = converter(inputChunk)

      for (i = 0; i < outputLength; i++) {
        output[i] = outputChunk[i]
      }
    }
  })

  var inputSpace = colorSpaces[from]
  var inputLength = inputSpace.channel.length
  var outputSpace = colorSpaces[to]
  var outputLength = outputSpace.channel.length

  var converter = inputSpace[to]

  return function convertData (input, output) {
    if (!output) {
      output = input
    }

    convert(converter, inputLength, outputLength, input, output)

    return output
  }
}
