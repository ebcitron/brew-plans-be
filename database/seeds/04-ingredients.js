
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { title: 'Coffee Ground', ingredient_description: 'its coffee grounds' },
    { title: 'Paper', ingredient_description: 'its coffee paper' },
    { title: 'Coffee Machine ', ingredient_description: 'its coffee machine' },
    { title: 'Beans', ingredient_description: 'its coffee beans' },
  ]);
};
