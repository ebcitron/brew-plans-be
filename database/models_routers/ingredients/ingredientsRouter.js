const router = require("express").Router();
const Ingredient = require("./ingredientsModel");

router.get("/all", (req, res) => {
  Ingredient.findAllIngredients()
    .then(ingredients => {
      res.json(ingredients);
    })
    .catch(err => res.send(err));
});

//id refers to recipe_id, returns array of ingredients
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Ingredient.findByRecipe(id)
    // Ingredient.findById(id)
    .then(ingredient => {
      if (ingredient) {
        res.json(ingredient);
      } else {
        console.log(ingredient);
        res
          .status(404)
          .json({ message: "Could not find ingredient with given id." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get ingredient" });
    });
});
//changed route, working on changing model to simplify this currently nonfunctional function
router.post("/:id/newingredient", (req, res) => {
  let { quantity, ingredient_title } = req.body;
  const recipe_id = req.params.id;
  Ingredient.addQuantity(quantity, recipe_id, ingredient_title).then(
    ingredient_id => {
      res
        .status(201)
        .json({ message: "Ingredient successfully added" })
        .catch(error => {
          console.log("error", error);
          res.status(500).json(error);
        });
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Ingredient.removeIngredient(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingredient with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete ingredient" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Ingredient.updateIngredient(id, changes)
    .then(ingredient => {
      if (ingredient) {
        res.json({ updated: ingredient });
      } else {
        res.status(404).json({ message: "Could not find ingredient id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get ingredient" });
    });
});

module.exports = router;
