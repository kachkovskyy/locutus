// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
var XMLHttpRequest = {} // eslint-disable-line no-native-reassign
var window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var array_intersect_assoc = require('/Users/kvz/code/phpjs/src/php/array/array_intersect_assoc.js')

describe('src/php/array/array_intersect_assoc.js', function () {
  it('should pass example 1', function (done) {
    var $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    var $array2 = {a: 'green', 0: 'yellow', 1: 'red'}
    array_intersect_assoc($array1, $array2)
    var expected = {a: 'green'}
var $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
var $array2 = {a: 'green', 0: 'yellow', 1: 'red'}
    var result = array_intersect_assoc($array1, $array2)
    expect(result).to.deep.equal(expected)
    done()
  })
})