const shared = require('../tables/sharable_files');

exports.up = async function(knex) {
  await shared.up(knex);
};

exports.down = async function(knex) {
  await shared.down(knex);
};
