
exports.seed = function(knex, Promise) {
  return knex('seeded_recipes').insert([   
    { title: 'Testing seed title', instructions: 'do the coffee things'},
    { title: 'Testing seed title1', instructions: 'do the coffee things'},
    { title: 'Testing seed title2', instructions: 'do the coffee things'},
    { title: 'Testing seed title3', instructions: 'do the coffee things'}
  ]);
};
