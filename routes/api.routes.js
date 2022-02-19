const {Router} = require('express');
const users = require('./users.router');
const loginRouter = require('./login.router');
const sighInRouter = require('./signIn.router');

const baseRoute = Router();

baseRoute.use('/users', users);
baseRoute.use('/login', loginRouter);
baseRoute.use('/signIn', sighInRouter);

baseRoute.use((req, res) => {
    res.render('notFound', {message: 'Page not found'});
});


module.exports = baseRoute;



