var test = require('tape')
var Ndarray = require('ndarray')

var convert = require('./')

test('convert ndpixel colors', function (t) {
  var inputs = [
    ['hsv', [ 0, 100, 100 ]]
  ]
  var outputs = [
    ['rgb', [ 255, 0, 0]]
  ]

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i]
    var output = outputs[i]
    var converter = convert(input[0], output[0])
    var result = converter(Ndarray(input[1])).data
    t.deepEqual(result, output[1])
  }

  t.end()
})
