const express = require('express')
const routes = express.Router();
const {createFloderController,showListFolderControllder, editFolderController ,deleteFolderController} = require('../controllers/foldersController');
const {showListCardControllder , createCardsController,editFlashCardController,deleteCardController,restFlashCardController} = require('../controllers/cardController')
const {folder:folderValidation , flashCard :validaitonFlashCard} = require('../validations/validation.system')
// flashCardRoutes

routes.use('/user/:nameUser/folders/:nameFolder/:id/create',validaitonFlashCard ,createCardsController);
// show listCard of flashCard 
routes.use('/user/:nameUser/idFlashCard/:idFlashCard/show',showListCardControllder);
// edit include :
// flashCard :  nameflashCard , descrition 
// listCard : frontCard , backCard , status , imgaesCard 
routes.use('/user/:nameUser/:idFolder/:idFlashCard/edits',validaitonFlashCard,editFlashCardController);
//  delete flashCard : 
// flashCard and list Card of flashcard 
routes.use('/user/:nameUser/:idFolder/:idFlashCard/delete',deleteCardController);
routes.use('/user/:nameUser/:idFlashCard/reset',restFlashCardController)


// foldersRoutes
routes.use('/user/:nameUser/:id/id-folder/:idfolder/delete',folderValidation, deleteFolderController)
routes.use('/user/:nameUser/:id/id-folder/:idfolder/edit',folderValidation, editFolderController)
routes.use('/user/:nameUser/:id/store',folderValidation,showListFolderControllder);
routes.use('/user/:nameUser/:id/create-new-folder',folderValidation,createFloderController);
// home page
routes.use('/',(req,res,next)=>{
    return res.json({
        status: "sucsess",
        message: "the home page is flashcard"
    })

});

module.exports = routes
