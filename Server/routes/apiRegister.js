const express = require('express')
const routes = express.Router();
const {registerController , confirmEmail} = require("../controllers/registerController");
const {asyncHandle} = require('../middlewares/asyncHandle')
const {checkRegister,checkinput} = require('../middlewares/checkRegister')
const {register : validateRegister} = require('../validations/validation.user')
routes.use('/register',validateRegister ,asyncHandle(checkinput),asyncHandle(checkRegister),registerController)
routes.use('/varidate-email/:token' , confirmEmail)
    

module.exports = routes;