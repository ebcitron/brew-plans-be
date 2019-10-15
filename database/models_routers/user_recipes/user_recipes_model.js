const db = require('../../dbConfig.js');

module.exports = {
    findAllRecipes,
    findById,
    add,
    removeRecipe
  };
  
  function findAllRecipes() {
    return db('user_recipes');
  }
  
  function findById(id) {
    return db('user_recipes')
      .where({ id })
      .first();
}

async function add(recipe) {
  const [id] = await db('user_recipes').insert(recipe);

  return findById(id);
}


function removeRecipe(id) {
  return db('user_recipes')
    .where({ id })
    .del()
}