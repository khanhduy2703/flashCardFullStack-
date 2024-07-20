const { DB_NAME, DB_TABLE_CARD, DB_TABLE_FLASHCARD } = require('../utils/secrets');
// card 
const createNewListCardQuery =
  `INSERT INTO ${DB_NAME}.${DB_TABLE_CARD}
(front_card , back_card , name_flash_card  , status , image_card)
 VALUES(?, ? , ? , ? , ?  )`;
const getListCardsQuery =
  `SELECT * FROM ${DB_NAME}.${DB_TABLE_CARD} WHERE name_flash_card  = ?`;
const editCardQuery =
  `UPDATE ${DB_NAME}.${DB_TABLE_CARD} SET front_card = ? , back_card = ?  , status = ? , image_card = ? ,name_flash_card = ?  WHERE name_flash_card = ? ; `;
const deleteCardQuery =
  `DELETE FROM ${DB_NAME}.${DB_TABLE_CARD} WHERE  name_flash_card = ?  `;
const restStatusFlashCardQuery =
  `UPDATE ${DB_NAME}.${DB_TABLE_CARD} SET status = 0 WHERE status = 1  and name_flash_card = ?`

/////// flashCard 
const getFlashCard = `SELECT * FROM ${DB_NAME}.${DB_TABLE_FLASHCARD} `
const createNewFlashCard =
  `INSERT INTO ${DB_NAME}.${DB_TABLE_FLASHCARD} (name_flash_card , id_folder ,description) VALUES (?,?,?) `
const editFlashCard =
  `UPDATE ${DB_NAME}.${DB_TABLE_FLASHCARD} SET name_flash_card = ? , description = ? WHERE name_flash_card = ?  and id_folder = ? `
const deleteFlashCard =
  `DELETE FROM ${DB_NAME}.${DB_TABLE_FLASHCARD} WHERE name_flash_card = ? and id_folder = ? `
const deleteTempararyFK = `ALTER TABLE ${DB_NAME}.${DB_TABLE_CARD}  DROP FOREIGN KEY FK_name_flash_card;`
const addFKforCard = `ALTER TABLE ${DB_NAME}.${DB_TABLE_CARD} ADD CONSTRAINT FK_name_flash_card FOREIGN KEY (name_flash_card) REFERENCES lisbary_flash_card (name_flash_card);`
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
  addFKforCard,
  getFlashCard
}