const {DB_NAME , DB_TABLE_FOLDER} = require("../utils/secrets")

const createNewItemQuery =`INSERT INTO ${DB_NAME}.${DB_TABLE_FOLDER}(name_folder , id_user) VALUES(?, ?)`;
const getItemsQuery =  `SELECT * FROM ${DB_NAME}.${DB_TABLE_FOLDER} WHERE id_user = ?`
const editItemQuery =
 `UPDATE ${DB_NAME}.${DB_TABLE_FOLDER} SET name_folder = ? WHERE id_Folder = ? and id_user = ? ; 
 `
const deleteItemQuery= `DELETE FROM ${DB_NAME}.${DB_TABLE_FOLDER} WHERE id_Folder = ? and id_user = ? `



module.exports = {
    createNewItemQuery,
    getItemsQuery,
    editItemQuery,
    deleteItemQuery,
}