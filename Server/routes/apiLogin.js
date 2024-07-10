const express = require('express');
const routes = express.Router();
const loginController = require("../controllers/loginController")

routes.use('/login', loginController)

module.exports = routes;