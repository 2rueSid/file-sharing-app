const filesRout = require('./files');
const directoryRout = require('./directory');
const loginRout = require('./login');
const registerRout = require('./register');
const externalLinks = require('./externalLinks');
const shareRout = require('./share');

const setupRoutes = app => {
  app.use('/auth/register', registerRout);
  app.use('/auth/login', loginRout);
  app.use('/dashboard', [filesRout, directoryRout, shareRout]);
  app.use('/', externalLinks);
};

module.exports = setupRoutes;
