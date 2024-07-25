const folderModel = require('../models/folder.model')


const createFloderController = (req, res, next) => {
    const { nameFolder } = req.body
    const  id = req.params.id
    if (!nameFolder ) {
        return res.status(500).json({
            status: "error",
            message: " the namefolder  is the emty"
        })
    } else {
        folderModel.createItem({nameFolder , id}, (err, data) => {
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
    const idUser = req.params.id
    folderModel.getItems(idUser, (err, listFolder) => {
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
            nameUser: listFolder
        })
    })
}
const editFolderController = (req, res, next) => {
    const {idFolder, id} = req.params;
    const {newName} = req.body

        folderModel.editItem({idFolder,newName,id},(err,folderEdited)=>{
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
    const {idFolder, id} = req.params;
        folderModel.deleteItem({idFolder,id},(err,folderDelete)=>{
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