function scramble (word){
  console.log('in scramble')
var origArr = word.split('')
var maxLen = origArr.length
 for(var i = 0; i <= maxLen; i++){
      for(var j = 0; j <= Math.floor(Math.random() * maxLen); j++){
        var x = origArr[i]
        origArr[i] = origArr[j]
        origArr[j] = x
        }
        var scrambled = origArr.join('')
      }
      // console.log('x', x, 'j', j, 'i', i, 'arr', origArr)
    var result = check(scrambled, word)
    // console.log('result:', result, '!!!')
    return result
  }

  function check(scrambled, word){
    if(scrambled == word || scrambled == undefined){
      // console.log('words equal', scrambled,'=', word)
      scramble(scrambled)
    } else {
    // console.log('checked:', scrambled)
    // console.log('answer', scrambled)
    return scrambled
    }
  }

module.exports = {
  scramble: scramble
}

