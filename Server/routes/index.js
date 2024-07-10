const apiRegister = require('./apiRegister');
const apiLogin = require('./apiLogin');
const apiSystem = require('./apiSystem')
function routes (app){
    app.use('/api/v1',apiRegister);
    app.use('/api/v1',apiLogin);
    app.use('/api/v1/flashcard',apiSystem);


}
module.exports = routes; 