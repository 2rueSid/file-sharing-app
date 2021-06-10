const fs = require('fs');
const dotenv = require('dotenv');
const envConfig = dotenv.parse(fs.readFileSync(`.env`));

const config = {
  development: {
    client: 'mysql2',
    connection: {
      host: envConfig.DB_HOST,
      database: envConfig.DB_NAME,
      port: '3306',
      user: envConfig.DB_USER,
      password: envConfig.DB_PASSWORD,
    },
    migrations: {
      directory: './lib/database/migration',
    },
  },
};
module.exports = config;

module.exports.knex = require('knex')(config.development);
