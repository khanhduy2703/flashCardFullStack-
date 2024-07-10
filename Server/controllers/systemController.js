const systemModel = require('../models/system.model')



const systemController = (req, res, next) => {

    return res.json({
        status: "sucsess",
        message: "the home page is flashcard"
    })
}


const createFloderController = (req, res, next) => {
    const { nameFolder } = req.body
    const user = req.params.nameUser
    if (!nameFolder  || !user) {
        return res.status(500).json({
            status: "error",
            message: " the namefolder and user is not difine"
        })
    } else {
        const inforFolder = { nameFolder: nameFolder.trim(), nameUser: user.trim() }
        systemModel.createFolders(inforFolder, (err, data) => {
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

const showListFolderControllder = (req,res,next)=>{
    const nameUser = req.params.nameUser;
    systemModel.getFolders(nameUser,(err,listFolder)=>{
        if(err){
            return res.status(404).json({
                status: "error",
                message:" not found the folder ",
                error:err.message
            })

        }
        return res.status(200).json({
            status: "success",
            message:"get list folder is sucessfully",
            listFolder: listFolder
        })
    })
}



module.exports = { systemController, createFloderController ,showListFolderControllder}