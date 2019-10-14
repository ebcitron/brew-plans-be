const router = require('express').Router();
const recipes = require('./user_recipes_model');

router.get('/allRecipes', (req, res) => {
  recipes.findAllRecipes()
      .then(recipes => {
        res.json(recipes);
      })
      .catch(err => res.send(err));
  });

  
router.get('/:id', (req, res) => {
    const { id } = req.params;
    recipes.findById(id)
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

module.exports = router;
