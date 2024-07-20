const pool = require('../config/connectDB');
const { getResquestQuery ,setStatusUser , deleteRequest , banFolder, banFlashCard, banCard} = require('../repositories/adminQuery');

const adminModel = {
    async getResquest(cb) {
        try {
            const [listRequest] = await pool.query(getResquestQuery);
            cb(null, listRequest)
        } catch (error) {
            cb(error, null)
        }
    },
    async setStatusUser(inforReq, cb) {
        const {idUser, statusReq} = inforReq
        try {
          await pool.query(setStatusUser,[statusReq,idUser])
          await pool.query(deleteRequest,[idUser])
            cb(null,{idUser,statusReq})
        } catch (error) {
            console.log(error)
            cb(error,null)
        }
    },
    async banUser(idUser, cb){
        const ban = 3;
        const connection = await pool.getConnection();
        await connection.execute('SET TRANSACTION ISOLATION LEVEL READ COMMITTED');
        try {
            await connection.beginTransaction();
            // ban user
            
           const [resultUser] = await connection.query(setStatusUser,[ban,idUser])
            if(resultUser.affectedRows == 0 ){
                throw new Error('error at ban user , roll back')
            }
            // ban folder of user
           const [resultFolder] = await connection.query(banFolder , [0,idUser])
            if(resultFolder.affectedRows == 0 ){
                throw new Error('error at ban folder , roll back')
            }
            //
            // ban flashCard 
           const [resultFlashCard] = await  connection.query(banFlashCard,[0,idUser])
            if(resultFlashCard.affectedRows == 0 ){
                throw new Error('error at ban flashCard , roll back')
            }
            //ban Card
            const [resultCard] = await connection.query(banCard,[0,idUser])
            console.log(resultCard)
            if(resultCard.affectedRows == 0 ){
                throw new Error('error at ban card , roll back ')
            }
           await connection.commit() 
            cb(null,{idUser})
        } catch (error) {
           if(connection) await connection.rollback();
           console.log(error)
                cb(error,null)
           await connection.release()
        }
    }
}
module.exports = adminModel