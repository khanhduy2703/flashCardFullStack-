// where to interact with the database
const pool = require('../config/connectDB')
const { createUser,findInfor ,findAccount_Password, findAllUser} = require("../repositories/userQuery")
const { hash, compare } = require("../utils/password")



const userModel = {
  async  createNewUser(users, cb) {
        
        try {
            const {account , password , email , phone} = users
            await  pool.query(createUser,[account , password , email , phone])
            cb(null,{account , password , email , phone})
        } catch (error) {
            cb(error,null)
        }
        
    },
    async findInforUsers(users,cb){
        try {
            const [rows] = await pool.query(findInfor,[users.account]) 
            cb(null,rows)  
        } catch (error) {
            cb(error,null)
        }        
    },
    async checkInforLogin(users,cb){
        try {
            const {account} = users
            const [results] = await pool.execute(findAccount_Password,[account])
            cb(null,results)
        } catch (error) {
            console.log("eror  at user model"+error)
            cb({kind:"not found"},null)
        }
    }

 

}

module.exports = userModel;