
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('words', function (table) {
    table.increments();
    table.string('word');
    table.string('difficulty')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('words')
};
