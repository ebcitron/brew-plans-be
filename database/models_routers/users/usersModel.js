const db = require('../../dbConfig.js');

module.exports = {
    findAllUsers,
    findById,
    add,
    removeUser
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