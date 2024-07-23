const { DB_NAME, DB_TABLE_CARD } = require('../utils/secrets');
const { tableCard , tableFlashCard} = require('../utils/flieds.mysql')
const { backCard, frontCard, idFlashCard, imageCard , isHidden  ,idCard , status} = tableCard
// card 
const createNewListCardQuery =
  `INSERT INTO ${DB_NAME}.${DB_TABLE_CARD}
(${frontCard} , ${backCard} , ${idFlashCard}  , ${imageCard})
 VALUES(?, ? , ? , ?  )`;
const getListCardsQuery =
  `SELECT * FROM ${DB_NAME}.${DB_TABLE_CARD} WHERE ${idFlashCard}  = ?`;
const editCardQuery =
  `UPDATE ${DB_NAME}.${DB_TABLE_CARD} SET ${frontCard} = ? , ${backCard} = ?  , ${isHidden} = ? , ${imageCard} = ?   WHERE ${idCard} = ? and ${idFlashCard} = ?   `;
const deleteCardQuery =
  `DELETE FROM ${DB_NAME}.${DB_TABLE_CARD} WHERE  ${idFlashCard} = ?  `;
const restStatusCardQuery =
  `UPDATE ${DB_NAME}.${DB_TABLE_CARD} SET ${status} = 0 WHERE ${status} = 1  and ${idFlashCard} = ?`

module.exports = {
  createNewListCardQuery,
  getListCardsQuery,
  editCardQuery,
  deleteCardQuery,
  restStatusCardQuery
}