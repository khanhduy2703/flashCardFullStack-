const { DB_NAME, DB_TABLE_CARD, DB_TABLE_FLASHCARD } = require('../utils/secrets');
const {tableFlashCard} = require('../utils/flieds.mysql')
const {description,nameFlashCard,idFolder,idFlashCard,status} = tableFlashCard
/////// flashCard 
const getFlashCardbyId = `SELECT * FROM ${DB_NAME}.${DB_TABLE_FLASHCARD}  WHERE  ${idFlashCard}   = ? `
const getFlashcardByName = `SELECT * FROM ${DB_NAME}.${DB_TABLE_FLASHCARD} WHERE name_flash_card = ?  `
const createNewFlashCard =
  `INSERT INTO ${DB_NAME}.${DB_TABLE_FLASHCARD} (${nameFlashCard} , ${idFolder} ,${description}) VALUES (?,?,?) `
const editFlashCard =
  `UPDATE ${DB_NAME}.${DB_TABLE_FLASHCARD} SET ${nameFlashCard} = ? , ${description} = ? WHERE ${idFlashCard} = ?  and ${idFlashCard} = ? `
const deleteFlashCard =
  `DELETE FROM ${DB_NAME}.${DB_TABLE_FLASHCARD} WHERE ${idFlashCard} = ? and ${idFolder} = ? `
const restStatusFlashCardQuery =
  `UPDATE ${DB_NAME}.${DB_TABLE_FLASHCARD} SET ${status} = 0 WHERE ${status} = 1  and ${idFlashCard} = ?`
module.exports = {
  createNewFlashCard,
  editFlashCard,
  deleteFlashCard,
  getFlashCardbyId,
  getFlashcardByName,
  restStatusFlashCardQuery
}