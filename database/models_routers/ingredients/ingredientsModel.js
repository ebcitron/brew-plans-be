const db = require('../../dbConfig.js');

module.exports = {
    findAllIngrdients,
    findById,
    add,
    removeIngredient,
    updateIngredient
  };
  
  function findAllIngrdients() {
    return db('ingredients');
  }
  
  function findById(id) {
    return db('ingredients')
      .where({ id })
      .first();
}

async function add(ingredient) {
  const [id] = await db('ingredients').insert(ingredient);

  return findById(id);
}


function removeIngredient(id) {
  return db('ingredients')
    .where({ id })
    .del()
}

function updateIngredient(id, changes) {
  return db('ingredients').where({ id }).update(changes)
  .then(count => {
      return findById(id)
  })
}