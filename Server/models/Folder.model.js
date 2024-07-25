const
    { createNewItemQuery,
        getItemsQuery,
        editItemQuery,
        deleteItemQuery }
        = require('../repositories/folderQuery')
const pool = require('../config/connectDB')
const withTransaction = require('../service/withTransaction.mysql')
const systemModel = {
    async createItem({nameFolder, id}, cb) {
        try {
           await withTransaction (async (connection) => {
               await connection.query(createNewItemQuery, [nameFolder  , id ]);
           }) 
            cb(null, { id , nameFolder   })
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async getItems(idUser, cb) {
        try {
            await withTransaction(async ( connection) =>{
                const [listItem] = await connection.query(getItemsQuery, [idUser]);
            })
            cb(null, listItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async editItem({idFolder , newName , id}, cb) {
        try {
            await withTransaction( async ( connection)=>{

                await  connection.query(editItemQuery, [newName,idFolder, id])
            })
            cb(null, inforItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async deleteItem(  {idFolder , id} , cb) {
       
        try {
            await withTransaction( async (connection) => {
                await connection.query(deleteItemQuery,[idFolder , idUser])
            })
            cb(null,{idFolder })
        } catch (error) {
            cb(error,null)
        }
    }
}

module.exports = systemModel;
