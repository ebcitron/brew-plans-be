exports.seed = function(knex, Promise) {
  return knex("seeded_recipes").insert([
    {
      title: "Pour Over Seed Recipe",
      instructions:
        "Bring at least 600 grams(20 oz) of water to a boil.////Place a filter in the dripper and pre-wet filter.////Place brewer over cup or carafe, add 30 grams ground coffee, and tap to level surface.////Pour 60 grams of water, ensuring all grounds are saturated.//// Wait 30 seconds.////Pour 90 grams of water in a spiral from the middle to the filter and back to the middle.////Wait 50 seconds.////Pour 100 grams of water in the same pattern as the previous pour.////Once the water has drained, pour an additional 100 grams of water.////Enjoy!",
      brew_type: "Pour Over",
      water_temp: 205,
      coarseness: "Medium"
    }
  ]);
};
