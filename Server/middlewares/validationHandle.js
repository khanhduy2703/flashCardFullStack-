
const validationHandle = ( req,res,next , shema)=>{
    const {error} = shema.validate(req.body)
    if(error){
        return res.status(500).json({
            status:'errror',
            message: error.details[0].message,
            path: error.details[0].path
        })
    }
    next();

}
module.exports = validationHandle