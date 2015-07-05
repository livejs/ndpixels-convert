# ndpixels-convert

convert ndpixels between color spaces.

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## install

with [npm](http://npmjs.org), do:

```
npm i --save ndpixels-convert
```

## usage

```
var ndarray = require('ndarray')
var convert = require('ndpixels-convert');
var hslToRgb = convert('hsl', 'rgb')

var hsl = Ndarray([0, 100, 100], [1, 3])
var rgb = Ndarray([255, 0, 0], [1, 3])
t.deepEqual(hslToRgb(hsl).data, rgb.data)
```

check out [tests](https://github.com/livejs/ndpixels-convert/blob/master/test.js)

## license

ISC
