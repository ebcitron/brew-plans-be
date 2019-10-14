
exports.seed = function(knex, Promise) {
  return knex('user_recipes').insert([   
    { title: 'Testing seed title', public_private: 0, water_temp: 50, user_id: 1, coarseness: 'fine'},
    { title: 'Testing seed title2', public_private: 0, water_temp: 30, user_id: 3, coarseness: 'fine'},
    { title: 'Testing seed title3', public_private: 1, water_temp: 30, user_id: 2, coarseness: 'rough'},
    { title: 'Testing seed title4', public_private: 1, water_temp: 40, user_id: 5, coarseness: 'fine'},
    { title: 'Testing seed title5', public_private: 1, water_temp: 70, user_id: 3, coarseness: 'rough'},
  ]);
};
