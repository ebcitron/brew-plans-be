const db = require('../../dbConfig.js');

module.exports = {
    findAllIngrdients,
    findById
  };
  
  function findAllIngrdients() {
    return db('ingredients');
  }
  
  function findById(id) {
    return db('ingredients')
      .where({ id })
      .first();
}