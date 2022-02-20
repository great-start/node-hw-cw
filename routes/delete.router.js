const {Router} = require('express');
const users = require('../data/users');

const deleteRouter = Router();


deleteRouter.post('/', ({body}, res) => {
    const userIndex = users.findIndex(user => user.id === Number(body.deleteId));
    users.splice(userIndex, 1);
    res.redirect('users');
});


module.exports = deleteRouter;