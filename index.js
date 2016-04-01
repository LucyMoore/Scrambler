var h = require('hyperscript')
var $ = require('jquery')
var scrambledWord = "test"

var htmlStr = h('div#main', {},
                h('div#title',
                  h('h1', 'Scrambler', {style: {'color': 'red'}}),
                  h('p', 'Instructions - pick words???', {style: {'color': 'purple', 'font-size': '25px'}})

                ),
                h('div#content', {style: {'border': '3px solid #d433e0'}},
                   h('h1#anagram', scrambledWord, {style: {'color': 'red'}} ),
                   h('input', 'User Input', {style: {'height': '20px', 'width': '100px'}}),
                   h('button#submit', 'submit', {}),
                   h('div#answers',{style: {'height': '100px', 'width': '400px', border: '5px solid #44fc1b'}})
                )

              )



document.body.appendChild(htmlStr)

