const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

const Users = require('../users/usersModel.js');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/allusers', (req, res) => {
    Users.findAllUsers()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  
server.get('/users/:id', (req, res) => {
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

module.exports = server;