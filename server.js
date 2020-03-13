const express = require('express');
const cors = require('cors');
const projectRouter = require('./projectRouters.js');
const actionRouter = require('./actionRouter.js')

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
    res.send({ message: 'Welcome to my sprint challenge API' });
});

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl} at ${new Date().toISOString()}`);

    next();
}

module.exports = server;