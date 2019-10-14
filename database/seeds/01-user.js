
exports.seed = function(knex, Promise) {
  return knex('users').insert([   
    { username: 'testing seed username1', password: "testing seed1" , email: 'testing1@gmail.com'},
    { username: 'testing seed username2', password: "testing seed2" , email: 'testing2@gmail.com'},
    { username: 'testing seed username3', password: "testing seed3" , email: 'testing3@gmail.com'},
    { username: 'testing seed username4', password: "testing seed4" , email: 'testing4@gmail.com'},
    { username: 'testing seed username5', password: "testing seed5" , email: 'testing5@gmail.com'},
    { username: 'testing seed username6', password: "testing seed6" , email: 'testing6@gmail.com'},
    { username: 'testing seed username7', password: "testing seed7" , email: 'testing7@gmail.com'},
  ]);
};
