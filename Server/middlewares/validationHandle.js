
const validationHandle = (req, res, next, shema) => {
    
    if(req.body.listCard){
        const listCard =JSON.parse( req.body.listCard ) 
        req.body.listCard = listCard 
    }
    const { error: errorbody } = shema.validate(req.body)
    if (errorbody) {
        return res.status(500).json({
            status: 'errror',
            message: errorbody.details[0].message,
            path: errorbody.details[0].path
        })
    } 

    next();

}
module.exports = validationHandle