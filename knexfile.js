const config = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: '3306',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: './lib/database/migration',
    },
  },
};
module.exports = config;

module.exports.knex = require('knex')(config.development);
