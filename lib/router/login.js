const login = require('express').Router();
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/router/login');

login.post('/', loginMiddleware.loginValidate, loginController.login);

module.exports = login;
