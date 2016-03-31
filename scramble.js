// var express = require('express');
// var fs      = require('fs');
// var request = require('request');

// module.exports =
function scramble (req, res){

// var origWord = JSON.stringify(req.body.xxx)
var origArr = req.split('')
var maxLen = origArr.length

var scramArr = req.split('')

// for(var i = 0; i < maxLen; i++){
//   origArr.indexOf(origArr[i])
// }

for(var i = 0; i < maxLen; i++){
  for(var j = 0; j < parseInt(Math.random() * maxLen); j++){
    var x = origArr[i]
    origArr[i] = origArr[j]
    origArr[j] = x
  // console.log("x:", x, "j:", j, "origArr:", origArr )
  }
}

//if scrambled = req, then run again
var joined = origArr.join('')
  console.log("scrambled:", joined, req)
  return origArr.join()



// receive the original unscrambled word from POSt req from client
//do the scramble logic
//convert word by split() into array
//change the individual alphabets index in the array
//constraint every alpha cannot take their original index
//join the scrambled alpha's into word string

// POST the scrambled word back to client

//when the client types in solution receive it as a POST req
//check case => convert it to UPPERCASE
//verify it with ORIginal word
//If correct send Correct message
//if not send wrong message

//if they hit help =>>> do what?

}
scramble('treasure')
