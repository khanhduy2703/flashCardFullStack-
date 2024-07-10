const jwt = require('jsonwebtoken');
require('dotenv').config();
const keyJWT = process.env.ACCESS_TOKEN_SECRET;
const generate  = (user)=>{
    return jwt.sign({user},keyJWT,{expiresIn : '1d'});
}
const decode = (token)=>{
    try {
         return jwt.verify(token,keyJWT)
    } catch (error) {
        console.log(error)
    }
} // check token   if token  == true pass 
module.exports = {
    generate,
    decode
}