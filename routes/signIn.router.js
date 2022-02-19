const {Router} = require('express');
const usersData = require('../data/users');

const signInRouter = Router();


signInRouter.get('/', (req, res) => {
    res.render('signIn');
});

signInRouter.post('/', ({ body}, res) => {
    const user = usersData.find(user => {
        return body.email === user.email && body.pass === user.pass;
    });

    if (!user) {
        res.render('notFound', {message: 'Incorrect password or email'});
        return;
    }

    const userId = usersData.findIndex(user => user.email === body.email);
    res.redirect(`/users/${userId + 1}`);
});


module.exports = signInRouter;