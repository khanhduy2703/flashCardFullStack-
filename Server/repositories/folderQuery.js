require('dotenv').config()

const createNewItemQuery =`INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER}(nameFolder , nameUser) VALUES(?, ?)`;
const getItemsQuery =  `SELECT * FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER} WHERE nameUser = ?`
const editItemQuery =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER} SET nameFolder = ? WHERE idFolder = ? and nameUser = ? ; 
 `
const deleteItemQuery= `DELETE FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER} WHERE idFolder = ? and nameUser = ? `



module.exports = {
    createNewItemQuery,
    getItemsQuery,
    editItemQuery,
    deleteItemQuery,
}