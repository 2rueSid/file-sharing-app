const directory = require('express').Router();
const passport = require('passport');
const directoryMiddleware = require('../middleware/router/directory');
const {
  selectAll,
  createDirectory,
  deleteDirectory,
} = require('../controllers/directoryController');

directory.use(passport.authenticate('jwt', { session: false }));

directory.get('/folder/:folder_id', selectAll);
directory.post('/folder', directoryMiddleware.objectValuesCheck, createDirectory);
directory.delete('/folder', deleteDirectory);

module.exports = directory;
