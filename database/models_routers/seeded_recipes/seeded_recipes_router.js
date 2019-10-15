const router = require('express').Router();
const seededRecipes = require('./seeded_recipes_model');

router.get('/allseeded', (req, res) => {
  seededRecipes.findAllSeededRecipes()
      .then(recipes => {
        res.json(recipes);
      })
      .catch(err => res.send(err));
  });

  
router.get('/:id', (req, res) => {
    const { id } = req.params;
    seededRecipes.findById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
  });

  router.post('/newseededrecipe', (req, res) => {

    let recipe = req.body;

    seededRecipes.add(recipe)
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
  
    seededRecipes.removeSeededRecipe(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find ingredient with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete ingredient' });
    });
  });


module.exports = router;

