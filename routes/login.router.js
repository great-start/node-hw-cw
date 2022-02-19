const {Router} = require('express');
const usersData = require('../data/users');


const loginRouter = Router();


loginRouter.get('/', (req, res) => {
    res.render('login');
});

loginRouter.post('/', ({body}, res) => {

    for (const user of usersData) {
        if (user.email === body.email) {
            return res.render('notFound', {message: 'User has already exist'});
        }
    }

    usersData.push({...body, id: new Date().getTime()});
    res.redirect('/users');
});


module.exports = loginRouter;