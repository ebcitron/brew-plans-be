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

  async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

  function removeUser(id) {
    return db('users')
      .where({ id })
      .del()
}