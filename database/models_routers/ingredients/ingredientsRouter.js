const router = require('express').Router();
const ingredient = require('./ingredientsModel');

router.get('/allIngredients', (req, res) => {
  ingredient.findAllIngrdients()
      .then(ingredients => {
        res.json(ingredients);
      })
      .catch(err => res.send(err));
  });

  
router.get('/:id', (req, res) => {
    const { id } = req.params;
    ingredient.findById(id)
    .then(ingredient => {
      if (ingredient) {
        res.json(ingredient);
      } else {
        res.status(404).json({ message: 'Could not find ingredient with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredient' });
    });
  });

module.exports = router;
