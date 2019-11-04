const router = require("express").Router();
const Recipes = require("./user_recipes_model");
const Instructions = require("../instructions/instructions_model");
const Ingredients = require("../ingredients/ingredientsModel");

router.get("/all", (req, res) => {
  Recipes.findAllRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => res.send(err));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let recipe = await Recipes.findById(id);
    recipe.instructions = await Instructions.findByRecipe(id);
    recipe.ingredients = await Ingredients.findByRecipe(id);
    if (recipe && recipe.instructions && recipe.ingredients) {
      res.json(recipe);
    } else {
      res
        .status(404)
        .json({ message: "Could not find user recipe with given id." });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Failed to get user recipe" });
  }
});

router.post("/newrecipe", async (req, res) => {
  let recipe = req.body;
  let instructions = recipe.instructions;
  // console.log("first instructions", instructions)
  delete recipe.instructions;
  let ingredients = recipe.ingredients;
  delete recipe.ingredients;
  try {
    const recipeResult = await Recipes.add(recipe);
    // console.log("recipeResult", recipeResult)
    const ingredientsResult = await Ingredients.handleArrayQuantity(
      "add",
      recipeResult.id,
      ingredients
    );
    // console.log("ingredientsResult", ingredientsResult)
    const instructionsResult = await Instructions.handleArrayInstructions(
      "add",
      recipeResult.id,
      instructions
    );
    // console.log("instructionsResult", instructionsResult)
    if (recipeResult && ingredientsResult && instructionsResult) {
      res.status(201).json({ message: "Recipe sucessfully added" });
    } else {
      res.status(404).json({ message: "Error adding recipe" });
    }
  } catch (error) {
    // console.log("error", error)

    res.status(500).json({ message: error });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.removeRecipe(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete recipe" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Recipes.updateUserRecipe(id, changes)
    .then(recipe => {
      if (recipe) {
        res.json({ updated: recipe });
      } else {
        res.status(404).json({ message: "Could not find user recipe id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get user recipe" });
    });
});

router.get("/user/:user_id", (req, res) => {
  const { user_id } = req.params;
  Recipes.findPostsByUserId(user_id)
    .then(recipe => {
      if (recipe) {
        console.log(recipe);
        res.json(recipe);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipes for given user" });
      }
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

module.exports = router;
