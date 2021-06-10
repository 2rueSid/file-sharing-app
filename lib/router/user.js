const passport = require('passport');
const user = require('express').Router();
const userController = require('../controllers/userController');

user.use(passport.authenticate('jwt', { session: false }));

user.post('/', userController.getCurrentUser);

module.exports = user;