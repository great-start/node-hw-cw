const {Router} = require('express');
const baseRoute = Router();

const usersRouter = require('./users.router');
const loginRouter = require('./login.router');
const sighInRouter = require('./signIn.router');
const notFoundPageControllers = require('../controllers/notFoundPage.controllers');

// ----- Routes
baseRoute.use('/users', usersRouter);
baseRoute.use('/login', loginRouter);
baseRoute.use('/signIn', sighInRouter);
baseRoute.use(notFoundPageControllers.renderPage);

module.exports = baseRoute;



