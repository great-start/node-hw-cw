const users = require('../data/users');


class LoginControllers {

    renderPage (req, res) {
        res.render('login');
    };

    logInAction ({body}, res) {
        for (const user of users) {
            if (user.email === body.email) {
                return res.render('notFound', {message: 'User has already exist'});
            }
        }

        // users.push({...body, id: new Date().getTime()});
        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('users');
    }
}


module.exports = new LoginControllers();