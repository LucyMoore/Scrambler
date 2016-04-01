var express = require('express');
var router = express.Router();

var Knex = require('knex')
var knexConfig = require('../../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(word)
  res.send('words');
});

router.get('/easy', function(req, res, next) {
  knex("words").where({difficulty: "easy"}).select("word")
    .then(function(result){
      res.send(getRandomEntry(result))
    })
    .catch(function(error){
      console.log(error)
    });
});

router.get('/medium', function(req, res, next) {
  knex("words").where({difficulty: "medium"}).select("word")
  .then(function(result){
      res.send(getRandomEntry(result))
    })
  .catch(function(error){
    console.log(error)
  });
});

router.get('/hard', function(req, res, next) {
  knex("words").where({difficulty: "hard"}).select("word")
  .then(function(result){
    res.send(getRandomEntry(result))
  })
  .catch(function(error){
    console.log(error)
  });
});

function getRandomEntry(arr){
  var index = Math.floor(Math.random() * (arr.length));
  return arr[index]
}

module.exports = router;
