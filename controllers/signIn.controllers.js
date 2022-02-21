const users = require('../data/users');


class SignInControllers {

    renderPage (req, res) {
        res.render('signIn');
    }

    singInAction ({body}, res) {
        const user = users.find(user => {
            return body.email === user.email && body.pass === user.pass;
        });

        if (!user) {
            res.render('notFound', {message: 'Incorrect password or email'});
            return;
        }

        const userId = users.findIndex(user => user.email === body.email);
        res.redirect(`users/${userId + 1}`);
    }
}


module.exports = new SignInControllers();