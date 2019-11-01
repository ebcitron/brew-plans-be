exports.seed = function(knex, Promise) {
  return knex("user_recipes").insert([
    {
      title: "Pour Over User Recipe",
      brew_type: "Pour Over",
      public_private: 0,
      water_temp: 50,
      user_id: 1,
      coarseness: "fine",
      instructions:
        "Bring at least 600 grams(20 oz) of water to a boil.////Place a filter in the dripper and pre-wet filter.////Place brewer over cup or carafe, add 30 grams ground coffee, and tap to level surface.////Pour 60 grams of water, ensuring all grounds are saturated.//// Wait 30 seconds.////Pour 90 grams of water in a spiral from the middle to the filter and back to the middle.////Wait 50 seconds.////Pour 100 grams of water in the same pattern as the previous pour.////Once the water has drained, pour an additional 100 grams of water.////Enjoy!"
    },
    {
      title: "Testing seed title2",
      brew_type: "testing",
      public_private: 0,
      water_temp: 30,
      user_id: 3,
      coarseness: "fine",
      instructions:
        "Bring at least 600 grams(20 oz) of water to a boil.////Place a filter in the dripper and pre-wet filter.////Place brewer over cup or carafe, add 30 grams ground coffee, and tap to level surface.////Pour 60 grams of water, ensuring all grounds are saturated.//// Wait 30 seconds.////Pour 90 grams of water in a spiral from the middle to the filter and back to the middle.////Wait 50 seconds.////Pour 100 grams of water in the same pattern as the previous pour.////Once the water has drained, pour an additional 100 grams of water.////Enjoy!"
    },
    {
      title: "Testing seed title3",
      brew_type: "testing",
      public_private: 1,
      water_temp: 30,
      user_id: 2,
      coarseness: "rough",
      instructions:
        "Bring at least 600 grams(20 oz) of water to a boil.////Place a filter in the dripper and pre-wet filter.////Place brewer over cup or carafe, add 30 grams ground coffee, and tap to level surface.////Pour 60 grams of water, ensuring all grounds are saturated.//// Wait 30 seconds.////Pour 90 grams of water in a spiral from the middle to the filter and back to the middle.////Wait 50 seconds.////Pour 100 grams of water in the same pattern as the previous pour.////Once the water has drained, pour an additional 100 grams of water.////Enjoy!"
    },
    {
      title: "Testing seed title4",
      brew_type: "testing",
      public_private: 1,
      water_temp: 40,
      user_id: 5,
      coarseness: "fine",
      instructions:
        "Bring at least 600 grams(20 oz) of water to a boil.////Place a filter in the dripper and pre-wet filter.////Place brewer over cup or carafe, add 30 grams ground coffee, and tap to level surface.////Pour 60 grams of water, ensuring all grounds are saturated.//// Wait 30 seconds.////Pour 90 grams of water in a spiral from the middle to the filter and back to the middle.////Wait 50 seconds.////Pour 100 grams of water in the same pattern as the previous pour.////Once the water has drained, pour an additional 100 grams of water.////Enjoy!"
    },
    {
      title: "Testing seed title5",
      brew_type: "testing",
      public_private: 1,
      water_temp: 70,
      user_id: 3,
      coarseness: "rough",
      instructions:
        "Bring at least 600 grams(20 oz) of water to a boil.////Place a filter in the dripper and pre-wet filter.////Place brewer over cup or carafe, add 30 grams ground coffee, and tap to level surface.////Pour 60 grams of water, ensuring all grounds are saturated.//// Wait 30 seconds.////Pour 90 grams of water in a spiral from the middle to the filter and back to the middle.////Wait 50 seconds.////Pour 100 grams of water in the same pattern as the previous pour.////Once the water has drained, pour an additional 100 grams of water.////Enjoy!"
    }
  ]);
};
