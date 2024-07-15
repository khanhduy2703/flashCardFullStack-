const flashCardModel = require('../models/flashCard.model')


const showListCardControllder = (req, res, next) => {
    const nameFlashCard = req.params.nameFlashCard;
    flashCardModel.getItems(nameFlashCard, (err, data) => {
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
            data

        })
    })
}

const createCardsController = (req, res, next) => {
    const nameFolder = req.params.nameFolder
    const { description, nameFlashCard, listCard } = req.body

    if (!nameFolder) {
        return res.status(500).json({
            status: "error",
            message: ` the ${nameFolder}  is not difine`
        })
    } else {
        const inforCard = {
            nameFlashCard: nameFlashCard.trim(),
            nameFolder: nameFolder.trim(),
            description: description.trim(),
            listCard: JSON.parse(listCard)
        }


        flashCardModel.createItem(inforCard, (err, data) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: err.message

                })
            }
            return res.status(200).json({
                status: "sucess",
                message: "New list card  created successfully",
                data
            })
        })
    }
}

const editFlashCardController = (req, res, next) => {
    const oldNameFlashCard =  req.params.nameFlashCard;
    const nameFolder = req.params.nameFolder;
    const { newNameFlashCard, newListCard, newDescription } = req.body
    const newFlashCard = { newNameFlashCard, newDescription,oldNameFlashCard,nameFolder,newListCard: JSON.parse(newListCard) }
    console.log(newFlashCard)
    flashCardModel.editItems(newFlashCard, (err, data) => {

        if (err) {
            return res.status(404).json({
                status: "error",
                message: err.message
            })
        }
        return res.status(200).json({
            status: "sucess  ",
            message: "the  Card is edited successfully ",
            newFlashCard : data,newFlashCard,
            newDescription : data.newDescription,
            newlistCard : data.newListCard
        })
    });
}
const deleteCardController = (req, res, next) => {
    const nameFolder = req.params.nameFolder
    const nameFlashCard = req.params.nameFlashCard
    const inforFolder = {  nameFolder , nameFlashCard }
    flashCardModel.deleteItem(inforFolder, (err, folderDelete) => {
        if (err) {
            return res.status(404).json({
                status: "error",
                message: err.message
            })
        }
        return res.status(200).json({
            status: "sucess",
            message: `delete folder is successfully`,
            folderDelete: folderDelete
        })
    });
}

const restFlashCardController = (req, res) => {
    const nameFlashCard = req.params.nameFlashCard
    flashCardModel.restStatus(nameFlashCard, nameFlashCard)
}

module.exports = {
    showListCardControllder,
    createCardsController,
    editFlashCardController,
    deleteCardController,
    restFlashCardController
}