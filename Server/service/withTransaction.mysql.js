const pool = require('../config/connectDB');
const withTransaction = async (cb)=>{
    
    const connection =  await pool.getConnection();
    await connection.execute('SET TRANSACTION ISOLATION LEVEL READ COMMITTED');
    try {
        connection.beginTransaction();
        const results = await cb(connection);
        connection.commit();
        return results
    } catch (error) {
        connection.rollback();
        throw new Error (`${error}`)
    }finally{
        connection.release();
    }

}
module.exports = withTransaction