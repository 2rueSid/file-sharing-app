const users = require('../tables/users');

exports.up = async function(knex) {
  await users.up(knex);
};

exports.down = async function(knex) {
  await users.down(knex);
};
