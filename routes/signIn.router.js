const {Router} = require('express');
const signInRouter = Router();
const signInControllers = require('../controllers/signIn.controllers');


signInRouter.get('/', signInControllers.renderPage);
signInRouter.post('/', signInControllers.singInAction);


module.exports = signInRouter;