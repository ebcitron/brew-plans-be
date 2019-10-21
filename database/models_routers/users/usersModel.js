const db = require('../../dbConfig.js');

module.exports = {
    findAllUsers,
    findById,
    add,
    removeUser,
    findByUsername
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

function findByUsername(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
