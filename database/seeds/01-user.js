
exports.seed = function(knex, Promise) {
  return knex('users').insert([   
    { username: 'testing1', password: "testingseed1" },
    { username: 'testing2', password: "testingseed2" },
    { username: 'testing3', password: "testingseed3" },
    { username: 'testing4', password: "testingseed4" },
    { username: 'testing5', password: "testingseed5" },
    { username: 'testing6', password: "testingseed6" },
  ]);
};
