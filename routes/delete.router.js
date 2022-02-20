const {Router} = require('express');
const deleteRouter = Router();
const deleteControllers = require('../controllers/delete.controllers');


deleteRouter.post('/', deleteControllers.deleteSingleUser);


module.exports = deleteRouter;