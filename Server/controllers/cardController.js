const flashCardModel = require('../models/flashCard.model')


const showListCardControllder = (req, res, next) => {
    const {idFlashCard  } = req.params
    flashCardModel.getItem(  idFlashCard  , (err, data) => {
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
    const idFolder = req.params.id
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
            idFolder: idFolder.trim(),
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
    const {idFolder,idFlashCard} = req.params
    const { newNameFlashCard, newListCard, newDescription } = req.body
    const newFlashCard = { newNameFlashCard, newDescription,idFlashCard,idFolder,newListCard: JSON.parse(newListCard) }
    flashCardModel.editItem(newFlashCard, (err, data) => {

        if (err) {
            return res.status(404).json({
                status: "error",
                message: err.message
            })
        }
        return res.status(200).json({
            status: "sucess  ",
            message: "the  Card is edited successfully ",
            data
        })
    });
}
const deleteCardController = (req, res, next) => {
    const {idFolder,idFlashCard} = req.params
    flashCardModel.deleteItem({idFolder,idFlashCard}, (err, data) => {
        if (err) {
            return res.status(404).json({
                status: "error",
                message: err.message
            })
        }
        return res.status(200).json({
            status: "sucess",
            message: data.message
        })
    });
}

const restFlashCardController = (req, res) => {
    const {idFlashCard} = req.params
    flashCardModel.restStatus(idFlashCard,(err , data)=>{
        if(err){
            return res.status(500).json({
                status:"error",
                message:err.message
            })
        }
        return res.status(200).json({
            status : 'sucess',
            message:data
        })
    })
}

module.exports = {
    showListCardControllder,
    createCardsController,
    editFlashCardController,
    deleteCardController,
    restFlashCardController
}