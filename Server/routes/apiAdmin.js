const express = require('express');
const routes = express.Router();

const { adminController, getResquestUser  , banUser  } = require('../controllers/adminController');

routes.use('/ban/:idUser',banUser)
routes.use('/users', getResquestUser)
routes.use('/', adminController)

module.exports = routes