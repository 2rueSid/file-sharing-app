const modules = require('./modules/main');

describe('auth module', () => {
  modules.loginModule();
  modules.registerModule();
});
