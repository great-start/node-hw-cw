function loginMiddleware(req, res, next) {
    try {
        const {firstName, lastName, email, pass, age, city} = req.body;

        if (!firstName || !lastName || !email || !pass || !age || !city) {
            throw new Error('All fields are not filled');
        }

        next();
    } catch (err) {
        res.status(400).send(err.message);
    }
}


module.exports = loginMiddleware;