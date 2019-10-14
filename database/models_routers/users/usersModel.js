const db = require('../../dbConfig.js');

module.exports = {
    findAllUsers,
    findById
  };
  
  function findAllUsers() {
    return db('users');
  }
  
  function findById(id) {
    return db('users')
      .where({ id })
      .first();
}