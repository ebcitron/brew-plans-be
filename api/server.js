const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

// const Users = require('../users/usersModel.js');
const usersRouter = require('../users/usersRouter.js')
const ingredientsRouter = require('../ingredients/ingredientsRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);
server.use('/ingredients', ingredientsRouter)

//test endpoints
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

module.exports = server;