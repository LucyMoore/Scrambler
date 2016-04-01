var test = require('tape')
var scramble = require('../scramble')

test('testing randomify', function (t) {
  var word = scramble('suresh')
  t.notEqual(word, 'suresh', 'word is always scrambled')
  t.end()
})
