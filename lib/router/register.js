const register = require('express').Router();
const registerController = require('../controllers/registerController');
const registerMiddleware = require('../middleware/router/register');

register.post('/', registerMiddleware.addUserValidate, registerController.addUser);

module.exports = register;
