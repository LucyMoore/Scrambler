var h = require('hyperscript')
var $ = require('jquery')
var request = require('superagent')
var scrambledWord = "test"
var correctWord = ''


var htmlStr = h('div#main', {},
                h('div#title',
                  h('h1', 'Scrambler', {style: {'color': 'red'}}),
                  h('p', 'Below you will see a jumble of letters, rearrange those letters to make a word', {style: {'color': 'purple', 'font-size': '25px'}}),
                  h('button#easy', 'easy', {}),
                  h('button#medium', 'medium', {}),
                  h('button#hard', 'hard', {})
                ),
                h('div#content', {style: {'border': '3px solid #d433e0'}},
                   h('h1#anagram', scrambledWord, {style: {'color': 'red'}} ),
                   h('input#userInput', 'User Input', {style: {'height': '20px', 'width': '100px'}}),
                   h('button#submit', 'submit', {}),
                   h('div#answers',{style: {'height': '100px', 'width': '400px', border: '5px solid #44fc1b'}})
                )

              )


$(document).ready(function(){
//document.body.appendChild(htmlStr)
$('body').append($(htmlStr))


// if user selects 'easy' button
$('#easy').click(function(){
  $('#answers').append('easy')
  easyWord()
})

// if user selects 'medium' button
$('#medium').click(function(){
  $('#answers').append('medium')
  mediumWord()
})

// if user selects 'hard' button
$('#hard').click(function(){
  $('#answers').append('hard')
  hardWord()
})
//requests to server endpoints?
// <6

function easyWord(){
// request
// .get('v1/easy')
// .end(function(err,data){
//   scrambledWord =  scramble.js
//append scramble to page
//   $('#anagram').html('scrambledWord')
//
// })

}
// //<10
// request
// .get('v1/medium')
// .end(function(err,data){
//   //scamble save to var
//   //save correct to var
//   //append scramble to page
// })
// // >10
// request
// .get('v1/hard')
// .end(function(err,data){
//   //scamble save to var
//   //save correct to var
//   //append scramble to page
// })

function checkAnswer(){
  var answer = $('#userInput').value
  if(userInput = correctWord){
    $('#answers').append('CORRECT!'+ '<button>test</button>')
  } else{
    $('#answers').append('WRONG! try again')
  }
}
//location.reload()
})
