const users = require("../data/users");


class UsersControllers {

    renderAllUsers ({query}, res) {
        if (query.age || query.city) {
            const filteredUsers = users.filter(user => {
                if (query.age && query.city) {
                    return user.age === query.age && user.city === query.city;
                } else {
                    return user.age === query.age || user.city === query.city;
                }
            });

            if (!filteredUsers.length) return res.render('notFound', {message: 'No users found'});

            return res.render('users', {users: filteredUsers});
        }
        res.render('users', {users: users});
    }

    renderSingleUser ({params}, res) {
        const {userId} = params;
        if (users[userId - 1]) {
            res.render('userDetails', {user: users[userId - 1]});
            return;
        }

        res.render('notFound', {message: 'User not found'});
    }
}


module.exports = new UsersControllers();