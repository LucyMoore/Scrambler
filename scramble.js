// var express = require('express');
// var fs      = require('fs');
// var request = require('request');

// module.exports =
function scramble (req){
//receive the original unscrambled word from POST req from client
// var origWord = JSON.stringify(req.body.xxx)

//convert word with split() into an array
var origArr = req.split('')
var maxLen = origArr.length

//assign a new index to each element in the array
    for(var i = 0; i <= maxLen; i++){
      for(var j = 0; j <= Math.floor(Math.random() * maxLen); j++){
        var x = origArr[i]
        origArr[i] = origArr[j]
        origArr[j] = x
        }
        var scrambled = origArr.join('')
      }
        console.log('x', x, 'j', j, 'i', i, 'arr', origArr)
   var result = check(scrambled, req)
   console.log('result:', result, '!!!')
   return result
}

function check(scrambled, req){
  if(scrambled == req || scrambled == undefined){
    console.log('words equal', scrambled,'=', req)
    scramble(scrambled)
  } else {
  console.log('checked:', scrambled)
  return scrambled
}
}
//check('cat', 'cat')
scramble('cat')

//join the newly scrambled array into a word string
// var scrambled = origArr.join('')
//if scrambled === req, then run loop again

// POST the scrambled word back to client

//when the client types in solution receive it as a POST req
//ignore case when checking if solution === original word
//if they match then true
//if not then false

//if they hit help =>>> do what?


