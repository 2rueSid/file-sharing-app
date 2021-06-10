const links = require('../tables/links');

exports.up = async function(knex) {
  await links.up(knex);
};

exports.down = async function(knex) {
  await links.down(knex);
};
