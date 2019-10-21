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
  return db('users as u')
  .join('user_recipes as ur','ur.user_id', 'u.id')
  .select('ur.id', 'ur.title', 'ur.brew_type', 'ur.public_private', 'ur.water_temp', 'ur.ingredient_qty')
  .orderBy('ur.id')
  .where({ user_id })
}

