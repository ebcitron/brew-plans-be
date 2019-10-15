const router = require('express').Router();
const Users = require('./usersModel.js');

router.get('/allusers', (req, res) => {
    Users.findAllUsers()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Users.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get user' });
    });
  });

router.delete('/:id', (req, res) => {
    const { id }  = req.params; 
  
    Users.removeUser(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find User with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete User' });
    });
  });

module.exports = router;
