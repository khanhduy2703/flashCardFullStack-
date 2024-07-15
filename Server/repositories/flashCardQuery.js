require('dotenv').config();



// card 
const createNewListCardQuery =
`INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD}
(frontCard , backCard , nameFlashCard  , status , imagesCard)
 VALUES(?, ? , ? , ? , ?  )`;
const getListCardsQuery = 
 `SELECT * FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} WHERE nameFlashCard = ?`;
const editCardQuery =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} SET frontCard = ? , backCard = ?  , status = ? , imagesCard = ? ,nameFlashCard = ?  WHERE nameFlashCard = ? ; `;
const deleteCardQuery= 
`DELETE FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} WHERE  nameFlashCard = ?  `;
const restStatusFlashCardQuery =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} SET status = 0 WHERE status = 1  and nameFlashCard = ?`

 /////// flashCard 
 const createNewFlashCard =
  `INSERT INTO ${process.env.DB_NAME}.${process.env.DB_TABLE_FlashCard} (nameFlashCard , nameFolder,description) VALUES (?,?,?) `
const editFlashCard =
 `UPDATE ${process.env.DB_NAME}.${process.env.DB_TABLE_FlashCard} SET nameFlashCard = ? , description = ? WHERE nameFlashCard = ?  and nameFolder = ? `
 const deleteFlashCard = 
 `DELETE FROM ${process.env.DB_NAME}.${process.env.DB_TABLE_FlashCard} WHERE nameFlashCard = ? and nameFolder = ? `
const deleteTempararyFK = `ALTER TABLE ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD}  DROP FOREIGN KEY FK_nameFlashCard;`
const addFKforCard = `ALTER TABLE ${process.env.DB_NAME}.${process.env.DB_TABLE_CARD} ADD CONSTRAINT FK_nameFlashCard FOREIGN KEY (nameFlashCard) REFERENCES lisbary_flashcard (nameFlashCard);`
module.exports = {
    createNewListCardQuery, 
    getListCardsQuery,
    editCardQuery,
    deleteCardQuery,
    restStatusFlashCardQuery,
    createNewFlashCard,
    editFlashCard,
    deleteFlashCard,
    deleteTempararyFK,
    addFKforCard
}