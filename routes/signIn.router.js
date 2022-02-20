const {Router} = require('express');
const signInRouter = Router();
const signInControllers = require('../controllers/signIn.controllers');
const signInMiddleware = require('../middleware/signIn');

signInRouter.get('/', signInControllers.renderPage);
signInRouter.post('/', signInMiddleware, signInControllers.singInAction);


module.exports = signInRouter;