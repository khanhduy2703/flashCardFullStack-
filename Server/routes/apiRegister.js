const express = require('express')
const routes = express.Router();
const registerController = require("../controllers/registerController");
const {asyncHandle} = require('../middlewares/asyncHandle')
const {checkRegister,checkinput} = require('../middlewares/checkRegister')
const {register : validateRegister} = require('../validations/validation.user')
routes.use('/register',validateRegister ,asyncHandle(checkinput),asyncHandle(checkRegister),registerController)
    

module.exports = routes;