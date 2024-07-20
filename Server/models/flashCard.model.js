const
    {
        createNewListCardQuery,
        getListCardsQuery,
        editCardQuery,
        deleteCardQuery,
        resetStatusFlashCardQuery,
        createNewFlashCard,
        editFlashCard,
        deleteFlashCard,
        deleteTempararyFK,
        addFKforCard,
        getFlashCard
    }
        = require('../repositories/flashCardQuery');
const {handleFormat} = require('../service/handleFlashCard.logic')
const pool = require('../config/connectDB');
const cardModel = {
    async createItem(inforItem, cb) {
        const {  description, nameFlashCard , idFolder , listCard } = inforItem
        try {
            // create new flashCard 
            await pool.query(createNewFlashCard,[nameFlashCard, idFolder,description])
            // create new listCard 
          for (const i in listCard) {
           const {front_card , back_card , status , image_card} = listCard[i];
           await pool.query(createNewListCardQuery,[front_card , back_card, nameFlashCard, status , image_card])
          }
          cb(null, inforItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async getItems(nameFlashCard, cb) {  
        try {
            const [flashCard] = await pool.query(getFlashCard,[nameFlashCard])
            const [listItem] = await pool.query(getListCardsQuery, [nameFlashCard]);         
            cb(null,handleFormat(flashCard,listItem))
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async editItems(newFlashCard, cb) {
        const { newNameFlashCard , newDescription , newListCard , oldNameFlashCard , idFolder} = newFlashCard ;
        try {
          await  pool.query(deleteTempararyFK)
          await  pool.query(editFlashCard,[newNameFlashCard,newDescription , oldNameFlashCard , idFolder])
                for (const i in newListCard) {
                    const {front_card , back_card , status , image_card} = newListCard[i];
                   await pool.query(editCardQuery,[front_card , back_card , status , image_card, newNameFlashCard , oldNameFlashCard])
                }
         await   pool.query(addFKforCard)
         const [listCard] = await pool.query(getListCardsQuery,[newNameFlashCard])
            cb(null, {newFlashCard , newDescription , listCard })
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async deleteItem(inforItem, cb) {
        const {  idFolder , nameFlashCard } = inforItem
        try {
            await pool.query(deleteCardQuery, [nameFlashCard])
            await pool.query(deleteFlashCard , [nameFlashCard , idFolder])
            cb(null, { nameFlashCard })
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async restStatus(nameFlashCard, cb ){
        try {
            await pool.query(resetStatusFlashCardQuery, [nameFlashCard])
            cb(null, {nameFlashCard})
        } catch (error) {
            cb(error,null)
        }

    }
}

module.exports = cardModel;
