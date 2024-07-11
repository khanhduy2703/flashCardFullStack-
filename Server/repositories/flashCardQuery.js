require('dotenv').config();

const createNewItemQuery =`INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER}(nameFolder , nameUser) VALUES(?, ?)`;
const getItemsQuery =  `SELECT * FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER} WHERE nameUser = ?`
const editItemQuery =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER} SET nameFolder = ? WHERE idFolder = ? and nameUser = ? ; 
 `
const deleteItemQuery= `DELETE FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_FOLDER} WHERE idFolder = ? and nameUser = ? `


const createNewCardQuery =`INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD}(frontCard , backCard , nameFolder) VALUES(?, ?,?)`;
const getCardsQuery =  `SELECT * FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} WHERE nameFolder = ?`
const editCardQuery =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} SET frontCard = ? , backCard = ?  WHERE idCard = ? and nameFolder = ? ; 
 `
const deleteCardQuery= `DELETE FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} WHERE idCard = ? and nameFolder = ? `

module.exports = {
    createNewItemQuery,
    getItemsQuery,
    editItemQuery,
    deleteItemQuery,
    createNewCardQuery,
    getCardsQuery,
    editCardQuery,
    deleteCardQuery
}