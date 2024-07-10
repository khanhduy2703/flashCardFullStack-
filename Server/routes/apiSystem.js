const express = require('express')
const routes = express.Router();
const {systemController,createFloderController,showListFolderControllder} = require('../controllers/systemController');



routes.use('/user/:nameUser/store',showListFolderControllder);
routes.use('/user/:nameUser',createFloderController);
routes.use('/',systemController);

module.exports = routes
