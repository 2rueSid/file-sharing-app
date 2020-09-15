const path = require('path');
const express = require('express');
const routes = require('./lib/router/main');
const config = require('./lib/config/appConfig');

const app = express();
const start = (port = 3000) => {
  config(app, express);
  routes(app);
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  const server = app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });

  return server;
};

start(process.env.PORT);

module.exports = app;
