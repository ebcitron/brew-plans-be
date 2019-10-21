
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
             
        users
            .string('email', 60)
            .notNullable()
            .unique();
        users
            .string('password', 60)
            .notNullable();
      })
    .createTable('user_recipes', user_recipes => {
        user_recipes.increments();

        user_recipes
            .string('title', 255)
            .notNullable()
        user_recipes   
            .string('brew_type', 60)
        user_recipes
            .binary('public_private')
        user_recipes
            .integer('water_temp');
        user_recipes   
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        user_recipes
            .string('coarseness')
        // user_recipes
        //     .integer('ingredients_id')
        //     .unsigned()
        //     // .notNullable()
        //     .references('id')
        //     .inTable('ingredients')
        //     .onDelete('CASCADE')
        //     .onUpdate('CASCADE');
        user_recipes
            .integer('ingredient_qty')
    })
    .createTable('seeded_recipes', seededed_recipes => {
        seededed_recipes.increments();

        seededed_recipes
            .string('title', 60)
            .notNullable();
        seededed_recipes
            .string('instructions')
            .notNullable()
    })
    .createTable('ingredients', ingredients => {
        ingredients.increments();

        ingredients
            .string('title', 60)
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('seeded_recipes')
        .dropTableIfExists('user_recipes')
        .dropTableIfExists('users')
};
