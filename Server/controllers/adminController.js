const adminModel = require('../models/admin.model');

const adminController = (req, res, next) => {
    return res.status(200).json({
        status: "sucess",
        message: "access api admin successfully"
    })
}
const getResquestUser = (req,res,next)=>{
    adminModel.getResquest((err,data)=>{
        if(err){
            return res.status(500).json({
                status : "error",
                message: err.message
            })
        }
        if(Object.keys(data).length <= 0 ){
            return res.status(404).json({
                status : "error",
                message: "the resquest user is empty"
            })
        }
        return res.status(200).json({
            status :"sucess",
            requsetUser : data
        })
    })

}

const banUser = (req,res,next)=>{ 
    const {idUser} = req.params;
    adminModel.banUser(idUser,(err, data)=>{
        if(err){
            return res.status(500).json({
                status : 'error',
                message: err.message
            })
        }


        return res.status(200).json({
            status: "success",
            message : data
        })
    })
}
const  veridateEmail = (req, res , next)=>{
    const {id} = req.params
    adminModel.confirmEmail(id,(err,data)=>{
        if(err){
            return res.status(500).json({
                status : 'error',
                message: err.message
            })
        }
        return res.status(200).json({
            status : 'success',
            message: data.message
        })

    })
}

module.exports = {
    adminController,
    getResquestUser,
    banUser,
    veridateEmail
}