const systemModel = require('../models/Folder.model')


const createFloderController = (req, res, next) => {
    const { nameFolder } = req.body
    const user = req.params.nameUser
    if (!nameFolder || !user) {
        return res.status(500).json({
            status: "error",
            message: " the namefolder and user is not difine"
        })
    } else {
        const inforFolder = {nameItem: nameFolder.trim(), obj: user.trim() }
        systemModel.createItem(inforFolder, (err, data) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: err.message

                })
            }
            return res.status(200).json({
                status: "sucess",
                message: "New folder created successfully",
                data: data
            })
        })
    }
}

const showListFolderControllder = (req, res, next) => {
    const nameUser = req.params.nameUser;
    systemModel.getItems(nameUser, (err, listFolder) => {
        if (err) {
            return res.status(404).json({
                status: "error",
                message: " not found the folder ",
                error: err.message
            })

        }
        return res.status(200).json({
            status: "success",
            message: "get list folder is sucessfully",
            listFolder: listFolder
        })
    })
}
const editFolderController = (req, res, next) => {
    const idFolder = req.params.idfolder;
    const nameUser = req.params.nameUser
    const {newName} = req.body
    const inforFolder = {idItem :idFolder, obj :nameUser , newName: newName}
        systemModel.editItem(inforFolder,(err,folderEdited)=>{
            if(err){
                return res.status(404).json({
                    status: "error",
                    message: err.message
                })
            }
            return res.status(200).json({
                status:"error",
                message: "folder is edited successfully ",
                folderEdited: folderEdited
            })
        });
}
const deleteFolderController = (req, res, next) => {
    const idFolder = req.params.idfolder;
    const nameUser = req.params.nameUser
    const inforFolder = {idItem:idFolder,obj:nameUser }
        systemModel.deleteItem(inforFolder,(err,folderDelete)=>{
            if(err){
                return res.status(404).json({
                    status: "error",
                    message: err.message
                })
            }
            return res.status(200).json({
                status:"sucess",
                message: `delete folder is successfully`,
                folderDelete: folderDelete
            })
        });
}




module.exports = { 
    createFloderController, 
    showListFolderControllder, 
    editFolderController ,
    deleteFolderController
}