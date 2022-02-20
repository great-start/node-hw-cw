const usersData = require("../data/users");

class LoginControllers {
    renderPage(req, res) {
        res.render('login');
    };

    logInAction({body}, res) {

        for (const user of usersData) {
            if (user.email === body.email) {
                return res.render('notFound', {message: 'User has already exist'});
            }
        }

        usersData.push({...body, id: new Date().getTime()});
        res.redirect('/users');
    }
}


module.exports = new LoginControllers();