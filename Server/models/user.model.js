// where to interact with the database
const { createUser, findInfor, findAccount_Password, findAllUser  , setConfirmEmail} = require("../repositories/userQuery")
const  {decode} = require('../utils/token')
const withTransaction = require('../service/withTransaction.mysql')
const userModel = {
    async createNewUser(users, cb) {
        try {
         await   withTransaction (async (connection) =>{
                const { account, password, email, phone, created_at } = users
                await connection.query(createUser, [account, password, email, phone, created_at])
            })
            cb(null, { account, password, email, phone })
        } catch (error) {
            cb(error, null)
        }

    },
    async findInforUsers(users, cb) {
        try {
         await  withTransaction( async (connection)=>{
            const [rows] = await connection.query(findInfor, [users.account])
           })
            cb(null, rows)
        } catch (error) {
            cb(error, null)
        }
    },
    async checkInforLogin(users, cb) {
        try {
            await withTransaction( async (connection) => {
                const { account } = users
                const [results] = await connection.execute(findAccount_Password, [account])
            })
            cb(null, results)
        } catch (error) {
            console.log(" error  at user model " + error)
            cb(error, null)
        }
    },
    async validateEmail (token , cb){
        try {
            await withTransaction( async (connection)=>{
            const userRegister = decode(token).user;
            const [user]=  await connection.query(setConfirmEmail , [userRegister])
            if(user.affectedRows == 0 ){
                throw new Error('varidate error')
            }
            })
            cb(null,{message : " varidate sucssecfully "})
        } catch (error) {
            cb(error , null)
            
        }

    }



}

module.exports = userModel;