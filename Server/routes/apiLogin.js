const express = require('express');
const routes = express.Router();
const loginController = require("../controllers/loginController")
const {login : validationLogin} = require('../validations/validation.user')
routes.use('/login',validationLogin , loginController)

module.exports = routes;