const db = require('../../dbConfig.js');

module.exports = {
    findAllSeededRecipes,
    findById,
    add,
    removeSeededRecipe
  };
  
  function findAllSeededRecipes() {
    return db('seeded_recipes');
  }
  
  function findById(id) {
    return db('seeded_recipes')
      .where({ id })
      .first();
}

async function add(ingredient) {
  const [id] = await db('seeded_recipes').insert(ingredient);

  return findById(id);
}


function removeSeededRecipe(id) {
  return db('seeded_recipes')
    .where({ id })
    .del()
}