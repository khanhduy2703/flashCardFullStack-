const userModel = require('../models/user.model')
const{compare} = require('../utils/password')
const{generate,decode} = require('../utils/token')
const loginController = (req,res,next)=> {
    const users = req.body
 try {
        userModel.checkInforLogin(users,(err,data)=>{
        
      
            if(err){
                if(err.kind == "not found"){
                    return res.status(404).json({
                        status :"not found ",
                        message: `the ${ users.account } is not exsit`
                    })
                }
            }     
            if(data[0].account == users.account ){
                const token = generate(data.account);
                const hashPassword = data[0].password;
                console.log(compare(users.password ,hashPassword))
                if(compare(users.password,hashPassword)){
                    return res.status(200).json({
                        status : "Success",
                        message: "login sucessfully ",
                        token : token,
                        user :data
                        
                        
                    })
                }else{
                    return res.status(500).json({
                        status : "error",
                        message:"paswword is wrong",
                    })
                }
             

            }
        })
 } catch (error) {
    return res.status(500).json({
        status: "error",
        message:error
    })
 }
}
module.exports = loginController;