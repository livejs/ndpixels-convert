# ndpixel-convert

convert ndpixels between color spaces

**stability: experimental. expect the unexpected.**

## install

with [npm](http://npmjs.org), do:

```
npm i --save ndpixel-convert
```

## usage

```
var ndarray = require('ndarray')
var convert = require('ndpixel-convert');
var hslToRgb = convert('hsl', 'rgb')

var hsl = Ndarray([0, 100, 100], [1, 3])
var rgb = Ndarray([255, 0, 0], [1, 3])
t.deepEqual(hslToRgb(hsl).data, rgb.data)
```

check out [tests](https://github.com/ahdinosaur/ndpixel-convert/blob/master/test.js)

## license

ISC
