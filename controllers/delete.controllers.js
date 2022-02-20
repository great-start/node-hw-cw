const users = require("../data/users");


class DeleteControllers {

    deleteSingleUser ({body}, res) {
        const userIndex = users.findIndex(user => user.id === Number(body.deleteId));
        users.splice(userIndex, 1);
        res.redirect('users');
    }
}


module.exports = new DeleteControllers();