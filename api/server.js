const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

const usersRouter = require('../database/models_routers/users/usersRouter.js')
const ingredientsRouter = require('../database/models_routers/ingredients/ingredientsRouter.js')
const recipeRouter = require('../database/models_routers/user_recipes/user_recipes_router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);
server.use('/ingredients', ingredientsRouter)
server.use('/recipes', recipeRouter)

//test endpoints
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

module.exports = server;