const bcrypt = require('bcrypt');
const saltRounds = 10;

const hash = (password)=> bcrypt.hashSync(password, saltRounds);
const compare= (password,hashPassword)=>bcrypt.compareSync(password, hashPassword); // if password == hashPassword => true 
module.exports = {
    hash,
    compare
}