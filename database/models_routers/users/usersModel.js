const db = require('../../dbConfig.js');

var users = [
  { id: 1, username: 'testing1', password: "testingseed1" },
  { id: 2, username: 'testing2', password: "testingseed2" },
  { id: 3, username: 'testing3', password: "testingseed3" },
  { id: 4, username: 'testing4', password: "testingseed4" },
];

module.exports = {
    findAllUsers,
    findById,
    add,
    removeUser,
    findByEmail,
    FindByUsername
  };
  
  function findAllUsers() {
    return db('users');
  }
  
  function findById(id) {
    return db('users')
      .where({ id })
      .first();
}

function add(user) {
  return db('users').insert(user, 'id').then((id) => {
     return findById(id[0]);
   })
 }
 
  function removeUser(id) {
    return db('users')
      .where({ id })
      .del()
}

    
function findByEmail(email) {
  return db('users')
    .where({ email })
    .first();
}

function FindByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}
 