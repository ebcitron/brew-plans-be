const router = require('express').Router();
const Ingredient = require('./ingredientsModel');

router.get('/all', (req, res) => {
  Ingredient.findAllIngrdients()
      .then(ingredients => {
        res.json(ingredients);
      })
      .catch(err => res.send(err));
  });

  
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Ingredient.findById(id)
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

  router.post('/newingredient', (req, res) => {

    let ingredient = req.body;

    Ingredient.add(ingredient)
      .then(saved => {
        res.status(201).json({
          ingredient: saved
        });
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

  router.delete('/:id', (req, res) => {
    const { id }  = req.params; 
  
    Ingredient.removeIngredient(id)
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

  router.put('/:id', (req, res) => {

    const { id } = req.params;
    const changes = req.body;
  
    Ingredient.updateIngredient(id, changes)
      .then(ingredient => {
        if (ingredient) {
          res.json({ updated: ingredient });
        } else {
          res.status(404).json({ message: 'Could not find ingredient id' })
        }
      })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredient' });
    });
  });
  

module.exports = router;

