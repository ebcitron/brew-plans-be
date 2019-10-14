const db = require('../../dbConfig.js');

module.exports = {
    findAllRecipes,
    findById
  };
  
  function findAllRecipes() {
    return db('user_recipes');
  }
  
  function findById(id) {
    return db('user_recipes')
      .where({ id })
      .first();
}