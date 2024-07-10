const userModel = require('../models/user.model')
const { hash, compare } = require("../utils/password")
const registerController = async (req, res, next) => {
    const { account, password, email, phone } = req.body;
    const hashPassword = hash(password || "")
    const users = { account: account.trim(), password: hashPassword, email:email.trim(), phone:phone.trim() }
    try {

            // create new User
        await   userModel.createNewUser(users, (error, data) => {
                if (error) {
                    return res.status(500).send({
                        status: "error",
                        message:"register is fall ",
                        message: error.message
                    });
                } else {
                    return res.status(200).send({
                        status: "success",
                        message:"regiser successfully",
                        data: data
                    });
                }

            })
        

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: error.message
        })

    }

}
module.exports = registerController;