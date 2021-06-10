const directory = require('../tables/directory');

exports.up = async function(knex) {
  await directory.up(knex);
};

exports.down = async function(knex) {
  await directory.down(knex);
};
