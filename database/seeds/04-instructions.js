exports.seed = function(knex, Promise) {
  return knex("instructions").insert([
    {
      order: 1,
      text: "heat water",
      recipe_id: 1
    },
    {
      order: 2,
      text: "wet filter",
      recipe_id: 1
    },
    {
      order: 3,
      text: "pour hot water over coffee grounds",
      recipe_id: 1
    },
    {
      order: 4,
      text: "Enjoy",
      recipe_id: 1
    }
  ]);
};
