var test = require('tape')
var Ndarray = require('ndarray')

var convert = require('./')

test('convert ndpixel colors', function (t) {
  var inputs = [
    ['hsv', [
      0, 100, 100,
      120, 100, 100,
      240, 100, 100
    ], [1, 1, 3]]
  ]
  var outputs = [
    ['rgb', [
      255, 0, 0,
      0, 255, 0,
      0, 0, 255
    ], [1, 1, 3]]
  ]

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i]
    var output = outputs[i]
    var converter = convert(input[0], output[0])
    var result = converter(Ndarray(input[1], input[2])).data
    t.deepEqual(result, output[1])
  }

  t.end()
})
