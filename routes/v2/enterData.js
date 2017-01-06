var express = require('express');
var router = express.Router();

var Knex = require('knex')
var knexConfig = require('../../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

outer.get('/local', function(req, res, next) {
  knex("words").where({difficulty: "easy"}).select("word")
    .then(function(result){
      res.send(getRandomEntry(result))
    })
    .catch(function(error){
      console.log(error)
    });
});
