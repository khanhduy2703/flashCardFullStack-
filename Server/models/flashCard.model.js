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
        addFKforCard
    }
        = require('../repositories/flashCardQuery')
const pool = require('../config/connectDB');
const cardModel = {
    async createItem(inforItem, cb) {
        const {  description, nameFlashCard , nameFolder , listCard } = inforItem
        try {
            // create new flashCard 
            await pool.query(createNewFlashCard,[nameFlashCard, nameFolder,description])
            // create new listCard 
          for (const i in listCard) {
           const {frontCard , backCard , status , imagesCard} = listCard[i];
           await pool.query(createNewListCardQuery,[frontCard , backCard, nameFlashCard, status , imagesCard])
          }
          cb(null, inforItem)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async getItems(nameFlashCard, cb) {
    
        try {
            const [listItem] = await pool.query(getListCardsQuery, [nameFlashCard]);   
              const resutl = await listItem.reduce((acc,curr,index)=>{
                const   {frontCard, backCard , status , imagesCard}= curr
                acc[index] = {frontCard, backCard , status , imagesCard}
                return acc
             },[])  
            cb(null,{nameFlashCard: listItem[0].nameFlashCard , des: listItem[0].description , listCard : resutl})
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async editItems(newFlashCard, cb) {
        const { newNameFlashCard , newDescription , newListCard , oldNameFlashCard , nameFolder} = newFlashCard ;
        try {
          await  pool.query(deleteTempararyFK)
          await  pool.query(editFlashCard,[newNameFlashCard,newDescription , oldNameFlashCard , nameFolder])
                for (const i in newListCard) {
                    const {frontCard , backCard , status , imagesCard} = newListCard[i];
                   await pool.query(editCardQuery,[frontCard , backCard , status , imagesCard , newNameFlashCard , oldNameFlashCard])
                }
         await   pool.query(addFKforCard)
             
            cb(null, {newFlashCard , newDescription , newListCard })
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async deleteItem(inforItem, cb) {
        const {  nameFolder , nameFlashCard } = inforItem
        try {
            await pool.query(deleteCardQuery, [nameFlashCard])
            await pool.query(deleteFlashCard , [nameFlashCard , nameFolder])
            cb(null, { idFlashCard, nameFolder })
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
