
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
    
        users
            .string('username', 60)
            .notNullable()
            .unique();
        users
            .string('password', 60).notNullable();
        users
            .string('email', 60)
            .unique();
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
