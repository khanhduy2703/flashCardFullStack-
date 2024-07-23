const joi = require('joi');
const validationHandle = require('../middlewares/validationHandle')
const register = ( req , res , next) =>{
    const shema = joi.object({
        account : joi.string()
            .trim()
            .min(1)
            .max(50)
            .alphanum()
            .required(),
        password: joi.string()
            .trim()
            .min(8)
            .max(16)
            .pattern(RegExp(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/)) // check password have to A form Z , anh exsit one charater specical
            .required(),
        email : joi.string()
            .trim()
            .email()
            .required(),
        phone: joi.string()
            .trim()
            .pattern(RegExp(/^[0-9]{10}$/)) // The phone number must have 10 digits
            .required()
    })
    validationHandle(req,res,next,shema)

}



module.exports = {
    register
}