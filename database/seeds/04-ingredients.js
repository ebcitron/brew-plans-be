
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { title: 'Coffee Ground'},
    { title: 'Paper'},
    { title: 'Coffee Machine '},
    { title: 'Beans'},
  ]);
};
