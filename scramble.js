function scramble (word){
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
  return scrambled
  }
}
// scramble('cat')

//receive the original unscrambled word from POST word from client
//convert word with split() into an array
//assign a new index to each element in the array
//join the newly scrambled array into a word string
// var scrambled = origArr.join('')
//if scrambled === req, then run loop again
// POST the scrambled word back to client
//when the client types in solution receive it as a POST req
//ignore case when checking if solution === original word
//if they match then true
//if not then false
//if they hit help =>>> do what?


