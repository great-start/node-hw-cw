const {Router} = require('express');
const usersRouter = Router();
const usersControllers = require('../controllers/users.controllers');


usersRouter.get('/', usersControllers.renderAllUsers);
usersRouter.get('/:userId', usersControllers.renderSingleUser);
usersRouter.post('/:userId', usersControllers.deleteSingleUser);


module.exports = usersRouter;
