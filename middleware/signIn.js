const users = require('../data/users');


function signInMiddleware(req, res, next) {
    try {
        const {email} = req.body;
        const user = users.find(user => email === user.email);

        if (!user) throw new Error('No such email exists');

        next();
    } catch (err) {
        res.status(401).send(err.message);
    }
}


module.exports = signInMiddleware;