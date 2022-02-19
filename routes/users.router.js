const {Router} = require('express');
const usersData = require('../data/users');

const usersRouter = Router();

usersRouter.get('/', ({ query}, res) => {

    if (query.age || query.city) {
        const filteredUsers = usersData.filter(user => {
            if (query.age && query.city) {
                return user.age === query.age && user.city === query.city;
            } else {
                return user.age === query.age || user.city === query.city;
            }
        });

        if (!filteredUsers.length) return res.render('notFound', {message: 'No users found'});

        return res.render('users', {users: filteredUsers});
    }

    res.render('users', {users: usersData});
});


usersRouter.get('/:userId', ({ params}, res) => {
    const {userId} = params;
    if (usersData[userId - 1]) {
        res.render('userDetails', {user: usersData[userId - 1]});
        return;
    }

    res.render('notFound', {message: 'User not found'});
});


module.exports = usersRouter;
