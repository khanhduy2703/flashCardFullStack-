const
    { createNewItemQuery,
        getItemsQuery,
        editItemQuery,
        deleteItemQuery }
        = require('../repositories/flashCardQuery')
const pool = require('../config/connectDB')
const systemModel = {
    async createItem(inforItem, cb) {
        try {
            await pool.query(createNewItemQuery, [inforItem.nameItem, inforItem.obj]);
            cb(null, { nameFolder: inforItem.nameItem, nameUser: inforItem.obj })
        } catch (error) {
            cb(error, null)
        }
    },
    async getItems(obj, cb) {
        try {
            const [listItem] = await pool.query(getItemsQuery, [obj]);
            cb(null, listItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async editItem(inforItem, cb) {
        const { idItem, obj, newName } = inforItem
        try {
          await  pool.query(editItemQuery, [newName,idItem, obj])
            cb(null, inforItem)
        } catch (error) {
            cb(error, null)
        }
    },
    async deleteItem(inforItem, cb) {
        const {idItem, obj} = inforItem
        try {
            await pool.query(deleteItemQuery,[idItem, obj])
            cb(null,{idItem, obj})
        } catch (error) {
            cb(error,null)
        }
    }
}

module.exports = systemModel;
