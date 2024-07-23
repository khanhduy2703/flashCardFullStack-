const {
    createNewFlashCard,
    editFlashCard,
    deleteFlashCard,
    getFlashCardbyId,
    getFlashcardByName,
    resetStatusCardQuery
}
    = require('../repositories/flashCardQuery');
const {
    createNewListCardQuery,
    getListCardsQuery,
    editCardQuery,
    deleteCardQuery,
    resetStatusFlashCardQuery,
} = require('../repositories/cardQuery')
const { handleFormat } = require('../service/handleFlashCard.logic')
const pool = require('../config/connectDB');
const withTransaction = require('../service/withTransaction.mysql')
const cardModel = {
    async createItem(inforItem, cb) {
        const { description, nameFlashCard, idFolder, listCard } = inforItem;
        try {

            await withTransaction(async (connection) => {
                await connection.query(createNewFlashCard, [nameFlashCard, idFolder, description])
                const [listFlashCard] = await connection.query(getFlashcardByName, [nameFlashCard])
                const idFlashCard = listFlashCard[0].id_flash_card;
                // create new listCard   
                for (const i in listCard) {
                    const { front_card, back_card, status, image_card } = listCard[i];
                    const [statusCards] = await connection.query(createNewListCardQuery, [front_card, back_card, idFlashCard, status, image_card]);
                    if (statusCards.affectedRows == 0) {
                        throw new Error('rolll back ')
                    }
                }
            })
            cb(null, inforItem)
        } catch (error) {
            cb(error, null)
        }
    },
    async getItem(idFlashCard, cb) {
        try {
            const result = await withTransaction(async (connection) => {
                const [flashCard] = await connection.query(getFlashCardbyId, [idFlashCard]);
                const [listCard] = await connection.query(getListCardsQuery, [idFlashCard]);
                if (flashCard == null || listCard == null) {
                    throw new Error('the flashcard and list card is not exist ')
                }
                return { flashCard, listCard }
            })
            const { flashCard, listCard } = result
            cb(null, handleFormat(flashCard, listCard))
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async editItem(newFlashCard, cb) {
        const { newNameFlashCard, newDescription, newListCard, idFlashCard, idFolder } = newFlashCard;
        try {
            const result = await withTransaction(async (connection) => {
                // edit flashcard 
                await connection.query(editFlashCard, [newNameFlashCard, newDescription, idFlashCard, idFolder]);
                const [listCard] = await connection.query(getListCardsQuery, [idFlashCard]);
                for (const i in newListCard) {
                    const { front_card, back_card, is_hidden, image_card } = newListCard[i];
                    const [status] = await connection.query(editCardQuery, [front_card, back_card, is_hidden, image_card, listCard[i].id_card, idFlashCard])
                    if (status.affectedRows == 0) {
                        throw new Error('the edition have some error')
                    }
                }
                return listCard
            });

            cb(null, newFlashCard)
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async deleteItem({ idFolder, idFlashCard }, cb) {
        console.log(idFolder,idFlashCard)
        try {
           await withTransaction(async (connection) => {
                await connection.query(deleteCardQuery, [idFlashCard])
                await connection.query(deleteFlashCard, [idFlashCard, idFolder])
                if(deleteCardQuery.affectedRows == 0 ){
                    throw new Error("delete is fail ")
                }
            })
            cb(null, {message :  `delete  sucessfully`})
        } catch (error) {
            console.log(error)
            cb(error, null)
        }
    },
    async restStatus(idFlashCard, cb) {
        try {
          await withTransaction(async (connection)=>{
            await connection.query(resetStatusCardQuery, [idFlashCard])
            const [status] = await connection.query(resetStatusFlashCardQuery,[idFlashCard])
            if(status.affectedRows == 0 ){
                throw new Error('reset flashcard is fail')
            }
          })
            cb(null, { message : "reset list card sucucessfully" })
        } catch (error) {
            cb(error, null)
        }

    }
}

module.exports = cardModel;
