const {Router} = require('express');
const loginRouter = Router();
const loginControllers = require('../controllers/login.controllers');


loginRouter.get('/', loginControllers.renderPage);
loginRouter.post('/', loginControllers.logInAction);


module.exports = loginRouter;