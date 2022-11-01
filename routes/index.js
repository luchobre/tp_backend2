const express = require('express');
const routes = express.Router();
const { userController } = require('../controllers');

routes.get('/users', userController.getUser);
routes.get('/users/:Id', userController.getUser1);
routes.post('/users', userController.createUser);
routes.put('/users/:Id', userController.putUser);
routes.delete('/users/:Id', userController.deleteUser);

module.exports = routes; 