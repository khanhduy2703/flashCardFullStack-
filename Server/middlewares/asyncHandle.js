const asyncHandle = (cb) => async (req,res, next)=>{
 try {
    cb(req,res,next)
 } catch (error) {
    res.header('the code is Error')
    return res.status(500).send({
        status : "error",
        message: error.message
    })
 }
 return true
}
module.exports = {
    asyncHandle
}