const express = require('express')
const routes = express.Router();
const {createFloderController,showListFolderControllder, editFolderController ,deleteFolderController} = require('../controllers/foldersController');
const {showListCardControllder , createCardsController,editFlashCardController,deleteCardController,restFlashCardController} = require('../controllers/cardController')

// flashCardRoutes

routes.use('/user/:nameUser/folders/:nameFolder/create',createCardsController);
// show listCard of flashCard 
routes.use('/user/:nameUser/folders/:nameFolder/:nameFlashCard/show',showListCardControllder);
// edit include :
// flashCard :  nameflashCard , descrition 
// listCard : frontCard , backCard , status , imgaesCard 
routes.use('/user/:nameUser/folders/:nameFolder/:nameFlashCard/edits',editFlashCardController);
//  delete flashCard : 
// flashCard and list Card of flashcard 
routes.use('/user/:nameUser/folders/:nameFolder/:nameFlashCard/delete',deleteCardController);
routes.use('/user/:nameUser/folders/:nameFolder/reset',restFlashCardController)


// foldersRoutes
routes.use('/user/:nameUser/id/:idfolder/delete', deleteFolderController)
routes.use('/user/:nameUser/id/:idfolder/edit', editFolderController)
routes.use('/user/:nameUser/store',showListFolderControllder);
routes.use('/user/:nameUser/createNewFolder',createFloderController);
// home page
routes.use('/',(req,res,next)=>{
    return res.json({
        status: "sucsess",
        message: "the home page is flashcard"
    })

});

module.exports = routes
