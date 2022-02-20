const {Router} = require('express');
const loginRouter = Router();
const loginControllers = require('../controllers/login.controllers');
const loginMiddleware = require('../middleware/login');


loginRouter.get('/', loginControllers.renderPage);
loginRouter.post('/', loginMiddleware, loginControllers.logInAction);


module.exports = loginRouter;