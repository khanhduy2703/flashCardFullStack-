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
//approve Account User
const checkReqRegister = (req, res, next) => {
    const {idUser} = req.params
    let {isStatus} = req.body
    const status = {
        accept : 1 , 
        reject : 2 ,
    }
    const  inforUser = {idUser , 
        statusReq : isStatus = 'accept' ? status.accept :  status.reject}
        
   if(inforUser.statusReq == 1 ){
    adminModel.setStatusUser(inforUser,(err,data)=>{
        if(err){
            return res.status(500).json({
                status: "error",
                message: err
            })
        }
        return res.status(200).json({
            status: "sucess",
            message:"the account accepted "
        })
    })
   }else {
    return res.status(200).json({
        status: "sucess",
        message:"the account rejected "
    })
   } 
   
 
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

module.exports = {
    adminController,
    getResquestUser,
    checkReqRegister,
    banUser
}