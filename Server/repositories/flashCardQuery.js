require('dotenv').config();




const createNewListCardQuery =
`INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD}
(frontCard , backCard , nameFlashCard  , status , imagesCard)
 VALUES(?, ? , ? , ? , ?  )`;
const getListCardsQuery = 
 `SELECT * FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} WHERE nameFlashCard = ?`;
const editCardQuery =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} SET frontCard = ? , backCard = ?  , status = ? , imagesCard = ?   WHERE idFlashCard = ? ; `;
const deleteCardQuery= 
`DELETE FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} WHERE  idFlashCard = ?  `;
const restStatusFlashCardQuery =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} SET status = 0 WHERE status = 1  and nameFlashCard = ?`

 ///////
 const createNewFlashCard =
  `INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_FlashCard} (nameFlashCard , nameFolder,description) VALUES (?,?,?) `
const editFlashCard =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_FlashCard} SET nameFlashCard = ? , description = ? WHERE nameFlashCard = ?  and nameFolder = ? `
 const deleteFlashCard = 
 `DELETE FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_FlashCard} WHERE idFlashCard = ? and nameFolder = ? `
module.exports = {
    createNewListCardQuery, 
    getListCardsQuery,
    editCardQuery,
    deleteCardQuery,
    restStatusFlashCardQuery,
    createNewFlashCard,
    editFlashCard,
    deleteFlashCard
}