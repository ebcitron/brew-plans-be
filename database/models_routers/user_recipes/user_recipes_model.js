const db = require('../../dbConfig.js');

module.exports = {
    findAllRecipes,
    findById,
    add,
    removeRecipe,
    updateUserRecipe, 
    findPostsByUserId
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


function updateUserRecipe(id, changes) {
  return db('user_recipes').where({ id }).update(changes)
  .then(count => {
      return findById(id)
  })
}

function findPostsByUserId(user_id) {
  return db('user_recipes')
  .where({ user_id })
}

