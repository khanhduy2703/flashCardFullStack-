const userModel = require("../models/user.model")


const checkRegister = async (req, res, next) => {
    const users = req.body;
    // check account
    await userModel.findInforUsers(users, (err, data) => {

        if (err) {
            return res.status(404).send({
                status: "error",
                message: err.message
            })
        } else {
            if (data.length > 0) {
                return res.status(200).send({
                    status: "error",
                    message: "The information already exist "
                })
            }
        }
        next();
    })


}
const checkinput = (req, res, next) => {
    const { account, password, email, phone } = req.body;
    if (account == null || password == null || email == null || phone == null) {
        return res.status(404).send({
            status: "error",
            message: "Missing input"
        })
    }
    next();
}
module.exports = { checkRegister , checkinput };