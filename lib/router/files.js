const files = require('express').Router();
const passport = require('passport');
const upload = require('../middleware/multer/multerConfig');
const filesController = require('../controllers/filesController');
const fileMiddleware = require('../middleware/router/file');

files.use(passport.authenticate('jwt', { session: false }));

files.get('/files/:folderId', filesController.selectAll);

files.post(
  '/file',
  upload.single('file'),
  fileMiddleware.parseFileOriginalName,
  fileMiddleware.objectValuesCheck,
  filesController.createFile,
);

files.delete('/file', filesController.deleteFile);

files.get('/usedMemory', filesController.getUsedMemory);

files.get('/search/:searchString', fileMiddleware.parseSearchString, filesController.searchFiles);

module.exports = files;
