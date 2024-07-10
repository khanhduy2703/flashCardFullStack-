const {createNewFolderQuery , getFoldersQuery} = require('../repositories/flashCardQuery')
const pool = require('../config/connectDB')
const systemModel = {
  async  createFolders(inforFolder,cb){
            try {
               await pool.query(createNewFolderQuery,[inforFolder.nameFolder,inforFolder.nameUser]);
                cb(null,{nameFolder: inforFolder.nameFolder,nameUser: inforFolder.nameUser})
            } catch (error) {
                  cb(error,null)  
            }
    },
    async getFolders(nameUser,cb){
        try {
            const [listFolder] =  await pool.query(getFoldersQuery,[nameUser]);
            cb(null,listFolder)
        } catch (error) {
            console.log(error)
            cb(error,null)
        }
    }
}

module.exports = systemModel;
