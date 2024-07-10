const express = require('express')
const routes = express.Router();
const registerController = require("../controllers/registerController");
const {asyncHandle} = require('../middlewares/asyncHandle')
const {checkRegister,checkinput} = require('../middlewares/checkRegister')
routes.use('/register',asyncHandle(checkinput),asyncHandle(checkRegister),registerController)
    

module.exports = routes;