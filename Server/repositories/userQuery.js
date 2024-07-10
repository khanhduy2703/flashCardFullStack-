require('dotenv').config();
const createUser = `INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_USER}(account , password , email, phone) VALUES(?, ?, ?, ?)`
const findInfor = `SELECT * FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_USER} WHERE account = ? `
const findAccount_Password = `SELECT account , password FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_USER} WHERE account = ? `
const findAllUser = `SELECT * FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_USER} `


module.exports = {
    createUser,
    findInfor,
    findAccount_Password,
    findAllUser
    
}