const externalLinks = require('express').Router();
const externalLinksController = require('../controllers/externalLinksController');

externalLinks.get('/auth/activate/:token', externalLinksController.activateAccount);

externalLinks.post('/auth/reset-password/send-mail', externalLinksController.resetPasswordSendMail);
externalLinks.post('/auth/reset-password/reset', externalLinksController.resetUserPassword);

module.exports = externalLinks;
