const apiRegister = require('./apiRegister');
const apiLogin = require('./apiLogin');
const apiSystem = require('./apiSystem')
const apiAdmin = require('./apiAdmin')
function routes (app){
    app.use('/api/v1',apiRegister);
    app.use('/api/v1',apiLogin);
    app.use('/api/v1/flashcard',apiSystem);
    app.use('/api/v1/admin',apiAdmin)


}
module.exports = routes; 