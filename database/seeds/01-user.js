
exports.seed = function(knex, Promise) {
  return knex('users').insert([   
    { password: "testing seed1" , email: 'testing1@gmail.com'},
    { password: "testing seed2" , email: 'testing2@gmail.com'},
    { password: "testing seed3" , email: 'testing3@gmail.com'},
    { password: "testing seed4" , email: 'testing4@gmail.com'},
    { password: "testing seed5" , email: 'testing5@gmail.com'},
    { password: "testing seed6" , email: 'testing6@gmail.com'},
    { password: "testing seed7" , email: 'testing7@gmail.com'},
  ]);
};
