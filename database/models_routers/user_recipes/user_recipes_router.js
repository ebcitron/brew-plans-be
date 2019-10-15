const router = require('express').Router();
const Recipes = require('./user_recipes_model');

router.get('/allRecipes', (req, res) => {
  Recipes.findAllRecipes()
      .then(recipes => {
        res.json(recipes);
      })
      .catch(err => res.send(err));
  });

  
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Recipes.findById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recpie' });
    });
  });


router.post('/newrecipe', (req, res) => {

    let recipe = req.body;

    Recipes.add(recipe)
      .then(saved => {
        res.status(201).json({
          recipe: saved
        });
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

  router.delete('/:id', (req, res) => {
    const { id }  = req.params; 
  
    Recipes.removeRecipe(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete recipe' });
    });
  });


module.exports = router;
