const { DB_NAME, DB_TABLE_USER} = require('../utils/secrets')
const createUser = `INSERT INTO ${DB_NAME}.${DB_TABLE_USER}(account , password , email, phone ) VALUES(?, ?, ?, ? )`
const findInfor = `SELECT * FROM ${DB_NAME}.${DB_TABLE_USER} WHERE account = ? `
const findAccount_Password = `SELECT account , password FROM ${DB_NAME}.${DB_TABLE_USER} WHERE account = ? `
const findAllUser = `SELECT * FROM ${DB_NAME}.${DB_TABLE_USER} `


module.exports = {
    createUser,
    findInfor,
    findAccount_Password,
    findAllUser
    
}