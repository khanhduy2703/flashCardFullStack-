require('dotenv/config')
const {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_TABLE_USER,
    DB_TABLE_FOLDER,
    DB_TABLE_CARD,
    DB_TABLE_FLASHCARD,
    DB_TABLE_REQUEST_USER,
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_LIFE,
    
    
} = process.env


const requiredCredentials = [
    'DB_HOST',
    'DB_PORT',
    'DB_NAME',
    'DB_USER',
    'DB_PASS',
    'DB_TABLE_USER',
    'DB_TABLE_FOLDER',
    'DB_TABLE_CARD',
    'DB_TABLE_FLASHCARD',
    'ACCESS_TOKEN_SECRET',
    'ACCESS_TOKEN_LIFE',
    'DB_TABLE_REQUEST_USER'
]
// check avariable enviroment is exist or not exist
 for (const credential of requiredCredentials ) {
    if(process.env[credential] == undefined){
        console.log(`Missing requrie ${credential}`)
    }
 }


module.exports= {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_TABLE_USER,
    DB_TABLE_FOLDER,
    DB_TABLE_CARD,
    DB_TABLE_FLASHCARD,
    DB_TABLE_REQUEST_USER,
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_LIFE,
}