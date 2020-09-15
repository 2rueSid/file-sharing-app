const passport = require('passport');
const share = require('express').Router();
const shareController = require('../controllers/shareController');

share.use(passport.authenticate('jwt', { session: false }));

share.post('/share/email', shareController.byEmail);
share.get('/share/with/:token', shareController.shareFile);
share.get('/share/generate-link/:fileId', shareController.generateLink);
module.exports = share;
