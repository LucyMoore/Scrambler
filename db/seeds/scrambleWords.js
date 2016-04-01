
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('words').del(),

    // Inserts seed entries
    knex('words').insert({id: 1, word: 'scramble', difficulty: 'medium'}),
    knex('words').insert({id: 2, word: 'database', difficulty: 'medium'}),
    knex('words').insert({id: 3, word: 'programming', difficulty: 'hard'}),
    knex('words').insert({id: 4, word: 'bash', difficulty: 'easy'}),
    knex('words').insert({id: 5, word: 'hyperscript', difficulty: 'hard'}),
    knex('words').insert({id: 6, word: 'git', difficulty: 'easy'})

  );
};
