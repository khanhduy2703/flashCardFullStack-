const
    { 
        createNewCardQuery,
        getCardsQuery,
        editCardQuery,
        deleteCardQuery
     }
        = require('../repositories/flashCardQuery')
const pool = require('../config/connectDB')
const cardModel = {
    async createItem(inforItem, cb) {
        console.log(inforItem)
        try {
            await pool.query(createNewCardQuery, [inforItem.frontCard , inforItem.backCard , inforItem.nameFolder]);
            cb(null, { inforItem })
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async getItems(obj, cb) {
        try {
        const [listItem] = await pool.query(getCardsQuery, [obj]);
            cb(null, listItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async editItem(inforItem, cb) {
        const { idCard, nameFolder, frontCard , backCard } = inforItem
        try {
          await  pool.query(editCardQuery, [frontCard, backCard ,idCard,nameFolder])
            cb(null, inforItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async deleteItem(inforItem, cb) {
        const {idCard,nameFolder} = inforItem
        try {
            await pool.query(deleteCardQuery,[idCard,nameFolder])
            cb(null,{idCard,nameFolder})
        } catch (error) {
            cb(error,null)
        }
    }
}

module.exports = cardModel;
