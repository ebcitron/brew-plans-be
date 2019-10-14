const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

// const Users = require('../users/usersModel.js');
const usersRouter = require('../users/usersRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);

//test endpoints
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

module.exports = server;