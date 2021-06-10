const files = require('../tables/files');

exports.up = async function(knex) {
  await files.up(knex);
};

exports.down = async function(knex) {
  await files.down(knex);
};
