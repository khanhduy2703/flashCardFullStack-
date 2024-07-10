require('dotenv').config();

const createNewFolderQuery =`INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER}(nameFolder , nameUser) VALUES(?, ?)`;
const getFoldersQuery =  `SELECT * FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER} WHERE nameUser = ?`



module.exports = {
    createNewFolderQuery,
    getFoldersQuery
}