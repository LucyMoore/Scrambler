var express = require('express');
var router = express.Router();

var Knex = require('knex')
var knexConfig = require('../../db/knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

/* GET home page. */
router.get('/', function(req, res, next) {
  var word = getData()
  console.log(word)
  res.send('words');
});

router.get('/easy', function(req, res, next) {

});

router.get('/medium', function(req, res, next) {
  res.send('Scramblr');
});

router.get('/hard', function(req, res, next) {
  res.send('Scramblr');
});

function getData(){
  return knex('words').where('difficulty', '=', 'hard')
}
module.exports = router;
