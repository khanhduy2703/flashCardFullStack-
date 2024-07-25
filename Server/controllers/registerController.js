const userModel = require('../models/user.model')
const { hash, compare } = require("../utils/password")
const  {generate , decode} = require('../utils/token')
const sendEmailcomfirm = require('../utils/sendEmail.confirm');
const registerController = async (req, res, next) => {
    const { account, password, email, phone } = req.body;
    const hashPassword = hash(password || "")
    const users = { account, password: hashPassword, phone, email }
    try {

        // create new User
        await userModel.createNewUser(users, (error, data) => {
            if (error) {
                return res.status(500).send({
                    status: "error",
                    message: "register is fall ",
                    message: error.message
                });
            } else {
                const token = generate(account)
                if (sendEmailcomfirm(email , token)) {
                    return res.status(200).send({
                        status: "success",
                        message: "regiser successfully",
                        data: data
                    });
                }
            }
        })


    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: error.message
        })

    }

}
const confirmEmail = (req , res , next)=>{
    const {token} = req.params
    userModel.validateEmail(token,(err , data)=>{
        if(err){
            return res.status(500).send({
                status: "error",
                message: err.message
            })
        }
        return res.status(200).send({
            status: "success",
            message: data.message
        })
    })
}

module.exports = {registerController  , confirmEmail};