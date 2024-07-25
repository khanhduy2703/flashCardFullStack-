const joi = require('joi');
const validaitonHandle = require('../middlewares/validationHandle')
const folder = (req, res, next) => {
    const shema = joi.object({
        nameFolder: joi.string()
            .trim()
            .min(1)
            .max(50)
            .required(),
        

    })
    validaitonHandle(req, res, next, shema);

}
const flashCard = (req, res, next) => {
    const shemaCard  = joi.object({
        front_card : joi.string()
            .trim()
            .min(1)
            .required(),
        back_card : joi.string()
            .trim()
            .min(1)
            .required(),
        status: joi.number(),
        image_card: joi.string() 
            .trim()
            .required()
    })
    const  shema = joi.object({
        nameFlashCard : joi.string() 
            .trim()
            .min(1)
            .max(50)
            .required(),
        description : joi.string()
            .trim()
            .max(50),   
        listCard: joi.array().items(shemaCard)
            .required()
    
    })
    validaitonHandle(req,res,next,shema)
 }


module.exports = {
    folder,
    flashCard
}