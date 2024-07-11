const cardModel = require('../models/card.model')
const showListItemsControllder = (req, res, next) => {
    const nameFolder = req.params.nameFolder;
    cardModel.getItems(nameFolder, (err, listCard) => {
        if (err) {
            return res.status(404).json({
                status: "error",
                message: " not found the list Card ",
                error: err.message
            })

        }
        return res.status(200).json({
            status: "success",
            message: "get list card is sucessfully",
            listCard: listCard
        })
    })
}

const createCardsController = (req, res, next) => {
    const nameFolder = req.params.nameFolder
    const {frontCard , backCard } = req.body
    if (!nameFolder ) {
        return res.status(500).json({
            status: "error",
            message: " the namefolder  is not difine"
        })
    } else {
        const inforCard = {frontCard : frontCard.trim() , backCard : backCard.trim() , nameFolder: nameFolder.trim() }
        cardModel.createItem(inforCard, (err, data) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: err.message

                })
            }
            return res.status(200).json({
                status: "sucess",
                message: "New list card  created successfully",
                data: data
            })
        })
    }
}

const editCardController = (req, res, next) => {
    const idCard = req.params.idCard;
    const nameFolder = req.params.nameFolder
    const {frontCard, backCard} = req.body
    const inforFolder = {idCard,  nameFolder , frontCard: frontCard , backCard : backCard}
        cardModel.editItem(inforFolder,(err,cardEdited)=>{
            if(err){
                return res.status(404).json({
                    status: "error",
                    message: err.message
                })
            }
            return res.status(200).json({
                status:"sucess  ",
                message: "the  Card is edited successfully ",
                cardEdited: cardEdited
            })
        });
}
const deleteCardController = (req, res, next) => {
    const  idCard = req.params.idCard
    const  nameFolder = req.params.nameFolder
    const inforFolder = {idCard,nameFolder }
        cardModel.deleteItem(inforFolder,(err,folderDelete)=>{
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
    showListItemsControllder,
    createCardsController,
    editCardController,
    deleteCardController
}