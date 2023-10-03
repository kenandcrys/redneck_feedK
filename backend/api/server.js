const express = require('express');
const cors = require('cors');
const CattleRouter = require('./feedResources/Routers/cattle-router.js');
const EquineRouter = require('./feedResources/Routers/Equine-router.js');
const SwineRouter = require( './feedResources/Routers/Swine-router.js');
const SheepAndGoatsRouter = require('./feedResources/Routers/SheepAndGoats-router.js');
const StraigtGrainsRouter = require('./feedResources/Routers/StraightGrains-router.js');
const PoultryRouter = require('./feedResources/Routers/Poultry-router.js');
const RabbitRouter = require('./feedResources/Routers/Rabbit-router.js');
const server = express();


server.use(cors());


server.use(express.json());
server.use('/api/cattle', CattleRouter);
server.use('/api/equine', EquineRouter);
server.use('/api/swine',   SwineRouter);
server.use('/api/rabbit', RabbitRouter);
server.use('/api/poultry',PoultryRouter);
server.use('/api/sheepandgoat', SheepAndGoatsRouter);
server.use('/api/straightGrain', StraigtGrainsRouter);

module.exports = server;