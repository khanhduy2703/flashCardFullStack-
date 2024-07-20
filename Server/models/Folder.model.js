const
    { createNewItemQuery,
        getItemsQuery,
        editItemQuery,
        deleteItemQuery }
        = require('../repositories/folderQuery')
const pool = require('../config/connectDB')
const systemModel = {
    async createItem(inforItem, cb) {
        const {nameFolder  , id } = inforItem
        try {
            await pool.query(createNewItemQuery, [nameFolder  , id ]);
            cb(null, { id , nameFolder   })
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async getItems(idUser, cb) {
        try {
            const [listItem] = await pool.query(getItemsQuery, [idUser]);
            cb(null, listItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async editItem(inforItem, cb) {
        const { idFolder, idUser, newName } = inforItem
        try {
          await  pool.query(editItemQuery, [newName,idFolder, idUser])
            cb(null, inforItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async deleteItem(inforItem, cb) {
        const {idFolder , idUser} = inforItem
        try {
           await pool.query(deleteItemQuery,[idFolder , idUser])
            cb(null,{idFolder })
        } catch (error) {
            cb(error,null)
        }
    }
}

module.exports = systemModel;
