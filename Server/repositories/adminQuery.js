const { DB_NAME, DB_TABLE_REQUEST_USER, DB_TABLE_USER, DB_TABLE_FOLDER, DB_TABLE_FLASHCARD, DB_TABLE_CARD ,  } = require('../utils/secrets');

const getResquestQuery = `SELECT * FROM ${DB_NAME}.${DB_TABLE_REQUEST_USER}`
const deleteRequest = `DELETE FROM ${DB_NAME}.${DB_TABLE_REQUEST_USER} WHERE id_user = ? `
const setStatusUser = `UPDATE ${DB_NAME}.${DB_TABLE_USER} SET status = ? WHERE id = ? `
const banFolder = `UPDATE ${DB_NAME}.${DB_TABLE_FOLDER} SET is_hidden = ? WHERE id_user `
const banFlashCard = 
`UPDATE ${DB_NAME}.${DB_TABLE_FLASHCARD}
JOIN ${DB_NAME}.${DB_TABLE_FOLDER} ON ${DB_NAME}.${DB_TABLE_FLASHCARD}.id_folder = ${DB_NAME}.${DB_TABLE_FOLDER}.id_folder
SET ${DB_NAME}.${DB_TABLE_FLASHCARD}.is_hidden = ?
WHERE ${DB_NAME}.${DB_TABLE_FOLDER}.id_user = ?`
const banCard = 
`UPDATE ${DB_NAME}.${DB_TABLE_CARD}
JOIN ${DB_NAME}.${DB_TABLE_FLASHCARD} ON ${DB_NAME}.${DB_TABLE_CARD}.name_flash_card = ${DB_NAME}.${DB_TABLE_FLASHCARD}.name_flash_card
JOIN ${DB_NAME}.${DB_TABLE_FOLDER} ON ${DB_NAME}.${DB_TABLE_FLASHCARD}.id_folder = ${DB_NAME}.${DB_TABLE_FOLDER}.id_folder
SET ${DB_NAME}.${DB_TABLE_CARD}.is_hidden = ?
WHERE ${DB_NAME}.${DB_TABLE_FOLDER}.id_user = ? `


module.exports = {
    getResquestQuery,
    deleteRequest,
    setStatusUser,
    banFolder,
    banFlashCard,
    banCard,
}