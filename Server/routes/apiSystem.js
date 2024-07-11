const express = require('express')
const routes = express.Router();
const {createFloderController,showListFolderControllder, editFolderController ,deleteFolderController} = require('../controllers/foldersController');
const {showListItemsControllder , createCardsController,editCardController,deleteCardController} = require('../controllers/cardController')

// CardRoutes

routes.use('/user/:nameUser/:nameFolder/createCard',createCardsController);
routes.use('/user/:nameUser/:nameFolder/listCard',showListItemsControllder);
routes.use('/user/:nameUser/:nameFolder/edit/:idCard',editCardController);
routes.use('/user/:nameUser/:nameFolder/:idCard/delete',deleteCardController);



// foldersRoutes
routes.use('/user/:nameUser/id/:idfolder/delete', deleteFolderController)
routes.use('/user/:nameUser/id/:idfolder/edit', editFolderController)
routes.use('/user/:nameUser/store',showListFolderControllder);
routes.use('/user/:nameUser/createNewFolder',createFloderController);
routes.use('/',(req,res,next)=>{
    return res.json({
        status: "sucsess",
        message: "the home page is flashcard"
    })

});

module.exports = routes
